import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
    {
        id: 'bar-roster',
        name: 'Bar Roster',
        description: 'A platform that helps bars and restaurants quickly find reliable staff for shifts, events, and last-minute needs.',
        icon: 'calendar',
        status: 'coming-soon',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 'trixo',
        name: 'TriXO',
        description: 'A fresh twist on tic-tac-toe where players can only place three markers at a time, adding strategy and new ways to win.',
        icon: 'game',
        status: 'live',
        gradient: 'from-violet-500 to-purple-600'
    },
    {
        id: 'care-connect',
        name: 'Care Connect',
        description: 'A service that helps families find trusted caregivers and service providers that fit their needs and schedules.',
        icon: 'heart',
        status: 'coming-soon',
        gradient: 'from-pink-500 to-rose-500'
    },
    {
        id: 'link-shrink',
        name: 'Link Shrink',
        description: 'A simple tool to shorten links, create QR codes, and track how and where links are used.',
        icon: 'link',
        status: 'coming-soon',
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        id: 'guest-lists',
        name: 'Guest Lists',
        description: 'An easy way for hosts and organizers to manage guest lists, sign-ups, and referrals for events.',
        icon: 'users',
        status: 'coming-soon',
        gradient: 'from-emerald-500 to-teal-500'
    },
    {
        id: 'buzzed-trivia',
        name: 'Buzzed Trivia',
        description: 'A fun, interactive trivia experience designed to bring people together at bars, events, and social gatherings.',
        icon: 'zap',
        status: 'live',
        gradient: 'from-amber-500 to-orange-500'
    },
    {
        id: 'strand',
        name: 'Strand',
        description: 'An app that helps people better understand their relationships by revealing patterns and insights from their conversations.',
        icon: 'message',
        status: 'coming-soon',
        gradient: 'from-indigo-500 to-blue-600'
    }
]

const icons = {
    calendar: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    game: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    heart: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    ),
    link: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    ),
    users: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    zap: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    message: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    ),
}

function ProductCard({ product }) {
    return (
        <div className="product-card hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
            <div className={`product-card-icon bg-gradient-to-br ${product.gradient}`}>
                {icons[product.icon]}
            </div>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                {product.status === 'live' ? (
                    <span className="badge-live">Live</span>
                ) : (
                    <span className="badge-coming-soon">Coming Soon</span>
                )}
            </div>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
        </div>
    )
}

export default function Products() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section id="products" className="py-20 md:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-heading">Our Products</h2>
                    <p className="section-subheading">
                        We build practical, well-designed applications across productivity, marketplaces, games, and social experiences.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
