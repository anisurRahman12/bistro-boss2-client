import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import ImgMenu from '../../../../assets/menu/banner3.jpg';
import ImgDessert from '../../../../assets/menu/banner3.jpg';
import ImgPizza from '../../../../assets/menu/pizza-bg.jpg';
import ImgSalad from '../../../../assets/menu/salad-bg.jpg';
import ImgSoup from '../../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../../Hooks/useMenu';


const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item=> item.category ==='soup');
    const salad = menu.filter(item=> item.category ==='salad');
    const pizza = menu.filter(item=> item.category ==='pizza');
    const dessert = menu.filter(item=> item.category ==='dessert');
    const offered = menu.filter(item=> item.category ==='offered');
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            {/* <Cover img={ImgMenu} title="Our Menu"></Cover> */}
            <SectionTitle
            subHeading="Don't miss" Heading="Today's offer"
            ></SectionTitle>
            {/* Offered menu items*/}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory items={dessert}
            title= "dessert"
            img={ImgDessert}></MenuCategory>
            {/* Pizza menu item */}
            <MenuCategory items={pizza} title={'pizza'} img={ImgPizza}>
            </MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={ImgSalad}>
            </MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={ImgSoup}>
            </MenuCategory>
            
        </div>
    );
};

export default Menu;