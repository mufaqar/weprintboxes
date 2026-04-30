import Banner from '@/components/Banner'
import ScrollContent from '@/components/Home/ScrollContent'

const pageInfo = {
  title: "Privacy Policy",
  desc: "We Print Boxes is dedicated to protecting your privacy and securing your data. Our Privacy Policy delineates the nature of the personal data we gather, our methods for employing it, and the security protocols we have in place to protect your information when you engage with our website or leverage our services.",
}
export default function PrivacyPolicy() {
  return (
    <main className='bg-background'>
      <Banner data={pageInfo} />
      <ScrollContent />
    </main >
  )
}


