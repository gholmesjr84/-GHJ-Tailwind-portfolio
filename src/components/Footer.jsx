import React from 'react'
import data from '../content/site.json'
export default function Footer(){
  return (
    <footer className="border-t border-mustard/40 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} <span className="logo-font">{data.site.artistName}</span></p>
        <nav aria-label="Footer">
          <ul className="flex gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#services">Commissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
