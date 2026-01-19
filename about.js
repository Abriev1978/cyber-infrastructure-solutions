import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <main className="pt-24 px-6 py-20 max-w-5xl mx-auto text-slate-100">
        <h2 className="text-3xl font-semibold mb-6">About the Founder</h2>
        <p className="text-slate-300 leading-relaxed">
          Abrie van der Walt is a senior IT professional with over 29 years of experience across
          enterprise and SME environments. With deep expertise in infrastructure, Microsoft Azure,
          Microsoft 365, cybersecurity, and IT operations management, Abrie is recognised for his
          hands-on leadership style and ability to align technology with real business outcomes.
        </p>
      </main>
      <Footer />
    </>
  );
}
