import Banner from "@/components/Banner";
import RequestQuote from "@/components/Home/RequestQuote";
import ScrollContent from "@/components/Home/ScrollContent";
import ProductBox from "@/components/products/ProductBox";
import { notFound } from "next/navigation";

const categories = [
    { slug: "corrugated-boxes", title: "Corrugated Boxes" },
    { slug: "fashion", title: "Fashion" },
];

const pageInfo = {
    title: "Custom Mailer Boxes",
    desc: "Enhance your brand's presence with custom printed mailer boxes that are both durable and eco-friendly. Designed to securely ship your products, these boxes offer fast delivery across the USA. Get a free quote today and elevate your packaging experience!",
}
export default async function CategoryPage({ params }: any) {
    const { slug } = await params; // ✅ FIX HERE

    const category = categories.find((cat) => cat.slug === slug);

    if (!category) return notFound();

    return (
        <main>
            <Banner data={pageInfo} />
            <section className="py-16">
                <div className="container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-5">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any, idx: number) => {
                        return <ProductBox key={idx} data="" />
                    })}
                </div>
            </section>
            <ScrollContent />
            <RequestQuote />
        </main>
    );
}