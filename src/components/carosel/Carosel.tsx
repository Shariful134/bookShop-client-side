import { Carousel, Image } from "antd";
import image1 from "../../assets/image/image6.png";
import image2 from "../../assets/image/caroselImg-3.png";
import image3 from "../../assets/image/image-4.png";
import image4 from "../../assets/image/caroselImg-1.png";
import "./Carosel.css";

const Carosel = () => {
  return (
    <Carousel
      style={{ marginBottom: "5px" }}
      autoplay={true}
      arrows
      autoplaySpeed={3000}
    >
      <div className="carousel-item">
        <Image src={image1} />
        <h2 className="carousel-text">
          Dive into Our Mystery <br /> and Thriller Collection!
        </h2>
      </div>
      <div className="carousel-item">
        <Image src={image2} />
        <h2 className="carousel-text">See What Other Readers Are Loving!</h2>
      </div>
      <div className="carousel-item">
        <Image src={image3} />
        <h2 className="carousel-text">
          Upcoming Book Launch: Be <br /> Part of the Excitement!
        </h2>
      </div>
      <div className="carousel-item">
        <Image src={image4} />
        <h2 className="carousel-text">
          Exclusive Offer: Buy 2 Get 1 <br /> Free on Selected Titles!
        </h2>
      </div>
    </Carousel>
  );
};

export default Carosel;
