import React from 'react';
import './Doctors.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserMd, } from '@fortawesome/free-solid-svg-icons'

const Doctors = (props) => {
    console.log(props.name);

    const { img, job, name, Specialist, bookingFee, Language } = props.doctor

    const doctor = <FontAwesomeIcon icon={faUserMd} />
    return (
        <div>
            <div className="doctor-details">
                <div>
                    <img src={img} alt="" />

                    <div className="doctors-details-info">
                        <h3> {name} </h3>
                        <p>  <b>Specialist :</b>  {Specialist} </p>
                        <p> <b>Working </b>: {job} </p>
                        <h4> <b>BookingFee</b> : {bookingFee} </h4>

                        <p>Language {Language} </p>
                        <button

                            onClick={() => props.handaleBooking(props.doctor)}
                            className="button-desing">
                            {doctor}
                            Get appointment
                        </button>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default Doctors;