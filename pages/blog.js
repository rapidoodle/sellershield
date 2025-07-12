import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    title: "How to Reinstate an ASIN Suspended for EPA or Medical Claims",
    href: "/blogs/how-to-reinstate-asin",
    description: "Step-by-step guide to restoring suspended Amazon ASINs due to compliance or keyword issues.",
  },
  {
    title: "How to Remove Unauthorized Sellers from Your Amazon Listing",
    href: "/blogs/unauthorized-seller-enforcement",
    description: "Learn how to report and remove hijackers from your Amazon listings.",
  },
  {
    title: "How to Write a Winning Amazon Account Suspension Appeal",
    href: "/blogs/amazon-account-suspension-appeal",
    description: "Follow this guide to write an effective POA and reinstate your Amazon account fast.",
  },
  {
    title: "What to Do If Your Product Is Flagged as a Pesticide on Amazon",
    href: "/blogs/listing-flagged-for-pesticide",
    description: "Fix listings wrongly flagged by Amazon for pesticide claims, step by step.",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>SellerShield Blog</title>
        <meta
          name="description"
          content="Amazon crisis management articles, tips, and how-tos from SellerShield."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Navbar />

        <main className="max-w-5xl mx-auto py-20 px-6">
          <h1 className="text-5xl font-bold text-center mb-4">📘 SellerShield Blog</h1>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Actionable guides and advice for Amazon sellers dealing with suspensions, violations, and policy risks.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:underline">{article.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{article.description}</p>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}