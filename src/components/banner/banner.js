import './banner.css';
import {BsTag, RiRegisteredLine} from "react-icons/all";

function Banner() {
    return (
        <div className="banner">
            {/*This is the full-responsive version of the images provided, that will stretch with the page. I exported the background image from Figma for this, so the quality isn't the best.*/}
            <div className="stretchy-banner">
                <div className="gradient">
                </div>
            </div>
            <div className="behind-text">
                <div className="stretchy-desktop-banner">
                    <div className="stretchy-featured-div">
                        <div className="stretchy-featured-offer featured-offer">
                            <BsTag/>
                            <p>Featured Offer</p>
                        </div>
                    </div>
                    <div className="stretchy-title title">
                        <h1>$40 off the yummly smart meat thermometer with bluetooth</h1>
                    </div>
                    <div className="stretchy-description description">
                        <p>Get the results you want, every time, with the completely wireless
                            Yummly<RiRegisteredLine/> meat
                            thermometer.</p>
                    </div>
                    <div className="stretchy-shop-now">
                        <a href={"#"}>shop now ></a>
                        <button>shop now</button>
                    </div>
                </div>
            </div>
            <br/>
            {/*This is the "pixel perfect" version of the images provided, but they do not stretch with the page. I used a screenshot of the background for this, so there is a higher overall image quality, but is less responsive. */}
            <div className="desktop-banner">
                <div className="featured-div">
                    <div className="featured-offer">
                        <BsTag/>
                        <p>Featured Offer</p>
                    </div>
                </div>
                <div className="title">
                    <h1>$40 off the yummly smart meat thermometer with bluetooth</h1>
                </div>
                <div className="description">
                    <p>Get the results you want, every time, with the completely wireless Yummly<RiRegisteredLine/> meat
                        thermometer.</p>
                </div>
                <div className="shop-now">
                    <a href={"#"}>shop now ></a>
                    <button>shop now</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
