import Image from "next/image";
import Icon from "./utilities/Icon";

export function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 min-w-full bg-zinc-800 border-t border-zinc-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/album2.jpg" width={56} height={56} alt="Capa do álbum Wasting Light da banda Foo Fighters" />
          <div className="flex flex-col">
            <strong className="font-normal">Rope</strong>
            <span className="text-xs text-zinc-400">Foo Fighters</span>
          </div>
          <a href="" className="ml-8"> 
            <Icon name="heart" size={16} />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <button className="text-zinc-200">
              <Icon size={20} name="shuffle" fill="bg-zinc-200"/>
            </button>
            <button className="text-zinc-200">
              <Icon size={20} name="skip-back" fill="bg-zinc-200" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black shadow-lg shadow-black/30">
              <Icon name="play" fill="bg-black" />
            </button> 
            <button className="text-zinc-200">
              <Icon size={20} name="skip-forward" fill="bg-white" />
            </button>
            <button className="text-zinc-200">
              <Icon size={20} name="repeat" fill="bg-zinc-200" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-zinc-200">
            <Icon size={20} name="mic-2" fill="bg-zinc-200" />
          </button>
          <button className="text-zinc-200">
            <Icon size={20} name="layout-list" fill="bg-zinc-200" />
          </button>
          <button className="text-zinc-200">
            <Icon size={20} name="laptop-2" fill="bg-zinc-200" />
          </button>
          <div className="flex items-center gap-2"> 
            <button className="text-zinc-200">
              <Icon size={20} name="volume-1" fill="bg-zinc-200" />
            </button>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <button className="text-zinc-200">
            <Icon size={20} name="maximize-2" fill="bg-zinc-200" />
          </button>
        </div>
      </footer>
    )
}