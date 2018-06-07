import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/Counter.actions';
import {increment,decrement} from '../actions/Counter.actions';

const AddCounter = (props) => {
	console.log(props,"props")
  return (
    <div>
    	{props.plus && <h1>plus kliknięto:{props.plus.countEl}</h1>}
    	{props.minus && <h1>plus kliknięto:{props.minus.countEl}</h1>}
    </div>
  );
}

function mapStateToProps(state,ownProps={plus:0,minus:0}) {
    console.log(state,ownProps,"STATEXYZ")
    return {
      plus:state.plus,
      minus:state.minus
    }
}

const mapDispatchToProps = {...actions}

export default connect(mapStateToProps, mapDispatchToProps)(AddCounter);
