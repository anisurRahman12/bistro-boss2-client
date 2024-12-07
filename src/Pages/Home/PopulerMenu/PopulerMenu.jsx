
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopulerMenu = () => {
    const [menu]= useMenu([]);
    const populer = menu.filter(item=> item.category ==='populer');
    // const [menu, setMenu]=useState([]);
    // useEffect( ()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(Data=>{
    //         const populerItems = Data.filter(item => item.category ==='popular');
    //          setMenu(populerItems)})
    // }, [])
    console.log(menu)
    return (
        <section className="mb-12">
            <div>
            <SectionTitle
            Heading= "From our menu"
            subHeading="Populer Items"
            ></SectionTitle>
         </div>
        <div className="grid md:grid-cols-2 gap-2">
            {
                populer.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
        </section>
        
    );
};

export default PopulerMenu;