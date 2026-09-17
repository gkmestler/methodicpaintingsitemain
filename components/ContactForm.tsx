'use client'

import { useState, type FormEvent } from 'react'
import { validateContact, type ContactFields } from '@/lib/contact'
import styles from './ContactForm.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const emptyFields: ContactFields = {
  name: '',
  company: '',
  town: '',
  phone: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields)
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFields, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')

  const update = (field: keyof ContactFields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [field]: event.target.value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setServerError('')

    const validation = validateContact(fields)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, website: honeypot }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        if (data.errors) setErrors(data.errors)
        setServerError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setServerError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successTitle}>Thanks, we&apos;ll be in touch within one business day.</p>
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Field id="name" label="Name" value={fields.name} onChange={update('name')} error={errors.name} required autoComplete="name" />
        <Field id="company" label="Company" value={fields.company} onChange={update('company')} error={errors.company} required autoComplete="organization" />
      </div>
      <div className={styles.row}>
        <Field id="town" label="Town" value={fields.town} onChange={update('town')} error={errors.town} required autoComplete="address-level2" />
        <Field id="phone" label="Phone" value={fields.phone} onChange={update('phone')} error={errors.phone} type="tel" autoComplete="tel" />
      </div>
      <Field id="email" label="Email" value={fields.email} onChange={update('email')} error={errors.email} required type="email" autoComplete="email" />

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Tell us about your business <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          value={fields.message}
          onChange={update('message')}
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      </div>

      {serverError && (
        <p className={styles.serverError} role="alert">
          {serverError}
        </p>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? 'Sending' : 'Send'}
        </button>
      </div>
    </form>
  )
}

type FieldProps = {
  id: keyof ContactFields
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  type?: string
  autoComplete?: string
}

function Field({ id, label, value, onChange, error, required, type = 'text', autoComplete }: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  )
}
