import GoSVG from "@/assets/go-snippet.svg" 
import CSharpSVG from "@/assets/CSharp-snippet.svg"
import ReactSVG from "@/assets/react-scnippet.svg"

function Portfolio() {
    return (
        <div className="container mx-auto h-full">
            <div className="flex flex-col">
                <div className="flex flex-row justify-center items-center space-x-5 space-y-5">
                    <div className='flex flex-col w-1/3 space-y-2'>
                        <h1 className='text-3xl'>Personal Projects</h1>
                        <p>Through numerous personal projects, I've been able to learn different
                            programming languages and technologies just through my own time. These are just a
                            few that I've grown to like using.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 w-1/3 place-items-center content-start'>
                        <img
                            className="w-32"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" 
                        />
                        <img
                            className="w-20" 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" 
                        />
                        <img 
                            className="w-16"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
                        />
                        <img 
                            className="w-20"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    </div>
                </div>
                <div className="flex flex-row justify-center content-center space-x-5 place-content-center mt-24">
                    <div className='flex flex-col w-1/3 space-y-2'>
                    
                    </div>
                    <div className='flex flex-col w-1/3 space-y-2 text-right'>
                        <h1 className='text-3xl'>Personal Projects</h1>
                        <p>Through numerous personal projects, I've been able to learn different
                            programming languages and technologies just through my own time. These are just a
                            few that I've grown to like using.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio