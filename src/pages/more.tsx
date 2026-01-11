import '../pages_css/more.css'
import { DotPattern } from "@/components/ui/dot-pattern.tsx"

function More() {
    return (
		<>
			<div className="background-container">
                    <DotPattern glow={true} width={22} height={22} cr={1.5} />
            </div>

			<div className="marquee">
				<div className="marquee_header">Infinite Marquee</div>
				<div className="marquee__inner">
					<div className="marquee__group">
					<span>🔥 Item 1</span>
					<span>✨ Item 2</span>
					<span>🚀 Item 3</span>
					<span>🌟 Item 4</span>
					<span>🎉 Item 5</span>
					</div>

					<div className="marquee__group">
					<span>🔥 Item 1</span>
					<span>✨ Item 2</span>
					<span>🚀 Item 3</span>
					<span>🌟 Item 4</span>
					<span>🎉 Item 5</span>
					</div>
				</div>
			</div>

		</>
    )
}

export default More; 