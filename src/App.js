import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from '.screens/Home/Home';
import About from './screens/About/About';
import Profile from './screens/Profile/Profile';
import Contact from 'screens/Contact/Contact';

class App extends Component {

  state = {
    screenName: "Home"
  }

  updateScreenName = (value) => { 
    this.setState({screenName: value})
  }

  render() {
    const {screenName} = this.state;

    return (
      <div className="App">
        <Header changeScreen={this.updateScreenName}
        currentScreen={screenName} />
          {screenName === "Home" && <Home />}
          {screenName === "About" && <About />}
          {screenName === "Profile" && <Profile />}
          {screenName === "Contact" && <Contact />}
        <Footer />
      </div>
    )
  }
}

export default App;
