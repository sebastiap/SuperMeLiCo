import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/products.reducers';

import cartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import ordersReducer from './reducers/orders.reducer';

// Para redux tiene que haber un solo reducer, yo armo varios y combino todos con combineReducers
const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart:cartReducer,
  auth: AuthReducer,
  orders: ordersReducer,
})

//REDUX esta pensado para que uno le pueda agregar mejoras.
// El primer parametro que se pasa es el reducer. Hay un segundo parametro opcional que es para mejoras(ENHANCERS).
// Redux acepta un unico Reducer. Utilizando combineReducers, podemos unir varios reducers en uno para una mejor modulizacion.
// Como segundo parametro, usamos el ENHANCER applyMiddleware para usar redux-thunk (Con esto le agregamos la capacidad de que al momento de llamar a un reducer, detener el flujo y hacer mas acciones)
export default createStore(RootReducer,applyMiddleware(thunk))