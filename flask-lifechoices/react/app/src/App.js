import './App.css';
import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from "react-mdl"
import {Link} from "react-router-dom";
import Main from './components/main';

class App extends React.Component{
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link>} scroll> 
          <Navigation>
            <Link to = "/about">About</Link>
           


          </Navigation>

          </Header>
        </Layout>
        
      </div>
    );
  }

}


// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Navbar>
          

//         </Navbar>
//       </div>
//     )
//   }
// }

   

export default App;
