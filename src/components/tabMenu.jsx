import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './tabMenu.css';
import { Link } from  'react-router-dom'
const TabMenu = ({current,changeLink}) => {
    // current  movie  user
    console.log({current})
    return (
        <div className="tabWrapper">
            <Link to="/" onClick={()=>changeLink('/')} className={`movie oBtn ${current === '/' && 'current'}`}>
                <i className="iconMovie"></i>
                <span>电影</span>
            </Link>
            
            <Link to="/user" onClick = {()=>{changeLink('/user')}} className={`mine oBtn ${current === '/user' && 'current'}`}>
                <i className="iconMine"></i>
                <span>我的</span>
            </Link>
        </div>
    )
}
TabMenu.propTypes = {
    current:PropTypes.string.isRequired,
    changeLink: PropTypes.func.isRequired,
}
export default TabMenu;