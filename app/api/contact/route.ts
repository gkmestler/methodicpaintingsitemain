import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateContact, type ContactFields } from '@/lib/contact'

const MAX_LENGTH = 5000

function clean(value: unknown, max = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: real users never see or fill this field
  if (clean(body.website)) {
    return NextResponse.json({ error: 'Submission rejected.' }, { status: 400 })
  }

  const fields: ContactFields = {
    name: clean(body.name),
    company: clean(body.company),
    town: clean(body.town),
    phone: clean(body.phone),
    email: clean(body.email),
    message: clean(body.message, MAX_LENGTH),
  }

  const errors = validateContact(fields)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Please check the form and try again.', errors }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !to || !from) {
    console.error('Contact form is missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL')
    return NextResponse.json({ error: 'The contact form is not configured yet.' }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const text = [
    `Name: ${fields.name}`,
    `Company: ${fields.company}`,
    `Town: ${fields.town}`,
    `Phone: ${fields.phone || 'Not provided'}`,
    `Email: ${fields.email}`,
    '',
    'About the business:',
    fields.message,
  ].join('\n')

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: fields.email,
    subject: `New inquiry from ${fields.company} (${fields.town})`,
    text,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'We could not send your message. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
