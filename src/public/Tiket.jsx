/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";

import NavTiket from "../components/NavTiket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import View from "../components/View";
import Search from "../components/Search";

const Tiket = () => {
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    //console.log(userField);
  };
  const [loading, setLoading] = useState();

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post("http://127.0.0.1:8000/api/addnew", userField);
      console.log(responce);
      toast.success("Data berhasil dikirim", {
        position: "bottom-right",
        autoClose: 3000, // Durasi notifikasi dalam milidetik
      });
      setLoading(true);
    } catch (err) {
      toast.error("Ada yang tidak beres !!!", {
        position: "bottom-right",
        autoClose: 3000, // Durasi notifikasi dalam milidetik
      });
    }
  };
  if (loading) {
    return <Tiket />;
  }

  return (
    <>
      <NavTiket />
      <Search />
      {/* <section className='pt-36'>
        <div className='container'>
          <div className='flex justify-center items-center'>
            <div className='card w-full bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h2 className='text-xl font-semibold mb-4'>Card Title</h2>
                <p className='mb-4'>If a dog chews shoes, whose shoes does he choose?</p>
                <form>
                  <div className='mb-4'>
                    <label htmlFor='name' className='label'>
                      Nama
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Nama Lengkap'
                      onChange={(e) => changeUserFieldHandler(e)}
                      className='input w-full'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='email' className='label'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Email'
                      onChange={(e) => changeUserFieldHandler(e)}
                      className='input w-full'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='password' className='label'>
                      Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      onChange={(e) => changeUserFieldHandler(e)}
                      className='input w-full'
                      required
                    />
                  </div>
                  <button className='btn btn-primary btn-block' onClick={(e) => onSubmitChange(e)}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <View />
        <ToastContainer />
      </section> */}
    </>
  );
};
export default Tiket;
