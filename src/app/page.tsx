import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ProfileCard from "@/components/sections/ProfileCard";
import ExperienceCard from "@/components/sections/ExperienceCard";
import EducationCard from "@/components/sections/EducationCard";
import SkillsCard from "@/components/sections/SkillsCard";
import ProjectsCard from "@/components/sections/ProjectsCard";


export default function CVPage() {
useEffect(() => {
document.title = "Olexi Tomaselli | Front-End Developer";
}, []);


return (
<main className="max-w-3xl mx-auto px-4 py-8">
<section className="text-center mb-8">
<img
src="/photo.jpg"
alt="Olexi Tomaselli"
className="mx-auto rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
/>
<h1 className="text-3xl font-bold">Olexi Tomaselli</h1>
<p className="text-muted-foreground">
Front-End Developer | React & TypeScript Specialist
</p>
<a
href="/CV_Olexi_Tomaselli_Bilingue.pdf"
download
className="mt-4 inline-flex"
>
<Button>
<Download className="mr-2 h-4 w-4" /> Scarica il CV (PDF)
</Button>
</a>
</section>


<section className="grid gap-6">
<ProfileCard />
<ExperienceCard />
<EducationCard />
<SkillsCard />
<ProjectsCard />
</section>
</main>
);
}