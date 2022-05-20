import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import authReducer from './authReducer'
import SecureLS from 'secure-ls';

const secureLs = new SecureLS();

const getStateFromStorage = () => {
    const localAuth = secureLs.get('auth-key');

    let stateInLocalStorage = {
        isLoggedIn: false,
        username: undefined,
        displayName: undefined,
        image: undefined,
        password: undefined
    };
    if (localAuth) {
        return localAuth;
    }
    return stateInLocalStorage;
}

const updateStateInStorage = newState => {
    secureLs.set('auth-key', newState);
}

const configureStore = () => {
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(authReducer, getStateFromStorage(), composeEnhancers(applyMiddleware(thunk)))

    store.subscribe(() => {
        updateStateInStorage(store.getState())
    })

    return store;
}

export default configureStore;