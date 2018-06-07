import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/Counter.actions';
import {increment,decrement} from '../actions/Counter.actions';
import AddCounter from './addCounter'
import ResetCounter from './resetCounter'

const Counter = React.createClass({
    displayName: 'Counter',
    render() {
        const { increment, decrement ,dupa , count , reset} = this.props;
        return (
            <div>
                Current counter value DUPA2: {count}
                <div><button className="plus" onClick={(e) => increment(e)}>Increment</button></div>
                <div><button className ="minus" onClick={(e) => decrement(e)}>Decrement</button></div>
                <AddCounter/>
                <ResetCounter reset={reset}/>
            </div>
        );
    }
});

function mapStateToProps(state) {
    console.log(state,"STATE")
    return {
      count:state.counter
    }
}
/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}
*/

/*
function mapDispatchToProps(dispatch) {
  return {
    increment: bindActionCreators(increment, dispatch),
    dupa: bindActionCreators(decrement, dispatch)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    dupa: () => dispatch({ type: 'DECREMENT' })
  }
}
*/

//const mapDispatchToProps = {increment,decrement}
const mapDispatchToProps = {...actions}
console.log(mapDispatchToProps,"!!!mapDispatch")
console.log(actions,"!!!actions")

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
