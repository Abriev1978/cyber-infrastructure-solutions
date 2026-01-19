import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Server, Shield, Cloud, Network, Camera, Database } from "lucide-react";

export default function Services() {
  return (
    <>
      <NavBar />
      <main className="pt-24 px-6 py-20 max-w-7xl mx-auto text-slate-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Professional IT Services</h2>
        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-14">
          Enterprise-grade IT solutions delivered with hands-on expertise, security-first design,
          and a deep understanding of real-world business environments.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={<Server />} title="Enterprise Infrastructure" />
          <ServiceCard icon={<Cloud />} title="Azure & Hybrid Cloud" />
          <ServiceCard icon={<Shield />} title="Cybersecurity & Compliance" />
          <ServiceCard icon={<Network />} title="Networking & Cabling" />
          <ServiceCard icon={<Camera />} title="CCTV & Surveillance" />
          <ServiceCard icon={<Database />} title="Backup, DR & Business Continuity" />
        </div>
      </main>
      <Footer />
    </>
  );
}
