import {combineReducers} from 'redux';
import { ProductReducer } from './ProductReducer';

const reducers = combineReducers({

    products : ProductReducer,

});

export default reducers;