import {getZipCode} from '../../utils/scraper'

export default async function index(req, res) {
  const {search} = req.query

  if (!search) {
    res.json({
      status: 200,
      message: 'FiZipcode - API cari kode pos seluruh daerah Indonesia',
    })
  } else {
    const response = await getZipCode(`/cari/${search}`)

    res.status(response.status).json(response)
  }
}
