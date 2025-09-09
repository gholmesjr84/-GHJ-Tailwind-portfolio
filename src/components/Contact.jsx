import React,{useState} from 'react'
export default function Contact(){
  const [sent,setSent]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [msg,setMsg]=useState('')
  const submit=e=>{e.preventDefault(); setSent(true)}
  return (
    <section id="contact" className="py-12" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2">
        <div>
          <h2 id="contact-heading" className="logo-font text-3xl text-deepplum dark:text-mustard">Contact</h2>
          <p className="mt-2 text-lg">Ready to collaborate? Tell me about your project, timeline, and usage. I typically reply within 24–48 hours.</p>
          
        </div>
        <div>
          {sent ? (
            <div role="status" aria-live="polite" className="card p-4 text-green-700 dark:text-green-400">
              Thanks, {name || 'friend'} — I’ll reply to {email || 'you'} soon.
            </div>
          ) : (
            <form onSubmit={submit} noValidate aria-describedby="contact-help" className="card p-4">
              <div id="contact-help" className="sr-only">All fields are required.</div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input id="name" required value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 dark:bg-neutral-900 dark:border-white/10"/>
              <label htmlFor="email" className="block text-sm font-medium mt-3">Email</label>
              <input id="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 dark:bg-neutral-900 dark:border-white/10"/>
              <label htmlFor="msg" className="block text-sm font-medium mt-3">Project details</label>
              <textarea id="msg" rows="4" required value={msg} onChange={e=>setMsg(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 dark:bg-neutral-900 dark:border-white/10"></textarea>
              <button type="submit" className="btn-brand mt-4">Send</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
