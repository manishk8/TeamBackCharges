import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Backcharges from '../src/modules/backcharges/backcharges';
import Header from '../src/modules/header/header';
import Navbar from '../src/modules/navbar/navbar';
import Adminstration from './modules/adminstration/adminstration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
      iconChange: true
    }
  }

  openSideNav = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
    console.log("menuOpen", this.state.menuOpen)
  }

  hideSideNav = () => {

  }

  iconChangeClick = () => {
    this.setState({ iconChange: !this.state.iconChange })
  }

  render() {
    window.$ = window.jQuery = require('jquery')
    return (
      <BrowserRouter>
        <div className="layout" >
          <Header openSideNav={this.openSideNav} />
          <div className="content">
            <Navbar hideSideNav={this.hideSideNav} iconChangeClick={this.iconChangeClick} iconChange={this.state.iconChange} menuOpen={this.state.menuOpen} />
            <div className="wrapper">
              <Route exact path="/" component={Adminstration} />
              <Route exact path="/adminstration" component={Adminstration} />
              {/* <Route exact path="/" component={Activities} /> */}
              {/* <Route exact path="/" component={Messages} /> */}
              {/* <Route exact path="/" component={adminstration} /> */}
              <Route exact path="/backcharges" component={Backcharges} />
              {/* <Route exact path="/" component={Remittance} /> */}
              {/* <Route exact path="/" component={FPORequests} /> */}
              {/* <Route exact path="/" component={BidRequests} /> */}
            </div>
          </div>
        </div>
      </BrowserRouter >
    )
  }
}
export default App;
