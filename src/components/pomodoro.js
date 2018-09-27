import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';


export default class Pomodoro extends React.Component{
    componentWillMount(){
        console.log('cwm');
    }
    render(){
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
                            <div className='sess timer' id='time-left'>00:00</div>
                        </div>
                        <hr/>
                        <div className='controls'>
                            <button className='btn btn-control start_stop' id='start_stop'>
                                <i className='fas fa-2x fa-play'></i>
                                <i className='fas fa-2x fa-pause'></i>
                            </button>
                            <button className='btn btn-control reset' id='reset'>
                                <i className='fas fa-2x fa-redo-alt'></i>
                            </button>
                        </div>
                        <hr/>
                        <div className='settings'>
                            <div className='setting break-setting'>
                                <div className='label label-break-length' id='break-label'>Break Length</div>
                                <div className='break-panel'>
                                    <button className='btn btn-break inc ' id='break-increment'>
                                        <i className='fas fa-4x fa-caret-up'></i>
                                    </button>
                                    <p className='break-value value' id='break-length'>5</p>
                                    <button className='btn btn-break dec' id='break-decrement'>
                                        <i className='fas fa-4x fa-caret-down'></i>
                                    </button>
                                </div>
                            </div>
                            <div class='setting vl'></div>
                            <div className='setting session-setting'>
                                <div className='label label-session-length' id='session-label'>Session Length</div>
                                <div className='session-panel'>
                                    <button className='btn btn-session inc' id='session-increment'>
                                        <i className='fas fa-4x fa-caret-up'></i>
                                    </button>
                                    <p className='session-value value' id='session-length'>25</p>
                                    <button className = 'btn btn-session dec' id = 'session-decrement'>
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

