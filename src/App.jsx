import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
    return (
        <ThemeProvider>
            <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans transition-colors duration-300">
                <Header />
                <Hero />
                <Products />
                <About />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App
