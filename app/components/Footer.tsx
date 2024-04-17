import React from 'react'
import Image from 'next/image'
import BackgroundBeams from './BackgrroundBeams'

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral-950 text-yellow-600 h-[20rem] w-full relative flex flex-col items-center justify-center antialiased">
      <aside>
        <Image
          src="/images/dejibimbola_lg.png"
          className="m-4"
          width={100}
          height={100}
          alt="dejibimbola"
        />
        <p className="font-bold">Build with 🤍 BitSix Ltd.</p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col justify-center gap-4">
          {/* GitHub */}
          <a href="https://github.com/dejibimbolaAyo" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 6 6"
              className="fill-current"
            >
              <path d="M3.1.44a2.78 2.78 0 0 0-.87 5.41c.13.02.18-.06.18-.14v-.47c-.77.17-.93-.37-.93-.37-.13-.32-.31-.4-.31-.4-.26-.18.02-.17.02-.17.27.02.42.28.42.28.24.43.65.3.81.23a.6.6 0 0 1 .17-.37c-.61-.07-1.26-.3-1.26-1.36 0-.31.1-.56.29-.76a1 1 0 0 1 .03-.73s.23-.08.76.28a2.62 2.62 0 0 1 1.39 0c.53-.36.76-.28.76-.28a1 1 0 0 1 .03.73c.18.2.28.45.28.76 0 1.06-.65 1.29-1.26 1.36.1.08.19.25.19.51v.76c0 .08.04.17.18.14A2.78 2.78 0 0 0 3.1.44Z" />
            </svg>
          </a>
          {/* YouTube */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/dejibimbola/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 6 5"
              className="fill-current"
            >
              <path d="M5.28.06a.56.56 0 0 1 .55.56v3.89a.56.56 0 0 1-.55.55H1.39a.56.56 0 0 1-.55-.55V.62a.56.56 0 0 1 .55-.56h3.89Zm-.14 4.3V2.9a.9.9 0 0 0-.9-.9.8.8 0 0 0-.65.35v-.3h-.77v2.32h.77V3a.39.39 0 1 1 .77 0v1.37h.78ZM1.91 1.62a.47.47 0 0 0 .47-.47.47.47 0 1 0-.47.47Zm.39 2.76V2.04h-.77v2.33h.77Z" />
            </svg>
          </a>
        </div>
      </nav>
      <BackgroundBeams />
    </footer>
  )
}

export default Footer
