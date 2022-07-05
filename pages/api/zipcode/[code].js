import {getZipCode} from '../../../utils/scraper'

export default async function code(req, res) {
  const {code} = req.query || ''

  const response = await getZipCode(`/kodepos/${code}`, true)

  res.status(response.status).json(response)
}
