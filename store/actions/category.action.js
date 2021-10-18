export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = (id,color) => ({
  type: SELECT_CATEGORY,
  categoryID: id,
  color:color
})