import Banner from '@/components/Banner'
import ScrollContent from '@/components/Home/ScrollContent'

const pageInfo = {
    title: "Terms & Conditions",
    desc: "Welcome to We Print Boxes! The guidelines for using our website, goods, and services are described in these Terms and Conditions. Before accessing our website or services, please carefully read these Terms & Conditions.",
}
export default function TermsAndConditions() {
    return (
        <main className='bg-background'>
            <Banner data={pageInfo} />
            <ScrollContent />
        </main >
    )
}