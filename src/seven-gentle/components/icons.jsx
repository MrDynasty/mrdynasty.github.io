const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function StandingIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="4.5" r="2.2" />
      <path d="M12 7v7" />
      <path d="M8 9.5l4 1.5 4-1.5" />
      <path d="M12 14l-2.5 7" />
      <path d="M12 14l2.5 7" />
    </svg>
  )
}

export function ChairIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 4h8v6H8z" />
      <path d="M10 6.5v3.5" />
      <path d="M14 6.5v3.5" />
      <path d="M6 10h12" />
      <path d="M7 10v10" />
      <path d="M17 10v10" />
    </svg>
  )
}

export function SeatedIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="8" cy="4.5" r="2" />
      <path d="M8 6.5V12h6" />
      <path d="M14 12v7" />
      <path d="M18 6v6" />
      <path d="M14 12h6" />
      <path d="M20 12v7" />
    </svg>
  )
}

export function ShieldIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3l7 3v5.5c0 4.4-3 7.3-7 8.8-4-1.5-7-4.4-7-8.8V6l7-3z" />
      <path d="M9 11.5l2 2 4-4" />
    </svg>
  )
}

export function DownloadIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3v12" />
      <path d="M7.5 10.5L12 15l4.5-4.5" />
      <path d="M5 20h14" />
    </svg>
  )
}

export function SpeakerIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 9.5v5h3.5L13 18V6L7.5 9.5H4z" />
      <path d="M16.5 9a4 4 0 010 6" />
      <path d="M19 6.5a7.5 7.5 0 010 11" />
    </svg>
  )
}

export function BellIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18 8.5a6 6 0 10-12 0c0 6-2.5 6.5-2.5 8.5h17c0-2-2.5-2.5-2.5-8.5z" />
      <path d="M10 20.5h4" />
    </svg>
  )
}

export function AlertIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3.5L22 20H2L12 3.5z" />
      <path d="M12 9.5v4.5" />
      <path d="M12 17.2v.1" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}
