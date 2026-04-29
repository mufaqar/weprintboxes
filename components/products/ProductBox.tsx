import Image from 'next/image'
import Link from 'next/link'

const ProductBox = ({ data }: any) => {
  return (
    <div className='px-2 group transition-all duration-400 ease-[cubic-bezier(.175,.885,.32,1.275)]'>
      <div className='rounded-[20px] overflow-hidden bg-white p-5 border border-Wp_border shadow-[0_15px_30px_rgb(56,56,130,0.05)] hover:shadow-[0_15px_30px_rgb(56,56,130,.15)] relative before:content-[""] before:absolute before:w-full before:h-1 before:bottom-0 before:rounded-b-xl before:left-0 before:right-0 before:bg-gradient-to-r before:from-primary before:to-Wp_Green before:scale-x-0 group-hover:before:scale-x-100 before:transition-all before:duration-400'>
        <div className='rounded-[20px]'>
          <Image src="/images/pro1.jpg" alt='feature' width={229} height={234} className='w-full rounded-[20px] group-hover:scale-105 transition-all duration-400 ease-[cubic-bezier(.175,.885,.32,1.275)]' />
        </div>
        <div className='pt-2.5'>
          <Link href="/product/corrugated-mailer-boxes" className='text-lg md:text-base lg:text-lg font-semibold text-center text-primary group-hover:text-Wp_Green flex w-full justify-center items-center'>
            Candle Boxes
          </Link>
        </div>
        <button className='text-xs font-semibold text-center uppercase text-primary hover:text-white bg-transparent hover:bg-primary border-2 border-primary rounded-lg py-2.5 px-6 flex w-fit mx-auto mt-2.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300'>
          Get a Quote
        </button>
      </div>
    </div>
  )
}

export default ProductBox;