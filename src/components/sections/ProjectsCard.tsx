import { Card, CardContent } from "@/components/ui/card";


export default function ProjectsCard() {
return (
<Card>
<CardContent className="p-6">
<h2 className="text-xl font-semibold mb-2">Progetti in Corso</h2>
<ul className="list-disc pl-5">
<li>Portfolio personale (React + TypeScript)</li>
<li>Twitch Clip Generator con AI</li>
<li>App gestione attività giornaliere (task CRUD)</li>
</ul>
</CardContent>
</Card>
);
}