import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const {name,image,price, recipe,_id}= item;
    const {user}= useAuth();
    const navigate=useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] =useCart();

    const handleAddToCard = food=>{
      if(user && user.email){
       // TODO: send cart item to the database
       console.log(user.email, food);
       const cartItem={
        menuId:_id,
        email:user.email,
        name,
        image,
        price
       }
       axiosSecure.post('/carts', cartItem)
       // http://localhost:4000
       .then(res=>{
        console.log(res.data)
        if(res.data.insertedId)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch cart to update the cart items counts
          refetch();
       })
      }
      else{
        Swal.fire({
          title: "You are not login",
          text: "Please login add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            // Send the user to the login page.
            navigate("/login", {state:{from:location}});
          }
        });
      }
      console.log(food)
  }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p>${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button  onClick={handleAddToCard}
       className="btn btn-primary border-orange-400 bg-slate-100">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;