import React,{Component} from 'react';
import Bandit from './Bandit';
import image from '../../assets/img/town/town3.jpg';

class GameScreen extends Component {

    state = {
        move: 0,
        dimensions: {
           height: 0,
           width: 0 
        }
    };

    //functions below allow to move a screen(img) in different speed:
    onEnterR1 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ 
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +1}))
        }, 1)
    };

    onEnterR2 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ 
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +15}))
        }, 1)
    };

    onEnterR3 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ 
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +25}))
        }, 1)
    };

    onEnterL1 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=15 ? prevState.move : prevState.move -1
                })
            )
        }, 1)
    };

    onEnterL2 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=15 ? prevState.move : prevState.move -15
                })
            )
        }, 1)
    };

    onEnterL3 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=25 ? prevState.move : prevState.move -25
                })
            )
        }, 1)
    };

    onLeave = e => {
        clearInterval(this.interval)
    };
    //--end--//

    handlekillbandit = (e) => {
        console.log(e.screenX, e.screenY)
        console.log(this.state.dimensions.width)
    };

    //destrukturyzacja event.target na img. 
    onImgLoad = ({target:img}) => {       
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});
    };

    render() {
        const { move, dimensions } = this.state;
        return (
            <div class='gameContainer'  onClick={this.handlekillbandit}>
                {/* <Bandit/> */}
                <div className='intervalDiv' onMouseEnter={this.onEnterR3} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterR2} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterR1} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL3} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL2} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL1} onMouseLeave={this.onLeave} />
                <img onLoad={this.onImgLoad} className='gameImg' style={{right:move+'px'}}src={image} scrolling='no'/>
            </div>
        );
    };
};

export default GameScreen;