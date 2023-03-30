// import React from "react";
// import "./medium.css";
// const Medium = () => {
//   return (
//     <div className="container">
//       <div className="main">
//         <h3>Thank You!</h3>
//         <p>
//           <strong> Digital Signatures Submitted Successfully</strong>
//         </p>
//         <button className="btn btn-primary">Download Signed PDF</button>
//       </div>
//       <div className="container">
//         <div className="row box">
//           <div className="col-lg-6">
//             <div className="">
//               <strong>No of people Signed</strong>{" "}
//               <button className=" btn btn-info">1</button>
//             </div>

//             <div className="col-lg-6">
//               <strong>Signed By</strong>
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div>
//               <strong>No of people remaining</strong>
//               <button className="btn btn-info">0</button>
//             </div>
//             <div className="col-lg-6">
//               Walter (newapp@cost-loans.com)<span>Signed</span>
//               <p>
//                 <strong>Pending</strong>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Medium;

import React from "react";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./medium.css";
import Img1 from "../Assets/Img1.jpg";
import Img2 from "../Assets/Img2.jpg";
import Img3 from "../Assets/Img3.jpg";
import Img4 from "../Assets/Img4.jpg";
import Img5 from "../Assets/Img5.jpg";
import Img6 from "../Assets/Img6.jpg";
import Img7 from "../Assets/Img7.jpg";
import Img8 from "../Assets/Img8.jpg";
import Img10 from "../Assets/Img10.jpg";
const Medium = () => {
  const [selectedDate, setSelectedDate]=useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  };
  return (
    <div>
      {/*Backgorund Image */}
      <div className="row top"></div>

      <div>Flights</div>


      <div className="container boxy">
        <div className="parent1">
          <div className="col-lg-6">
            <button className="btn btn-secondary btns">Round Trip</button>
            <button className="btn btn-secondary btns ">One-Way</button>
            <button className="btn btn-secondary btns">Multi-City</button>
          </div>
        </div>
        <div className="parent2">
          <div className="col-lg-6">
            <input type="text"></input>
            <input type="text"></input>
            </div>
          <div className="col-lg-6">
          <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy" placeholderText="Select Date"
    />
            </div>
        </div>
      </div>



      <div className="container typograph">
        <h5>PERFECT AIRWAYS</h5>
        <p>~(Plan your travel with confidence and peace of mind)~</p>
      </div>
      <div className="container ">
        <div className="row mid-logs">
          <div className="col-lg-6 one">
            <div>
              {" "}
              <img src={Img6} width="130px" height="60px" />
            </div>
            <div>
              {" "}
              <img src={Img3} width="120px" />
            </div>
            <div>
              {" "}
              <img src={Img7} width="150px" height="70px" />
            </div>
          </div>
          <div className="col-lg-6 one">
            <div>
              {" "}
              <img src={Img2} width="150px" />
            </div>
            <div>
              {" "}
              <img src={Img10} width="120px" />
            </div>
            <div>
              {" "}
              <img src={Img4} width="100px" />
            </div>
          </div>
          <h1>Most Visited Places</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mid-2">
              <div className="mid-div">
                <img src={Img1} width="230px" className="div-img" />
              </div>
            </div>
            <div className="col-lg-4 mid-2">
              <div className="mid-div">
                <img src={Img5} width="230px" className="div-img" />
              </div>
            </div>
            <div className="col-lg-4 mid-2">
              <div className="mid-div">
                <img src={Img8} width="230px" className="div-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Medium;
