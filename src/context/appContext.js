import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  isLogin: false, //sementara
  carts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      const filterExistedProductFromContext = state.carts.filter(
        (product) => product.id === action.payload.id
      );

      if (filterExistedProductFromContext.length > 0) {
        return {
          ...state,
          carts: state.carts.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  qty: product.qty + 1,
                }
              : product
          ),
        };
      }

      return {
        ...state,
        carts: [
          ...state.carts,
          {
            ...action.payload,
            qty: 1,
          },
        ],
      };
    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
