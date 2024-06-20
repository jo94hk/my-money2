import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { fireauth } from "../firebase/config";

export const useLogout = () => {
  const [isCancelled, setIsCanclled] = useState(false);
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      //파이어베이스 로그아웃
      await fireauth.signOut();
      //로그아웃 액션 디스패치
      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    setIsCanclled(false);
    return () => setIsCanclled(true);
  }, []);

  return { logout, error, isPending };
};
