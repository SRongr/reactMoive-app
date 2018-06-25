import React, { Component } from 'react';
import './detail.css'
import './../common.css'
import { Link } from 'react-router-dom'
import Summary from './components/summary';
import Artist from './components/artist';
import Request from './../../helpers/request.js'
import Contain from './components/contain/contain'
import MovieMeans from './components/movieMean'
import ImageSlider from './components/imageSlider';

/**
 * 详情页
 */
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arist : [],
            showSlider : false
        }
    }
    changeShow = () =>{
        this.setState((prevState) =>{
            return {
                showSlider: !prevState.showSlider
            }
        })
    }
    componentDidMount = () =>{
        this.getData()
    }
    getData = async () =>{
        // const arr = Request('/artist')
        const artist =await Request('/artist')
        this.setState({
            artist,
        })
        console.log(artist)
        
        // console.log(artist,arr)
        
    }
    render() { 
        const { artist } = this.state;
        if(this.state.showSlider){
            console.log(2323)
            window.event.preventDefault()
            window.event.stopPropagation();
        }
        return ( 
            <div className="detail">
                <div className={`mask ${this.state.showSlider && 'show'}` } onClick = {(e)=>{e.stopPropagation();this.changeShow()}}>
                    <div className="tOperator">
                       <div className="tOperator--back " onClick = {(e)=>{e.stopPropagation();this.changeShow()}}></div> 
                       <div className="tOperator--share"></div>
                    </div>
                    <ImageSlider onClick = {this.changeShow} />
                </div>
                <div className="detailTop">
                    <div className="tOperator">
                       <div className="tOperator--back" onClick = {()=>window.history.back()}></div> 
                       <div className="tOperator--share"></div>
                    </div>
                    <div className="topContent">
                        <div className="content">
                            <div className="contentName">神秘巨星</div>
                            <div className="contentSecondName">sadadasda</div>
                            <div className="class">剧情 / 喜剧</div>
                            <div className="CM">
                                <span className="country">印度</span>
                                <span> | </span>
                                <span className="Minute">150分钟</span>
                            </div>
                            <div className="start">
                                <span className="time">2018-01-19</span>
                                <span className="place">在中国大陆上映</span>
                                <span className="triangle colorDirection"></span>
                            </div>
                        </div>
                        
                        
                        <div className="img" onClick ={this.changeShow}  style={{background:"url('/source/movie/asset2.jpeg') 50% / contain no-repeat"}}></div>
                    </div>
                </div>
                <div className="middleDetailModule">
                    <div className="detailModule score">
                        <Summary/>   
                        {/* 评分组件 内置star组件 foldParagraph组件 */}
                    </div>
                    {/* <div className="detailModule egg" ></div> */}
                    <div className="detailModule " >
                        <h3>演职人员</h3>
                        <Artist data = {artist} />
                    </div>
                    <div className="detailModule " >
                        <Contain/>
                    </div>
                    <div className="detailModule " >
                        <MovieMeans/>
                    </div>
                </div>

                <Link to="/seat" className="bottomBtn">特惠选座</Link>
            </div>
         )
    }
}
 
export default Detail;