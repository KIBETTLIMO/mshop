import React from 'react';
import '../Styles/Header.css'
import Search from '@mui/icons-material/Search';
import HeaderOptionLeft from '../components/HeaderOptionLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


let header =()=>{
    return(
        <div  className="headerContainer">
            <h2>M-shop</h2>
            <div className="headerLeft">
        <div className="headerSearch">
          <Search />
          <input className="inputContainer" placeholder="Search products, brands and categories" />
        </div>
          <Button variant='contained' className="inputButton">SEARCH</Button>
          </div>

      <div className="headerRight">
        <HeaderOptionLeft Icon={PersonOutlineIcon} title="Login" DropIcon={ExpandMoreIcon} />
        <HeaderOptionLeft Icon={HelpOutlineIcon} title="Help" DropIcon={ExpandMoreIcon} />
        <HeaderOptionLeft Icon={ShoppingCartIcon} title="Cart" />
      </div>
      
        </div>


    );
}
export default header