import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductDemo from "@/components/ProductDemo";
import Quote from "@/components/Quote";

export default function Main(){
  return (
    <>
      <Navbar/>
      <section className="lg:min-h-[90vh] flex flex-col justify-center items-center py-8 md:py-24 px-2 md:px-0">
        <Hero/>
      </section>
      <section className="py-4 md:py-10 px-2 md:px-0">
        <Quote/>
      </section>
      <section className="py-6 md:py-15 px-2 md:px-0">
        <ProductDemo/>
      </section>
      <section className="py-6 md:py-15 px-2 md:px-0">
        <Features/>
      </section>
    </>
  )
}