import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';


class Pomodoro extends React.Component{
    constructor(props){
        super(props);
        this.stopAudio = this.stopAudio.bind(this);
    }
    componentWillMount(){
        const script = document.createElement("script");
        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
        document.body.appendChild(script);

    }
    stopAudio(){
        this.props.actions.handleClick({currentTarget:{id:'reset'}});
        const z = document.getElementById('beep');
        z.pause();
        z.currentTime = 0;
    }
    
    render(){

        const x = this.props.store.min + ':'+this.props.store.sec;
        
        const y = document.getElementById('beep');
        if(this.props.store.min==0 && this.props.store.sec==0){
            y.play();
            setTimeout(() => {
                y.pause();
                y.currentTime=0;
            }, 2800);
        }
        return(
            <div className='App'>
                <div className='wrapper'>                        

                    <div className='pomodoro'>
                        <div className='title'>
                            <h1>Pomodoro Clock</h1>
                        </div>
                        <hr/>
                        <div className='session'>
                            <div className='sess label label-session' id='timer-label'>{this.props.store.session}</div>
                            <div className='sess timer' id='time-left'>{x}</div>
                        </div>
                        <hr/>
                <div className='palette'>
                    <div class='tile'id='blue'></div>
                    <div class='tile'id='green'></div>
                    <div class='tile'id='red'></div>
                </div>
                        <div className='controls'>
                            <button onClick={this.props.actions.handleClick} className='btn btn-control start_stop' id='start_stop'>
                                <i className='fas fa-2x fa-play'></i>
                                <i className='fas fa-2x fa-pause'></i>
                            </button>
                            <button onClick={this.stopAudio} className='btn btn-control reset' id='reset'>
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
                            <audio controls className='audio' id='beep' ref='beeper' preload='auto'>
                                <source src="https://res.cloudinary.com/totallycurious/video/upload/v1538629021/audio/pomodoro/Fire_pager-jason-1283464858.wav" type="audio/wav"></source>
                                <source src="https://res.cloudinary.com/totallycurious/video/upload/v1538629078/audio/pomodoro/Fire_pager-jason-1283464858mp3.mp3" type="audio/mp3"></source>
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