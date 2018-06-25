// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './seat.css'
import './../common.css'
import { Provider } from 'react-redux'          //引入包装盒 把那些页面 /组件 包装起来 用一个store
import { createStore } from 'redux'           //生成当前页面对应的store
import seatSelect from './reducers'        //引入deducers  
import SeatInfo from './components/seatInfo'
import SeatSelect from './components/seatSelect'
import SeatContent from './components/seatContent'

let store = createStore(seatSelect)  //通过引入的reducers 来 创建store
class Seat extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         seatSelect: [],
    //     }
    // }
    // addSeat = (seat) => {
    //     // console.log(this)
    //     this.setState((prevState) => ({
    //         seatSelect: [...prevState.seatSelect, seat]
    //     }))
    //     console.log(this.state.seatSelect)
    // }
    // removeSeat = (seat) => {
    //     console.log(this.state.seatSelect, seat)
    //     this.setState({
    //         seatSelect: this.state.seatSelect.filter(item => item !== seat)
    //     })
    //     console.log(this.state.seatSelect)
    // }
    render() {
        // const { seatSelect } = this.state;
        // console.log(seatSelect)
        return (
            //Provider 包装了什么  就决定了 多少东西用一个store
            <Provider store = {store}>   
                <div className="Seat">
                    <div className="seatTitle">
                        <div className="tOperator">
                            <div className="tOperator--blackBack" onClick = {()=>window.history.back()}></div>
                            <div>万达影城</div>
                            <div className="tOperator--blackShare"></div>
                        </div>
                    </div>
                    <div className="seatInfoHome">
                        <SeatInfo />
                    </div>
                    <div className="seatContentHome">
                        <div className="contentTip"></div>
                        <div className="contentCenter">
                            <div className="centerTop">B13银幕</div>
                            <div className="SeatContentHome">
                                {/* <SeatContent seatSelect={this.state.seatSelect} addSeat={this.addSeat} removeSeat={this.removeSeat} /> */}
                                
                                <SeatContent />
                            </div>

                        </div>

                    </div>
                    <div className="seatSelectHome">
                        {/* <SeatSelect seatSelect={this.state.seatSelect} removeSeat={this.removeSeat} /> */}      
                        {/* 使用redux 这里也不用传参数了 */}
                         
                        <SeatSelect />
                        
                    </div>
                </div>
            </Provider>

        )
    }
}

export default Seat;

