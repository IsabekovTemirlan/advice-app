import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = { advice: '' }  

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({advice})
      })
      .catch((error) => {
        console.log(error);
      });
  }

 render() {
   return (
     <div className="app">
       <div className="card">
         <div className="advice">
           {this.state.advice}
         </div>
         <button className="adviceButton"  onClick={this.fetchAdvice} >Give me advice</button>
       </div>
       
       
     </div>
   )
 }
}

export default App;