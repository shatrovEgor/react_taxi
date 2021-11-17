import React, {useState} from "react";
import "../styles/Taxi.css";

const Car = () => {
    const [carActive, setCarActive] = useState(false)

    function pick(carActive) {
        if(carActive) {
            carActive = false
        } else {
            carActive = true
        }
        console.log(123);
    }


    return(
        <div className="car-container">
            <div className={carActive ? 'car active' : 'car'} onClick={() => pick(carActive)}>
                <h1 id="cars">Стандарт</h1>
                <p id="cars_2">Стоимость</p>
                <h2 id="cars_3">150 ₽</h2>
                <img src="/images/car_1.png" alt="" id="car_1"/>
            </div>
            <div className={carActive ? 'car active' : 'car'} onClick={() => pick}>
                <h1 id="cars">Премиум</h1>
                <p id="cars_2">Стоимость</p>
                <h2 id="cars_3">250 ₽</h2>
                <img src="/images/car_2.png" alt="" id="car_2"/>
            </div>
            <div className="car">
                <h1 id="cars">Бизнес</h1>
                <p id="cars_2">Стоимость</p>
                <h2 id="cars_3">300 ₽</h2>
                <img src="/images/car_3.png" alt="" id="car_3"/>
            </div>
        </div>        
    )
}

export default Car;