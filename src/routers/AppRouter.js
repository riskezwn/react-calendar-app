import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { Rolling } from "react-loading-io/dist/Rolling";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return (
      <div className="loading__screen">
        <Rolling size={64} color="#0052c4" />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="login"
            element={
              <PublicRoute isLoggedIn={!!uid}>
                <LoginScreen />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/"
            element={
              <PrivateRoute isLoggedIn={!!uid}>
                <CalendarScreen />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};
