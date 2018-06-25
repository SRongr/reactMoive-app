import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from 'react-slick';
import './slider.css'
const PosterSlider = ({data}) => {
    const settings = {
                dots: true, //是否需要点
                infinite: true,    //是否无限播放
                // speed: 500,         //速度
                // slidesToShow: 1,        //一次展现几张
                // slidesToScroll: 1       //一次滑动多少
                className:'slider',
                dotsClass:'slider--dots'
            };
            // console.log(data)
    return (
       //Slider 标签里面包含着图片
        <Slider {...settings}>
            {
                data.map((item,index)=>{
                    return (
                    <div key={item.image}>
                        <img src={item.image} alt=""></img>
                    </div>
                )}) 
            }
            {/* {
                data.forEach((item)=>(
                    <div>
                        <img src={item.image} alt=""></img>
                    </div>
                )) 
            } */}
            {/* <div>
              
                <img src="/source/slide/slide1.jpg" alt=""></img>
            </div>
            <div>
                <img src="./../../../../public/source/slide/" alt=""/>
                <img src="/source/../public/source" alt=""/>
                <img src="./../../../../public/source/slide/slide2.jpeg" alt=""></img>
            </div>
            <div>
                <img src="/source/slide/slide3.jpeg" alt=""></img>
            </div>
            <div>
                <img src="/source/slide/slide4.jpeg" alt=""></img>
            </div>
            <div>
                <img src="/source/slide/slide5.jpeg" alt=""></img>
            </div> */}
        </Slider>
    )
}
PosterSlider.propTypes = {
    data : PropTypes.array.isRequired,
}
export default PosterSlider;

