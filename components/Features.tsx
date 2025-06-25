export default function Features(){
    return (
        <div className="min-h-24 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center py-30 relative">
                <img src={"/mascot2.svg"} className="w-42 h-42 md:w-68 md:h-68 absolute translate-x-2 -translate-y-15 md:translate-x-4 md:-translate-y-25" />
                <h1 className="text-6xl md:text-8xl text-primary">Features</h1>
                <img src={"/ripple.svg"} className="w-42 h-42 md:w-68 md:h-68 absolute translate-y-10 md:translate-y-15 -z-1" />
            </div>

            <div className="w-full max-w-5xl px-2 md:px-0">
               <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 h-[600px] md:h-[650px]">
                <div className="bg-secondary rounded-3xl row-span-2 col-span-1 border-1 border-black/8"></div>
                <div className="bg-secondary rounded-3xl col-span-2 row-span-1 border-1 border-black/8"></div>
                <div className="bg-secondary rounded-3xl col-span-1 row-span-1 border-1 border-black/8"></div>
                <div className="bg-secondary rounded-3xl col-span-1 row-span-1 border-1 border-black/8"></div>
                <div className="bg-secondary rounded-3xl col-span-1 row-span-1 border-1 border-black/8"></div>
                <div className="bg-secondary rounded-3xl col-span-2 row-span-1 border-1 border-black/8"></div>
            </div>
            </div>
        </div>
    )
}