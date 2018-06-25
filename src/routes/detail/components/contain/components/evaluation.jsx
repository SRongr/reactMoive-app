import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './evaluation.css'
import Star from './../../star'
import FoldableParagragh from './../../foldableParagragh'
const Evaluation = ({ data, current,onClick }) => {
    return (
        <div>

            {
                data.map(item => {
                    {/* console.log(item) */}
                    return (
                        <div className="Evaluation" key={item.id}>
                            <div className="EvaluationTitle">
                                <div className="peopleInfo" >
                                    <div className="head" style={item.s}></div>
                                    <div className="headInfo">
                                        <div className="headName">{item.name}</div>
                                        <div className="starHome">
                                            <Star number={9} size={11} />
                                            <span>{item.score}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightIcon"></div>
                            </div>
                            <div className="foldableParagraghWrapper">
                                <FoldableParagragh>
                                    <div className="contentText">{item.content}</div>
                                </FoldableParagragh>
                            </div>
                            <div className="EvaluationBottom">
                                <div className="time">{item.time}</div>
                                <div className="zanE">
                                    <i className={item.isZan ? 'isZan' : 'zan'} onClick={()=>onClick(item.id)}></i>
                                    <span>{item.zan}</span>
                                    <i className="E"></i>
                                    <span>24</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* <div className="Evaluation">
            <div className="EvaluationTitle">
                <div className="peopleInfo" >
                    <div className="head"></div>
                    <div className="headInfo">
                        <div className="headName">asdasd</div>
                        <div className="starHome">
                            <Star number={9} size={11}/>
                            <span>9.0</span>
                        </div>
                    </div>
                </div>
                <div className="rightIcon"></div>
            </div>
            <div className="foldableParagraghWrapper">
                <FoldableParagragh>
                    <div className="contentText">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
                </FoldableParagragh>
            </div>
            <div className="EvaluationBottom">
                <div className="time">01-17 12:26</div>
                <div className="zanE">
                    <i className="zan"></i>
                    <span>1058</span>
                    <i className="E"></i>
                    <span>24</span>
                </div>
            </div>
        </div>
     */}
        </div>

    )
}

Evaluation.propTypes = {
    current: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onClick:PropTypes.func.isRequired,
}
export default Evaluation;