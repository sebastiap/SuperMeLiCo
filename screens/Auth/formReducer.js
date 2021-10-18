export const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    }
    const inputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let formIsValid = true;

    for (const key in inputValidities) {
      formIsValid = formIsValid && inputValidities[key];
    }

    return {
      formIsValid,
      inputValues,
      inputValidities,
    }
  }

  return state;
};