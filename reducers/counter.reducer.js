import * as types from '../constants/counter.const';

const initVal = {counter:0}
const expandInit = {countEl:0}
function expandStore(state = expandInit,action){
	switch(action.type){
		case types.INCREMENT:
            return {...state,countEl:state.countEl+1};
        case types.DECREMENT:
            return {...state,countEl:state.countEl+1};
	}
	return state
}

export default function CounterApp(state = initVal, action) {
	console.log(action,"action")
    switch(action.type) {
        case types.INCREMENT:
            //return {...state,counter:state.counter+1,[action.target]:state[action.target]+ 1||0};
            return {...state,counter:state.counter+1,[action.target]:expandStore(state[action.target],action)};
        case types.DECREMENT:
            return {...state,counter:state.counter+1,[action.target]:expandStore(state[action.target],action)};
        case types.RESET:
            return {...state,counter:0};
    }
    return state;
}
