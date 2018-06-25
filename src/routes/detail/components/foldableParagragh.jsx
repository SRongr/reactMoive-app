import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './foldableParagragh.css'
import ReactDOM from 'react-dom'


/**
 * 伸缩介绍组件
 *  此组件当一个标签 内容在父组件中填写
 * 设置组件的默认缩小的高度 static defaultProps
 */
class FoldableParagragh extends Component {
    state = {
        isFoldable : false,
        isNeedFoldable : false  
    }
    static defaultProps = {
        height: 85
    }
    componentDidMount = () =>{
        const dom = ReactDOM.findDOMNode(this); //只能填this   不填或者填this.props都报错
        const value = this.props.height
        if(dom.clientHeight > value){
            this.setState({
                isNeedFoldable : true,
                isFoldable:true,
            })
        }
    }
    changeFlodableParagragh = ()=>{
        if(this.state.isNeedFoldable){
            this.setState((prevState) =>({
                isFoldable :  !prevState.isFoldable,  
            }))
        }
    }
    render(){
        const fold = this.state.isFoldable
        return (
            <div className="foldbleParagragh">
                <div className={`Summarybottom ${fold}`} onClick = {this.changeFlodableParagragh}>
                    {this.props.children}
                    {/* <div className="bottomContent">想看想看想看想看想看想看想看 想看想看 想看 想 看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看想看看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过看过</div> */}
                    {this.state.isNeedFoldable && <div className="moreOrLess">展开</div>}
                </div>
            </div>
        )
    }
}
FoldableParagragh.propTypes = {
    children : PropTypes.any,
    height: PropTypes.number,
}

export default FoldableParagragh;