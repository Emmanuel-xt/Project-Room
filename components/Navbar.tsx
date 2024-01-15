import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-3 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src='/pic.webp' width={55} height={40} alt='JSM logo' className='rounded-full' />
        </Link>

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-white-800 !font-bold">
            <Link
              href="https://github.com/Emmanuel-xt"
              target="_blank"
              >
          <Image src='/github.png' width={55} height={55} alt='JSM logo' className='rounded-full ' />
                GitHub
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar