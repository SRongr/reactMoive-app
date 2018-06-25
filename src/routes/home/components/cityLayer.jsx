import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './cityLater.css'
import request from './../../../helpers/request.js'
class CityLayer extends Component {
    // this.hot = []   也可以这样写  
    state = {
        Alphabet:[],
        hot:[],
        all:[],
        // citys:[],
    }
    componentWillMount = ()=>{
        this.getData()
       
    }
    getData = async()=>{
        const data = await request('/city')
        const{ hot, all } = data;
        const Alphabet = Object.keys(all)
    
        this.setState ({
            hot,
            all,
            Alphabet,
        })
        console.log(hot,all)
    }
    render() { 
        const {hot,all,Alphabet} = this.state
        const {onClick,onSelect} = this.props;
        return ( 
            <div className="cityLayerWrapper">
                <div className="title">
                选择城市
                    <span className="position"  onClick={onClick}>关闭</span>
               
                </div>
                <div className="contentWrapper" id="location">
                    <div className="contentInput">
                       
                        <input type="text"  placeholder="输入城市名或拼音"/>
                    </div>
                    <div className="contentMiddle">
                        <div className="location">
                            <div className="locationTitle" >定位城市</div>
                            <div className="locationContent" id="hot" onClick = {()=>{onSelect('杭州')}}>杭州</div>
                        </div>
                        <div className="hot" >
                            <div className="hotTittle" >热门城市</div>
                            <ul className="hotContentWrapper" >
                                {
                                    hot.map(item =>{
                                        
                                        return (
                                        <li className="hotItem" onClick = {()=>{onSelect(item.regionName)}} key={item.cityCode}>{item.regionName}</li>
                                    )})
                                }
                                {/* <li className="hotItem">上海</li>
                             
                                <li className="hotItem">上海</li> */}
                            </ul>
                        </div>
                        {
                            Alphabet.map(item =>{
                                const citys = all[item];
                                return (
                                <div className="cityListWrapper"  key={item}>
                                    <div className="hidden" id={item}></div>
                                    <div className="cityListTittle">{item}</div>
                                    <ul className="cityList">
                                        {
                                            citys.map(item =>{
                                                return (
                                                <li className="cityItem" onClick = {()=>{onSelect(item.regionName)}} key={item.cityCode}>{item.regionName}</li>
                                            )})
                                        }
                                        {/* <li className="cityItem">阿坝</li>
                                  
                                        <li className="cityItem">阿坝</li> */}
                                
                                    </ul>
                                </div>
                            )})
                        }
                        
                    </div>
                </div>
                <div className="cityIndex">
                    <ul>
                        <li><a href="#location">定位</a></li>
                        <li><a href="#hot">热门</a></li>
                        {
                            Alphabet.map(item=>(
                                <li  key={item}><a href={`#${item}`}> {item}</a></li>
                            ))
                        }
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
}
 
CityLayer.propTypes={   
    onClick : PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
}
export default CityLayer;