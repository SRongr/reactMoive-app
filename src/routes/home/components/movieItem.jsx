import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './movieItem.css' 

const MovieItem = ({data}) => {
    return (
        <div className="item">
            <div className="img">
                <img src={data.poster} alt=""/>
            </div>
            <div className="content">
                <div className="title">{data.name}</div>
                <div className="score">观众评分<span>{data.score}</span></div>
                <div className="director font">导演：{data.director}</div>
                {data.actor && <div className="actor font">主演：{data.actor}</div>}
                <div className="theBest">
                {
                    data.tags.map((item,index)=>{
                       return (<span key={item}>{item}</span>)
                    })
                        
                    
                }
{/*                 
                    <span>今日最热</span>
                    <span>口碑最佳</span> */}
                </div>
            </div>
            <div className="buy">
                <button className="tBtn">购票</button>
                <div className="howMuch">{data.score}</div>
            </div>
        </div>
        
    )
}
MovieItem.propTypes = {
    data : PropTypes.object.isRequired,
}
export default MovieItem;