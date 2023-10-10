import React from 'react';

const Newsletters = () => (
    <section className="HomeNewsletter">
        <div className="">
            <form className="HomeNewsletter__form" action="do_action" method="post">
                <div className="row">
                    <div className="column-5-12">
                        <div className="form--left">
                            <h3>Newsletter</h3>
                            <p>Subcribe to get information about products and coupons</p>
                        </div>
                    </div>
                    <div className="column-7-12">
                        <div className="form--right">
                            <div className="form--right__input">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email address"
                                />
                                <button className="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
);

export default Newsletters;
