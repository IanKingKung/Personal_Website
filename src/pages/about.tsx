import '../pages_css/about.css'
import { Meteors } from "@/components/ui/meteors.tsx";
import profile from './profile.png'
import githublogo from './svg/github.svg'
import linkedinlogo from './svg/linkedin.svg'
import youtubelogo from './svg/youtube.svg'
import itchlogo from './svg/itch.svg'

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
                        and embedded systems programming. Read more about my hobbies in the More page and check out my websites! 
                    </p>
                    <div className="contact-container">
                        <a href="https://github.com/IanKingKung">
                            <img src={githublogo} alt="GitHub" className="logo-container"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ian-kung-741a3a33a/">
                            <img src={linkedinlogo} alt="LinkedIn" className="logo-container"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCo-58-MsM9AokDZim_jZIyQ">
                            <img src={youtubelogo} alt="Youtube" className="logo-container"/>
                        </a>
                        <a href="https://ianfarmsmelons.itch.io/">
                            <img src={itchlogo} alt="Itch.io" className="logo-container"/>
                        </a>
                    </div>
                </div>
                <div className="profile-container">
                    <img src={profile} className="profile" alt="Profile" />
                </div>
            </div>
        </>
    )
}

export default About; 