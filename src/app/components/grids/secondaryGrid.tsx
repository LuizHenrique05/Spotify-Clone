import Image from "next/image";
import Icon from "../utilities/Icon";

interface SecondaryGridProps {
    title: String;
}

export function SecondaryGrid({ title }: SecondaryGridProps) {
    return (
        <>
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl mt-10">{title}</h2>
            <a href="" className="mt-10 text-base text-zinc-400">Mostrar tudo</a>
          </div>

          <div className="grid gap-4 mt-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 group rounded-md hover:bg-white/10 transition-colors">
              <div className="relative">
                <Image src="/macaverde.jpg" className="w-full" width={120} height={120} alt="Capa do álbum maçã verde do Mc Hariel" />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/50 ml-auto invisible group-hover:visible">
                  <Icon name="play" fill="bg-black" />
                </button>
              </div>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm line-clamp-2 text-zinc-400">Mc Hariel, Mc Yago, Mc Vittin PV e mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 group rounded-md hover:bg-white/10 transition-colors">
              <div className="relative">
                <Image src="/israelerodolfo.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Israel e Rodolfo" />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/50 ml-auto invisible group-hover:visible">
                  <Icon name="play" fill="bg-black" />
                </button>
              </div>
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-sm line-clamp-2 text-zinc-400">Israel e Rodolffo, Matheus & Kauan, Zé Neto & Cristiano e mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 group rounded-md hover:bg-white/10 transition-colors">
              <div className="relative">
                <Image src="/revelacao.jpg" className="w-full" width={120} height={120} alt="Capa do álbum do grupo revelação" />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/50 ml-auto invisible group-hover:visible">
                  <Icon name="play" fill="bg-black" />
                </button>
              </div>
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-sm line-clamp-2 text-zinc-400">Grupo Revelação, Sorriso Maroto, Bom Gosto e mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 group rounded-md hover:bg-white/10 transition-colors">
              <div className="relative">
                <Image src="/album2.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Veigh" />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/50 ml-auto invisible group-hover:visible">
                  <Icon name="play" fill="bg-black" />
                </button>
              </div>
              <strong className="font-semibold">Daily Mix 4</strong>
              <span className="text-sm line-clamp-2 text-zinc-400">Veigh, Xamã, Filipe Ret e mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 group rounded-md hover:bg-white/10 transition-colors">
              <div className="relative">
                <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Wasting Light da banda Foo Fighters" />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black shadow-lg shadow-black/50 ml-auto invisible group-hover:visible">
                  <Icon name="play" fill="bg-black" />
                </button>
              </div>
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="line-clamp-2 text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </>
    )
}