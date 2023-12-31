import React, { useEffect } from 'react'
import styles from './Product.module.scss'
import ProductFilter from './productFilter/ProductFilter'
import ProductList from './productList/ProductList'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRICE_RANGE, STORE_PRODUCTS, selectProducts } from '../../redux/slice/productslice'
import spinner from '../../assets/img/spinner.jpg'
import TopProduct from './topProduct/TopProduct'



const Product = () => {

    const {data, isLoading} = useFetchCollection("products");
    const products = useSelector(selectProducts)


    const dispatch = useDispatch()
   
   
   
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []); 

    useEffect(() => {
      dispatch(
        STORE_PRODUCTS({
            products: data,
        })
        );
        dispatch(GET_PRICE_RANGE({ 
          products: data 
        }));
    }, [dispatch, data])
  
  return (
    <>
 <TopProduct /> 
        <section>
        <div className={styles.product}>
            <aside className={styles.filter}>
              {isLoading ? null : <ProductFilter />}

            </aside>
            <div className={styles.content}>
              {isLoading ? (
                <img 
                src={spinner} 
                alt="Loading..."
                 style={{width:"50px"}}
                 className="--center-all" 
                 />
              ) : (
                <ProductList products={products}/>
              )}
              </div>
            </div>

    </section>
    </>
  )
}

export default Product