// Shared between the contact form and the API route so client and server
// validate the same fields the same way.

export type ContactFields = {
  name: string
  company: string
  town: string
  phone: string
  email: string
  message: string
}

export const requiredFields: (keyof ContactFields)[] = ['name', 'company', 'town', 'email', 'message']

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(fields: Partial<ContactFields>): Partial<Record<keyof ContactFields, string>> {
  const errors: Partial<Record<keyof ContactFields, string>> = {}

  for (const field of requiredFields) {
    if (!fields[field] || !fields[field]?.trim()) {
      errors[field] = 'This field is required.'
    }
  }

  if (fields.email && !emailPattern.test(fields.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}
