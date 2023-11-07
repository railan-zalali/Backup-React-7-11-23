import React from "react";
import { useLocation } from "react-router-dom";
import NavTiket from "../components/NavTiket";

const DetailsTicket = () => {
  const location = useLocation();
  const { namaTempat, ticketType, tanggal, harga } = location.state;

  return (
    <>
      <NavTiket />
      <div className='bg-gradient-to-r from-blue-500 to-purple-600 py-32 min-h-screen flex items-center justify-center'>
        <form className='bg-white w-full max-w-md rounded-lg shadow-md p-6'>
          <h1 className='text-2xl font-bold mb-4'>
            Lengkapi data diri kamu untuk menjadi Member Basic Access
          </h1>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 text-sm font-medium mb-2'>
              Nama
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Masukkan nama lengkap kamu'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phone' className='block text-gray-700 text-sm font-medium mb-2'>
              No Telepon
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Masukkan nomor telepon kamu'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Masukkan alamat email kamu'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='id' className='block text-gray-700 text-sm font-medium mb-2'>
              No ID
            </label>
            <input
              type='text'
              id='id'
              name='id'
              className='border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Masukkan nomor identitas kamu'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='type' className='block text-gray-700 text-sm font-medium mb-2'>
              Tipe ID
            </label>
            <select
              id='type'
              name='type'
              className='border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value=''>Pilih tipe identitas kamu</option>
              <option value='KTP'>KTP</option>
              <option value='SIM'>SIM</option>
              <option value='Paspor'>Paspor</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='birth' className='block text-gray-700 text-sm font-medium mb-2'>
              Tanggal Lahir
            </label>
            <input
              type='date'
              id='birth'
              name='birth'
              className='border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <span className='block text-gray-700 text-sm font-medium mb-2'>Jenis Kelamin</span>
            <div className='flex items-center'>
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                className='text-blue-500 focus:ring-2 focus:ring-blue-500'
              />
              <label htmlFor='male' className='ml-2 text-gray-700 text-sm'>
                Laki-laki
              </label>
            </div>
            <div className='flex items-center mt-2'>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                className='text-blue-500 focus:ring-2 focus:ring-blue-500'
              />
              <label htmlFor='female' className='ml-2 text-gray-700 text-sm'>
                Perempuan
              </label>
            </div>
          </div>
          <div className='mb-4'>
            <button
              type='submit'
              className='bg-blue-500 text-white font-medium py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              LANJUTKAN
            </button>
          </div>
          <div className='text-gray-600 text-xs text-center'>
            Anda harus menyediakan informasi yang dibutuhkan untuk menjadi Member Basic Access, dan
            telah menyetujui Syarat dan Ketentuan serta Kebijakan Privasi
          </div>
        </form>
      </div>
    </>
  );
};

export default DetailsTicket;
