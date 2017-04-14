import { createStore } from 'redux';
import movieApp from './reducer'

const store = createStore(movieApp)

export default store
// store.getState()
// store.dispath({})
// store.subscribe(func)
