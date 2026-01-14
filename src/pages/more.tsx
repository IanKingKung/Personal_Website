import '../pages_css/more.css'
import { useState, useEffect } from "react";
import FunFactsTxt from "./quotes.txt"
import { Marquee } from "@/components/ui/marquee.tsx"
import { DotPattern } from "@/components/ui/dot-pattern.tsx"
import pic1 from './marquee-cards/pic1.png'
import pic2 from './marquee-cards/pic2.png'
import pic3 from './marquee-cards/pic3.png'
import pic4 from './marquee-cards/pic4.png'
import pic5 from './marquee-cards/pic5.png'
import pic6 from './marquee-cards/pic6.png'
import pic7 from './marquee-cards/pic7.png'
import pic8 from './marquee-cards/pic8.png'
import pic9 from './marquee-cards/pic9.png'

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

	useEffect(() => {
		// Disable scrolling when component loads
		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';

		// Re-enable scrolling
		return () => {
			document.documentElement.style.overflow = 'auto';
			document.body.style.overflow = 'auto';
		};
  	}, []);


    return (
		<>
			<div className="background-container">
                    <DotPattern glow={true} width={22} height={22} cr={1.5} />
            </div>

			<div className="cards-wrapper">
			<div className="more-card">
				<text style={{fontWeight: "bold", fontSize: "28px", color: "Yellow"}}>More About Me</text>
				<p>
					Aside from coding and engineering, I have a ton of hobbies and activities that keep my 
					life balanced. I enjoy drawing, specifically ink and pen, ranging from architecture to 
					creative designs. I also love playing video games and <text style={{color: "yellow"}}>Star Wars</text>, hence my experience in game development and
					storytelling. Yet most importantly, I value exercise and fitness. I'm a swimmer and a weightlifer, prioritizing physical health along with mental health. I believe in exercise everyday despite a busy 
					schedule to keep my entire body and mind in shape. If you have any inquiries about me
					or even art	commisions feel free to reach out through my social media links in the About page!
				</p>
			</div>

			<div onClick={handleClick} className="quote-card">
				<text style={{fontWeight: "bold", fontSize: "20px", color: 'yellow'}}>{funFact}</text>
				<p style={{fontSize: "14px", color: "grey"}}>-{author}</p>
				<div className="quote-button">
					<text onClick={handleClick}>Load Quote</text>
				</div>

				{/* <text style={{fontWeight: "bold", fontSize: "20px", color: 'yellow'}}>Easy isn't always simple.</text>
				<p style={{fontSize: "14px", color: "grey"}}>-Star Wars the Clone Wars 2.11</p> */}
			</div>
			</div>



			<Marquee pauseOnHover={false} vertical={true} reverse={true} className="marquee-container">
				<span className="marquee-card-container"><img src={pic1} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic2} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic3} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic4} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic5} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic6} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic7} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic8} className="marquee-cards"/></span>
				<span className="marquee-card-container"><img src={pic9} className="marquee-cards"/></span>
			</Marquee>
		</>
    )
}

export default More; 