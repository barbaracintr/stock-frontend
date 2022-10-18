import { GlobalStyle } from "./styles/global.js";

import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Upload } from "./components/Upload";
import { Report } from "./components/Report/index.jsx";
import { Policy } from "./components/Policy/index.jsx";

import { StatusProvider } from "./providers/status";

import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <>
      <GlobalStyle />
      <StatusProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/report" element={<Report />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </StatusProvider>
      <ToastContainer />
    </>
  );
}
