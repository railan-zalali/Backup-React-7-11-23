/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Search = () => {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    namaTempat: "",
    jumlahTiket: 1,
    tanggal: "",
  });

  const navigate = useNavigate();

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/searchTiket", {
        params: formData,
      });
      if (response.data.data) {
        navigate("/resultSearch", { state: { searchResults: response.data.data } });
      }
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/places");
      // console.log(result.data.results);
      setPlaceData(result.data.results);
    } catch (err) {
      toast.error("Ada yang tidak beres !!!", {
        position: "bottom-right",
        autoClose: 3000, // Durasi notifikasi dalam milidetik
      });
    }
  };
  const handlePlaceChange = (e) => {
    const selectedPlace = e.target.value;
    const selectedPlaceData = placeData.find((place) => place.namaTempat === selectedPlace);
    if (selectedPlaceData) {
      setFormData({
        ...formData,
        namaTempat: selectedPlace,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
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
          <div className='w-full px-4'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <div className='px-6'>
                <form>
                  <div className='py-2'>
                    <label htmlFor='name' className='label'>
                      Pilih Tempat
                    </label>
                    <select
                      className='select select-bordered w-full'
                      onChange={handlePlaceChange}
                      value={formData.namaTempat}
                    >
                      <option disabled value=''>
                        Pilih Tempat Tujuan
                      </option>
                      {placeData.map((place, i) => (
                        <option key={i} value={place.namaTempat}>
                          {place.namaTempat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='py-2'>
                    <label className='label' htmlFor='tanggal'>
                      Tanggal
                    </label>
                    <input
                      type='date'
                      name='tanggal'
                      value={formData.tanggal}
                      onChange={handleChange}
                      className='input input-bordered w-full'
                    />
                  </div>
                </form>
              </div>
              <div className='py-8 px-6'>
                <button className='btn btn-primary btn-block font-bold' onClick={onSubmitChange}>
                  Cari Tiket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Search;
{
  /* <form>
                  <div className='py-2'>
                    <label htmlFor='name' className='label'>
                      Pilih Tempat
                    </label>
                    <select className='select select-bordered w-full'>
                      <option disabled selected>
                        Pilih Tempat Tujuan
                      </option>
                      {placeData.map((place, i) => (
                        <option key={i}>{place.namaTempat}</option>
                      ))}
                    </select>
                  </div>
                  <div className='py-2'>
                    <label htmlFor='' className='label'>
                      Pilih Jumat Jumlah
                    </label>
                    <input type='number' className='num' />
                  </div>
                </form> */
}
