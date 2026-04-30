import Banner from '@/components/Banner'
import ScrollContent from '@/components/Home/ScrollContent'

const pageInfo = {
  title: "Refund Policy",
  desc: "At We Print Boxes, our commitment to customer satisfaction is paramount. As part of our dedication to providing exceptional service, we have established a comprehensive refund policy to address any issues that may necessitate reimbursement. Below is a detailed explanation of our refund policy.",
}
export default function RefundPolicy() {
  return (
    <main className='bg-background'>
      <Banner data={pageInfo} />
      <ScrollContent />
    </main >
  )
}


