import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProjectUpload from "./pages/ProjectUpload";
import Transcript from "./components/Transcript";
import Upload from "./components/Upload";
import WidgetConfigurations from "./components/WidgetConfigurations";
import Settings from "./components/Settings";

import AuthProvider from "./context/authContext";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path={`:name/`} element={<ProjectUpload />}>
              <Route path="project-upload" element={<Upload />} />
              <Route path="transcript" element={<Transcript />} />
              <Route
                path="widget-configurations"
                element={<WidgetConfigurations />}
              />
            </Route>
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
