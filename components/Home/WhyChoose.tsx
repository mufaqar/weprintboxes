import Link from 'next/link'
import { BsClock, BsEye, BsLayoutSidebar, BsLayoutThreeColumns } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuLayers } from 'react-icons/lu'
import { TbShieldDollar } from 'react-icons/tb'

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
                        <div className="text-primary rounded-[63%_37%_54%_46%/36%_42%_58%_64%] bg-[#d3e3f5] min-w-[64px] min-h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
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
                        <div className="text-primary rounded-[41%_59%_34%_66%/59%_35%_65%_41%] bg-[#f0dbd0] min-w-[64px] min-h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
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
                        <div className="text-primary rounded-[73%_27%_57%_43%/28%_57%_43%_72%] bg-[#d7e6d7] min-w-[64px] min-h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsClock size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                Free & Fast Delivery
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Free shipping to US · 3–5 days standard · express available.
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[44%_56%_68%_32%/48%_34%_66%_52%] bg-[#d4c9f3e8] min-w-[64px] min-h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsEye size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                Free Design Support
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Dyeline, file check, mockups, creative help with always zero cost.
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[65%_35%_47%_53%/53%_49%_51%_47%] bg-[#d5cbb3cc] min-w-[64px] min-h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <BsLayoutThreeColumns size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                Custom Size & Shape
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                Any dimension, die-cut mailer, rigid box, or display.
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[28px] py-6 px-4 border border-Wp_border flex items-center gap-4 shadow-[0_10px_28px_-12px_rgb(0,0,0,0.6)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 transition-all ease-in-out duration-300'>
                        <div className="text-primary rounded-[38%_62%_43%_57%/51%_44%_56%_49%] bg-[#cddf8abd] min-w-[64px] min-h-[64px] flex items-center justify-center shadow-[0_16px_24px_-12px_rgb(0,0,0,0.2)]">
                            <TbShieldDollar size={36} />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-title mb-3'>
                                No Minimum Order
                            </h4>
                            <p className='text-[15px] leading-normal text-title font-normal'>
                                No limits, no minimums just easy ordering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose