export default function ProductDemo(){
    return (
        <div className="min-h-[80px] flex flex-col justify-center items-center px-2 md:px-0 py-4 md:py-8">
            <div className="w-full max-w-5xl h-90 sm:h-60 md:h-[400px] lg:h-[650px] flex flex-col justify-center bg-secondary rounded-3xl border-1 border-black/8 hover:bg-secondary-hover transition-colors ease-in-out mx-auto">
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="p-2 rounded-full drop-shadow-[#E5C6A3] drop-shadow-2xl shadow-base">
                        <svg width="90" height="90" className="sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]" viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_n_28_269)">
                            <circle cx="100.5" cy="100.5" r="92.4479" fill="url(#paint0_linear_28_269)"/>
                            </g>
                            <path d="M77.489 74.6715C77.489 69.5612 83.1424 66.4747 87.4411 69.2381L132.015 97.8926C135.97 100.435 135.97 106.217 132.015 108.759L87.4411 137.414C83.1424 140.177 77.489 137.091 77.489 131.98V74.6715Z" fill="url(#paint1_linear_28_269)"/>
                            <defs>
                            <filter id="filter0_n_28_269" x="8.05206" y="8.052" width="184.896" height="184.896" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" numOctaves="1" result="noise" seed="9067" />
                            <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                            </feComponentTransfer>
                            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                            <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                            <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                            <feMerge result="effect1_noise_28_269">
                            <feMergeNode in="shape" />
                            <feMergeNode in="color1" />
                            </feMerge>
                            </filter>
                            <linearGradient id="paint0_linear_28_269" x1="100.5" y1="8.052" x2="100.5" y2="192.948" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF9A89"/>
                            <stop offset="1" stopColor="#FA5539"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_28_269" x1="108.978" y1="62.8403" x2="108.978" y2="143.812" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#DEDEDE"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}