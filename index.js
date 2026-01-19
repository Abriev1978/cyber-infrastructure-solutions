import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-24 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Fast. Reliable. Professional <span className="text-cyan-400">IT Support</span>
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
          Cyber Infrastructure Solutions is your trusted IT infrastructure partner — delivering secure,
          scalable and resilient technology solutions for businesses across South Africa.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <Button className="rounded-2xl px-6 py-6 text-lg">Request a Consultation</Button>
          <Button variant="outline" className="rounded-2xl px-6 py-6 text-lg">View Services</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
