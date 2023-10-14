import React, { useState } from 'react'
import styles from './AddProduct.module.scss'
import Card from '../../card/Card'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/config";
import { toast } from "react-toastify";




const categories = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Fashion" },
    { id: 4, name: "Phone" },
  ];

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        imageURL: '',
        price: null,
        category: '',
        brand:'',
        desc: '',
    })

    const [uploadProgress, setUploadProgress] = useState(0);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value})
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];

    
        const storageRef = ref(storage, `Martfcury/${Date.now()}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
             uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            toast.error(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setProduct({ ...product, imageURL: downloadURL });
              toast.success("Image uploaded successfully.");
            });
          }
             );
    };




  
    
    const addProduct = (e) => {
        e.preventDefault();
        console.log(product)
    }
        
  return (
    <div className={styles.product}>
        <h1>Add New Product</h1>
        <Card cardclass={styles.card}>
            
            <form onSubmit={addProduct}>
            <label>Product name:</label>
            <input type="text" 
            placeholder='Product name' 
            required name="name"
            value={product.name} 
            onChange={(e) => handleImageChange}/>

<label>Product image:</label>
            <Card cardClass={styles.group}>
              {uploadProgress === 0 ? null : (
                <div className={styles.progress}>
                  <div
                    className={styles["progress-bar"]}
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {uploadProgress < 100
                      ? `Uploading ${uploadProgress}`
                      : `Upload Complete ${uploadProgress}%`}
                  </div>
                </div>
              )}

                <input type="file"
                accept='image/*'
                placeholder='Product image'
                name="imageURL"
                onChange={(e) => handleImageChange(e)}/>
               
                 {product.imageURL === "" ? null : (
                <input
                  type="text"
                  // required
                  placeholder="Image URL"
                  name="imageURL"
                  value={product.imageURL}
                  disabled
                />
              )}
            </Card>

                <label>Product price:</label>
            <input
              type="number"
              placeholder="Product price"
              required
              name="price"
            
        
            />
            <label>Product Category:</label>
            <select
              required
              name="category"
              value={product.category}
              onChange={(e) => handleInputChange(e)}
           
 
            >
              <option value="" disabled>
                -- choose product category --
              </option>
                {categories.map((cat) => {
                    return (
                        <option key={cat.id} value={cat.name}>
                            {cat.name}
                        </option>
                    )
                })}


            </select>

            <label>Product Company/Brand:</label>
            <input
              type="text"
              placeholder="Product brand"
              required
              name="brand"
              value={product.name}
              onChange={(e) => handleInputChange(e)}
              
            />

            <label>Product Description</label>
            <textarea
              name="desc"
              required
              value={product.desc}
              onChange={(e) => handleInputChange(e)}
              cols="30"
              rows="10"
            ></textarea>

            <button className="--btn --btn-primary">
                Save product
            </button>
          </form>
        </Card>
      </div>


  )
}

export default AddProduct