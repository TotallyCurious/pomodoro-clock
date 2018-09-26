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
                        <div className='session'>
                            <div className='label label-session' id='timer-label'>Session</div>
                            <div className='timer' id='time-left'>00:00</div>
                        </div>
                        <div className='controls'>
                            <div className='start_stop' id='start_stop'> >|| </div>
                            <div className='reset' id='reset'>R</div>
                        </div>
                        <div className='settings'>
                            <div className='break-setting'>
                                <div className='label label-break-length' id='break-label'>Break Length</div>
                                <div className='break-panel'>
                                    <button className='dec' id='break-decrement'>dec</button>
                                    <p className='break-value' id='break-length'>val</p>
                                    <button className='inc' id='break-increment'>inc</button>
                                </div>
                            </div>
                            <div className='session-setting'>
                                <div className='label label-session-length' id='session-label'>Session Length</div>
                                <div className='session-panel'>
                                    <button className='dec' id='session-decrement'>dec</button>
                                    <p className='session-value' id='session-length'>val</p>
                                    <button className='inc' id='session-increment'>inc</button>
                                </div>
                            </div>
                        </div>
                        <div className='info'></div>
                    </div>
                </div>
            </div>
        )
    }
}

