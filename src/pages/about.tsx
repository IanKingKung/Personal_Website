import '../pages_css/about.css'
import { Meteors } from "@/components/ui/meteors";

function About() {
    return (
        <>
            <div>
                <Meteors number={60} color="green"/>
            </div>
            <text className="my-card" style={{color:"white"}}>Ian Kung</text>
        </>
    )
}

export default About; 