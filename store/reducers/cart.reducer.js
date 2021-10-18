import { ADD_ITEM,REMOVE_ITEM,CONFIRM_CART } from "../actions/cart.actions"

const INITIAL_STATE = {
    items:[],
    total:0,
    status: 'inactive'
}

//Funcion reductora que suma el total del carrito
const sumTotal = (list) => list
  .map(item => item.quantity * item.price)
  .reduce((a, b) => a + b, 0);

const cartReducer = (state = INITIAL_STATE, action) => {
  //recordar que todo esto es JAVASCRIPT
  switch(action.type) {
    case ADD_ITEM:
      const index = state.items.findIndex(item => item.id === action.item.id);
      //Busca si el item existe, si no encuentra ningun resultado, es decir, si no esta .
      if (index === -1) {
        //Si no esta el item lo agrega
        const item = { ...action.item, quantity: 1 };
        const updateCart = [...state.items, item];

        return {
          ...state,
          items: updateCart,
          //actualiza el carro con el nuevo total
          total: sumTotal(updateCart),
        };
      }
//Si el item existe le suma 1
      const items = state.items.map(item => {
        //busco el item a actualizar y lo actualizo
        if (item.id === action.item.id) item.quantity ++
        return item;
      })

      return {
        ...state,
        items,
        total: sumTotal(items),
      };
    case REMOVE_ITEM:
      //Saca el item en cuestion y actualiza el total
      const updateItems = state.items.filter(item => item.id !== action.itemID);
      return {
        ...state,
        items: updateItems,
        total: sumTotal(updateItems),
      };
    case CONFIRM_CART:
      return {
        ...state,
        items: [],
        total:0,
        status: action.status,
      };
    default:
      return state;
  };
};

export default cartReducer