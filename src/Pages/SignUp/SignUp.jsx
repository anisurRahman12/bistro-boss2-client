import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";



const SignUp = () => {
    const axiosPublic= useAxiosPublic();
    const { register, handleSubmit, reset ,formState: { errors } } = useForm();
    const { createUser , updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggeUser = result.user;
                console.log(loggeUser);
                updateUserProfile(data.name, data.PhotoURL)
                .then(()=>{
                    //console.log('user profile info updated')
                    const userInfo = {
                        name: data.name,
                        email:data.email,
                     }
                     axiosPublic.post('/user',userInfo)
                     .then(res =>{
                        if(res.data.insertedId){
                            console.log('user added to the database')
                            reset();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                     })

                

                    Navigate('/');
                })
                .catch(error=>console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>

            </Helmet>


            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600"> Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("PhotoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                                {errors.PhotoURL && <span className="text-red-600"> Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600"> Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6,
                                    maxLength: 20,

                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && <span className="text-red-600"> 6 digit  required</span>}
                                {errors.password?.type === 'patern' && <span className="text-red-600"> Password must have one digit uper one lower case, one number and one spcial </span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className="px-6"><small>New Here? <Link to="/login">Already have an account</Link>
                        </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;