import React from 'react'
import "./navbaar.css"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

const Navbaar = () => {
    return (
    <header>
        <nav>
            <div classname="left">
                <div classname="navlogo">
                    <img src="C:\Users\Alok Divedi\OneDrive\Pictures\Screenshots\Screenshot 2024-10-23 190811.png" alt=" "/>
                </div>
                <div classname="nav_searchbaar">
                    <input type="text" name="" id="" />
                    <div classroom="search_icon">
                        <SearchIcon/>
                    </div>

                </div>
            
            </div>
            <div classname="right">
                <div classname="nav_btn">
                    <h1><a href=''>Sign In</a></h1>
                </div>
                <div classname="cart_btn">
                <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="icon"/>
                </Badge>
                <p>Cart</p>
                </div>
                <Avatar classname='avatar'/>
            </div>
        </nav>
    </header>
    )
}

export default Navbaar;

