import {getZipCode} from '../../../../../../utils/scraper'

export default async function district(req, res) {
  const {province, regency, district} = req.query || ''

  const response = await getZipCode(
    `/area/${province}/${regency}/${district}`,
    true
  )

  res.status(response.status).json(response)
}
