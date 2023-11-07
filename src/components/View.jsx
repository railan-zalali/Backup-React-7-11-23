import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tiket from "../public/Tiket";
import { toast } from "react-toastify";

const View = () => {
  const [userData, setUSerData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/users");
      //console.log(result.data.results);
      setUSerData(result.data.results);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("http://127.0.0.1:8000/api/usersdelete/" + id);
    const newUserData = userData.filter((item) => {
      return item.id !== id;
    });
    toast.success("Data berhasil dihapus", {
      position: "bottom-right",
      autoClose: 3000,
    });
    setUSerData(newUserData);
  };

  return (
    <div className='container'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>S No.</th>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.name} </td>
                  <td>{user.email} </td>
                  <td>
                    {/* <NavLink to={`/view/${user.id}`} className='btn btn-success mx-2'> */}
                    View
                    {/* </NavLink> */}
                    {/* <NavLink to={`/edit/${user.id}`} className='btn btn-info mx-2'> */}
                    Edit
                    {/* </NavLink> */}
                    <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View;
