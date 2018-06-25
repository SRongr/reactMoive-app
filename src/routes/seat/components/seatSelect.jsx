// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';      //可以理解为 通过connect 方法 把 组件 和action 进行一个绑定
import { removeSeat} from './../actions'  //这里只用到了removetSeat  所以我们只引入一个removeSeat
import './seatSelect.css'
const SeatSelect = ({ seatSelect ,removeSeat }) => {     //这里就不用传参 了
    const { colIndex, rowIndex } = seatSelect
// const SeatSelect = () => {
    // const { colIndex, rowIndex } = seatSelect
    return (
        <div className="seatSelect">
            <ul className="selectInfo">
                {
                    seatSelect.map(item => {
                        return (
                            <li className="selectItem" key={item.id}>
                                <div className="itemInfo">
                                    <div className="borderCircular"></div>

                                    <div className="infoTop">{`${item.colIndex}排${item.rowIndex}座`}</div>
                                    <div className="infoMoneyWrapper">
                                        <div className="moneyCar">卡</div>
                                        <div className="money">33元</div>
                                    </div>
                                </div>
                                <div className="itemClose" onClick = {()=>{removeSeat(item)}}></div>
                            </li>
                        )
                    })
                }
            </ul>
            {seatSelect[0] && <div className="confirmSelect">
                <div className="confirmTop">{`${33 * seatSelect.length}`}元 确认选座</div>
                <div className="confirmReduce">下单时城市卡可减4元</div>
            </div>}
        </div>
    )
}
// SeatSelect.propTypes = {        //以前的时候 通过这个把父组件的值传到子组件
//     removeSeat : PropTypes.func.isRequired,
//     seatSelect : PropTypes.array.isRequired,
// }
const mapStateToProps = state =>{       
    return {    
        seatSelect : state          //子组件接受到的seatSelect 就是 store 使用的state
    };
}
const mapDispatchToProps = dispatch =>{     //dispatch 派遣
    return {
        removeSeat : seat =>{           //子组件接受到的removeSeat   参数是seat
            dispatch(removeSeat(seat))      //是store 传过来的removeSeat(seat) 函数
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SeatSelect);