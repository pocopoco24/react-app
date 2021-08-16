// 名前をつけてdefaultでexportしなければ{}でimportする
import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 };

// reducerは関数として定義、引数は２個
export default (state = initialState, action) => {
    // increment & decrement
    // 初期起動時はinitialState
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 };
        case DECREMENT:
            return { value: state.value - 1 };
        default:
            return state;
    }
}