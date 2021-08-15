// 全reducerを一つに結束させるcombineReducers
import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({count})
// export default combineReducers({foo, bar, buz})