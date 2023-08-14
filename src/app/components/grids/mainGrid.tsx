import Image from "next/image";
import Icon from "../utilities/Icon";


export function MainGrid() {
    return (
        <>
        <div className="flex flex-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
            <Icon name="chevron-left" />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <Icon name="chevron-right" />
          </button>
        </div>

        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/meclife.jpg" className="lg:w-20" width={104} height={104} alt="Mec Life" />
            <strong>MEC LIFE</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/30 ml-auto mr-8 invisible group-hover:visible">
              <Icon name="play" fill="bg-black" />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/borges.jpg" className="lg:w-20" width={104} height={104} alt="Mix de borges" />
            <strong>Mix de Borges</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/30 ml-auto mr-8 invisible group-hover:visible">
              <Icon name="play" fill="bg-black" />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/matue.jpg" className="lg:w-20" width={104} height={104} alt="Mix de Matuê" />
            <strong>Mix de Matuê</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/30 ml-auto mr-8 invisible group-hover:visible">
              <Icon name="play" fill="bg-black" />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/majord.jpg" className="lg:w-20" width={104} height={104} alt="Mix de Major RD" />
            <strong>Mix de Major RD</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/30 ml-auto mr-8 invisible group-hover:visible">
              <Icon name="play" fill="bg-black" />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/ngcdaddy.jpg" className="lg:w-20" width={104} height={104} alt="Mix de NGC Daddy" />
            <strong>Mix de NGC Daddy</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/30 ml-auto mr-8 invisible group-hover:visible">
              <Icon name="play" fill="bg-black" />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/capricorniana.jpg" className="lg:w-20" width={104} height={104} alt="Capricorniana" />
            <strong>Capricorniana</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/30 ml-auto mr-8 invisible group-hover:visible">
              <Icon name="play" fill="bg-black" />
            </button>
          </a>
        </div>
        </>
    )
}