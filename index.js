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
  constructor(props){
    super(props);
    this.state={
    name:'san',
  }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    this.setState({name:'santosh'});
  }
  render(){
    return(
      <div>
      <h3>{this.props.name}</h3>
      <Signup username={this.state.name}/>
      <button onClick={this.handleClick}>click</button>
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
