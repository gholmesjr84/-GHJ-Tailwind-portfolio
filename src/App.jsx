import React,{useEffect,useState,useRef} from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  const [theme,setTheme]=useState(()=>localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'))
  const searchRef=useRef(null)
  useEffect(()=>{const root=document.documentElement; if(theme==='dark')root.classList.add('dark'); else root.classList.remove('dark'); localStorage.setItem('theme',theme)},[theme])
  useEffect(()=>{const h=e=>{if(e.key==='t')setTheme(t=>t==='dark'?'light':'dark'); if(e.key==='/'&&!e.ctrlKey&&!e.metaKey){e.preventDefault(); searchRef.current?.focus()} if(e.altKey&&e.key.toLowerCase()==='g')document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'}); if(e.altKey&&e.key.toLowerCase()==='s')document.getElementById('services')?.scrollIntoView({behavior:'smooth'}); if(e.altKey&&e.key.toLowerCase()==='c')document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}; window.addEventListener('keydown',h); return()=>window.removeEventListener('keydown',h)},[])
  return(<><Navbar theme={theme} setTheme={setTheme} searchRef={searchRef}/><main id="main"><Hero/><About/><Gallery/><Services/><Contact/></main><Footer/></>)}
