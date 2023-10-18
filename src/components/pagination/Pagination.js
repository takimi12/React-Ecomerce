import React, { useState } from 'react';
import styles from "./Pagination.module.scss";

const Pagination = ({currentPage, setCurrentPage,ProductsPerPage,
    totalProducts}) => {
        
    const pageNumbers = [];
    const totalPages = totalProducts/ProductsPerPage;
    // Limit the page Numbers shown
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    // Paginate
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //Go to next page
    const paginateNext = () => {
        setCurrentPage(currentPage + 1);
        // show Next set of page Numbers
        if( currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        } 
    };

    //Go to prev page
    const paginatePrev = () => {
        setCurrentPage(currentPage - 1);
        if( (currentPage - 1) % minPageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        } 
    };

    for( let i=1; i<=Math.ceil(totalProducts/ProductsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
    <div className={styles.pagination}>
        <li onClick={paginatePrev} className={currentPage === pageNumbers[0] ? `${styles.hidden}` : null}>Prev</li>
                {pageNumbers.map ((number) => {
                    if(number < maxPageNumberLimit + 1  && number > minPageNumberLimit) {


                    return (
                        <li key={number} onClick={() => paginate(number)} className={currentPage === number ? `${styles.active}` : null}>{number}</li>
 
                    );
                   }
                  
                })}
  
        <li onClick={paginateNext} className={currentPage === pageNumbers[pageNumbers.length-1] ? `${styles.hidden}` : null}>Next</li>
        <p>
            <b className={styles.page}>{`page${currentPage}`}</b>
            <span>{`of`}</span>
            <b>{`${Math.ceil(totalPages)}`}</b>
        </p>
        </div>
  ) 
}

export default Pagination