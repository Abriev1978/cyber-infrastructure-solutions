import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <>
      <NavBar />
      <main className="pt-24 px-6 py-20 max-w-6xl mx-auto text-slate-100">
        <h2 className="text-3xl font-semibold mb-10 text-center">Experience & Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl bg-slate-900/80">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Founder & Technical Director</h3>
              <p className="text-slate-400">
                Cyber Infrastructure Solutions — delivering end-to-end infrastructure, cloud,
                cybersecurity, and managed IT services to SMEs and enterprise clients since 2013.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-slate-900/80">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise Leadership</h3>
              <p className="text-slate-400">
                Former IT Operations Manager (Africa) and IT Manager roles supporting
                multi-country environments, executive stakeholders, and regulated industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
