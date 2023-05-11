import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Individual from "./components/Individual";
import RpcStatus from "./components/RpcStatus";
import GrpcStatus from "./components/GrpcStatus";
import APIStatus from "./components/APIStatus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Router>
    <React.Fragment>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/validator/:valoper" element={<Individual/>} />
        <Route path="/rpc-status" element={<RpcStatus/>} />
        <Route path="/grpc-status" element={<GrpcStatus/>} />
        <Route path="/api-status" element={<APIStatus/>} />
      </Routes>
    </React.Fragment>
  </Router>

);
