import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-primary'>
            <div className='container mx-auto md:px-0 px-4 '>
                <div className='max-w-[854px] mx-auto text-center'>
                    <Link href="/" className="">
                        <Image src="/images/logo.png" alt="logo" width={160} height={70} className='object-contain flex max-w-[160px] mx-auto h-fit bg-white py-3 px-5 rounded-b-md' />
                    </Link>
                    <p className='text-sm font-normal text-white my-6'>
                        Turn every unboxing into a memorable moment with our eye-catching custom printed boxes, specially made only for you!
                    </p>
                </div>
                <ul className='py-[18px] flex flex-wrap gap-[30px] justify-center items-center border-y border-white/20'>
                    <li>
                        <Link href="/about-us" className='text-sm font-semibold text-white hover:text-[#55daa4] hover:underline'>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className='text-sm font-semibold text-white hover:text-[#55daa4] hover:underline'>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy/" className='text-sm font-semibold text-white hover:text-[#55daa4] hover:underline'>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/refund-policy/" className='text-sm font-semibold text-white hover:text-[#55daa4] hover:underline'>
                            Refund Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms-conditions/" className='text-sm font-semibold text-white hover:text-[#55daa4] hover:underline'>
                            Terms & Conditions
                        </Link>
                    </li>
                </ul>
                <div className='py-6'>
                    <Image src="/images/payment.png" alt='payment' width={426} height={65} className='object-contain flex max-w-[438px] mx-auto h-fit bg-white py-1 px-4 rounded-md' />
                </div>
                <p className='text-xs text-white text-center py-6'>
                    WE PRINT BOXES © 2026 All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer