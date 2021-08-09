import React from "react"
import Hero2 from "../components/home/Hero2";
import Pricing from "../components/home/Pricing";
import Features from "../components/home/Features";

const Home = () =>
    <div className={"bg-gradient-to-br from-green-400 to-cyan-500"}>
        <Hero2/>
        <Features/>
        <Pricing/>
    </div>


export default Home

