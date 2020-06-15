import React from 'react';
import './App.css';
import store from './redux/store/index';
import {redux} from 'redux';
import { connect } from 'react-redux';
import { getUser, getSinger} from './redux/ActionCreator/Index';


const AppComponent = (props) => {
        return (
        <div className="App">
        <header className="App-header">
            <p> Redux Tutrials {props.users.name}</p>
            <button onClick = {() => props.getUser() }>Click Here</button>
            <p> Other Reducers Data About Best Singer</p>
            <button onClick = {() =>props.getSinger() }> Show Singers </button>
            {
              props.singers.length > 0 && 
                props.singers.map(singer => 
                  <p key = {singer.id}>{singer.name } </p>
                ) 
              } 
          
          </header>
        </div>
      );
  }
const mapDispatchToProps = (dispatch) => {
    return ({
      getUser : ()  => getUser(dispatch),
      getSinger : () => getSinger(dispatch)
    }
  )
}
const mapStateToProps = (state) => {
  return {
    users : state.users,
    singers : state.singers,
  }
}
const App =  connect(mapStateToProps,mapDispatchToProps)(AppComponent);


export default App;
