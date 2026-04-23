import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

const JourneySection = () => {
    return (
        <section className='py-10'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5'>
                <div className="bg-gradient-to-br from-[#0a8edb] to-[#0769a7] md:p-10 rounded-[22px] flex md:flex-row flex-col">
                    <div className='md:w-3/5 w-full'>
                        <h3 className='md:text-[32px] md:leading-[1.2] text-2xl font-extrabold text-white mb-4'>
                            Start Your Packaging
                        </h3>
                        <p className='text-base font-normal text-white max-w-[420px] mb-8'>
                            Tell us about your Packaging requirement, like box style, Box size, Quantity, etc. Get in touch with our Product specialist now!
                        </p>
                        <ul className='space-y-5'>
                            <li>
                                <Link href="#" className='text-lg font-bold text-white flex gap-3 items-center'>
                                    <span className='text-xl bg-white rounded-full text-primary w-11 h-11 flex items-center justify-center'>
                                        <FaPhoneVolume />
                                    </span> 800 558 8047
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='text-lg font-bold text-white flex gap-3 items-center'>
                                    <span className='text-2xl bg-white rounded-full text-[#67C15E] w-11 h-11 flex items-center justify-center'>
                                        <IoLogoWhatsapp />
                                    </span> 800 558 8047
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-2/5 w-full'>
                        <Image src="/images/pack-journey.png" alt='pack-journey' width={260} height={403} />
                    </div>
                </div>
                <div className="bg-[linear-gradient(135deg,#ffeb3b_0%,#fdd835_100%)] md:p-10 rounded-[22px] flex md:flex-row flex-col">
                    <div className='md:w-3/5 w-full'>
                        <h3 className='md:text-[32px] md:leading-[1.2] text-2xl font-extrabold text-title mb-4'>
                            Perfect Packaging every time!
                        </h3>
                        <h2 className='text-[64px] leading-none font-extrabold text-primary'>
                            20%
                        </h2>
                        <p className='text-2xl font-bold tracking-[2px] uppercase text-primary mb-3.5'>
                            FREE SHIPPING
                        </p>
                        <p className='text-base font-medium text-title mb-6'>
                            Savings you don't want to miss!
                        </p>
                        <Link href="#" className='text-[13px] font-semibold uppercase text-center text-white bg-primary hover:bg-prim_hovr rounded-lg py-3 px-6 inline-flex transform translate-y-0 hover:-translate-y-0.5 transition-all ease-in-out duration-300'>
                            REQUEST A QUOTE
                        </Link>
                    </div>
                    <div className='md:w-2/5 w-full'>
                        <Image src="/images/kalimist.png" alt='kalimist' width={260} height={403} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JourneySection