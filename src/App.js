import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewWorkouts from "./components/ViewWorkouts";
import AddWorkout from "./components/AddWorkout";
import Header from "./components/Header";
import GraphView from "./components/GraphView";

// import StartTime from "./components/StartTime";



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path="/" element={<ViewWorkouts />} />
    <Route path="add" element={<AddWorkout />} />
    <Route path="graph" element={<GraphView />} />
    {/* <Route path="update/:id" element={<StartTime />} /> */}
  </Routes>
    </BrowserRouter>
    
  );
}




