import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import styles from './Blog.module.scss';
import blogPosts from './data.json';

const BlogPage = () => {
  const postsPerPage = 3;
  const [currentTab, setCurrentTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  

  // Filter posts based on the current category tab
  const filteredPosts =
    currentTab === 'All' ? blogPosts : blogPosts.filter(post => post.category.includes(currentTab));

  // Calculate the pageCount dynamically based on the filtered posts
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  // Get the posts for the current page
  const paginatedPosts = filteredPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

  const handleChangeTab = category => {
    setCurrentTab(category);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className={styles.category}>
      <div className={styles.categoryWrapper}>
        {/* Render category tabs */}
        {['All', ...new Set(blogPosts.flatMap(post => post.category))].map((category, index) => (
          <span
            key={index}
            onClick={() => handleChangeTab(category)}
            className={`${currentTab === category ? styles.activeTab : styles.inactiveTab} ${
              currentTab === category ? styles.active : ''
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      <div className={styles.categoryWrapper}>
        {/* Render paginated posts for the current category */}
        {paginatedPosts.map((post, index) => (
          <div className={styles.single} key={index}>
            {/* Render post content */}
            <img src={post.image} alt={post.title} className={styles.cardImage} />
            <p className={styles.category}>{post.category}</p>
            <h6 className={styles.postTitle}>{post.title}</h6>
            <div className={styles.meta}>
              <p className={styles.anchor}>{post.author}</p>
              <p className={styles.date}>{post.date}</p>
            </div>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
  <ReactPaginate
    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={1}
    pageRangeDisplayed={1}
    onPageChange={handlePageChange}
    containerClassName={styles.pagination}
    activeClassName={styles.selected}  // Przekazana klasa selected
    previousClassName={currentPage === 0 ? styles.disabled : ''}
    nextClassName={currentPage === pageCount - 1 ? styles.disabled : ''}
    disabledClassName={styles.disabled}
  />
)}
    </div>
  );
};

export default BlogPage;
