import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Blog.module.scss';

const BlogPage = () => {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Adjust as needed

  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 575,
      category: ['Business', 'Life Style'],
      title: 'Compact & Powerful: Cannon Pentack Beside You Go To Anywhere',
      date: '10 Nov, 2017',
      author: 'Global Store',
      image: 'https://wp.nouhtml5.com/wp-content/uploads/2017/12/b18.jpg',
      link: '/post/575',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: '',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: 'https://wp.nouhtml5.com/wp-content/uploads/2017/12/b18.jpg',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: '',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: 'https://wp.nouhtml5.com/wp-content/uploads/2017/12/b18.jpg',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: '',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: 'https://wp.nouhtml5.com/wp-content/uploads/2017/12/b18.jpg',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: '',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: 'https://wp.nouhtml5.com/wp-content/uploads/2017/12/b18.jpg',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: '',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: 'https://wp.nouhtml5.com/wp-content/uploads/2017/12/b18.jpg',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: '',
      link: '/post/574',
    },
    {
      id: 574,
      category: ['Entertainment'],
      title: 'Tips how to choose a perfect watch for active guys',
      date: '28 Oct, 2017',
      author: 'Global Store',
      image: 'https://wp.nouhtml5.com/wp-content/uploads/2017/12/b18.jpg',
      link: '/post/574',
    },
    // Add more blog posts as needed
  ];

  // Filter posts based on the current category
  const filteredPosts = currentCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category.includes(currentCategory));

  // Paginate the filtered posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ps-page--blog">
      <div className="container">
        <div className="ps-page__header">
          <h1>Our Press</h1>
          {/* Breadcrumb */}
        </div>
        <div className="ps-blog">
          <div className="ps-blog__header">
            <ul className={styles.blogLinks}>
              {['All', 'Business', 'Entertainment', 'Fashion', 'Life Style', 'Others', 'Technology', 'test', 'tét', 'Uncategorized'].map(category => (
                <li
                  key={category}
                  className={currentCategory === category ?   `${styles.active}` : ''}
                  onClick={() => setCurrentCategory(category)}
                >
                  {/* Use Link instead of anchor tag */}
                  <Link className={styles.blogLinksAnchor} to="#">{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ps-blog__content">
            <div className="row">
              {currentPosts.map(post => (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6 col-sm-12 col-12"
                >
                  <article className="ps-post">
                    <div className="ps-post__thumbnail">
                      {/* Use Link instead of anchor tag */}
                      <Link className="ps-post__overlay" to={post.link}></Link>
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="ps-post__content">
                      <div className="ps-post__meta">
                        {post.category.map(cat => (
                          <Link key={cat} to="/blog">{cat}</Link>
                        ))}
                      </div>
                      {/* Use Link instead of anchor tag */}
                      <Link className="ps-post__title" to={post.link}>
                        {post.title}
                      </Link>
                      <p>
                        {post.date} by <Link to="#">{post.author}</Link>
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <div className="ps-blog__pagination text-center pt-40">
              <ul className="ant-pagination">
                {/* Previous page button */}
                <li
                  title="Previous Page"
                  className={`ant-pagination-prev ${
                    currentPage === 1 ? 'ant-pagination-disabled' : ''
                  }`}
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                >
                  {/* ... */}
                </li>
                {/* Page numbers */}
                {[...Array(Math.ceil(filteredPosts.length / postsPerPage)).keys()].map(number => (
                  <li
                    key={number + 1}
                    title={number + 1}
                    className={`ant-pagination-item ${currentPage === number + 1 ? 'ant-pagination-item-active' : ''}`}
                    onClick={() => paginate(number + 1)}
                  >
                    <Link to="#" rel="nofollow">{number + 1}</Link>
                  </li>
                ))}
                {/* Next page button */}
                <li
                  title="Next Page"
                  className={`ant-pagination-next ${
                    indexOfLastPost >= filteredPosts.length
                      ? 'ant-pagination-disabled'
                      : ''
                  }`}
                  onClick={() =>
                    indexOfLastPost < filteredPosts.length &&
                    paginate(currentPage + 1)
                  }
                >
                  {/* ... */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Add the remaining content from your original HTML code here */}
      </div>
    </div>
  );
};

export default BlogPage;
