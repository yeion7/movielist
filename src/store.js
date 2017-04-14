import { createStore } from 'redux';
import movieApp from './reducers.js'

const store = createStore(movieApp)

export default store
// store.getState()
// store.dispath({})
// store.subscribe(func)
