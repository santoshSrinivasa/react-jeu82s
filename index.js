import React, { Component } from 'react';
import { render } from 'react-dom';

function App(){
  return (<Login name="san"/>)
}
function Login(props){
  return ( <div>
    <Welcome name={props.name}/>
    </div>
    );
}
class Welcome extends React.Component
{
  render(){
    return(
      <div>
      <Signup username={this.props.name}/>
      </div>
    );
  }
}

class Signup extends React.Component
{
  render(){
    return(
      <div>
        <h3>{this.props.username}</h3>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
