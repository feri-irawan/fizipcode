import {useRef, useState} from 'react'

export default function Search() {
  const inputElement = useRef()

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetcher = (url) => fetch(url).then((res) => res.json())

  const searching = async () => {
    const query = inputElement.current.value
    setData()
    setLoading(true)
    setError(false)
    await fetcher('/api?search=' + query)
      .then(setData)
      .catch(() => setError(true))
    setLoading(false)
  }

  return (
    <div className="">
      <div className="flex w-full my-5">
        <input
          ref={inputElement}
          onKeyPress={(e) => (e.key === 'Enter' ? searching() : false)}
          type="text"
          className="px-3 py-2 w-full border hover:border-teal-500 focus:border-teal-500 hover:ring ring-teal-500/50 focus:ring-teal-500/50 outline-none duration-300 rounded-l-lg"
          placeholder="Ketik nama dearah..."
        />
        <button
          onClick={searching}
          className="bg-teal-500 text-white hover:ring ring-teal-500/50 duration-300 px-3 py-2 rounded-r-lg"
        >
          Cari
        </button>
      </div>

      {!data && !loading && !error && (
        <div className="p-3 text-center">
          Silakan ketikkan sesuatu dikolom pencarian untuk mencari!
        </div>
      )}

      <div className="text-center">
        {loading && 'Sedang mencari, mohon bersabar...'}
        {error &&
          'Oops, terjadi kesalahan, coba periksa koneksi internet kamu atau klik tombol "Cari" sekali lagi untuk mencoba kembali!'}
      </div>
      {data && (
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th>#</th>
                <th>Kode Pos</th>
                <th>Desa</th>
                <th>Kecamatan</th>
                <th>Kabupaten</th>
                <th>Provinsi</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.length === 0 && (
                <tr>
                  <td colSpan={6} className="sm:text-center">
                    Tidak ditemukan.
                  </td>
                </tr>
              )}
              {data?.data.length > 0 &&
                data?.data?.map(
                  ({zipcode, village, district, regency, province}, i) => (
                    <tr key={i}>
                      <td className="text-center">{i + 1}.</td>
                      <td>{zipcode}</td>
                      <td>{village}</td>
                      <td>{district}</td>
                      <td>{regency}</td>
                      <td>{province}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
