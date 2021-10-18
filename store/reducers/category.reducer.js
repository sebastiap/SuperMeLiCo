import { CATEGORIES } from '../../data/categories';
import { SELECT_CATEGORY } from '../actions/category.action';

//El contenido de estos archivos es puro JS no tiene React 

const INITIAL_STATE = {
  list: CATEGORIES,
  selectedID: null,
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedID: action.categoryID,
        color:action.color
      };
    default:
      return state;
    }
}

export default CategoryReducer;