import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './star.css'
/**
 * desc: 星星评分组件
 * props : number 评分   十分制/  size 星星大小
 * 
 */
const Star = ({number , size=16}) => {
    const bgSize = `${size}px`   //如果不设置backgroundsize  那么是用contain 的时候 如果星星的number过于小 ，那么他最终的宽度也会过于小
    //当content星星的宽度小于星星的 高度时，他就会单个星星宽高不成比例，由于使用contain ，会导致星星的background-size 缩小 ，这里我们固定他的
    //background-size  就解决了问题
    return (
        
            <div className="starWrapper" style={{height:`${size}px`,width:`${size * 5}px` ,bcakgroundSize:bgSize}}>
                <div className= "starContent" style={{width : `${number*0.1*size*5}px` ,bcakgroundSize:bgSize}}></div>
            </div> 
       
            
      
    )
}
 
Star.propTypes = {
    number: PropTypes.number.isRequired,
    size : PropTypes.number,
}
export default Star;