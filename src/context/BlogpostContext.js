import { createContext, useReducer } from "react";

export const BlogpostsContext = createContext();

export const blogpostsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGPOSTS":
      return {
        blogposts: action.payload,
      };
    case "CREATE_BLOGPOST":
      return {
        blogposts: [action.payload, ...state.blogposts],
      };
    case "DELETE_BLOGPOST":
      return {
        blogposts: state.blogposts.filter((b) => b._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const BlogpostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogpostsReducer, {
    blogposts: null,
  });

  return (
    <BlogpostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogpostsContext.Provider>
  );
};
