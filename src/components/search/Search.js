import React from 'react'
import styles from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'


const Search = ({value,onChange,list}) => {


  return (
    <div className={styles.search}>
        <BiSearch size={22} color="orangered" className={styles.icon} />

        <input 
        type="text" 
        placeholder="Search by name"
        value={value  } 
        onChange={onChange} 
        />
        
    </div>
  )
}

export default Search