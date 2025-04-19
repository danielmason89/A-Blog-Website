import { useState } from "react";
import { useAuthContext } from "./useAuthContext.tsx";

export const useSubscribe = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const subscribe = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://gentle-plateau-25780.herokuapp.com/api/user/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        throw new Error(json.error || "An unexpected error occurred.");
      }

      if (response.ok) {
        // Save user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        //   Update the auth context
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected issue occurred, try refreshing the page.");
      }
      setIsLoading(false);
    }
  };
  return { subscribe, isLoading, error };
};
