import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context";
import {
  FinalPrice,
  HotelDetails,
  HotelImages,
  Navbar,
  AuthModal,
  ProfileDropDown
} from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});

  const { isAuthModalOpen, isDropDownModalOpen } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://breezetraveloapp.herokuapp.com/api/hotels/${id}`
        );
        console.log(`https://breezetraveloapp.herokuapp.com/api/hotels/${id}`);
        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const { name, state } = singleHotel;

  return (
    <div className="relative">
      <Navbar />
      <main className="single-hotel-page">
        <p className="hotel-name-add">
          {name}, {state}
        </p>
        <HotelImages singleHotel={singleHotel} />
        <div className="d-flex">
          <HotelDetails singleHotel={singleHotel} />
          <FinalPrice singleHotel={singleHotel} />
        </div>
      </main>
      { isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};
