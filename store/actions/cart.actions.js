import {URL_API} from '../../constants/database'
import axios from 'axios'

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

export const addItem = (item) => ({
    type:ADD_ITEM,
    item
})
export const removeItem  = (itemID) => ({
    type:REMOVE_ITEM,
    itemID
})
export const confirmCart = (payload,userId) => {
    //el argumento payload es el listado de items del carrito
    return async dispatch => {
      try {
        dispatch({
          type: CONFIRM_CART,
          status: 'loading',
        });
  //Con fetch
        // const response = await fetch(`${URL_API}/carrito.json`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     date: Date.now(),
        //     items: { ...payload },
        //   }),
        // });

        // const result = await response.json();


  //Con Axios , primer parametro URL, segundo el body, tercer parametro configuracion (Headers)


  
        const response = await axios.post (`${URL_API}/carrito.json`,
                {
                data: JSON.stringify({
                        date: Date.now(),
                        userId,
                        items: { ...payload }
                        }),
                headers: {
                    'Content-Type': 'application/json',
                  }
                })
  
        //  const result = response.data
  
        // console.log(result)
  
        dispatch({
          type: CONFIRM_CART,
          status: 'success',
        });
      } catch (error) {
        console.log(error.message);
        dispatch({
          type: CONFIRM_CART,
          status: 'error',
        });
    }
}
}