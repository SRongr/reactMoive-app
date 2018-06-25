import React, { Component } from 'react';   //imrc
import './home.css'
import { Link } from 'react-router-dom'
import TopBar from './components/topbar'
import PosterSlider from './components/slider'
import MovieItem from './components/movieItem'
import TabMenu from './../../components/tabMenu'
import RenderToBody from './components/RenderToBody'
import CityLayer from './components/cityLayer'
import request from './../../helpers/request.js'
class Home extends Component {              //cc
    state = {
        city:'',        //当前城市
        poster:[],      //海报图片
        movie:[],       //当前热映电影
        cityLayerVisible : false,   //是否展现cityLayer
        myObj: 123,
        current: '/',
        filterMovie : []
    }
    showCityLayer = ()=>{
        console.log('city')
        this.setState({
            cityLayerVisible : true,
        })
    }
    componentWillMount(){
        this.getData();
        // this.getCity();
    }
    hideCityLauyer=()=>{
        this.setState({
            cityLayerVisible:false,
        })
    }
    changeMovie = (value) =>{
        const currentMovie = this.state.movie
        this.setState({
            filterMovie:this.state.movie.filter(item =>(item.name).indexOf(value)!=-1)
        })
        // console.log(this.state.movie)
    }
    getData = async ()=>{
        const data = await request('/index');           //city,movie,poster
        console.log(data)     
        const {city,movie,poster} = data
        this.setState({
            city,
            movie,
            poster
        })
    }
    changeLink = (link)=>{
        this.setState({
            current:link,
        })
    }
    changeCity = (city)=>{
        this.setState({
            city,
        })
        this.hideCityLauyer();
    }
    getCity = async () =>{
        const data = await request('/city')             //hot  all city
        console.log(data)
    }
    
    // city='杭州' showCityLayer={this.showCityLayer}
    render() { 
        const {city,poster,movie,cityLayerVisible,current,filterMovie} = this.state;
        console.log(current,movie)
        const currentMovie = filterMovie[0] ? filterMovie : movie 
        // console.log({poster})
        const data = [];
        return ( 
            <div className="home">
                <TopBar city={city} changeMovie={this.changeMovie} onClick = {this.showCityLayer} showCityLayer={this.showCityLayer}/>
                <div className='sliderHome'>
                    <div className="sliderWrapper">
                        <PosterSlider data={poster}/>
                    </div>
              
                </div>
                <div className="movieItemWarpper">
                {
                    currentMovie.map((item,index)=>(
                        <Link  to="/detail" className="MovieItemHome" key={item.name}>
                                <MovieItem data={item} ></MovieItem>
                        </Link>
                    ))
                }  
                </div>
             
                <TabMenu current={current} changeLink = {this.changeLink}/>
                { cityLayerVisible && <RenderToBody><CityLayer onClick = {this.hideCityLauyer} onSelect={this.changeCity}></CityLayer></RenderToBody>}
            </div>
        )
    }
}

export default Home;
