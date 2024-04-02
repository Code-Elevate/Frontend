import React from "react";
import "./App.css";
import ProblemPage from "./pages/problemPage/problemPage";
import ProblemsListPage from "./pages/problemsListPage/problemsListPage";
import SignInPage from "./pages/signinpage/signinPage";
import SignUpPage from "./pages/signupPage/signupPage";
import ExplorePage from "./pages/explorePage/explorePage";
import AcceptedPage from "./components/result/accepted";
import RejectedPage from "./components/result/rejected";
import ContestHosting from "./pages/contestHostingPage/ContestHosting";
import LeaderBoardPg from "./pages/leaderBoardPg/leaderBoardPg";
import ProfilePage from "./pages/profilePage/profilePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExplorePage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/problems",
    element: <ProblemsListPage />,
  },
  {
    path: "/problem/:id",
    element: <ProblemPage />,
  },
  {
    path: "/accepted",
    element: <AcceptedPage />,
  },
  {
    path: "/rejected",
    element: <RejectedPage />,
  },
  {
    path: "/contestHosting",
    element: <ContestHosting />,
  },
  {
    path: "/leaderboard/",
    element: <LeaderBoardPg />,
  },

  {
    path: "/profile/",
    element: <ProfilePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
