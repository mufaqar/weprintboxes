'use client'

import { useRef } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import CategoryBox from '../Category/CategoryBox'
import Image from 'next/image'

const TestimonialSlider = () => {
    const sliderRef = useRef<any>(null)

    const goNext = () => {
        sliderRef.current?.slickNext()
    }

    const goPrev = () => {
        sliderRef.current?.slickPrev()
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false, // IMPORTANT: disable default arrows
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    }
    return (
        <section className='pb-16'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
                    What Our Clients Say?
                </h2>
            </div>
            <div className='container mx-auto px-4 mt-6'>
                <div className=''>
                    <Slider ref={sliderRef} {...settings}>
                        {[1, 2, 3, 4, 5].map((item, idx) => (
                            <div key={idx} className='px-2 sm:px-2.5 h-full'>
                                <div className='rounded-xl px-6 py-5 relative h-full bg-white border border-black/10 hover:border-[#92d050] shadow-[0_4px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_6px_18px_rgb(0,0,0,0.18)] transition-all ease-in-out duration-300'>
                                    <div className='flex items-center gap-2'>
                                        <Image src="/images/author.svg" alt='author' width={50} height={50} className='h-[50px] w-[50px] rounded-full object-cover' />
                                        <div>
                                            <h3 className='text-base leading-none text-title font-semibold'>
                                                Patrick Rice
                                            </h3>
                                            <p className='text-[15px] leading-none text-desc'>
                                                USA
                                            </p>
                                            <ul className='flex gap-0.5 items-center'>
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <li key={i} className={`text-sm text-yellow-400`}>
                                                        <FaStar />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Image src="/images/qoute.svg" alt='qoute' width={50} height={50} className='h-[30px] w-[30px]' />
                                    </div>
                                    <div>
                                        <p className='text-[15px] leading-normal text-desc font-normal mt-4'>
                                            I finding sturdy cardboard boxes for small products that I sell and it went really well for me to choose We Print Boxes. They have a good variety of styles and materials that helped me to find packaging that actually fits my brand. Their team made the process smooth and patiently answered all my questions. In the end, I got custom printed boxes that look clean, professional and perfect for my products.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSlider