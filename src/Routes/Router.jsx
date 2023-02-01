import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../Screens/auth/Login";
import Index from "../Screens/dashboard/Dashboard";
import PasswordRecovery1 from "../Screens/auth/ForgetPassword";
import PasswordRecovery2 from "../Screens/auth/VerifyCode";
import PasswordRecovery3 from "../Screens/auth/ResetPassword";
import Profile from "../Screens/Profile/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import Feedback from "../Screens/feedback/Index";
import FeedbackDetails from "../Screens/feedback/FeedbackDetails";
import User from "../Screens/user/Index";
import UserDetails from "../Screens/user/UserDetails";
import ServiceProvider from "../Screens/serviceprovider/Index";
import ServiceProviderDetails from "../Screens/serviceprovider/ServiceProviderDetails";
import SubscriptionManagement from "../Screens/subscription/Index";
import AddSubscription from "../Screens/subscription/AddSubscription";
import EditSubscription from "../Screens/subscription/EditSubscription";
import CategoryManagement from "../Screens/category/Index";
import AddCategory from "../Screens/category/AddCategory";
import Notifications from "../Screens/notifications/Index";
import PostNotification from "../Screens/notifications/PostNotification";
import Bookings from "../Screens/bookings/Index";
import NotificationDetails from "../Screens/notifications/NotificationDetails";
import Services from "../Screens/service/Index";
import AddService from "../Screens/service/AddService";
import PaymentLogs from "../Screens/paymentlogs/Index";
import { getAccessToken } from "../Util/authHeader";

export default function Router() {
  const token = getAccessToken();
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={token ? "/dashboard" : "/auth/login"} />}
      />
      <Route
        path="/auth/login"
        element={
          <ProtectedRoutes>
            <Login />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/auth/password-recovery-1"
        element={
          <ProtectedRoutes>
            <PasswordRecovery1 />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/auth/password-recovery-2/:encoded"
        element={
          <ProtectedRoutes>
            <PasswordRecovery2 />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/auth/password-recovery-3/:encoded"
        element={
          <ProtectedRoutes>
            <PasswordRecovery3 />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Index />
          </PrivateRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        }
      />
      <Route
        path="/changePassword"
        element={
          <PrivateRoutes>
            <ChangePassword />
          </PrivateRoutes>
        }
      />
      <Route
        path="/editProfile"
        element={
          <PrivateRoutes>
            <EditProfile />
          </PrivateRoutes>
        }
      />
      <Route
        path="/feedbacks"
        element={
          <PrivateRoutes>
            <Feedback />
          </PrivateRoutes>
        }
      />

      <Route
        path="/feedbacks/feedbackDetails/:id"
        element={
          <PrivateRoutes>
            <FeedbackDetails />
          </PrivateRoutes>
        }
      />

      <Route
        path="/cateogoryManagement"
        element={
          <PrivateRoutes>
            <CategoryManagement />
          </PrivateRoutes>
        }
      />

      <Route
        path="/AddCategory"
        element={
          <PrivateRoutes>
            <AddCategory />
          </PrivateRoutes>
        }
      />

      <Route
        path="/user"
        element={
          <PrivateRoutes>
            <User />
          </PrivateRoutes>
        }
      />
      <Route
        path="/user/userDetails/:id"
        element={
          <PrivateRoutes>
            <UserDetails />
          </PrivateRoutes>
        }
      />

      <Route
        path="/serviceprovider"
        element={
          <PrivateRoutes>
            <ServiceProvider />
          </PrivateRoutes>
        }
      />
      <Route
        path="/serviceprovider/serviceProviderDetails/:id"
        element={
          <PrivateRoutes>
            <ServiceProviderDetails />
          </PrivateRoutes>
        }
      />

      <Route
        path="/subscriptions"
        element={
          <PrivateRoutes>
            <SubscriptionManagement />
          </PrivateRoutes>
        }
      />

      <Route
        path="/subscriptions/add-subscription"
        element={
          <PrivateRoutes>
            <AddSubscription />
          </PrivateRoutes>
        }
      />

      <Route
        path="/subscriptions/edit-subscription/:id"
        element={
          <PrivateRoutes>
            <EditSubscription />
          </PrivateRoutes>
        }
      />

      <Route
        path="/notifications"
        element={
          <PrivateRoutes>
            <Notifications />
          </PrivateRoutes>
        }
      />

      <Route
        path="/notifications/post-notification"
        element={
          <PrivateRoutes>
            <PostNotification />
          </PrivateRoutes>
        }
      />

      <Route
        path="/notifications/notification-details/:id"
        element={
          <PrivateRoutes>
            <NotificationDetails />
          </PrivateRoutes>
        }
      />

      <Route
        path="/bookings"
        element={
          <PrivateRoutes>
            <Bookings />
          </PrivateRoutes>
        }
      />

      <Route
        path="/ServiceManagement"
        element={
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        }
      />

      <Route
        path="/ServiceManagement"
        element={
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        }
      />

      <Route
        path="/Add-Service"
        element={
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        }
      />

      <Route
        path="/Payment-logs"
        element={
          <PrivateRoutes>
            <PaymentLogs />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
