import {createStore, combineReducers} from "redux";


export const allReducers = combineReducers({

})  

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store