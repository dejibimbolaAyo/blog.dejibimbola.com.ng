import Link from 'next/link'
import dejibimbolaLogo from './../img/dejibimbola-logo.png'
import dejibimbolaMark from './../img/dejibimbola-mark.png'

function DejibimbolaMark({ className }) {
  return (
    <img className={className} src={dejibimbolaMark} fill="none" viewBox="0 0 55 33"/>
  )
}

function DejibimbolaLogo({ className }) {
  return (
    <img className={className} src={dejibimbolaLogo} fill="none" viewBox="0 0 270 33"/>
  )
}

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <a aria-label="Dejibimbola Blog">
            <DejibimbolaMark className="px-5 h-14 sm:hidden" />
            <DejibimbolaLogo className="hidden h-14 sm:block" />
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a href="https://dejibimbola.com.ng" className="font-medium text-gray-500 hover:text-gray-700">
          Portfolio &rarr;
        </a>
      </div>
    </header>
  )
}
