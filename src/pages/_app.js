import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Router from 'next/router'

import * as gtag from "../lib/analytics"

export default function App({ Component, pageProps }) {
	Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))
  return (
    <div className="antialiased">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <Component {...pageProps} />
					<div>
						<div className="p-5 text-center">
							<h1 className="h-4 p-6 m-3 text-gray-700">Special thanks to the folks at <a href="https://tailwindcss.com" className="text-yellow-400 hover:text-yellow-500">TailwindCSS</a> for the inspiration 🥂</h1>
						</div>
					</div>
        </main>
      </SectionContainer>
    </div>
  )
}
