import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);

  //an instance of useNavigate() function
  const navigate = useNavigate();

  const handleReservation = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="./reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  className="email_tag"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
