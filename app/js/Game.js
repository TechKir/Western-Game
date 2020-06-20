import React, {Component} from 'react';
import GameScreen from '../js/GameScreen';
import Win from '../js/Win'
import GameOver from '../js/GameOver';

class Game extends Component {
    state= {
        life: 1,
        kills:0,
        bandits:[{left:18.2+'vw',top:56+'vh', visible:false},{left:30.7+'vw',top:56+'vh', visible:false},{left:52.8+'vw',top:60+'vh', visible:false},{left:68+'vw',top:56+'vh', visible:false},{left:76.5+'vw',top:58+'vh', visible:false},{left:83.5+'vw',top:56+'vh', visible:false},{left:90.3+'vw',top:58+'vh', visible:false},{left:105.3+'vw',top:57+'vh', visible:false},{left:111.8+'vw',top:57+'vh', visible:false},{left:136.2+'vw',top:57+'vh', visible:false},{left:142.6+'vw',top:57+'vh', visible:false},{left:164.3+'vw',top:57+'vh', visible:false},{left:176.6+'vw',top:57+'vh', visible:false},{left:187.8+'vw',top:57+'vh', visible:false},{left:201.2+'vw',top:57+'vh', visible:false},{left:215+'vw',top:57+'vh', visible:false},{left:234.4+'vw',top:57+'vh', visible:false},{left:242.3+'vw',top:57+'vh', visible:false},{left:248.8+'vw',top:55+'vh', visible:false},{left:255+'vw',top:55+'vh', visible:false},{left:261.3+'vw',top:55+'vh', visible:false},{left:16+'vw',top:34+'vh', visible:false},{left:24.7+'vw',top:22+'vh', visible:false},{left:34+'vw',top:33+'vh', visible:false},{left:44+'vw',top:35+'vh', visible:false},{left:49.8+'vw',top:35+'vh', visible:false},{left:55.6+'vw',top:35+'vh', visible:false},{left:42+'vw',top:22+'vh', visible:false},{left:50+'vw',top:14+'vh', visible:false},{left:58+'vw',top:22+'vh', visible:false},{left:75.6+'vw',top:35+'vh', visible:false},{left:80.7+'vw',top:35+'vh', visible:false},{left:85.8+'vw',top:35+'vh', visible:false},{left:91+'vw',top:35+'vh', visible:false},{left:75+'vw',top:10 +'vh', visible:false},{left:83.2+'vw',top:1+'vh', visible:false},{left:92+'vw',top:10+'vh', visible:false},{left:104.2+'vw',top:35+'vh', visible:false},{left:111+'vw',top:35+'vh', visible:false},{left:117.5+'vw',top:35+'vh', visible:false},{left:124.1+'vw',top:35+'vh', visible:false},{left:130.7+'vw',top:35+'vh', visible:false},{left:137.3+'vw',top:35+'vh', visible:false},{left:144+'vw',top:35+'vh', visible:false},{left:107+'vw',top:0.8+'vh', visible:false},{left:142+'vw',top:0.8+'vh', visible:false},{left:164+'vw',top:33+'vh', visible:false},{left:170.5+'vw',top:33+'vh', visible:false},{left:176.7+'vw',top:33+'vh', visible:false},{left:162+'vw',top:12+'vh', visible:false},{left:170.5+'vw',top:4+'vh', visible:false},{left:179+'vw',top:12+'vh', visible:false},{left:187.5+'vw',top:33+'vh', visible:false},{left:194.5+'vw',top:33+'vh', visible:false},{left:201.3+'vw',top:33+'vh', visible:false},{left:185+'vw',top:15+'vh', visible:false},{left:194.5+'vw',top:4+'vh', visible:false},{left:204+'vw',top:15+'vh', visible:false},{left:224.4+'vw',top:6+'vh', visible:false},{left:214+'vw',top:31+'vh', visible:false},{left:235+'vw',top:31+'vh', visible:false},{left:246+'vw',top:30+'vh', visible:false},{left:255+'vw',top:24+'vh', visible:false},{left:263.5+'vw',top:30+'vh', visible:false}]
    } 

    // //This function change boolean 'visible' property on a random bandit:
    showBandit = () => {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomNumber=getRandomIntInclusive(0,this.state.bandits.length-1)
        this.setState(prevState => {
            prevState.bandits[randomNumber].visible='true'
            return [...prevState]
        })
    };

    componentDidMount() {
        this.mainInterval=setInterval( () => {
            this.showBandit();
            const creakWindow = new Audio('../../assets/sounds/bandit.shot/reload.mp3');
            creakWindow.play();

            this.deathInterval= setTimeout( () => {
                const shot = new Audio('../../assets/sounds/bandit.shot/shot1.mp3');
                shot.play();
                this.setState(prevState => {
                    return {
                        life:prevState.life-1
                    }
                });             
            },5000)
        },3000)
    };

    componentWillUnmount(){
        clearInterval(this.mainInterval);
        clearTimeout(this.deathInterval);
    };

    componentDidUpdate() {
        if(this.state.kills==50 && this.state.life>0){
            // this.props.setGameStatusHandler(2);
        }
        if(this.state.life === 0 ){
            this.props.setGameStatusHandler(2);
        }
    }

    handleClick = banditIndex => {
        clearTimeout(this.deathInterval);
        this.setState(prevState => {
            return {
                kills:prevState.kills+1
            }
        });   

        return this.setState(prevState => {
            prevState.bandits[banditIndex].visible=false
            return [...prevState]        
        })
    };

    render() {        
        return <GameScreen bandits={this.state.bandits} life={this.state.life} kills={this.state.kills} handleClick={this.handleClick}/>        
    }
}

export default Game;
