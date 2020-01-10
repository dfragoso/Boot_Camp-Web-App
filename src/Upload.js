import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';
import UploadForm from './UploadForm.js'
export default class Upload extends React.Component
{  

  constructor(props){  
super(props);  
this.state = { showPopup: false };  
}  

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 }  

  render() {  
return (  
<div>  
 
<Button variant="primary"className="button" size="lg" block onClick={this.togglePopup.bind(this)}>
  Presentation Upload
</Button>
{this.state.showPopup ?  
<UploadForm  
          text='File being uploaded:'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
</div>  

);  
}  
}  