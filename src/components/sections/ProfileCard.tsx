import { Card, CardContent } from "@/components/ui/card";


export default function ProfileCard() {
return (
<Card>
<CardContent className="p-6">
<h2 className="text-xl font-semibold mb-2">Profilo Personale</h2>
<p>
Front-End Developer con esperienza in ambienti Agile e forte attenzione
alla scrittura di codice modulare, manutenibile e performante. Specializzato
in React, TypeScript e UI/UX design, collaboro attivamente con team cross-funzionali
per sviluppare interfacce intuitive e scalabili.
</p>
</CardContent>
</Card>
);
}