import { Card, CardContent } from "@/components/ui/card";


export default function ExperienceCard() {
return (
<Card>
<CardContent className="p-6">
<h2 className="text-xl font-semibold mb-2">Esperienza</h2>
<ul className="list-disc pl-5">
<li>
<strong>AC2 S.R.L. (2024 – oggi)</strong> – React, TypeScript, SCSS, UI/UX
</li>
<li>
<strong>Sielte (2019 – 2020)</strong> – Help Desk Web Tool (HTML)
</li>
</ul>
</CardContent>
</Card>
);
}