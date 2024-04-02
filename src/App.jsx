import React from "react";
import "./App.css";
import ProblemPage from "./pages/problemPage/problemPage";
import ProblemsListPage from "./pages/problemsListPage/problemsListPage";
import SignInPage from "./components/signin/signin";
import SignUpPage from "./components/signup/signup";
import ExplorePage from "./pages/explorePage/explorePage";
import AcceptedPage from "./components/result/accepted";
import RejectedPage from "./components/result/rejected";
import ContestHosting from "./pages/contestHostingPage/ContestHosting";
import LeaderBoardPg from "./pages/leaderBoardPg/leaderBoardPg";
import ProfilePage from "./pages/profilePage/profilePage";
import ContestRegistration from "./pages/contestRegistrationPage/contestRegistration";
import ContestDetailsPage from "./pages/contestDetailsPage/contestDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/problems" element={<ProblemsListPage />} />
        <Route path="/problems/:id" element={<ProblemPage />} />
        <Route
          path="/contestRegistration/:contestId"
          element={<ContestRegistration />}
        />
        <Route path="/accepted" element={<AcceptedPage />} />
        <Route path="/rejected" element={<RejectedPage />} />
        <Route path="/contestHosting" element={<ContestHosting />} />
        <Route path="/leaderboard" element={<LeaderBoardPg />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/contestDetails/:contestId"
          element={<ContestDetailsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
