import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { MainGrid } from './components/grids/mainGrid'
import { SecondaryGrid } from './components/grids/secondaryGrid'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 h-full max-h-screen overflow-y-auto">
          <MainGrid />

          <SecondaryGrid title="Made for Luiz Henrique" />
          <SecondaryGrid title="Jump in" />

          <div className="h-28"></div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
