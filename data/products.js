/**
 * Vantum Works Product Catalog
 * 
 * This file contains all product information for the website.
 * Update this file to modify product listings without touching HTML.
 */

const PRODUCTS = [
    {
        id: 'bar-roster',
        name: 'Bar Roster',
        description: 'A platform that helps bars and restaurants quickly find reliable staff for shifts, events, and last-minute needs.',
        icon: 'calendar',
        status: 'coming-soon',
        color: 'from-orange-500 to-red-500'
    },
    {
        id: 'trixo',
        name: 'TriXO',
        description: 'A fresh twist on tic-tac-toe where players can only place three markers at a time, adding strategy and new ways to win.',
        icon: 'game',
        status: 'launched',
        color: 'from-violet-500 to-purple-600'
    },
    {
        id: 'care-connect',
        name: 'Care Connect',
        description: 'A service that helps families find trusted caregivers and service providers that fit their needs and schedules.',
        icon: 'heart',
        status: 'coming-soon',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'link-shrink',
        name: 'Link Shrink',
        description: 'A simple tool to shorten links, create QR codes, and track how and where links are used.',
        icon: 'link',
        status: 'coming-soon',
        color: 'from-cyan-500 to-blue-500'
    },
    {
        id: 'guest-lists',
        name: 'Guest Lists',
        description: 'An easy way for hosts and organizers to manage guest lists, sign-ups, and referrals for events.',
        icon: 'users',
        status: 'coming-soon',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        id: 'buzzed-trivia',
        name: 'Buzzed Trivia',
        description: 'A fun, interactive trivia experience designed to bring people together at bars, events, and social gatherings.',
        icon: 'zap',
        status: 'launched',
        color: 'from-amber-500 to-orange-500'
    },
    {
        id: 'strand',
        name: 'Strand',
        description: 'An app that helps people better understand their relationships by revealing patterns and insights from their conversations.',
        icon: 'message',
        status: 'coming-soon',
        color: 'from-indigo-500 to-blue-600'
    }
];

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS;
}
