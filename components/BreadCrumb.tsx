import Link from 'next/link'

const BreadCrumb = ({ title }: any) => {
    return (
        <ul className='text-sm font-semibold text-primary uppercase flex items-center gap-1 py-2'>
            <li>
                <Link href="/" className='hover:text-Wp_Green'>
                    Home
                </Link>
            </li>
            <li>
                /
            </li>
            <li>
                <span>
                    {title}
                </span>
            </li>
        </ul>
    )
}

export default BreadCrumb