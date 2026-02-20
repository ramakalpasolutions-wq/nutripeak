import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Nutripeak - Premium Nutrition Supplements',
  description: 'High-quality nutrition supplements for peak performance and wellness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Ads - gtag.js loader */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17948972523"
          strategy="afterInteractive"
        />

        {/* Google Ads - gtag init & config */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17948972523');
          `}
        </Script>

        {/* Google Ads - Page view conversion event */}
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17948972523/37UmCK-cp_obEOur3u5C',
              'value': 1.0,
              'currency': 'INR'
            });
          `}
        </Script>

      </body>
    </html>
  )
}
