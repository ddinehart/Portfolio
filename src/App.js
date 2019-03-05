import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg';

// class RegularClass {}
//
// class ComponentClass extends Component {}
//
// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
  state = {displayBio: false};

  toggleDisplayBio = () => {
    this.setState ({ displayBio: !this.state.displayBio});
  }

// constructor() {
//   super();
//   this.state = {displayBio: false};
//
//   console.log('Component this', this);
//
//   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
// }

// readMore() {
//   console.log('readMore this', this);
//   this.setState({displayBio: true });
//
// }

// toggleDisplayBio () => {
//   this.setState({displayBio: !this.state.displayBio});
// }

  render() {
    return (
      <div>
      <img src={profile} alt='profile' className='profile' />
        <h1> Dylan Dinehart's Portfolio</h1>
        <p>My name is Dylan. I'm a senior student at Dixie State University</p>
        <p>I'm always looking forward to learning and working hard.</p>
        {
          this.state.displayBio ? (
          <div>
            <p>I love my family. I love programming. </p>
            <p>I love the outdoors</p>
            <button onClick={this.toggleDisplayBio}>show less</button>
          </div>
        ) : (
          <div>
            <button onClick ={this.toggleDisplayBio}> read more</button>
          </div>
        )
      }
      <hr />
      <Projects />
      <hr />
      <SocialProfiles />
      </div>
    )
  }
}

export default App;
