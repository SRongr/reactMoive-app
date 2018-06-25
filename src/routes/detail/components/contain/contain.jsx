import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Star from './../star'
import './contain.css'
import './../../../common.css'
import EvaluationLabel from './components/evaluationLabel'
import Evaluation from './components/evaluation'
import Request from './../../../../helpers/request.js'
import LineLink from './../../../../components/lineLink'


class Contain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],         // 标签
            comments: [],        //评论
            current: ''     //当前选中的标签    
        }
    }
    filterComponent = () => {
        // console.log(this.state.comments,this.state.current)
        return this.state.comments.filter(item => {
            // console.log(item.tag === this.state.current)
            return item.tag === this.state.current
        })
    }
    componentDidMount = () => {
        this.getData()
    }
    changeLabel = (value) => {
        if (value !== this.state.current) {
            this.setState({
                current: value
            })
        }
    }
    changeZan = (value) => {
        // console.log(value)
        // console.log(this.state.comments)
        this.setState((prevState) => {
            return {
                comments: prevState.comments.map(item => {
                    if (item.id === value) {
                        // console.log(item)
                        return {
                            ...item,
                            isZan: !item.isZan,
                            zan: item.isZan ? --item.zan : ++item.zan
                        }
                    } else {
                        return { ...item }        //如果不处理他，返回的是undefined
                    }

                })
            }
        })
        // this.setState((prevState)=>({
        //     comments:prevState.comments.map(item =>{
        //         if(item.id === value){
        //             return {
        //                 ...item,
        //                 isZan : !item.isZan,
        //                 zan:item.isZan? --item.zan : ++ item.zan
        //             }
        //         }else{
        //             return {...item}
        //         }
        //     })
        // }))
    }
    getData = async () => {
        const { tags, list } = await Request('/comment')
        // console.log(tags)
        this.setState({
            tags,
            comments: list,
            current: tags[0] ? tags[0].text : '',
        })
    }
    render() {
        const { tags, comments, current } = this.state
        // const filteredComponent = comments.filter(item => item.tag === current)
        // console.log(filteredComponent)
        const filteredComponent = this.filterComponent()
        // console.log(tags,comments,current,filteredComponent,filteredComponent)
        return (
            <div className="containWrapper">
                <div className="containScore">
                    <div className="scoreTop">
                        <div className="left">观众热评</div>
                        <div className="right">写影评</div>
                    </div>
                    <div className="scoreMiddle">
                        <div className="middleScore">
                            <div className="top">9.3</div>
                            <div className="bottom">280,441人评价<span className="triangle CD"></span></div>
                        </div>
                        <div className="middleStar">
                            <div className="star">
                                <Star number={10} size={8} />
                                <div className="numberBottom">
                                    <div className="numberTop" style={{ width: `100%` }}></div>
                                </div>
                            </div>
                            <div className="star">
                                <Star number={8} size={8} />
                                <div className="numberBottom">
                                    <div className="numberTop" style={{ width: `80%` }}></div>
                                </div>
                            </div>
                            <div className="star">
                                <Star number={6} size={8} />
                                <div className="numberBottom">
                                    <div className="numberTop" style={{ width: `40%` }}></div>
                                </div>
                            </div>
                            <div className="star">
                                <Star number={4} size={8} />
                                <div className="numberBottom">
                                    <div className="numberTop" style={{ width: `80%` }}></div>
                                </div>
                            </div>
                            <div className="star">
                                <Star number={2} size={8} />
                                <div className="numberBottom">
                                    <div className="numberTop" style={{ width: `60%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containEvaluation">
                    <div className="label">
                        <EvaluationLabel data={tags} current={current} onClick={this.changeLabel} />
                    </div>
                    <div className="EvaluationWrapper">
                        <Evaluation data={filteredComponent} current={current} onClick={this.changeZan} />
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Contain;