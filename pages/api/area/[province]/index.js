import {getZipCode} from '../../../../utils/scraper'

export default async function province(req, res) {
  const {province} = req.query || ''

  const response = await getZipCode(`/area/${province}`, true)

  res.status(response.status).json(response)
}
