import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../Util/authHeader";
import { useEffect } from "react";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  let token = getAccessToken();
  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [token]);

  return (
    <>
        {children}
    </>
  );
}
