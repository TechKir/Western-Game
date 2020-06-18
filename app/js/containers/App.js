import React,{useState,useEffect} from 'react';
import EnterScreen from '../EnterScreen';
import Game from '../Game';

const App = () => {
    const [gameScreen,setGameScreen]=useState(false);

    const handleScreen = () => {
        setGameScreen(gameScreen ? false : true)
    };
    
    if (gameScreen===false){
        return <div className='enterScreen'><EnterScreen changeScreen={handleScreen}/></div>
    } else {
        return <Game/>
    };
};

export default App;

// import React,{Component} from 'react';
// import EnterScreen from '../EnterScreen';
// import Game from '../Game';

// class App extends Component{
//     state={
//         gameScreen:false,
//         musicOn:true,        
//     }

    
//     isPlay = () => {
//         const musicBackground = new Audio('../../assets/sounds/tobias_weber_-_Tracing_My_Steps_1.mp3');
//         musicBackground.volume=0.5;
//         if(this.state.musicOn==true){           
//             console.log('on music')
//             musicBackground.play()
//         } else if(this.state.musicOn==false){
//             console.log('off music')
//             musicBackground.pause()
//         }
//     };

//     musicOff = () => {
//         this.setState({musicOn:false})
//     };

//     musicStart = () => {
//         this.setState({musicOn:true})
//     };

//     componentDidMount(){      
//         this.isPlay();
//         this.musicOff();
//         //this.isPlay();
//     };

//     componentDidUpdate(){
//         if (this.state.musicOn==false){
//             this.isPlay();
//         }
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
