import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";


interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

function ProductDetails() {
    const {id} = useParams<{id:string}> ();
    const [data , setData] = useState<Product | null>(null)

    useEffect(()=>{
        const fetchProduct = async()=> {
            const res = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
            setData(res.data);
        }
        fetchProduct();
    },[id])

    if(!data) return<p>Loading...</p>

  return (
    <div>
        <h2>{data.title}</h2>
        <p>{data.name}</p>
      
    </div>
  )
}

export default ProductDetails
