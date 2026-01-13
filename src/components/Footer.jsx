import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30px' })
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            ref={ref}
            id="contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-slate-900 dark:bg-slate-950 text-white py-16 md:py-20"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                                <span className="text-white font-bold text-lg">V</span>
                            </div>
                            <span className="text-2xl font-bold">Vantum Works</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-md">
                            An independent software studio building practical, well-designed digital products for work, play, and coordination.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="md:text-right">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <a
                            href="mailto:contact@vantumworks.io"
                            className="text-primary-400 hover:text-primary-300 transition-colors text-lg inline-block"
                        >
                            contact@vantumworks.io
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} <strong className="text-white">Vantum Works LLC</strong>. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        {['Home', 'Products', 'About'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-slate-400 hover:text-white text-sm transition-colors hover:-translate-y-0.5 duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
