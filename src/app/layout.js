import './globals.css'

export const metadata = {
  title: 'Nutripeak - Premium Nutrition Supplements',
  description: 'High-quality nutrition supplements for peak performance and wellness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
