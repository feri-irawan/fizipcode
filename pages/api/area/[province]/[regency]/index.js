import {getZipCode} from '../../../../../utils/scraper'

export default async function regency(req, res) {
  const {province, regency} = req.query || ''

  const response = await getZipCode(`/area/${province}/${regency}`, true)

  res.status(response.status).json(response)
}
