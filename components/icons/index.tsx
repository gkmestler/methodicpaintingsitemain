// Simple line icons used in cards and lists. Stroke inherits currentColor.

const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export function EyeIcon() {
  return (
    <svg {...base}>
      <path d="M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24z" />
      <circle cx="24" cy="24" r="6" />
    </svg>
  )
}

export function CompassIcon() {
  return (
    <svg {...base}>
      <circle cx="24" cy="24" r="19" />
      <path d="M31 17l-4 10-10 4 4-10z" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg {...base}>
      <path d="M8 24h32M28 12l12 12-12 12" />
    </svg>
  )
}
