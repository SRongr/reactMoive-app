// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TabMenu from './../../../src/components/tabMenu'
import './user.css'
import './../common.css'
import LineLink from './../../../src/components/lineLink'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            current:'/user'
         }
    }
    
    changeLink = (link)=>{
        this.setState({
            current:link,
        })
    }
    render() { 
        const current = this.state.current;
        console.log(current)
        return ( 
            <div className="User">
                <div className="top">
                    <div className="tOperator">
                        <div className="tOperator--setting"></div>
                        <div className="tOperator--message"></div>
                    </div>
                    <div className="userInfo">
                        <div className="userimg" style={{backgroundImage : "url('/source/avatar.jpeg')"}}></div>
                        <div className="userContent">
                            <div className="name">刘德华</div>
                            <div className="FF">
                                <span className= "fellow">关注 100</span>
                                <span>|</span>
                                <span className="fans">被关注 20</span>
                            </div>
                            <div className="userLevel">黄金会员</div>
                        </div>
                    </div>
                </div>
                <div className="middle">
                   <LineLink tittle='收藏的电影' extra='2' href="#"></LineLink>
                   <LineLink tittle='看过的电影' extra='64' href="#"></LineLink>
                </div>
                <TabMenu current={current} changeLink={this.changeLink}></TabMenu>
            </div>
         )
    }
}
 
export default User;