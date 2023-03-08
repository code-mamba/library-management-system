import * as types from "./actionType";
const initialState = {
  books: [],
  book: {},
  loading: false,
};

const booksReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case types.DELETE_BOOK:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_BOOK:
      return {
        ...state,
        loading: false,
      };
    case types.SINGLE_BOOK_DETAIL:
      return {
        ...state,
        book: action.payload,
        loading: false,
      };
    case types.UPDATE_BOOK:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default booksReducers;
