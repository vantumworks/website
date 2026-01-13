import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'

function App() {
    return (
        <div className="bg-white text-slate-900 font-sans">
            <Header />
            <Hero />
            <Products />
            <About />
            <Footer />
        </div>
    )
}

export default App
