import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Store from "./store/store";

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})

ReactDOM.render(
    <BrowserRouter>
    <Context.Provider value={{
        store
    }}>

        <App />
    </Context.Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

