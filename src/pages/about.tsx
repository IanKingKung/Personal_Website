import '../pages_css/about.css'
import { Meteors } from "@/components/ui/meteors.tsx";
import profile from './profile.png'

function About() {
    return (
        <>
            <div>
                <Meteors number={60}/>
                <div className="bio-card">
                    <h1>Ian Kung</h1>
                    <p>
                        Computer Engineer @ UCLA interested in both software and hardware components of electrical technologies 
                        as well as hobbies that dwell in creativity.
                        My goal is to not only link humanity and technology to the future, but also the wellbeing and 
                        creativity of all that use technology. 
                        Currently exploring many fields including game development, robotics, full stack development, 
                        and embedded systems programming. Read more about my hobbies in the More page! 
                    </p>
                </div>
                <div className="profile-container">
                    <img src={profile} className="profile" alt="Profile" />
                </div>
            </div>
        </>
    )
}

export default About; 