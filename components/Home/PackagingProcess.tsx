import Image from 'next/image'
import React from 'react'

const PackagingProcess = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto md:px-0 px-4'>
                <h2 className='md:text-[32px] md:leading-none text-2xl text-primary text-center font-extrabold mb-4'>
                    Our Packaging Process
                </h2>
                <p className='text-base leading-5 font-normal text-primary text-center max-w-[900px] mx-auto'>
                    Packaging should fit your product perfectly and reflect your brand. At We Print Boxes, we create custom printed boxes designed around your industry, product, and presentation goals. In a few easy steps, you can create your dream custom boxes with us.
                </p>
            </div>
            <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-6 mt-10 '>
                {[1, 2, 3, 4].map((item, idx) => (
                    <div key={idx} className='rounded-[18px] py-[25px] px-5 bg-primary border-b-6 border-Wp_Green'>
                        <Image src="/images/box.svg" alt='box' width={70} height={70} className='w-fit mx-auto mb-5' />
                        <h3 className='text-[22px] font-extrabold text-white text-center mb-4'>
                            Choose Box Style
                        </h3>
                        <p className='text-[15px] font-normal text-center text-white/80'>
                            Start by selecting the box style that suits your product best. From retail packaging to shipping boxes, we help you find the right structure. Pick the size, style, and features that match your brand perfectly.
                        </p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default PackagingProcess