import { createContext, useReducer, type ReactNode } from "react";

interface Blogpost {
  _id: string;
  [key: string]: any;
}

interface BlogpostsState {
  blogposts: Blogpost[] | null;
}

interface BlogpostsAction {
  type: "SET_BLOGPOSTS" | "GET_BLOGPOSTS" | "CREATE_BLOGPOST" | "DELETE_BLOGPOST";
  payload: any;
}

export const BlogpostsContext = createContext<{
  blogposts: Blogpost[] | null;
  dispatch: React.Dispatch<BlogpostsAction>;
}>({
  blogposts: null,
  dispatch: () => {}
});

export const blogpostsReducer = (state: BlogpostsState, action: BlogpostsAction): BlogpostsState => {
  switch (action.type) {
    case "SET_BLOGPOSTS":
      return {
        blogposts: action.payload,
      };
    case "GET_BLOGPOSTS":
      return {
        ...state,
        blogposts: action.payload,
      };
    case "CREATE_BLOGPOST":
      return {
        blogposts: [action.payload, ...(state.blogposts || [])],
      };
    case "DELETE_BLOGPOST":
    return {
        blogposts: state.blogposts ? state.blogposts.filter((b) => b._id !== action.payload._id) : [],
      };
    default:
      return state;
  }
};

export const BlogpostsContextProvider = ({ children } : { children: ReactNode}) => {
  const [state, dispatch] = useReducer(blogpostsReducer, {
    blogposts: null,
  });

  return (
    <BlogpostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogpostsContext.Provider>
  );
};
