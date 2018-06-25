import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './evaluationLable.css'

const EvaluationLable = ({data,current,onClick}) => {
    return (
        <div className="EvaluationLable">
            {
                data.map((item) =>{
                    return (
                        <span className={`LabelItem ${current===item.text && 'active'}`} onClick= {()=>onClick(item.text)} key={item.text}>{item.text}{item.count}</span>
                    )
                })
            }
            {/* <span className="LabelItem">热门</span>
            <span className="LabelItem active">最新</span>
            <span className="LabelItem">好评465456</span>
            <span className="LabelItem">热门</span>
            <span className="LabelItem">最新</span>
            <span className="LabelItem">好评465456</span>
            <span className="LabelItem">热门</span>
            <span className="LabelItem">最新</span>
            <span className="LabelItem">好评465456</span> */}
        </div>
    )
}
EvaluationLable.propTypes = {
    data:PropTypes.array.isRequired,
    current :PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default EvaluationLable;