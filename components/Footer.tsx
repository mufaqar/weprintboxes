import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

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
            </div>
            <div className='bg-white py-[18px] border-y border-white/20'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between items-center'>
                    <ul className='flex flex-wrap gap-[30px] justify-start items-center'>
                        <li>
                            <Link href="tel:8005588047" className='flex items-center gap-1.5 text-sm text-desc hover:text-Wp_Green'>
                                <Image src="/images/telephone.svg" alt='telephone' width={20} height={20} />
                                800 558 8047
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:sales@weprintboxes.com" className='flex items-center gap-1.5 text-sm text-desc hover:text-Wp_Green'>
                                <Image src="/images/telegram.svg" alt='telegram' width={20} height={20} />
                                sales@weprintboxes.com
                            </Link>
                        </li>
                        <li>
                            <span className='flex items-center gap-1.5 text-sm text-desc hover:text-Wp_Green'>
                                <Image src="/images/loc.svg" alt='loc' width={20} height={20} />
                                145 Pine Haven Shores Road Suite 1000-24 Shelburne, VT 05482
                            </span>
                        </li>
                    </ul>
                    <ul className='flex flex-wrap gap-5 md:justify-end items-center'>
                        <li>
                            <Link href="#" className='text-lg w-[28px] h-[28px] rounded bg-[#1877f2] text-white flex items-center justify-center'>
                                <FaFacebookSquare />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-lg w-[28px] h-[28px] rounded bg-[#e4405f] text-white flex items-center justify-center'>
                                <FaInstagramSquare />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-xs text-white text-center py-6'>
                WE PRINT BOXES © 2026 All rights reserved
            </p>

        </footer>
    )
}

export default Footer