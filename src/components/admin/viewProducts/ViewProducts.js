import React, { useEffect, useState } from 'react'
import styles from './ViewProducts.module.scss'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { db, storage } from '../../../firebase/config'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import Loader from '../../loader/Loader'
import { deleteObject, ref } from 'firebase/storage'
import Notiflix from "notiflix";
import {useDispatch} from 'react-redux';
import { STORE_PRODUCTS } from '../../../redux/slice/productslice'


const ViewProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    gerProducts()
  }, [])

  const gerProducts =  () => {
    setIsLoading(true)

    try{
      const productsef = collection(db, "products");
      const q = query(productsef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(allProducts);
        setIsLoading(false);
        dispatch(
          STORE_PRODUCTS({
              products: allProducts
          })
          )
      });

    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    }

  };

  const confirmDelete =(id, imageURL) => {
    Notiflix.Confirm.show(
      'Delete Product!!!',
      'You are about to delete this product?',
      'Delete',
      'Cancel',
      function okCb() {
        deleteProduct(id,imageURL)
      },
      function cancelCb() {

      },
      {
        width: '320px',
        borderRadius: '3px',
        tittlColor: "orangered",
        okButtonBackground:"orangered",
        cssAnimationsyle: "Zoom"
      },
    );

  };

  const deleteProduct = async(id, imageURL) => { 

    try{
      await deleteDoc(doc(db, "products", id));
  
      const storageRef = ref(storage, imageURL);
  
      await deleteObject(storageRef)
      toast.success("Produt deleted succesfully.");
  
  
    } catch(error) {
      toast.error(error.message )
    }
  
  
  };
    

  return (
    <>
    {isLoading && <Loader />}
    <div className={styles.table}>
    <h2>All Products</h2>

    {products.length === 0 ? (
      <p> No products found</p>
    ): (
      <table>
        <thead>
          <tr>
            <th>s/n</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions </th>
          </tr>
          </thead>
          <tbody>
          {products.map((product,index) => {
            const {id, name, price, imageURL, category} = product;
            return (
           
              <tr key={id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <img src={imageURL} alt={name} style={{width:'100px'}}/>
                </td>
                <td>
                  {name}
                </td>
                <td>
                {category}
                </td>
                <td>
                  {`$${price}`}
                </td>
                <td className={styles.icons}>
                <Link to={`/account/add-product/${id}`}>
                    <FaEdit size={20} color="green" />
                  </Link>
                  &nbsp; &nbsp;
                
                    <FaTrashAlt  
                    size={18} 
                    color="red" 
                    onClick={() =>confirmDelete(id, imageURL)}
                    />
            
                </td>
              </tr>
              
            )
          })}
          </tbody> 
      </table>
    )}
   </div>
  </>
  )
}

export default ViewProducts