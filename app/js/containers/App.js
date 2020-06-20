import React,{useState,useEffect} from 'react';
import EnterScreen from '../EnterScreen';
import Game from '../Game';

const App = () => {
    const [gameScreen,setGameScreen]=useState(false);

    let musicBackground = new Audio('../../assets/sounds/background/tobias_weber_-_Tracing_My_Steps_1.mp3');
    musicBackground.volume=0.4;

    const musicOff = () => {
        console.log('OFF')
        console.log(musicBackground)
        musicBackground = null;
    };
    
    const musicOn = () => {
        console.log('ON')
        musicBackground.play()
    };
    useEffect( () => {       
        musicOn()
    },[])

    const handleScreen = () => {
        setGameScreen(gameScreen ? false : true)
    };

    if (gameScreen===false){
        return <EnterScreen changeScreen={handleScreen}/>
    } else {
        return <Game musicOff={musicOff}/>
    };
};

export default App;

// import React,{Component} from 'react';
// import EnterScreen from '../EnterScreen';
// import Game from '../Game';

// class App extends Component{
//     state={
//         gameScreen:false,     
//     }
    

//     isPlay = () => {
        
//         musicBackground = new Audio('../../assets/sounds/tobias_weber_-_Tracing_My_Steps_1.mp3');
//         musicBackground.volume=0.5;
//     };

//     musicOff = () => {
//         console.log('off music')
//         musicBackground.pause()
//     };

//     musicStart = () => {
//         console.log('on music')
//         musicBackground.play()
//     };

//     componentDidMount(){      
//         this.isPlay();
//         this.musicOff();
//         //this.isPlay();
//     };

//     componentWillUnmount(){
//         this.musicOff();
//     };

//     handleScreen = () => {
//         this.setState({gameScreen: this.state.gameScreen ? false : true})
//     };

//     render(){
//         if (this.state.gameScreen===false){
//             return <div className='enterScreen'><EnterScreen changeScreen={this.handleScreen} /></div>
//         } else {
//             return <Game/>
//         };
//     }
// }  

// export default App;
