import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../public/Home";
import Tiket from "../public/Tiket";
import { ToastContainer } from "react-toastify";
import ResultSearch from "../tikets/ResultSearch";
import DetailsTicket from "../tikets/DetailsTicket";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/tiket' element={<Tiket />} />
        <Route exact path='/resultSearch' element={<ResultSearch />} />
        <Route exact path='/detailsTickets' element={<DetailsTicket />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
export default AppRoute;
