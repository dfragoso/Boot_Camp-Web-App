import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      
    render() {
      return (
        <div className='popup'>  
        <div className='popup\_inner'>  
        <p>{this.props.text}</p>
        <form>
        <label>
            link to slides:
            <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>  
        <button onClick={this.props.closePopup}>Close</button>    
        </div>  
        
        </div> 
      );
    }
  }