import {
    FETCH_CARD_START,
    FETCH_CARD_SUCCESS,
    FETCH_CARD_FAILURE
  } from '../actions';
  
  const initialState = {
    card: null,
    isFetching: false,
    error: '',
    status: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CARD_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCH_CARD_SUCCESS:
        return {
          ...state,
          card: action.payload,
          isFetching: false,
          error: '',
        //   status: action.payload
        };
      case FETCH_CARD_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  