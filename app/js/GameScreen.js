import React,{Component} from 'react';
import Bandit from './Bandit';
import image from '../../assets/img/town/town3.jpg';

class GameScreen extends Component {

    state = {
        move: 0,
        dimensions: {
           height: 0,
           width: 0 
        },
        bandits : [{left:350,top:530, visible:false},{left:580,top:530, visible:false},{left:995,top:565, visible:false},{left:1282,top:530, visible:false},{left:1447,top:545, visible:false},{left:1578,top:530, visible:false},{left:1705,top:545, visible:false},{left:1990,top:535, visible:false},{left:2115,top:535, visible:false},{left:2575,top:535, visible:false},{left:2696,top:535, visible:false},{left:3105,top:535, visible:false},{left:3337,top:535, visible:false},{left:3548,top:535, visible:false},{left:3801,top:535, visible:false},{left:4063,top:535, visible:false},{left:4245,top:535, visible:false},{left:4430,top:535, visible:false},{left:4580,top:520, visible:false},{left:4702,top:520, visible:false},{left:4938,top:520, visible:false},{left:300,top:320, visible:false},{left:464,top:210, visible:false},{left:635,top:315, visible:false},{left:831,top:330, visible:false},{left:940,top:330, visible:false},{left:1050,top:330, visible:false},{left:794,top:210, visible:false},{left:940,top:130, visible:false},{left:1092,top:210, visible:false},{left:1427,top:330, visible:false},{left:1525,top:330, visible:false},{left:1621,top:330, visible:false},{left:1718,top:330, visible:false},{left:1400,top:100, visible:false},{left:1570,top:10, visible:false},{left:1730,top:100, visible:false},{left:1968,top:330, visible:false},{left:2095,top:330, visible:false},{left:2220,top:330, visible:false},{left:2345,top:330, visible:false},{left:2468,top:330, visible:false},{left:2594,top:330, visible:false},{left:2719,top:330, visible:false},{left:2015,top:8, visible:false},{left:2684,top:8, visible:false},{left:3098,top:315, visible:false},{left:3218,top:315, visible:false},{left:3339,top:315, visible:false},{left:3066,top:115, visible:false},{left:3215,top:40, visible:false},{left:3368,top:115, visible:false},{left:3545,top:315, visible:false},{left:3675,top:315, visible:false},{left:3805,top:315, visible:false},{left:3497,top:141, visible:false},{left:3673,top:70, visible:false},{left:3850,top:143, visible:false},{left:4234,top:76, visible:false},{left:4652,top:292, visible:false},{left:4819,top:238, visible:false},{left:4984,top:291, visible:false}],
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

    //destrukturyzacja event.target na img. 
    onImgLoad = ({target:img}) => {       
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});
    };

    render() {
        const { move } = this.state;

        // this function change boolean 'visible' property on a random bandit:

        const showBandit = () => {
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            let randomNumber=getRandomIntInclusive(0,61)
            this.state.bandits[randomNumber].visible='true'
        }
        showBandit()

        return (
            <div class='gameContainer'>             
                <div className='intervalDiv' onMouseEnter={this.onEnterR3} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterR2} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterR1} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL3} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL2} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL1} onMouseLeave={this.onLeave} />
                <div className='gameImg' style={{right:move+'px'}}>
                    <img className='gameImg' onLoad={this.onImgLoad} src={image} scrolling='no'/>
                    {this.state.bandits.map( (element,index) => {
                        return <Bandit key={index} left={element.left} top={element.top} visible={element.visible}/>
                    })}
                </div>
            </div>
        );
    };
};

export default GameScreen;