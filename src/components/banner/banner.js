import './banner.css';
import {BsTag, RiRegisteredLine} from "react-icons/all";

function Banner() {
    return (
        <div className="banner">
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
