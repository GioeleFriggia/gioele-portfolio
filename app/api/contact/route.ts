import {NextRequest,NextResponse} from 'next/server';
export const runtime='nodejs';
const allowed=['Project enquiry','Job opportunity','Collaboration','Other'];
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(value:unknown,max:number){return typeof value==='string'?value.trim().slice(0,max+1):''}
function escapeHtml(value:string){return value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]||c));}
export async function POST(request:NextRequest){
 try{
  const contentLength=Number(request.headers.get('content-length')||0);
  if(contentLength>12000)return NextResponse.json({error:'Message is too large.'},{status:413});
  const origin=request.headers.get('origin');
  if(origin&&origin!==request.nextUrl.origin)return NextResponse.json({error:'Invalid request origin.'},{status:403});
  const data=await request.json();
  if(!data||typeof data!=='object'||Array.isArray(data))return NextResponse.json({error:'Invalid request.'},{status:400});
  if(clean(data.website,100))return NextResponse.json({ok:true}); // spam honeypot
  const name=clean(data.name,100),email=clean(data.email,254),subject=clean(data.subject,60),message=clean(data.message,5000);
  if(name.length<2||name.length>100||email.length>254||!emailPattern.test(email)||!allowed.includes(subject)||message.length<10||message.length>5000){return NextResponse.json({error:'Please check the form fields and try again.'},{status:400});}
  const key=process.env.RESEND_API_KEY;
  const from=process.env.CONTACT_FROM_EMAIL;
  if(!key||!from){console.error('Contact form not configured: missing RESEND_API_KEY or CONTACT_FROM_EMAIL');return NextResponse.json({error:'Contact form is temporarily unavailable.'},{status:503});}
  const html=`<h2>New portfolio enquiry</h2><p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Subject:</b> ${escapeHtml(subject)}</p><p><b>Message:</b></p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:['giofriggia@gmail.com'],reply_to:email,subject:`Portfolio: ${subject}`,html})});
  if(!response.ok){console.error('Resend contact delivery failed',response.status,await response.text());return NextResponse.json({error:'Unable to send your message right now.'},{status:502});}
  return NextResponse.json({ok:true});
 }catch(err){console.error('Contact route error',err);return NextResponse.json({error:'Unable to process your message.'},{status:400});}
}
