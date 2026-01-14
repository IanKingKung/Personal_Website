import '../pages_css/more.css'
import { useState, useEffect } from "react";
import FunFactsTxt from "./quotes.txt"
import { Marquee } from "@/components/ui/marquee.tsx"
import { DotPattern } from "@/components/ui/dot-pattern.tsx"
import mogging from './svg/mogging.png'

function More() {

	//make code for quote button
	const [funFact, setFunFact] = useState("");
	const [author, setAuthor] = useState("");

	async function getFunFact() {
		const response = await fetch(FunFactsTxt);
		const text = await response.text();

		//split create an array called facts separated by new lines
		const facts = text.split("\n");
		const randomIndex = Math.floor(Math.random() * facts.length);

		const selectedLine = facts[randomIndex];

		if (!selectedLine) return;
		const [quote, author] = selectedLine.split("-");
		setFunFact(quote || "Easy Isn't Always Simple.");
		setAuthor(author || "Star Wars the Clone Wars");
	}

	function handleClick() {
		getFunFact();
	}


    return (
		<>
			<div className="background-container">
                    <DotPattern glow={true} width={22} height={22} cr={1.5} />
            </div>

			<div className="more-card">
				<text style={{fontWeight: "bold", fontSize: "24px"}}>More About Me</text>
				<p>
					Aside from coding and engineering, I have a ton of hobbies and activities that keep my 
					life balanced. I enjoy drawing, specifically ink and pen, ranging from architecture to 
					creative designs. I also love playing video games and Star Wars, hence my experience in game development and
					storytelling. Yet most importantly, I value exercise and fitness. I'm a swimmer and a weightlifer, prioritizing physical health along with mental health. I believe in exercise everyday despite a busy 
					schedule to keep my entire body and mind in shape. If you have any inquiries about me
					or even art	commisions feel free to reach out through my social media links in the About page!
				</p>
			</div>

			<div className="quote-card" onClick={handleClick}>
				<text style={{fontWeight: "bold", fontSize: "20px", color: 'yellow'}}>{funFact}</text>
				<p style={{fontSize: "14px", color: "grey"}}>-{author}</p>

				{/* <text style={{fontWeight: "bold", fontSize: "20px", color: 'yellow'}}>Easy isn't always simple.</text>
				<p style={{fontSize: "14px", color: "grey"}}>-Star Wars the Clone Wars 2.11</p> */}
			</div>



			<Marquee pauseOnHover={true} vertical={true} reverse={true} className="marquee-container">
				{/* <span className="marquee-card-container"><img src={mogging} className="marquee-cards"/></span> */}
				<span>React</span>
				<span>TypeScript</span>
				<span>Tailwind CSS</span>
			</Marquee>

		</>
    )
}

export default More; 