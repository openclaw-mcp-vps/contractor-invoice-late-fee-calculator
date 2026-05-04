import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Late Fee Calculator | Auto-Calculate Late Payment Fees',
  description: 'Track invoice due dates and automatically calculate late fees based on your contract terms and local laws. Built for freelancers and small agencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3fffe263-d079-45b4-b6fe-ac728ebec0da"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
