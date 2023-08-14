import Icon from "./utilities/Icon";

export function Sidebar() {
    return (
        <aside className="bg-zinc-950 p-6 lg:w-56 xl:w-72">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <Icon name="home" />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <Icon name="search" />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <Icon name="library" />
              Your Library 
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #13</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniversário</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Trap</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pagode</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #8</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Musica 2023</a>
          </nav>
        </aside>
    )
}