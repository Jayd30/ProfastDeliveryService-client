import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/banner/banner1.png'
import img2 from '../../../assets/banner/banner2.png'
import img3 from '../../../assets/banner/banner3.png'
const Banner = () => {
  return (
    <Carousel showThumbs={Boolean,false} autoPlay infiniteLoop={true} >
      <div>
        <img src={img1} alt="Banner 1" />
        {/* <p className="legend">Legend 1</p> */}
      </div>

      <div>
        <img src={img2} alt="Banner 2" />
        {/* <p className="legend">Legend 2</p> */}
      </div>

      <div>
        <img src={img3} alt="Banner 3" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Banner;