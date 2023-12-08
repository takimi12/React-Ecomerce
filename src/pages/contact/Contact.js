import React from 'react';
import styles from './Contact.module.scss';

const ContactUs = () => {
  return (
    <div className="" id="contact-us">
      <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14049.340485982573!2d-0.12031301106485542!3d51.50228117351734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sThe%20National%20Gallery!5e0!3m2!1sen!2s!4v1582441665587!5m2!1sen!2s" height="500"></iframe>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.mainHeading}>Contact Us For Any Questions</h3>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.row}>
              <div className={styles.content}>
                <div className="">
                  <h4>Contact Directly</h4>
                  <p><a href="mailto:contact@martfury.com">contact@martfury.com</a><span>(+004) 912-3548-07</span></p>
                </div>
              </div>
              <div className={styles.content}>
                <div className="">
                  <h4>Head Quater</h4>
                  <p><span>17 Queen St, Southbank, Melbourne 10560, Australia</span></p>
                </div>
              </div>
              <div className={styles.content} >
                <div className="">
                  <h4>Work With Us</h4>
                  <p><span>Send your CV to our email:</span><a href="#">career@martfury.com</a></p>
                </div>
              </div>
              </div>
              <div className={styles.row}>
              <div className={styles.content}>
                <div className="">
                  <h4>Customer Service</h4>
                  <p><a href="#">customercare@martfury.com</a><span>(800) 843-2446</span></p>
                </div>
              </div>
              <div className={styles.content}>
                <div className="">
                  <h4>Media Relations</h4>
                  <p><a href="#">media@martfury.com</a><span>(801) 947-3564</span></p>
                </div>
              </div>
              <div className={styles.content}>
                <div className="">
                  <h4>Vendor Support</h4>
                  <p><a href="#">vendorsupport@martfury.com</a><span>(801) 947-3100</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.container}>
          <form className="" action="/" method="get">
            <h3 className={styles.formHeading}>Get In Touch</h3>
            <div className={styles.row}>
              <div className={styles.rowChild}>
                <div className={styles.formGroup}>
                  <input className="" type="text" placeholder="Name *" />
                </div>
              </div>
              <div className={styles.rowChild}>
                <div className={styles.formGroup}>
                  <input className="" type="text" placeholder="Email *" />
                </div>
              </div>
              </div>
              <div className={styles.row}>
              <div className={styles.rowChild}>
                <div className={styles.formGroup}>
                  <input className="" type="text" placeholder="Subject *" />
                </div>
              </div>
              </div>
              <div className={styles.row}>
              <div className={styles.rowChild}>
                <div className={styles.formGroup}>
                  <textarea className="" rows="5" placeholder="Message"></textarea>
                </div>
              </div>
            </div>
            <div className={styles.submit}>
              <button className="--btn">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
