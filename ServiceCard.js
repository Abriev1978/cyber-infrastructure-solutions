import { Card, CardContent } from "@/components/ui/card";

export default function ServiceCard({ icon, title }) {
  return (
    <Card className="rounded-2xl bg-slate-900/80 hover:scale-[1.02] transition">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 text-cyan-400">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </CardContent>
    </Card>
  );
}
