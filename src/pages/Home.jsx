import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import { motion } from "framer-motion";
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Cards />

            <Footer />

        </div>
    )
}

export default Home
