import Link from 'next/link'
import { BsLayoutSidebar } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuLayers } from 'react-icons/lu'

const WhyChoose = () => {
    return (
        <section>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-10 items-center justify-between'>
                <div className='why_us md:w-2/5 w-full'>
                    <h2 className='font-extrabold text-title mb-4'>
                        Why Choose Us
                    </h2>
                    <p>
                        We Print Boxes is a leading USA-based provider of custom printed boxes, helping businesses across the country create premium packaging solutions that stand out. Our mission is simple: to offer affordable, high-quality custom boxes tailored to your brand and business needs.
                    </p>

                    <p>
                        With over 1,000 satisfied customers nationwide, many of whom are repeat clients, we’ve earned a reputation for reliable and visually appealing packaging. Whether you need retail packaging, eCommerce boxes, rigid boxes, cosmetics packaging, or food product boxes, our team ensures every box is made with care and precision.
                    </p>

                    <p>
                        From design support to production and finishing, we keep the process straightforward and hassle-free. Plus, with FREE shipping across the USA, getting your custom boxes has never been easier.
                    </p>

                    <p>
                        Partner with We Print Boxes today to elevate your packaging, strengthen your brand identity, and impress your customers with every shipment.
                    </p>
                    <Link href="/about-us" className='text-lg font-semibold text-primary hover:text-primary flex items-center gap-2 hover:gap-3.5 transition-all ease-in-out duration-300'>
                        More About us <FaArrowRightLong />
                    </Link>
                </div>
                <div className='md:w-3/5 w-full grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[63%_37%_54%_46%/36%_42%_58%_64%] bg-[#d3e3f5] w-[64px] h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsLayoutSidebar size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                High-End Quality
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Offset + digital · 175lpi · crisp & consistent
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[63%_37%_54%_46%/36%_42%_58%_64%] bg-[#d3e3f5] w-[64px] h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <LuLayers size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                Exclusive Finishing
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Soft-touch, foil, emboss, spot UV
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[63%_37%_54%_46%/36%_42%_58%_64%] bg-[#d3e3f5] w-[64px] h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsLayoutSidebar size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                High-End Quality
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Offset + digital · 175lpi · crisp & consistent
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[63%_37%_54%_46%/36%_42%_58%_64%] bg-[#d3e3f5] w-[64px] h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsLayoutSidebar size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                High-End Quality
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Offset + digital · 175lpi · crisp & consistent
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[63%_37%_54%_46%/36%_42%_58%_64%] bg-[#d3e3f5] w-[64px] h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsLayoutSidebar size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                High-End Quality
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Offset + digital · 175lpi · crisp & consistent
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[63%_37%_54%_46%/36%_42%_58%_64%] bg-[#d3e3f5] w-[64px] h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsLayoutSidebar size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                High-End Quality
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Offset + digital · 175lpi · crisp & consistent
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose