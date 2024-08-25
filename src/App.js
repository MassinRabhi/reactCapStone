import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import BookingPage from "./BookingPage.jsx"
import Booked from "./Booked.jsx";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/Booked" element={<Booked />} />
      </Routes>
    </div>
  );
}

export default App;
