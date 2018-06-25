import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './../../common.css'
import './summary.css'
import Star from './star'
import FoldableParagragh from './foldableParagragh'

/**
 * 
 * summary 
 * 
 */
const Summary = () => {
    return (
        <div>
            <div className="SummaryTop">
                <div className="left">
                    <div className="star">
                        <span className="math">9.3</span>
                        <Star number={9.3} size= {15}/>
                        {/* <span className="starMath"></span>
                        <span className="starMath"></span>
                        <span className="starMath"></span>
                        <span className="starMath"></span>
                        <span className="starMath"></span> */}
                    </div>
                    <div className="people">观众评分279,337人<span className="triangle CD"></span></div>
                </div>
                <div className="center">
                    <div className="percentage">83%</div>
                    <div className="percentage-bottom">v淘推荐度<span className="triangle CD"></span></div>
                </div>
                <div className="right">
                    <div className="wantNumber">71787</div>
                    <div className="wantPeople">想看人数</div>
                </div>
            </div>
            <div className="Summarymiddle">
                <button><i></i>想看</button>
                <button><i></i>看过</button>
            </div>
            <FoldableParagragh>
                <div className="contentText">想看看想看想看想看想想过看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看看过</div>
            </FoldableParagragh>
            {/* <div className="Summarybottom">
                <div className="bottomContent">想看想看想看想看想看想看想看 想看想看 想看 想 看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过</div>
                <div className="moreOrLess">展开</div>
            </div> */}
        </div>
    )
}

export default Summary;