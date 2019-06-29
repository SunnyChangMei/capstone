import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {
  newShape,
  currentShape,
  gameBoard,
  updateBoard,
  updateScore,
  gameStarted,
  gameOver,
  score
} from './game'
import {posenetReducer} from './camera'

const reducer = combineReducers({
  user,
  newShape,
  currentShape,
  gameBoard,
  updateBoard,
  updateScore,
  gameStarted,
  gameOver,
  score,
  posenetReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './game'
export * from './camera'
