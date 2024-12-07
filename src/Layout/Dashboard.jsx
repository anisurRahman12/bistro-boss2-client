import React from 'react';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, } from 'react-icons/fa';

import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCart();
  //TODO: get is Admin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className='flex'>
      {/* dashboard side bar */}
      <div className='w-64 min-h-screen bg-orange-400'>
        <ul className='menu p-4'>
          {
            isAdmin ? <>
            </> :
              <>
                <li><NavLink to="/dashboard/AdminHome">
                  <FaHome></FaHome>
                  Admin Home</NavLink></li>

                <li><NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items</NavLink></li>

                <li><NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items</NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory">
                  <FaBook></FaBook>
                  Real Payment History </NavLink></li>
                <li><NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All users</NavLink></li>
                <li><NavLink to="/dashboard/history">
                  <FaCalendar></FaCalendar>

                  Not History</NavLink></li>

                <li><NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})</NavLink></li>
              </>
          }
          {/* shareed nav links */}

          <div className='divider'></div>

          <li><NavLink to="/">
            <FaHome></FaHome>
            Home</NavLink></li>

          <li><NavLink to="/order/salad">
            <FaSearch></FaSearch>
            Menu</NavLink></li>

          <li><NavLink to="/order/contact">
            <FaEnvelope></FaEnvelope>
            Contact</NavLink></li>

        </ul>

      </div>
      {/* dashboard content */}
      <div className='flex p-8'>
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default Dashboard;