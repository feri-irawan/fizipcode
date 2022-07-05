import {getZipCode} from '../../../../../../../utils/scraper'

export default async function village(req, res) {
  const {province, regency, district, village} = req.query || ''

  const response = await getZipCode(
    `/area/${province}/${regency}/${district}/${village}`,
    true
  )

  res.status(response.status).json(response)
}
