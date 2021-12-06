import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="wrapper">
                <h1>
                    Lorem ipsum set
                    ammet test-test
                </h1>
                <h2>
                    LET US HELP YOU GET IT ALL BACK!
                </h2>
                <div className="line">
                    <svg width="503" height="11" viewBox="0 0 503 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M502.5 1L0.5 10H366.5" stroke="#121212"/></svg>
                </div>
                <div className="cta">
                    <div className="cta__info">
                        We currently take cases
                        that are $10,000 US and up
                    </div>
                    <div  className="cta__btn">
                        <ButtonWrapper
                            href="#form"
                            bsPrefix="custom-btn"
                            variant="black">
                            Get a free consultation
                        </ButtonWrapper>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;