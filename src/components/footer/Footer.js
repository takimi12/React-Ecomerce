import React from 'react';
import FooterWidgets from './modules/FooterWidgets';
import FooterLinks from './modules/FooterLinks';
import FooterCopyright from './modules/FooterCopyright';
import HomeNewsletter from './HomeNewsletter';
const FooterDefault = () => (
    <>
    <HomeNewsletter />
    <footer className="ps-footer">

            <FooterWidgets />

            <FooterCopyright />

    </footer>
    </>
);

export default FooterDefault;
