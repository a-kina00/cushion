import { combineReducers } from 'redux';

import productList from './products';
import offerList from './offers';
import modalList from './modal';

const rootReducer = combineReducers({
  products: productList,
  offer: offerList,
  modal: modalList
})

export { rootReducer }