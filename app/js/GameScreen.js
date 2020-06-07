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

    //destrukturyzacja event.target na img. 
    onImgLoad = ({target:img}) => {       
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});
    };

    render() {
        const { move } = this.state;

        //Array with all bandits positions:
        const bandits = [{left:350,top:530, visible:true},{left:580,top:530, visible:true},{left:995,top:565, visible:true},{left:1282,top:530, visible:true},{left:1447,top:545, visible:true},{left:1578,top:530, visible:true},{left:1705,top:545, visible:true},{left:1990,top:535, visible:true},{left:2115,top:535, visible:true},{left:2575,top:535, visible:true},{left:2696,top:535, visible:true},{left:3105,top:535, visible:true},{left:3337,top:535, visible:true},{left:3548,top:535, visible:true},{left:3801,top:535, visible:true},{left:4063,top:535, visible:true},{left:4245,top:535, visible:true},{left:4430,top:535, visible:true},{left:4580,top:520, visible:true},{left:4702,top:520, visible:true},{left:4938,top:520, visible:true},{left:300,top:320, visible:true},{left:464,top:210, visible:true},{left:635,top:315, visible:true},{left:831,top:330, visible:true},{left:940,top:330, visible:true},{left:1050,top:330, visible:true},{left:794,top:210, visible:true},{left:940,top:130, visible:true},{left:1092,top:210, visible:true},{left:1427,top:330, visible:true},{left:1525,top:330, visible:true},{left:1621,top:330, visible:true},{left:1718,top:330, visible:true},{left:1400,top:100, visible:true},{left:1570,top:10, visible:true},{left:1730,top:100, visible:true},{left:1968,top:330, visible:true},{left:2095,top:330, visible:true},{left:2220,top:330, visible:true},{left:2345,top:330, visible:true},{left:2468,top:330, visible:true},{left:2594,top:330, visible:true},{left:2719,top:330, visible:true},{left:2015,top:8, visible:true},{left:2684,top:8, visible:true},{left:3098,top:315, visible:true},{left:3218,top:315, visible:true},{left:3339,top:315, visible:true},{left:3066,top:115, visible:true},{left:3215,top:40, visible:true},{left:3368,top:115, visible:true},{left:3545,top:315, visible:true},{left:3675,top:315, visible:true},{left:3805,top:315, visible:true},{left:3497,top:141, visible:true},{left:3673,top:70, visible:true},{left:3850,top:143, visible:true},{left:4234,top:76, visible:true},{left:4652,top:292, visible:true},{left:4819,top:238, visible:true},{left:4984,top:291, visible:true}];
        //--end--

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
                    {bandits.map( (element,index) => {
                        return <Bandit key={index} left={element.left} top={element.top} visible={element.visible}/>
                    })}
                </div>
            </div>
        );
    };
};

export default GameScreen;