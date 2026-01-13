import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            ref={ref}
            id="contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 text-white py-16 md:py-20"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center space-x-2 mb-6">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center"
                            >
                                <span className="text-white font-bold text-lg">V</span>
                            </motion.div>
                            <span className="text-2xl font-bold">Vantum Works</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-md">
                            An independent software studio building practical, well-designed digital products for work, play, and coordination.
                        </p>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ delay: 0.3 }}
                        className="md:text-right"
                    >
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <motion.a
                            href="mailto:contact@vantumworks.com"
                            whileHover={{ scale: 1.02 }}
                            className="text-primary-400 hover:text-primary-300 transition-colors text-lg inline-block"
                        >
                            contact@vantumworks.com
                        </motion.a>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-slate-400 text-sm">
                        © {currentYear} <strong className="text-white">Vantum Works LLC</strong>. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        {['Home', 'Products', 'About'].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ y: -2 }}
                                className="text-slate-400 hover:text-white text-sm transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    )
}
