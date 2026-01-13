import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden pt-16">
            {/* Animated Background Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute w-96 h-96 bg-primary-400 rounded-full opacity-20 blur-3xl top-20 -right-48"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
                className="absolute w-80 h-80 bg-accent-300 rounded-full opacity-20 blur-3xl bottom-20 -left-40"
            />
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute w-64 h-64 bg-primary-300 rounded-full opacity-20 blur-3xl top-1/2 left-1/3"
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6"
                    >
                        Thoughtful software products for
                        <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> work, play, and coordination.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto"
                    >
                        Vantum Works LLC is a software studio creating consumer and SaaS applications from concept to launch.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#products"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-shadow"
                        >
                            View Our Products
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-primary-300 hover:text-primary-600 transition-colors"
                        >
                            Learn More
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 50L48 45.8C96 41.7 192 33.3 288 35.5C384 37.7 480 50.3 576 54.2C672 58 768 53 864 46.8C960 40.7 1056 33.3 1152 35.5C1248 37.7 1344 49.3 1392 55.2L1440 61V101H1392C1344 101 1248 101 1152 101C1056 101 960 101 864 101C768 101 672 101 576 101C480 101 384 101 288 101C192 101 96 101 48 101H0V50Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}
