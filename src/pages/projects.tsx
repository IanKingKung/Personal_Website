import { DotPattern } from "@/components/ui/dot-pattern.tsx"
import { cn } from "@/lib/utils.ts"
import '../pages_css/projects.css'

function Projects() {
    return (
        <>
            <DotPattern glow={true} width={22} height={22} />
            <div className="project-card">
                Hi
            </div>
        </>
    )
}

export default Projects; 