import Link from 'next/link'

const Banner = ({data}:any) => {
    return (
        <section className='pt-16'>
            <div className='container mx-auto px-4 banner flex flex-col justify-center items-center'>
                <ul className='text-base font-medium uppercase flex items-center gap-1.5 z-3'>
                    <li>
                        <Link href="/" className='text-white hover:text-Wp_Green'>
                            Home
                        </Link>
                    </li>
                    <li className='text-white'>/</li>
                    <li className='text-white'>{data?.title}</li>
                </ul>
                <h1 className='md:text-4xl text-2xl font-extrabold text-white text-center mb-4'>
                   {data?.title}
                </h1>
                <p className='text-base font-normal text-white text-center max-w-[900px] mx-auto'>
                  {data?.desc}
                </p>
            </div>
        </section>
    )
}

export default Banner