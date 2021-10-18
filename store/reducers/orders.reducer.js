import { ADD_ORDER,LOAD_ORDERS,ADD_ORDER_ITEM,LOAD_ORDER_DETAIL } from '../actions/orders.actions';
import Order,{Item} from '../../models/order';

const initialState = {
    orders: [],
    items: []
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                action.payload.id,
                action.payload.product,
                action.payload.quantity,
            );
            console.log(newOrder);
            return {
                ...state,
                orders: state.orders.concat(newOrder),
            };
        case ADD_ORDER_ITEM:
            const newItem = new Item(
                action.payload.id,
                action.payload.order_id,
                action.payload.product,
                action.payload.quantity,
            );
            console.log(newItem);
            return {
                ...state,
                items: state.items.concat(newItem),
            };
        case LOAD_ORDERS:
            return {
                ...state,
                orders: action.orders.map(item => new Order(
                    item.id,
                    item.name,
                    item.total,
                ))
            }
        case LOAD_ORDER_DETAIL:
            return {
                 ...state,
                 items: action.items.map(item => new Item(
                   item.id,
                   item.order_id,
                   item.product,
                   item.quantity,
                  ))
                }
        default:
            return state;
    }
}
export default ordersReducer