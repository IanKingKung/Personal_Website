import { DotPattern } from "@/components/ui/dot-pattern.tsx"
import { cn } from "@/lib/utils.ts"
import '../pages_css/projects.css'
// import { WarpBackground } from "@/components/ui/warp-background.tsx";
import { Meteors } from "@/components/ui/meteors.tsx";

function Projects() {
    return (
        <>
            <div className={cn("main-content-wrapper")}>
                <div className="background-container">
                    {/* <DotPattern glow={true} width={22} height={22} cr={1.5} /> */}
                    <Meteors number={8} minDuration={2} maxDuration={6}/>
                </div>

                {/* MicroMouse */}
                <div className="project-card">
                    <div className="title-container">MicroMouse <em style={{color: "#18a597ff"}}>(In Progress)</em></div>
                    <div className="description-container">
                        <p> PCB design and embedded systems coding of a micro mouse that can navigate 
                            through a maze. Reliant on encoders, sensors and a maze-solving algorithm 
                            to build a robot that can successfully withstand outside competition.</p>
                    </div>
                    <div className="skills-container">
                        <div className="individual-skill">PCB</div>
                        <div className="individual-skill">Embedded Systems</div>
                        <div className="individual-skill">C++</div>
                        <div className="individual-skill">KiCad</div>
                    </div>
                </div>

                {/* Fiat Ludum */}
                <div className="project-card">
                    <div className="title-container"><a href="https://ianfarmsmelons.itch.io/homunculusfinal" target="_blank">Homonculus</a> <em style={{color: "#10d8f7f1"}}>(Fiat Ludum)</em></div>
                    <div className="description-container">
                        <p> A 2-D visual novel, horror and exploration video game developed in a three day period during ACM’s 
                            Fiat Ludum Campus-Wide Game Jam. Based on Unity and C#, this game embodies the consistent and dedicated 
                            effort of the team to create a chilling and fulfilling tale. The development of this game required 
                            collaboration, project management, debugging, and consistent code to ensure functionality and 
                            consistency of the game. Check it out on my itch page or click on the title above!</p>
                    </div>
                    <div className="skills-container">
                        <div className="individual-skill">C#</div>
                        <div className="individual-skill">Unity</div>
                        <div className="individual-skill">Game Design</div>
                        <div className="individual-skill">Project Management</div>
                        <div className="individual-skill">Collaboration</div>
                    </div>
                </div>

                {/* Food Fighters */}
                <div className="project-card">
                    <div className="title-container"><a href="https://ianfarmsmelons.itch.io/food-fighters" target="_blank">Food Fighters</a></div>
                    <div className="description-container">
                        <p>A 3-D passion project game made as a solo developer in the span of 5 months that follows a 
                            ghost who has to fight off malicious food to survive. Originally started off as a simple clicker 
                            game turned into a much greater project requiring knowledge of Unity’s Libraries, Animation, Asset 
                            Creation, and most importantly, the coding of physics, enemies and the player. In a few thousand 
                            lines of code and many hours, Food Fighters demonstrates a culmination of dedication to learning, 
                            clean code, and vector arithmetic to offer an amazing experience. Also check this out 
                            on my itch page or clicking on the title above (the opening text takes around 40s to clear btw)!</p>
                    </div>
                    <div className="skills-container">
                        <div className="individual-skill">C#</div>
                        <div className="individual-skill">Unity</div>
                        <div className="individual-skill">Vector-Based Coding</div>
                        <div className="individual-skill">Object Oriented Programming</div>
                        <div className="individual-skill">Documentation Searching</div>
                    </div>
                </div>

                {/* Squirrel Tracker */}
                <div className="project-card">
                    <div className="title-container">Squirrel Tracker</div>
                    <div className="description-container">
                        <p>A class project consisting of a team of four students that includes a social media 
                            website (Squirrel Tracker) highlighting squirrels across the region. Squirrel 
                            Tracker allows users to create posts, interact with other posts and users, as well as 
                            include a pop-up map that shows the locations of squirrels on posts. Squirrel 
                            Tracker relies on database interaction, algorithmic grading for recommendations 
                            and more interactive ways to learn about squirrels in general.</p>
                    </div>
                    <div className="skills-container">
                        <div className="individual-skill">Cucumber</div>
                        <div className="individual-skill">postgreSQL</div>
                        <div className="individual-skill">DataBase Management</div>
                        <div className="individual-skill">GitHub</div>
                        <div className="individual-skill">TypeScript & React</div>
                        <div className="individual-skill">FullStack Development</div>
                    </div>
                </div>

                {/* Self Navigating Car (ECE III) */}
                <div className="project-card">
                    <div className="title-container">Self Navigating Car (ECE III)</div>
                    <div className="description-container">
                        <p>A self-navigating car reliant on embedded system programming and infrared 
                            sensors to navigate a track effectively and correctly while detecting checkpoints. 
                            Using a pre-built car from Texas Instruments, the code for the car calls on the 
                            infrared sensors to detect changes in the track. A quick youtube short about the 
                            car is on my YouTube channel!</p>
                    </div>
                    <div className="skills-container">
                        <div className="individual-skill">C++</div>
                        <div className="individual-skill">Embedded Systems</div>
                        <div className="individual-skill">Arduino</div>
                    </div>
                </div>

                {/* Hack on the Hill (Iris) */}
                <div className="project-card">
                    <div className="title-container">Iris <em style={{color: "#10d8f7f1"}}>(Hack on the Hill)</em></div>
                    <div className="description-container">
                        <p>
                            App built during ACM’s Hack on the Hill Hackathon to showcase the operation
                            hours of many UCLA facilities, restaurants, classes and more in an effort to
                            reduce the unnecessary navigation of multiple sites. One of its main 
                            functionalities is its web-scraping algorithm that searches through UCLA’s 
                            websites and later displays that information in an easier to read manner. </p>
                    </div>
                    <div className="skills-container">
                        <div className="individual-skill">C++</div>
                        <div className="individual-skill">Embedded Systems</div>
                        <div className="individual-skill">Arduino</div>
                    </div>
                </div>

                {/* New Rogue-Like Game (In progress) */}
                <div className="project-card">
                    <div className="title-container">New Rogue-Like Game <em style={{color: "#18a597ff"}}>(In progress)</em></div>
                    <div className="description-container">
                        <p>
                            A new rogue-like game currently in development highlighting an adventurous 
                            and dreamlike tale combining fantasy and sci-fi… 
                        </p>
                    </div>
                    <div className="skills-container">
                        <div className="individual-skill">FUN!</div>
                        <div className="individual-skill">Creative</div>
                        <div className="individual-skill">Breathtaking</div>
                    </div>
                </div>

                {/* Other Skills */}
                <div className="project-card">
                    <div className="title-container">Other Skills</div>
                    <div className="skills-container">
                        <div className="individual-skill">x86-64 Architectures</div>
                        <div className="individual-skill">x86 Assembly</div>
                        <div className="individual-skill">Python</div>
                        <div className="individual-skill">C, C++, C#</div>
                        <div className="individual-skill">Shell Scripting</div>
                        <div className="individual-skill">Linux Operating Systems</div>
                        <div className="individual-skill">Git</div>
                        <div className="individual-skill">Command Line Interfaces</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects; 