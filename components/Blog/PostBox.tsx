import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa'

const PostBox = ({ data }: any) => {
    return (
        <div className='bg-white h-full flex flex-col rounded-2xl gap-4 shadow-[0_10px_25px_rgb(0,0,0,0.05)] hover:shadow-[0_25px_35px_-16px_rgb(0,40,60,0.2)] hover:-translate-y-0.75 group transition-all ease-in-out duration-300'>
            <Image src={`${data.img}`}
                alt="feature"
                width={385}
                height={218}
                className='object-cover object-center w-full h-full rounded-t-2xl' />
            <div className='pt-3 md:pb-8 px-2 sm:px-4'>
                <Link href={`/blog/${data?.slug}`} className='text-sm sm:text-lg xl:text-xl font-semibold text-title text-center md:text-left  mt-3'>
                    {data?.title}
                </Link>
                <div className='flex items-center justify-between gap-2 my-5'>
                    <p className='text-sm flex items-center gap-1'>
                        <FaUser />  We Print Boxes
                    </p>
                    <p className='text-sm flex items-center gap-1'>
                        <FaCalendar />   May 07, 2024
                    </p>
                </div>
                <p className='text-sm xl:text-base line-clamp-2'>
                    {data?.excerpt}
                </p>
                <Link href={`/blog/${data?.slug}`} className='text-[15px] font-semibold text-title group-hover:text-white bg-white group-hover:bg-primary border border-Wp_border flex items-center mt-5 w-fit gap-2 px-6 py-3 rounded-[50px]'>
                    Read More <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default PostBox