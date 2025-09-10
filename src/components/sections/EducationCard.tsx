import { Card, CardContent } from "@/components/ui/card";


export default function EducationCard() {
return (
<Card>
<CardContent className="p-6">
<h2 className="text-xl font-semibold mb-2">Formazione</h2>
<ul className="list-disc pl-5">
<li>ITS Steve Jobs Academy – Web & Mobile Development (2021–2023)</li>
<li>ITIS Archimede – Telecomunicazioni (2014–2019)</li>
</ul>
</CardContent>
</Card>
);
}