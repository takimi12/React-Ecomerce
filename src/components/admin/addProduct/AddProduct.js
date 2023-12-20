import React, { useState } from 'react';
import styles from './AddProduct.module.scss';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../redux/slice/productslice';

const initialState = {
  name: '',
  imageURL: '',
  price: 0,
  category: '',
  brand: '',
  desc: '',
};

const AddProduct = () => {
  const { id } = useParams();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const products = useSelector(selectProducts);
  const productEdit = products.find((product) => product.id === id);

 

  const [product, setProduct] = useState(() => {
    const newState = detectForm(id, { ...initialState }, productEdit);
    return newState;
  });
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
    setProduct({ ...product, category: newCategory });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setProduct({ ...product, category: selectedCategory});

    // Show the new category input only if "Add New Category" is selected
    setShowNewCategoryInput(selectedCategory === 'Add New Category');
  };

  const handleAddNewCategory = (e) => {
    e.preventDefault();

    const newCategoryObj = {
      id: categories.length + 1,
      name: newCategory,
    };
    setProduct({ ...product, category: newCategory });
    setCategories([...categories, newCategoryObj]);

    setNewCategory('');
    setShowNewCategoryInput(false);
  };

  function detectForm(id, f1, f2) {
    if (id === 'ADD') {
      return f1;
    }
    return f2;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const storageRef = ref(storage, `first-ecommerce/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success('Image uploaded successfully.');
        });
      }
    );
  };

  const addProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const docRef = await addDoc(collection(db, 'products'), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        category: product.category,
        brand: product.brand,
        desc: product.desc,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });

      toast.success('Product uploaded successfully.');
      navigate('/account/all-products');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const editProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (product.imageURL !== productEdit.imageURL) {
      const storageRef = ref(storage, productEdit.imageURL);
      deleteObject(storageRef);
    }

    try {
      await setDoc(doc(db, 'products', id), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        category: product.category,
        brand: product.brand,
        desc: product.desc,
        createdAt: productEdit.createdAt,
        editedAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      toast.success('Product Edited Successfully');
      navigate('/account/all-products');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const productCategories = [...new Set(products.map((product) => product.category))];

  const dynamicCategories = [
    { id: 0, name: '-- choose product category --' },
    ...productCategories.map((category, index) => ({ id: index + 1, name: category })),
    { id: productCategories.length + 1, name: 'Add New Category' },
  ];

  return (
    <div className={styles.product}>
      <h2 className={styles.mainHeading}>{detectForm(id, 'Add New Product', 'Edit Product')}</h2>

      <form className={styles.form} onSubmit={detectForm(id, addProduct, editProduct)}>
        <label>Product name:</label>
        <input
          type="text"
          placeholder="Product name"
          required
          name="name"
          value={product.name}
          onChange={(e) => handleInputChange(e)}
        />

        <label>Product image:</label>
        {uploadProgress === 0 ? null : (
          <div className={styles.progress}>
            <div className={styles['progress-bar']} style={{ width: `${uploadProgress}%` }}>
              {uploadProgress < 100
                ? `Uploading ${uploadProgress}`
                : `Upload Complete ${uploadProgress}%`}
            </div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          placeholder="Product image"
          name="imageURL"
          onChange={(e) => handleImageChange(e)}
        />

        {product.imageURL === '' ? null : (
          <input
            type="text"
            placeholder="Image URL"
            name="imageURL"
            value={product.imageURL}
            disabled
          />
        )}

        <label>Product price:</label>
        <input
          type="number"
          placeholder="Product price"
          required
          name="price"
          value={product.price}
          onChange={(e) => handleInputChange(e)}
        />

        <label>Product Category:</label>
        <div className={styles.categoryContainer}>
          <select
            required
            name="category"
            value={product.category}
            onChange={(e) => handleCategoryChange(e)}
          >
            {dynamicCategories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          {showNewCategoryInput && (
            <div>
              <input
                type="text"
                placeholder="New Category"
                value={newCategory}
                onChange={handleNewCategoryChange}
              />
            </div>
          )}
        </div>

        <label>Product brand:</label>
        <input
          type="text"
          placeholder="Product brand"
          required
          name="brand"
          value={product.brand}
          onChange={(e) => handleInputChange(e)}
        />

        <label>Product description:</label>
        <textarea
          placeholder="Product description"
          required
          name="desc"
          value={product.desc}
          onChange={(e) => handleInputChange(e)}
        />

        <button className={`--btn ${styles.btn}`}type="submit" disabled={isLoading}>
          {detectForm(id, 'Add Product', 'Save Changes')}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
