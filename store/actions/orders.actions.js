// import * as FileSystem from 'expo-file-system';
import { insertOrder,insertOrder_item,fetchOrders,selectItems,deleteOrders } from '../../db/index';

export const ADD_ORDER = 'ADD_ORDER';
export const LOAD_ORDERS = 'LOAD_ORDERS';
export const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';
export const LOAD_ORDER_DETAIL = 'LOAD_ORDER_DETAIL';

export const addOrder = (product, quantity) => {
    return async dispatch => {

            const result = await insertOrder(
              product,
              quantity,
            );

            dispatch({
                type: ADD_ORDER,
                payload: {
                    id: result.insertId,
                    product,
                    quantity,
                }
            });

        
    }
}

export const addOrderItem = (order_id,product, quantity) => {
    return async dispatch => {


            const result = await insertOrder_item(
              order_id,
              product,
              quantity,
            );

            dispatch({
                type: ADD_ORDER_ITEM,
                payload: {
                    id: result.insertId,
                    order_id,
                    product,
                    quantity,
                }
            });
        
    }
}

export const loadOrders = () => {
    return async dispatch => {
        try {
            const result = await fetchOrders();
            // dispatch({ type: LOAD_ORDERS, orders: Array.from(result.rows)})
            dispatch({ type: LOAD_ORDERS, orders: result.rows._array });
            // dispatch({ type: LOAD_PLACES, places: result.rows._array })
            // console.log("LOAD ORDERS " + Object.values(result) )
        } catch (error) {
            console.log(error)
            throw error;
            
        }

    }
}

export const fetchitems = (id) => {
    return async dispatch => {
        try {
            const result = await selectItems(id);
            console.log("A PUNTO DE HACER LOAD ITEM "  )
            // dispatch({ type: LOAD_ORDER_DETAIL, items: Array.from(result.rows)})
            dispatch({ type: LOAD_ORDER_DETAIL, items: result.rows._array })


            // console.log("LOAD ORDERS ITEM" + Object.values(result) )
        } catch (error) {
            throw error;
        }

    }
}

// export const deleteOrder = () => {
//     return async dispatch => {
//         try {
//             const result = await deleteOrders();
//             // dispatch({ type: LOAD_ORDERS, orders: result.rows.length  })
//             console.log("Resultado deleteOrder " + Array.from(result.rows).map(item => Object.values(item)) )
//             dispatch({ type: LOAD_ORDERS, orders: Array.from(result.rows)})
//             console.log("LOAD ORDERS " + result.rows.array )
//         } catch (error) {
//             throw error;
//         }

//     }
// }