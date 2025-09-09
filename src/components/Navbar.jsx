import React from 'react'
import data from '../content/site.json'
export default function Navbar({theme,setTheme,searchRef}){
  return (<header role="banner" className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10 dark:bg-neutral-900/80 dark:border-white/10">
    <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4" aria-label="Primary">
      <a href="#main" className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-pumpkin"></span><strong className="logo-font text-deepplum dark:text-mustard">{data.site.artistName}</strong></a>
      <ul className="ml-auto hidden sm:flex gap-4 font-semibold"><li><a className="hover:underline" href="#about">About</a></li><li><a className="hover:underline" href="#gallery">Gallery</a></li><li><a className="hover:underline" href="#services">Commissions</a></li><li><a className="hover:underline" href="#contact">Contact</a></li></ul>
      <form role="search" className="ml-2" onSubmit={e=>e.preventDefault()} aria-label="Site search"><label htmlFor="q" className="sr-only">Search</label><input id="q" ref={searchRef} type="search" placeholder="Search ( / )" className="rounded-xl border border-black/10 px-3 py-2 text-sm dark:bg-neutral-900 dark:border-white/10"/></form>
      <button className="btn-outline ml-2" aria-pressed={theme==='dark'} aria-label="Toggle theme" title="Toggle theme (t)" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?'Light':'Dark'} mode</button>
    </nav></header>)
}
