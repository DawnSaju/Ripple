export default function Features() {
    return (
        <div className="min-h-24 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center py-30 relative">
                <h1 className="text-6xl md:text-8xl text-primary">Features</h1>
                <img src={"/ripple.svg"} className="w-42 h-42 md:w-68 md:h-68 absolute translate-y-10 md:translate-y-15 -z-1" />
            </div>

            <div className="w-full max-w-5xl px-2 md:px-0">
                <div className="hidden md:grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 h-[600px] md:h-[650px]">
                    <div className="bg-secondary rounded-3xl row-span-2 col-span-1 border-1 border-black/8">
                        <div className="flex flex-col justify-center p-4 pt-6">
                            <h1 className="font-[Gotham] font-bold text-2xl w-3/5 leading-7">Emoji Reactions & Stickers</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-3/4" src="/icons/emoji.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-secondary rounded-3xl col-span-2 row-span-1 border-1 border-black/8">
                        <div className="flex flex-col p-4 pt-6 gap-2">
                            <h1 className="font-[Gotham] font-bold text-2xl">Voice & Video</h1>
                            <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">Drop voice notes and quick video clips right on the board, get feedback and share information.</p>
                        </div>
                        <div className="flex flex-col justify-center items-end md:w-2xl h-0">
                            <img className="w-1/3" src="/icons/video.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-secondary rounded-3xl col-span-1 row-span-1 border-1 border-black/8">
                        <div className="flex flex-col p-4 pt-6 gap-2">
                            <h1 className="font-[Gotham] font-bold text-2xl w-1/2">History & Replay</h1>
                            <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">Watch the board evolve from time to time, export as image or video.</p>
                        </div>
                    </div>
                    <div className="bg-secondary rounded-3xl col-span-1 row-span-1 border-1 border-black/8">
                        <div className="flex flex-col justify-center items-center h-full">
                            <img className="w-4/5" src="/icons/platforms.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-secondary rounded-3xl col-span-1 row-span-1 border-1 border-black/8">
                        <div className="flex flex-col p-4 pt-6 gap-2">
                            <h1 className="font-[Gotham] font-bold text-2xl w-1/2">Secure & Encrypted</h1>
                            <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">No compromise on user data and everything is safe and secure.</p>
                        </div>
                    </div>
                    <div className="bg-secondary rounded-3xl col-span-2 row-span-1 border-1 border-black/8">
                        <div className="flex flex-col p-4 pt-6 gap-2">
                            <h1 className="font-[Gotham] font-bold text-2xl w-1/5">Realtime Collaboration</h1>
                            <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">Seamlessly invite your friends and collaborate on a project in realtime.</p>
                        </div>
                        <div className="flex flex-col justify-center items-end md:w-2xl h-0 translate-x-10 -translate-y-15">
                            <img className="w-3/6" src="/icons/collaborative.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:hidden mb-20">
                    <div className="bg-secondary rounded-3xl border-1 border-black/8 p-6 flex flex-col items-start w-full">
                        <h1 className="font-[Gotham] font-bold text-xl mb-2">Voice & Video</h1>
                        <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">Drop voice notes and quick video clips right on the board, get feedback and share information.</p>
                        <img className="w-40 h-40 object-contain mx-auto" src="/icons/video.png" alt="" />
                    </div>
                    <div className="bg-secondary rounded-3xl border-1 border-black/8 p-6 flex flex-col items-start w-full">
                        <h1 className="font-[Gotham] font-bold text-xl mb-2">Emoji Reactions & Stickers</h1>
                        <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">Express yourself with fun emoji reactions and stickers.</p>
                        <img className="w-60 h-60 object-contain mx-auto" src="/icons/emoji.png" alt="" />
                    </div>
                    <div className="bg-secondary rounded-3xl border-1 border-black/8 p-6 flex flex-col items-start w-full">
                        <h1 className="font-[Gotham] font-bold text-xl mb-2">Realtime Collaboration</h1>
                        <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">Seamlessly invite your friends and collaborate on a project in realtime.</p>
                        <img className="w-80 h-80 object-contain mx-auto" src="/icons/collaborative.png" alt="" />
                    </div>
                    <div className="bg-secondary rounded-3xl border-1 border-black/8 p-6 flex flex-col items-center w-full">
                        <img className="w-60 h-60 object-contain mx-auto" src="/icons/platforms.png" alt="" />
                    </div>
                    <div className="bg-secondary rounded-3xl border-1 border-black/8 p-6 flex flex-col items-start w-full">
                        <h1 className="font-[Gotham] font-bold text-xl mb-2">History & Replay</h1>
                        <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">Watch the board evolve from time to time, export as image or video.</p>
                    </div>
                    <div className="bg-secondary rounded-3xl border-1 border-black/8 p-6 flex flex-col items-start w-full">
                        <h1 className="font-[Gotham] font-bold text-xl mb-2">Secure & Encrypted</h1>
                        <p className="font-[Gotham] font-normal text-base leading-snug text-black/60 mb-2">No compromise on user data and everything is safe and secure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
