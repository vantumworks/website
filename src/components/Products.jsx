import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
    {
        id: 'scout',
        name: 'Scout',
        description: 'Built for recruiter intake calls. Scout listens during your screen and delivers a structured candidate profile and executive summary the moment you hang up — so you can decide who moves forward.',
        icon: 'mic',
        status: 'live',
        url: 'https://scout.vantumworks.io',
        gradient: 'from-blue-600 to-indigo-700'
    },
    {
        id: 'rosa',
        name: 'Rosa',
        description: 'Autonomous intake screening that runs the full conversation for you. Rosa emails candidates, holds a 15-minute browser interview on their schedule, and returns a manager-ready brief in minutes — same format as a Scout call. Rosa describes; you decide.',
        icon: 'sparkles',
        status: 'live',
        url: 'https://scout.vantumworks.io/rosa',
        gradient: 'from-purple-500 to-indigo-600'
    },
    {
        id: 'piper',
        name: 'Piper',
        description: 'Practice the interview before it counts. Piper is a voice-first mock interview coach — speak your answers aloud under realistic pressure and get constructive feedback, in private, before the real conversation.',
        icon: 'chat',
        status: 'live',
        url: 'https://piper.vantumworks.io',
        gradient: 'from-sky-500 to-indigo-600'
    },
    {
        id: 'storyline',
        name: 'Storyline',
        description: 'A career articulation tool that helps you uncover your work experiences through guided conversation, then turns them into polished resume bullets, LinkedIn summaries, cover letters, and interview stories — all grounded in what you actually did.',
        icon: 'book',
        status: 'live',
        url: 'https://storyline.vantumworks.io',
        gradient: 'from-rose-500 to-red-600'
    },
    {
        id: 'vantum-workforce',
        name: 'Vantum Workforce',
        description: 'Coaching case management for career centers, workforce boards, and nonprofits. Give every coach real, actionable feedback to work from — at the scale of everyone you serve.',
        icon: 'users',
        status: 'live',
        url: 'https://workforce.vantumworks.io',
        gradient: 'from-teal-600 to-cyan-700'
    },
    {
        id: 'link-shrink',
        name: 'Link Shrink',
        description: 'Shorten URLs, generate QR codes, and see where every click came from. A simple, fast tool for marketers, makers, and anyone who shares links.',
        icon: 'link',
        status: 'live',
        url: 'https://linkshrink.io',
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        id: 'trixo',
        name: 'TriXO',
        description: 'Tic-tac-toe with a twist: each player can only have three markers on the board at a time. New strategy, same thirty-second game.',
        icon: 'game',
        status: 'live',
        url: 'https://trixo.games',
        gradient: 'from-violet-500 to-purple-600'
    },
    {
        id: 'squares',
        name: 'Squares',
        description: 'The classic dots-and-boxes game, online. Draw a line on each turn — whoever closes the most squares wins.',
        icon: 'grid',
        status: 'live',
        url: 'https://squares.vantumworks.io',
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        id: 'pass-pot-pocket',
        name: 'Pass Pot Pocket',
        description: 'A real-time, multiplayer dice game. Each roll sends a chip left, right, or to the pot — last player with chips wins. Play with 1–8 people, together in person or remote.',
        icon: 'dice',
        status: 'live',
        url: 'https://ppp.vantumworks.io',
        gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
        id: 'boom-snakes',
        name: 'Boom Snakes',
        description: 'A competitive two-player snake game — weave through the arena, dodge the bombs, and outsmart your rival to be the last one slithering. Play against the CPU, locally, or online, with more bombs the longer you last.',
        icon: 'bomb',
        status: 'live',
        url: 'https://boomsnakes.vantumworks.io',
        gradient: 'from-lime-500 to-green-600'
    },
    {
        id: 'bar-roster',
        name: 'Bar Roster',
        description: 'Staff your shifts in minutes. Bars and restaurants post open shifts; vetted staff claim them on demand.',
        icon: 'calendar',
        status: 'in-development',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 'buzzed-trivia',
        name: 'Buzzed Trivia',
        description: 'Live trivia for bars and events. An interactive experience that brings people together at venues, parties, and gatherings.',
        icon: 'zap',
        status: 'in-development',
        gradient: 'from-amber-500 to-orange-500'
    },
    {
        id: 'thread',
        name: 'Thread',
        description: 'Your life, remembered. Thread gathers your messages, calls, calendar, and email into an encrypted vault only your devices can unlock — then delivers a morning brief of what matters.',
        icon: 'thread',
        status: 'in-development',
        gradient: 'from-indigo-500 to-violet-600'
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
    link: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    ),
    zap: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    mic: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-14 0m7 7v4m-4 0h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
    ),
    grid: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
    ),
    chat: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
    ),
    users: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    thread: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 6.5c4.5-1.8 9.5-1.8 14 0c1 .4-7 1.5-7 4.5v6c0 2 2.8 2.2 3.8.8" />
        </svg>
    ),
    dice: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="2" />
            <circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="16" cy="16" r="1.3" fill="currentColor" stroke="none" />
        </svg>
    ),
    sparkles: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    ),
    book: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
    bomb: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="10" cy="15" r="6.5" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 10.5l3-3m0 0h-2.5m2.5 0v2.5" />
        </svg>
    ),
}

function ProductCard({ product, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-30px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="product-card hover:shadow-lg hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10 hover:-translate-y-1 flex flex-col h-full"
        >
            <div className={`product-card-icon bg-gradient-to-br ${product.gradient}`}>
                {icons[product.icon]}
            </div>
            <div className="flex items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{product.name}</h3>
                {product.status === 'live' ? (
                    <span className="badge-live">Live</span>
                ) : (
                    <span className="badge-coming-soon">In Development</span>
                )}
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{product.description}</p>
            {product.url && (
                <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm self-start group"
                >
                    Visit site
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            )}
        </motion.div>
    )
}

export default function Products() {
    return (
        <section id="products" className="py-20 md:py-32 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-heading dark:text-white">Our Products</h2>
                    <p className="section-subheading dark:text-slate-400">
                        Software for the things people do every day — across B2B tools, consumer utilities, and games.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
