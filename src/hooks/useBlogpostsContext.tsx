import { BlogpostsContext } from "../context/BlogpostContext.tsx";
import { useContext } from "react";

export const useBlogpostsContext = () => {
  const context = useContext(BlogpostsContext);

  if (!context) {
    throw Error(
      "useBlogpostsContext must be used inside a BlogpostsContextProvider"
    );
  }

  return context;
};
