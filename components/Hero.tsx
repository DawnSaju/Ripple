import Image from "next/image";

export default function Hero(){
    return  (
        <div className="min-h-[120px] flex flex-col justify-center items-center py-6 md:py-12">
            <div className="flex flex-col items-center">
                <Image 
                  className="w-72 h-72 md:w-108 md:h-108 object-contain"
                  width={160} height={160} 
                  src={"/logo2.svg"} 
                  alt="Ripple logo"
                  priority
                />
            </div>
        </div>
    )
}