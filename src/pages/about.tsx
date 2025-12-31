import '../pages_css/about.css'
import { Meteors } from "@/components/ui/meteors";

function About() {
    return (
        <>
            <div className="relative h-[500px] w-full overflow-hidden">
                <Meteors number={400}/>
            </div>
            <text className="my-card">Ian Kung</text>
        </>
    )
}

export default About; 