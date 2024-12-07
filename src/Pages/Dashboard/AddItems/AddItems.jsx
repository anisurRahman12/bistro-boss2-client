import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (register.data.success) {
            // now send the menu item to the server with the img
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };
    return (
        <div>

            <SectionTitle heading="add an item" subHeading="what's new?"></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label  >
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>

                            </div>
                            <input
                                type="text" placeholder="Recipe Name"
                                {...register('name', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </label>
                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label  >
                                <div className="label">
                                    <span className="label-text">Category*</span>

                                </div>
                                <select defaultValue="default" {...register('category', { required: true })}
                                    className="select select-bordered w-full max-w-xs">
                                    <option disabled value="default">Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">pizza</option>
                                    <option value="soup">soup</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="desert">Desert</option>

                                </select>

                            </label>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label  >
                                <div className="label">
                                    <span className="label-text">Price*</span>

                                </div>
                                <input
                                    type="number" placeholder="Price"
                                    {...register('price', { required: true })}
                                    className="input input-bordered w-full " />

                            </label>
                        </div>


                    </div>

                    <div>
                        {/* recipe details */}
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe details</span>

                            </div>
                            <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                        </label>

                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;