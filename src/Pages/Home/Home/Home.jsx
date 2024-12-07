import { Helmet } from "react-helmet-async";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <MenuItem></MenuItem>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;