import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"form 11.0 am to 10.0pm"}
            Heading={"Order Online"}
            ></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={img1} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Cake</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Vegetables</h3>
        </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Category;