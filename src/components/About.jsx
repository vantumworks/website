import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import rocketLogo from '/assets/logo-rocket.jpg'
import albertPhoto from '/assets/albert-cervantes.jpg'
import ushaPhoto from '/assets/usha-cervantes.jpg'

const founders = [
    {
        name: 'Albert F. Cervantes',
        title: 'Founder & CEO',
        photo: albertPhoto,
    },
    {
        name: 'Usha M. Cervantes',
        title: 'Co-Founder & CFO',
        photo: ushaPhoto,
    },
]

function FounderCard({ founder, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-center"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mb-4"
            >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 200 }}
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg"
                >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </motion.div>
            </motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{founder.name}</h3>
            <p className="text-slate-600 font-medium">{founder.title}</p>
        </motion.div>
    )
}

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Company Section */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <h2 className="section-heading mb-8">About Vantum Works</h2>
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={rocketLogo}
                                alt="Vantum Works Logo"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-slate-600 leading-relaxed"
                        >
                            Vantum Works LLC is an independent software studio focused on building practical, well-designed digital products. We explore ideas across productivity, marketplaces, games, and social experiences, turning early concepts into polished applications.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Leadership Section */}
                <div className="max-w-2xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12"
                    >
                        Leadership
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {founders.map((founder, index) => (
                            <FounderCard key={founder.name} founder={founder} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
