# Contact form setup (Resend → Gmail)

The contact form is implemented at `/contact`, and its Next.js API route is `/api/contact`. It sends enquiries **to `giofriggia@gmail.com`** using Resend's API. No Gmail password is needed.

## Activate delivery

1. Create a Resend account at https://resend.com and verify **a domain you own** for sending. Gmail addresses cannot normally be used as the `from` sender without a verified sending domain.
2. Generate a Resend API key.
3. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (e.g. `Portfolio <contact@yourdomain.com>`). Do not commit `.env.local`.
4. In Vercel, configure the same environment variables in Project Settings → Environment Variables, then redeploy.
5. Test with a real message and check Gmail (including Spam). The visitor's address is set as `reply_to`, so replying to the received email replies to the visitor.

**Important:** Until the variables and verified sending domain are configured, the form displays a clear delivery error and does not claim success. The contact page also displays the direct Gmail link as a fallback.

The API validates lengths and fields, escapes HTML, uses a hidden honeypot and checks the request origin. For public production use, add IP-based rate limiting and optionally Cloudflare Turnstile (especially if spam becomes an issue). A honeypot alone is not robust spam protection.
