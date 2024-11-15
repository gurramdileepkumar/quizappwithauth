import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const ReduxStore = createStore(rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


    export default ReduxStore;