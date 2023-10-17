import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../../../firebase/config'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProduct()
  }, [])  



  const getProduct = async () => {

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
     const obj = {
      id:id,
      ...docSnap.data()
     }
     setProduct(obj)

    } else {
      toast.erorr("Product not found")
    }

  };
  return (
    <div>
      <h1>Product Details</h1>
      <p>{id}</p>
    </div>
  )
}

export default ProductDetails