import React from "react"
import "../Styles/Home.css"

export default function Home(){
    return <main className="main">
        <div className="hero">hero</div>
        <div className="services">
            <div className="serviceCards">
                <div className="serviceCard">service1</div>
                <div className="serviceCard">service2</div>
                <div className="serviceCard">service3</div>
            </div>
            <div className="serviceDetailsList">
                <div className="serviceDetail">
                    <p>service1</p>
                    <img src="" alt="" />
                </div>
                <div className="serviceDetail">
                    <p>service2</p>
                    <img src="" alt="" />
                </div>
                <div className="serviceDetail">
                    <p>service3</p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
        <div className="clientsList"></div>
    </main>
}