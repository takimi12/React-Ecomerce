import React from 'react';
import styles from './FAQ.module.scss';

const FaqComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tableResponsive }>
        <table className={styles.tableFaqs}>
          <tbody>
            <tr>
              <td className={styles.heading} rowSpan={3}>
                <h4>SHIPPING</h4>
              </td>
              <td className={styles.question}>What Shipping Methods Are Available?</td>
              <td className={styles.longText}>
                Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights
                actually mlkshk, seitan squid craft beer tempor.
              </td>
            </tr>
            <tr>
              <td className={styles.question}>Do You Ship Internationally?</td>
              <td className={styles.longText}>
                Hoodie tote bag mixtape tofu. Typewriter jean shorts wolf quinoa, messenger bag organic freegan cray.
              </td>
            </tr>
            <tr>
              <td className={styles.question}>How Long Will It Take To Get My Package?</td>
              <td className={styles.longText}>
                Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian
                Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings, deep v XOXO
                chambray sustainable slow-carb raw denim church-key fap chillwave Etsy. +1 typewriter kitsch, American Apparel
                tofu Banksy Vice.
              </td>
            </tr>
            <tr>
              <td className={styles.heading} rowSpan={2}>
                <h4>PAYMENT</h4>
              </td>
              <td className={styles.question}>What Payment Methods Are Accepted?</td>
              <td className={styles.longText}>
                Fashion axe DIY jean shorts, swag kale chips meh polaroid kogi butcher Wes Anderson chambray next level
                semiotics gentrify yr. Voluptate photo booth fugiat Vice. Austin sed Williamsburg, ea labore raw denim voluptate
                cred proident mixtape excepteur mustache. Twee chia photo booth readymade food truck, hoodie roof party swag
                keytar PBR DIY.
              </td>
            </tr>
            <tr>
              <td className={styles.question}>Is Buying On-Line Safe?</td>
              <td className={styles.longText}>
                Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth
                Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.
              </td>
            </tr>
            <tr>
              <td className={styles.heading} rowSpan={5}>
                <h4>Order &amp; Retunrs</h4>
              </td>
              <td className={styles.question}> How do I place an Order?</td>
              <td className={styles.longText}>
                Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb Odd Future seitan normcore. Master cleanse
                American Apparel gentrify flexitarian beard slow-carb next level. Raw denim polaroid paleo farm-to-table, put a
                bird on it lo-fi tattooed Wes Anderson Pinterest letterpress. Fingerstache McSweeney’s pour-over, letterpress
                Schlitz photo booth master cleanse bespoke hashtag chillwave gentrify.
              </td>
            </tr>
            <tr>
              <td className={styles.question}>How Can I Cancel Or Change My Order?</td>
              <td className={styles.longText}>
                Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts
                chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth.
              </td>
            </tr>
            <tr>
              <td className={styles.question}>Do I need an account to place an order?</td>
              <td className={styles.longText}>
                Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest. Twee chia photo
                booth readymade food truck, hoodie roof party swag keytar PBR DIY. Cray ugh 3 wolf moon fap, fashion axe irony
                butcher cornhole typewriter chambray VHS banjo street art.
              </td>
            </tr>
            <tr>
              <td className={styles.question}>How Do I Track My Order?</td>
              <td className={styles.longText}>
                Kale chips Truffaut Williamsburg, hashtag fixie Pinterest raw denim c hambray drinking vinegar Carles street art
                Bushwick gastropub. Wolf Tumblr paleo church-key. Plaid food truck Echo Park YOLO bitters hella, direct trade
                Thundercats leggings quinoa before they sold out. You probably haven’t heard of them wayfarers authentic umami
                drinking vinegar Pinterest Cosby sweater, fingerstache fap High Life.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FaqComponent;
