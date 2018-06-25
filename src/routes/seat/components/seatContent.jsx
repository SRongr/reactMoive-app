// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './seatContent.css'
import { connect } from 'react-redux'       //连接组件和 action
import { addSeat , removeSeat} from './../actions'         //引入action 相应的reducers 的方法
// import data from './../mock/seat.json'   //需要的值是data.data
import { data } from './../mock/seat.json'    //直接是取data
// 初始化画布信息
const SEAT_HEIGHT = 50
const SEAT_WIDTH = 50
const ratio = window.devicePixelRatio
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio
// console.log(data)
// console.log(data)
// const BSC = data.sort(function(a,b){
//    return b.colIndex -a.colIndex
// })
// const BSR = data.sort(function(a,b){
//     return b.rowIndex - a.rowIndex
// })
// console.log(data)
// console.log(BSC === BSR)   //true
// // console.log
// console.log(data[25].rowIndex)
const CANVAS_WIDTH = data[data.length - 1].colIndex * SEAT_WIDTH
const CANVAS_HEIGHT = data[data.length - 1].rowIndex * SEAT_HEIGHT
const DRAW_CANVAS_WIDTH = data[data.length - 1].colIndex * DRAW_SEAT_WIDTH
const DRAW_CANVAS_HEIGHT = data[data.length - 1].rowIndex * DRAW_SEAT_HEIGHT

class SeatContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        // console.log(this.refs.canvas)
        this.ctx = this.refs.canvas.getContext('2d');
        this.ctx.font = `${11*ratio}px Arial`         //初始化canvas字体大小
        this.ctx.fillStyle = `#fff`             //初始化canvas填充字体颜色
        this.ctx.strokeStyle = `#fff`           //初始化canvas描边字体颜色
        this.ctx.textAlign = `center`           //初始化canvas字体位置
        let count = 0;
        const loadCallBack = () => {
            count++
            // console.log(count)
            // console.log(this)
            if (count === 3) {        //当所有图片加载完成之后   吧图片挂在this 组件上
                this.emptyImage = emptyImage;
                this.selectImage = selectImage;
                this.soldImage = soldImage
                this.drawAllSeat()         //当所有的图片都加载好了 并且挂到了this 上  我们开始绘制
            }

        }
        const emptyImage = new Image();
        const selectImage = new Image();
        const soldImage = new Image();

        emptyImage.src = '/source/seat-empty.png'
        selectImage.src = '/source/seat-selected.png'
        soldImage.src = '/source/seat-sold.png'

        emptyImage.onload = loadCallBack        //每个图片加载完成之后调用loadcb函数，
        selectImage.onload = loadCallBack
        soldImage.onload = loadCallBack
    }
    componentDidUpdate = () => {
        this.ctx.clearRect(0, 0, DRAW_CANVAS_WIDTH, DRAW_CANVAS_HEIGHT)   //初始化画布
        this.drawAllSeat()              //画初始data 的画布
        this.drawSelectSeat()           //画已经选择的座位

    }
    
    drawSelectSeat = () => {
        console.log(1)
        const { seatSelect } = this.props;
        for (let i = 0; i < seatSelect.length; i++) {
            const { xPos, yPos, isSold , colIndex , rowIndex } = seatSelect[i];
            const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
            const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
            this.ctx.drawImage(this.selectImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT)      //绘制图画
            this.ctx.fillText(`${colIndex}排`,offsetLeft + DRAW_SEAT_WIDTH/2,offsetTop+DRAW_SEAT_HEIGHT/2.5)      //绘制填充文字
            this.ctx.strokeText(`${rowIndex}座`,offsetLeft +DRAW_SEAT_WIDTH/2,offsetTop+DRAW_SEAT_HEIGHT/3*2)    //绘制描边文字
            
        }
    }
    drawAllSeat = () => {        //绘制函数
        const seatData = data
        for (let i = 0; i < seatData.length; i++) {
            const { xPos, yPos, isSold } = seatData[i];
            const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
            const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
            if (isSold) {
                this.ctx.drawImage(this.soldImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT)
            } else {
                this.ctx.drawImage(this.emptyImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT)
            }
        }
    }
    // changeSeat = ()=>{
    //     if()
    // }
    seatClick = (e) => {
        // console.log(this.refs.canvas.getBoundingClientRect())
        const offset = this.refs.canvas.getBoundingClientRect()
        const pageX = e.pageX
        const pageY = e.pageY
        const absoluteX = pageX - offset.left;
        const absoluteY = pageY - offset.top
        const leftCompany = Math.ceil(absoluteX / SEAT_WIDTH)
        const topCompany = Math.ceil(absoluteY / SEAT_HEIGHT)
        // console.log(leftCompany,topCompany)
        const seat = data.find(item => item.colIndex === leftCompany && item.rowIndex === topCompany)
        //如果没有这个座位（不规则电影院的空，）或者已售
        // console.log(seat)
        // console.log(this.props.seatSelect)
        if (!seat || seat.isSold) {
            // console.log(1231)
            return
        }
        //如果已经选择 取消选择  如果没有选择  选择，如果选择了大于4个 alert 不能再选
        if (this.props.seatSelect.findIndex(item => seat === item) > -1) {
            // console.log(123)
            this.props.removeSeat(seat)
        } else {
            console.log(this.props.seatSelect.length)
            if (this.props.seatSelect.length >= 4) {
                alert('最多购买4个电影票')
            } else {
                // console.log(4856)
                this.props.addSeat(seat)
            }
        }
    }
    render() {
        const { xPos, yPos, isSold } = data

        return (
            <canvas onClick={this.seatClick} style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} ref="canvas" width={`${DRAW_CANVAS_WIDTH}px`} height={DRAW_CANVAS_HEIGHT}></canvas>  //绘制区域的大小我们需要计算得到
            //                500                       300                                         1000                600
            //          把1000*600 的画布放在 500 * 300 的相框下 肯定就变得更清晰了
        )
    }
}

// SeatContent.propTypes = {
//     seatSelect: PropTypes.array.isRequired,
//     addSeat: PropTypes.func.isRequired,
//     removeSeat: PropTypes.func.isRequired,
// }

const mapStateToProps = state =>{
    return {
        seatSelect:state,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addSeat: seat =>{
            dispatch(addSeat(seat))
        },
        removeSeat : seat =>{
            dispatch(removeSeat(seat))
        }
    }
} 
// export default SeatContent
export default connect(mapStateToProps,mapDispatchToProps)(SeatContent);