import ScrollContent from '@/components/About/ScrollContent'
import Banner from '@/components/Banner'

const pageInfo = {
    title: " Who We Are – Custom Packaging Experts",
    desc: "  At We Print Boxes, we specialize in high-quality custom boxes and packaging solutions designed to protect products, strengthen brand identity, and help businesses stand out in competitive markets.",
}
export default function AboutUs() {
    return (
        <main>
            <Banner data={pageInfo} />
            <ScrollContent />
        </main>
    )
}


