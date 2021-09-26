import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctors from '../Doctors/Doctors';
import './MainBody.css'

const MainBody = () => {

    const [doctors, setDoctors] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./FakeDT.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const handaleBooking = (doctor) => {
        const newCart = [...cart, doctor];
        setCart(newCart)
        console.log(doctor.name);
    }

    return (
        <div>
            {/* <h1>hello main body ? </h1> */}
            <div className="doctors-info">
                <div className="doctor-single">
                    {
                        doctors.map(doctor => <Doctors
                            key={doctor.name}
                            doctor={doctor}
                            handaleBooking={handaleBooking}
                        ></Doctors>)
                    }
                </div>
                <div className="card-section">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default MainBody;