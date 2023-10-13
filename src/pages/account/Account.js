import React from 'react'
import AdminOnlyRoute from '../../components/adminOnlyRoute/AdminOnlyRoute'

const Account = () => {
  return (
    <section class="ps-my-account ps-page--account">
    <div class="container">
        
      <div class="row">
        <div class="col-lg-3">
            <AdminOnlyRoute>
            <div  className='adminOnly'>
            Witaj Admin
            </div>
           <div class="ps-section__left">
            <aside class="ps-widget--account-dashboard">
              <div class="ps-widget__header">
                <img src="/static/img/users/3.jpg" />
                <figure>
                  <figcaption>Hello</figcaption>
                  <p>username@gmail.com</p>
                </figure>
              </div>
              <div class="ps-widget__content">
                <ul class="ps-list--user-links">
                  <li class="active">
                    <a href="/account/user-information">
                      <i class="icon-user"></i>Account Information </a>
                  </li>
                  <li class="">
                    <a href="/account/notifications">
                      <i class="icon-alarm-ringing"></i>Notifications </a>
                  </li>
                  <li class="">
                    <a href="/account/invoices">
                      <i class="icon-papers"></i>Invoices </a>
                  </li> 
                  <li>
                    <a href="/account/my-account">
                      <i class="icon-power-switch"></i>Logout </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          </AdminOnlyRoute>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Account