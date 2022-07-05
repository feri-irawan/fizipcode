import Layouts from '../components/Layouts'
import Search from '../components/Search'

export default function Index() {
  return (
    <Layouts>
      <p className="mt-3 text-center text-teal-500 font-semibold">
        Cari kode pos dengan mudah dan cepat.
      </p>
      <Search />
    </Layouts>
  )
}
