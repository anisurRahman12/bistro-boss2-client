import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(Data => setReviews(Data))
    }, [])
    return (
        <section>

            <SectionTitle
                subHeading="What our client said"
                Heading={"TESTOMONIALS"}
            ></SectionTitle>
            Reviews:{reviews.length}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating style={{ maxWidth: 180 }}
                                value={review.rating} readOnly />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;