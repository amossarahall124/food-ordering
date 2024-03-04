import React from 'react'
import Hero from '/src/components/Hero'
import Cards from '/src/components/Cards'
import { motion } from "framer-motion";
import Footer from '/src/components/Footer'

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
