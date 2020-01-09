import React, {Component} from 'react';

export default class Header extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Text from Element</div>)
    return (<div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    </div>)
    }
}