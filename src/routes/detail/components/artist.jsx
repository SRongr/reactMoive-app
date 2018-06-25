import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './artist.css'
/**
 * 详情页演职员表 
 */
const Artist = ({ data=[]}) => {
    // console.log(data)
    return (
        <div className="Artist">
            <ul className="artistList">
                {
                    data.map((item) =>{
                        return (
                            <li className="artistItem" key={item.name}>
                                 <a href="#">
                                    <div className = "img" style={{backgroundImage:`url(${item.image})`}}></div>
                                    <dl className="name">{item.name}</dl>
                                    <dd className="job">{item.job}</dd>
                                </a>
                            </li>
                        )
                    }) 
                } 
                {/* <li className="artistItem">
                    <a href="#">
                        <div className = "img" style={{backgroundImage:"url('/source/artist/asset1.jpeg')"}}></div>
                        <dl className="name"></dl>
                        <dd className="job">导演</dd>
                    </a>
                </li> */}
            </ul>
        </div>
    )
}
 
Artist.propsTypes = {
    data : PropTypes.array.isRequired,
}
export default Artist;