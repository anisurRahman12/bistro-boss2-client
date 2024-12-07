import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import imgF from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="Featured-item bg-fixed text-green-400 pt-8 my-20">
            <SectionTitle subHeading=" check it out" Heading="Featured Item"></SectionTitle>
            <div  className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-20 px-36">
                <div>
                    <img src={imgF} alt="" />
                </div>
                <div className="text-white">
                    <p>September, 2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur harum reiciendis necessitatibus ex facere. Esse voluptas laborum error distinctio laboriosam odit! Distinctio explicabo alias ex, nisi vero non illo.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-200">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;

