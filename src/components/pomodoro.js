import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';


class Pomodoro extends React.Component{
    componentWillMount(){
        const script = document.createElement("script");
        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
        document.body.appendChild(script);

    }
    componentWillUnmount(){
        console.log('sup');
    }
    render(){
       

        const x = this.props.store.min + ':'+this.props.store.sec;
        return(
            <div className='App'>
                <div className='wrapper'>
                    <div className='pomodoro'>
                        <div className='title'>
                            <h1>Pomodoro Clock</h1>
                        </div>
                        <hr/>
                        <div className='session'>
                            <div className='sess label label-session' id='timer-label'>Session</div>
                            <div className='sess timer' id='time-left'>{x}</div>
                        </div>
                        <hr/>
                        <div className='controls'>
                            <button onClick={this.props.actions.handleClick} className='btn btn-control start_stop' id='start_stop'>
                                <i className='fas fa-2x fa-play'></i>
                                <i className='fas fa-2x fa-pause'></i>
                            </button>
                            <button onClick={this.props.actions.handleClick} className='btn btn-control reset' id='reset'>
                                <i className='fas fa-2x fa-redo-alt'></i>
                            </button>
                        </div>
                        <hr/>
                        <div className='settings'>
                            <div className='setting break-setting'>
                                <div className='label label-break-length' id='break-label'>Break Length</div>
                                <div className='break-panel'>
                                    <button onClick={this.props.actions.handleClick} className='btn btn-break inc ' id='break-increment'>
                                        <i className='fas fa-4x fa-caret-up'></i>
                                    </button>
                                    <p className='break-value value' id='break-length'>{this.props.store.breakLength}</p>
                                    <button onClick={this.props.actions.handleClick} className='btn btn-break dec' id='break-decrement'>
                                        <i className='fas fa-4x fa-caret-down'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='setting vl'></div>
                            <div className='setting session-setting'>
                                <div className='label label-session-length' id='session-label'>Session Length</div>
                                <div className='session-panel'>
                                    <button onClick={this.props.actions.handleClick} className='btn btn-session inc' id='session-increment'>
                                        <i className='fas fa-4x fa-caret-up'></i>
                                    </button>
                                    <p className='session-value value' id='session-length'>{this.props.store.sessionLength}</p>
                                    <button onClick={this.props.actions.handleClick} className = 'btn btn-session dec' id = 'session-decrement'>
                                        <i className='fas fa-4x fa-caret-down'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='info'>
                            <p>Coded by <a target="blank"href='https://www.github.com/TotallyCurious/'>TotallyCurious</a></p>
                        </div>
                        <div className='audio-container'>
                            <audio controls className='audio' id='beep'>
                                <source src="" type=""></source>
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {store:state.reducer};
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(actions,dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);