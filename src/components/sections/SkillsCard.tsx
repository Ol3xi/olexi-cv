import { Card, CardContent } from "@/components/ui/card";


export default function SkillsCard() {
return (
<Card>
<CardContent className="p-6">
<h2 className="text-xl font-semibold mb-2">Competenze Tecniche</h2>
<ul className="list-disc pl-5">
<li>Linguaggi: JavaScript, TypeScript, HTML, SCSS</li>
<li>Framework: React, Next.js (base)</li>
<li>Tools: Git, Figma, Postman, VS Code</li>
<li>UI/UX: Responsive Design, Material UI</li>
</ul>
</CardContent>
</Card>
);
}