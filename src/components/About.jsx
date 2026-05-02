import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import rocketLogo from '/assets/logo-rocket.jpg'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="section-heading dark:text-white mb-8">About Vantum Works</h2>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                        <motion.div
                            initial={{ scale: 0.5, rotate: -90 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0.5, rotate: -90 }}
                            transition={{
                                type: 'spring',
                                stiffness: 150,
                                damping: 12,
                                delay: 0.2,
                            }}
                            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={rocketLogo}
                                alt="Vantum Works Logo"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                            Vantum Works LLC is an independent software studio building practical, well-designed digital products. Our work spans B2B SaaS, consumer utilities, and games.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
