"use client";
import {useState, type FormEvent} from 'react';

type FormFields = {name:string;email:string;subject:string;message:string;website:string};
const initial:FormFields={name:'',email:'',subject:'Project enquiry',message:'',website:''};
export default function ContactForm(){
 const [fields,setFields]=useState<FormFields>(initial);
 const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
 const [error,setError]=useState('');
 const update=(key:keyof FormFields,value:string)=>{setFields(old=>({...old,[key]:value}));if(status!=='sending')setStatus('idle')};
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(status==='sending')return;
  setStatus('sending');setError('');
  try{
   const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(fields)});
   const result=await response.json().catch(()=>({}));
   if(!response.ok)throw new Error(result.error||'Something went wrong. Please try again.');
   setFields(initial);setStatus('success');
  }catch(err){setStatus('error');setError(err instanceof Error?err.message:'Unable to send your message.');}
 }
 return <form className="gf-contact-form" onSubmit={submit}>
  <div className="gf-contact-two">
   <label>YOUR NAME <input name="name" value={fields.name} onChange={e=>update('name',e.target.value)} required minLength={2} maxLength={100} autoComplete="name" placeholder="Your name"/></label>
   <label>EMAIL ADDRESS <input name="email" type="email" value={fields.email} onChange={e=>update('email',e.target.value)} required maxLength={254} autoComplete="email" placeholder="you@example.com"/></label>
  </div>
  <label>WHAT'S THIS ABOUT? <select name="subject" value={fields.subject} onChange={e=>update('subject',e.target.value)}><option>Project enquiry</option><option>Job opportunity</option><option>Collaboration</option><option>Other</option></select></label>
  <label>YOUR MESSAGE <textarea name="message" rows={7} value={fields.message} onChange={e=>update('message',e.target.value)} required minLength={10} maxLength={5000} placeholder="Tell me about your project or opportunity..."/></label>
  <div className="gf-contact-hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={e=>update('website',e.target.value)}/></label></div>
  <div className="gf-contact-form-bottom"><button type="submit" disabled={status==='sending'}>{status==='sending'?'SENDING...':'SEND MESSAGE'} <span>↗</span></button><span>I'll get back to you as soon as I can.</span></div>
  {status==='success'&&<p className="gf-contact-success" role="status">Message sent successfully. Thank you for reaching out!</p>}
  {status==='error'&&<p className="gf-contact-error" role="alert">{error} You can also email me at <a href="mailto:giofriggia@gmail.com">giofriggia@gmail.com</a>.</p>}
 </form>
}
