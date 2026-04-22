import IndustrySlider from './IndustrySlider'
import Image from 'next/image'

const CustomIndustry = () => {
    return (
        <section className='py-10'>
            <div className='max-w-[994px] mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-4.5 items-center mb-[50px]'>
                <div className='bg-[#e9e7fa] py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/pricing.svg" alt='pricing' width={32} height={32} />
                    <h4 className='text-base font-medium text-primary'>
                        Competitive Pricing
                    </h4>
                </div>
                <div className='bg-[#f7d6de] py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/shipping.svg" alt='shipping' width={32} height={32} />
                    <h4 className='text-base font-medium text-primary'>
                        Free Shipping
                    </h4>
                </div>
                <div className='bg-[#f3e6d3] py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/turnaround.svg" alt='turnaround' width={32} height={32} />
                    <h4 className='text-base font-medium text-primary'>
                        Quick Turnaround Time
                    </h4>
                </div>
                <div className='bg-[#e3f1d9] py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/graphic.svg" alt='graphic' width={32} height={32} />
                    <h4 className='text-base font-medium text-primary'>
                        Free Graphic Designing
                    </h4>
                </div>
            </div>
            <div className='container mx-auto px-4'>
                <div className='w-full'>
                    <h2 className='md:text-[32px] text-2xl font-extrabold leading-tight text-primary text-center mb-4'>
                        Choose Your Custom Packaging Boxes Style
                    </h2>
                    <p className='text-base font-medium text-primary text-center max-w-[940px] mx-auto'>
                        We provide you the best packaging solutions with customized printed box service, which matches your industry and product specific needs. Get high-quality custom boxes with logo with a flexible and simple packaging process.
                    </p>
                </div>
            </div>
            <IndustrySlider />
        </section>
    )
}

export default CustomIndustry