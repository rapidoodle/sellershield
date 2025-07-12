import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadLeadForm from "@/components/DownloadLeadForm";
import Image from "next/image";

export default function Home() {
  return (
    <><Navbar />
      <Head>
        <title>SellerShield – Amazon Crisis Experts</title>
        <meta name="description" content="Reinstate your Amazon listing fast with SellerShield." />
      </Head>

      <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-6">
        <section className="relative bg-slate-50 dark:bg-slate-900 py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('/bg-pattern.svg')] bg-cover bg-center" />

          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Amazon Suspended You? <br className="hidden md:inline" /> We’ll Fix It. Fast.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                SellerShield is the trusted partner for urgent reinstatements, listing violations, and hijacker enforcement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="text-base">📅 Book a Call</Button>
                <Button size="lg" className="text-base">📄 Get the Checklist</Button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/hero-support-illustration.png"
                alt="SellerShield Amazon Support"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "ASIN Reinstatement",
              desc: "We resolve EPA, medical, or policy takedowns fast.",
              image: "/images/asin-reinstatement.png", 
            },
            {
              title: "Account Suspension Recovery",
              desc: "Get back to selling with expert-led account appeals.",
              image: "/images/account-suspended.png", 
            },
            {
              title: "Brand Protection",
              desc: "We monitor hijackers, remove unauthorized sellers, and secure your listings.",
              image: "/images/brand-protection.png", 
            },
            {
              title: "Restricted Product Appeals",
              desc: "We help recover blocked listings flagged by Amazon.",
              image: "/images/appeal.png", 
            },
            {
              title: "IP Complaint Handling",
              desc: "False IP claims? We'll prepare and file the right appeals.",
              image: "/images/complaint-handling.png", 
            },
            {
              title: "Crisis Retainer Plans",
              desc: "On-call Amazon support when you need it most.",
              image: "/images/crisis-retainer.png", 
            },
          ].map(({ title, desc, image }, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              {image && <img src={image} alt={title} className="mb-4 w-full h-40 object-contain" />}
              <CardTitle>{title}</CardTitle>
              <p className="text-sm mt-2">{desc}</p>
            </CardContent>
          </Card>
          ))}
        </section>

        <section className="py-20 px-6 bg-slate-100 dark:bg-slate-800 rounded-xl mt-10 text-center">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Free Download */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Free Download</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Get our checklist: <br />
                <strong>“10 Reasons Amazon Suspends Listings (And How to Avoid Them)”</strong>
              </p>
              <DownloadLeadForm />
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center">Need Help? Reach Out</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
  <Footer />
    </>
  );
}