import '../pages_css/about.css'
import { Meteors } from "@/components/ui/meteors.tsx";
import Card from '../components/ui/card.tsx';

function About() {
    return (
        <>
            <div>
                <Meteors number={60}/>
                <Card></Card>
            </div>
        </>
    )
}

export default About; 