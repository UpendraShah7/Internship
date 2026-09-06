import { Drawer, Button, message } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, type ProductFormData } from '../data';

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
    <Drawer
      title={
        <span className="text-lg font-semibold text-slate-900">
          Add New Product
        </span>
      }
      open={open}
      onClose={onClose}
      width="min(420px, 100vw)"
      styles={{
        body: { padding: '24px' },
        header: { borderBottom: '1px solid #e2e8f0' },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Title
          </label>
          <input
            {...register('title')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="Product name"
          />
          {errors.title && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Price
          </label>
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            step="0.01"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="0.00"
          />
          {errors.price && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.price.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Description
          </label>
          <textarea
            {...register('description')}
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            rows={3}
            placeholder="Product description"
          />
          {errors.description && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Image URL
          </label>
          <input
            {...register('image')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="https://..."
          />
          {errors.image && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.image.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Category
          </label>
          <input
            {...register('category')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="e.g. electronics"
          />
          {errors.category && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        <Button
          type="primary"
          htmlType="submit"
          block
          className="mt-2 h-11 rounded-lg font-semibold shadow-sm"
        >
          Add Product
        </Button>
      </form>
    </Drawer>
  );
}

export default AddProductDrawer;
