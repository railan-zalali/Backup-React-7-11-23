import React from "react";
import NavTiket from "../components/NavTiket";
import { useLocation, useNavigate } from "react-router-dom";

const TicketCard = ({ result, ticketType, navigateToDetails }) => (
  <div className='w-full px-6 pt-6'>
    {/* <button onClick={() => navigateToDetails(result, ticketType)}></button> */}
    <div
      className='bg-white shadow-xl rounded-xl p-4 mx-auto'
      onClick={() => navigateToDetails(result, ticketType)}
    >
      <h1 className='text-2xl font-bold text-primary'>{result.namaTempat}</h1>
      <div className='flex justify-between items-center mt-2'>
        <div className='text-lg text-gray-800'>
          <p className='font-bold'>{ticketType}</p>
          <p>{result.tanggal}</p>
        </div>
        <div className='text-sm mt-4 font-bold text-gray-800'>
          <p>Rp. {result.harga}</p>
        </div>
      </div>
    </div>
  </div>
);

const ResultSearch = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  const navigate = useNavigate();

  const navigateToDetails = (result, ticketType) => {
    const ticketDetails = {
      namaTempat: result.namaTempat,
      ticketType,
      tanggal: result.tanggal,
      harga: result.harga,
    };
    console.log("Data yang dikirim ke /detailsTickets:", ticketDetails);
    navigate("/detailsTickets", { state: ticketDetails });
  };

  return (
    <>
      <NavTiket />
      <section className='pt-24 pb-32 bg-slate-100'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='max-w-xl mx-auto text-center mb-8'>
              <h4 className='font-semibold text-lg text-primary mb-2'>Cari Tiket</h4>
              <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl'>
                Cari Destinasi Yang Kamu Inginkan
              </h2>
            </div>
          </div>
          <div className='flex flex-wrap'>
            {searchResults.map((result, index) => (
              <TicketCard
                key={index}
                result={result}
                ticketType='VIP'
                navigateToDetails={navigateToDetails}
              />
            ))}
          </div>
          <div className='flex flex-wrap'>
            {searchResults.map((result, index) => (
              <TicketCard
                key={index}
                result={result}
                ticketType='REGULER'
                navigateToDetails={navigateToDetails}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultSearch;
