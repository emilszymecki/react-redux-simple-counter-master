import * as types from '../constants/counter.const';

export function increment(e) {
    return {
        type: types.INCREMENT,
        target:e.target.className
    }
}

export function decrement(e) {
    return {
        type: types.DECREMENT,
        target:e.target.className
    }
}

export function reset(e) {
    return {
        type: types.RESET
    }
}
