import { Drawer, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, type ProductFormData } from '../schema/productSchema';
import { message } from "antd";

interface AddProductDrawerProps {
  open: boolean;
  onClose: () => void;
  onAdd: (product: ProductFormData) => void;
}

function AddProductDrawer({ open, onClose, onAdd }: AddProductDrawerProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormData) => {
  onAdd(data);
  reset();
  onClose();
  message.success(`"${data.title}" added successfully!`);
};

  return (
    <Drawer title="Add New Product" open={open} onClose={onClose} width={420}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Title</label>
          <input
            {...register('title')}
            className="w-full border rounded px-3 py-2"
            placeholder="Product name"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Price</label>
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            step="0.01"
            className="w-full border rounded px-3 py-2"
            placeholder="0.00"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            {...register('description')}
            className="w-full border rounded px-3 py-2"
            rows={3}
            placeholder="Product description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Image URL</label>
          <input
            {...register('image')}
            className="w-full border rounded px-3 py-2"
            placeholder="https://..."
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Category</label>
          <input
            {...register('category')}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g. electronics"
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <Button type="primary" htmlType="submit" block>
          Add Product
        </Button>
      </form>
    </Drawer>
  );
}

export default AddProductDrawer;
