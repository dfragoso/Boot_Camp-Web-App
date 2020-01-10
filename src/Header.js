import React, {Component} from 'react';

export default class Header extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Text from Element</div>)
    return (<div class="topnav">
    <a class="active" href="/">Home</a>
    <a href="/presenters.html">Presenters</a>
    <a href="https://sites.google.com/ultimatesoftware.com/devgrow/programs/new-hire-cohorts/key-resources/schedule">Schedule</a>
    <a href="https://sites.google.com/ultimatesoftware.com/devgrow/programs/new-hire-cohorts/key-resources/environment-setup">Environment Setup</a>
    </div>)
    }
}