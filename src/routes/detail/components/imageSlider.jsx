import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './imageSlider.css'
import Slider from 'react-slick';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }
    changeIndex = (e,a,c) => {
        console.log(e,a,c)
        // this.setState({
        //     index: index 
        // })
    }
    render() {
        const settings = {
            dots: true, //是否需要点
            infinite: true,    //是否无限播放
            // speed: 500,         //速度
            // slidesToShow: 1,        //一次展现几张
            // slidesToScroll: 1       //一次滑动多少
            className: 'slider',
            dotsClass: 'slider--dots',
            afterChange: this.changeIndex,    //index 改变触发 默认传参index
        };
        // console.log(this.props.onClick)
        return (
            <div className="imageSlider">
                <div className="sliderIndex">
                    {this.state.index} / 6
                </div>
                <Slider {...settings}>
                    <div className="SliderItem">
                        <img src="/source/image/asset1.jpeg" alt="" />
                    </div>
                    <div className="SliderItem">
                        <img src="/source/image/asset2.jpeg" alt="" />
                    </div>
                    <div className="SliderItem">
                        <img src="/source/image/asset3.jpeg" alt="" />
                    </div>
                    <div className="SliderItem">
                        <img src="/source/image/asset4.jpeg" alt="" />
                    </div>
                    <div className="SliderItem">
                        <img src="/source/image/asset5.jpeg" alt="" />
                    </div>
                    <div className="SliderItem">
                        <img src="/source/image/asset6.jpeg" alt="" />
                    </div>

                </Slider>
            </div>
        )
    }
}
ImageSlider.propTypes = {
    onClick:PropTypes.func.isRequired,
}
export default ImageSlider;



// const ImageSlider = ({ data }) => {
    // const settings = {
    //     dots: true, //是否需要点
    //     infinite: true,    //是否无限播放
    //     // speed: 500,         //速度
    //     // slidesToShow: 1,        //一次展现几张
    //     // slidesToScroll: 1       //一次滑动多少
    //     className: 'slider',
    //     dotsClass: 'slider--dots',
    //     afterChange:this.changeIndex,
    // };
    // return (
        // <div className="imageSlider">
        //     <div className="sliderIndex">
        //         {this.state.index/6}
        //     </div>
        //     <Slider {...settings}>
        //         <div className="SliderItem">
        //             <img src="/source/image/asset1.jpeg" alt="" />
        //         </div>
        //         <div className="SliderItem">
        //             <img src="/source/image/asset2.jpeg" alt="" />
        //         </div> 
        //         <div className="SliderItem">
        //             <img src="/source/image/asset3.jpeg" alt="" />
        //         </div>

        //     </Slider>
        // </div>
//     )
// }

// export default ImageSlider;