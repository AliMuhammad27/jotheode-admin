import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../Util/authHeader";
import Header from "../Components/Header";
import { useEffect } from "react";
export default function PrivateRoutes({ children }) {
  const navigate = useNavigate();
  let token = getAccessToken();
  useEffect(() => {
    if (!token) {
      navigate("/auth/login", { replace: true });
    }
  }, [token]);
  return (
    <>
      <Header />
      {children}
    </>
  );
}
