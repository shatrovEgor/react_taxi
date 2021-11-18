import React, {useState} from "react";
import "../styles/Taxi.css";

const Car = () => {
    const [carActive, setCarActive] = useState(false)
    const [carActive2, setCarActive2] = useState(false)
    const [carActive3, setCarActive3] = useState(false)

    function pick() {
        if(carActive) {
        } else {
            setCarActive(true)
            setCarActive2(false)
            setCarActive3(false)
        }
    }

    function pick2() {
        if(carActive2) {
        } else {
            setCarActive2(true)
            setCarActive(false)
            setCarActive3(false)
        }
    }

    function pick3() {
        if(carActive3) {
        } else {
            setCarActive3(true)
            setCarActive(false)
            setCarActive2(false)
        }
        console.log(123);
    }


    return(
        <div className="car-container">
            <div className={carActive ? 'car active' : 'car'} onClick={() => pick()}>
                <h1 id="cars">Стандарт</h1>
                <p id="cars_2">Стоимость</p>
                <h2 id="cars_3">150 ₽</h2>
                <img src="/images/car_1.png" alt="" id="car_1"/>
            </div>
            <div className={carActive2 ? 'car active' : 'car'} onClick={() => pick2()}>
                <h1 id="cars">Премиум</h1>
                <p id="cars_2">Стоимость</p>
                <h2 id="cars_3">250 ₽</h2>
                <img src="/images/car_2.png" alt="" id="car_2"/>
            </div>
            <div className={carActive3 ? 'car active' : 'car'} onClick={() => pick3()}>
                <h1 id="cars">Бизнес</h1>
                <p id="cars_2">Стоимость</p>
                <h2 id="cars_3">300 ₽</h2>
                <img src="/images/car_3.png" alt="" id="car_3"/>
            </div>
        </div>        
    )
}

export default Car;