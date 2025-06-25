export default function Quote() {
    return (
        <div className="min-h-[80px] flex flex-col justify-center items-center px-2 md:px-0 py-4 md:py-8">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-2xl flex flex-col items-center lg:hidden">
                    <h1 className="text-6xl text-secondary leading-none mb-2 -translate-x-42 translate-y-10">“</h1>
                    <p className="text-4xl md:text-5xl text-primary text-center px-2 w-full">
                        Start something.<br />watch it ripple.
                    </p>
                    <h1 className="text-6xl sm:text-6xl text-secondary leading-none mt-2 translate-x-42 -translate-y-4">”</h1>
                </div>
                <div className="w-full max-w-full hidden lg:flex flex-row justify-center items-center">
                    <h1 className="text-[10rem] text-secondary leading-none mr-1 translate-x-12 -translate-y-8">“</h1>
                    <p className="text-5xl text-primary text-center whitespace-nowrap">Start something. watch it ripple.</p>
                    <h1 className="text-[10rem] text-secondary leading-none ml-4 -translate-x-6 translate-y-20">”</h1>
                </div>
            </div>
        </div>
    )
}
