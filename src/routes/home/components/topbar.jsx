import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './topBar.css'

/**
 * BEM
 * Block  块
 * Element  元素
 * Modifier 修饰
 * topBar
 * topBar__city
 * topBar__city--red
 */


// onclick ={showCityLayer}


// export default TopBar;

class TopBar extends Component {
    
    debounce = (handle,wait)=>{
        var timer = null;    
        return function(){
            let self = this;
            let _arguments = arguments;
            clearTimeout(timer)
            timer = setTimeout(()=>{
                handle.apply(self,_arguments)
            },wait )
        }
    }
    changeInput = () =>{
        const input = this.refs.input;
        // console.log(this.props.change)
        const value = input.value;
        this.props.changeMovie(value)
        // this.props.movie = this.props.movie.filter(item =>item.name.indexOf(value)  )
    }
    render() {
        const showCityLayer = this.props.showCityLayer;
        const city= this.props.city
        console.log()
        // (e)=>{console.log(e) ;e.preventDefault()}
        return (
            <div className='topBar'>
                <div className="topBar__city" onClick={showCityLayer}>{city}</div>
                <div  className="topBar__search"><input  onFocus={(e)=>e.preventDefault()} ref="input" type="text" onInput = {this.debounce(this.changeInput,300)}/></div>
                <div className="topBar__scan"></div>
            </div>
        )
    }
}

// export default TopBar;

// const TopBar = ({city,showCityLayer}) => {          //sfc
//     // const changeValue = ()=>{
//     //     // const input = this.refs.input
//     //     console.log('input')
//     // }
//     return (
//         <div className='topBar'>
//             <div className="topBar__city" onClick={showCityLayer}>{city}</div>
//             <div ref="input" className="topBar__search"><input  type="text"/></div>
//             <div className="topBar__scan"></div>
//         </div>


//     )
// }
TopBar.propTypes = {
    city: PropTypes.string.isRequired,
    showCityLayer: PropTypes.func.isRequired,
    changeMovie:PropTypes.func.isRequired,
}

export default TopBar;