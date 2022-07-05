import axios from 'axios'
import * as cheerio from 'cheerio'

// const BASE_URL = 'https://www.nomor.net/_kodepos.php?_i=cari-kodepos&jobs='
const BASE_URL = 'https://kodeposindo.com'

/**
 * Mendapatkan konten HTML
 * @param {string} path Rute pencarian
 * @returns {{error: boolean, html: string | null}} Konten HTML
 */
async function getHTML(path) {
  return await axios
    .get(BASE_URL + path)
    .then(({data}) => ({error: false, html: data}))
    .catch(() => ({error: true, html: null}))
}

/**
 * Memparse konten HTML menjadi objek-objek kode pos
 * @param {string} html String HTML yang akan diparse
 * @returns {{zipcode: string, village: string, district: string, regency: string, province: string}[]}
 */
function parseHTML(html) {
  const $ = cheerio.load(html)
  const table = $('.table')
  const tbody = table.find('tbody')

  tbody.find('tr.row-iklan').remove()

  const zipcodes = tbody
    .find('tr')
    .map((i, element) => {
      const tr = $(element)
      const province = tr.find('td:nth-child(1) a').text().trim()
      const regency = tr.find('td:nth-child(2) a').text().trim()
      const district = tr.find('td:nth-child(3) a').text().trim()
      const village = tr.find('td:nth-child(4) a').text().trim()
      const zipcode = tr.find('td:nth-child(5) a').text().trim()

      return {
        zipcode,
        village,
        district,
        regency,
        province,
      }
    })
    .toArray()

  return zipcodes
}

/**
 * Mendapatkan kode pos
 * @param {string} path Rute pencarian
 * @returns Kode pos
 */
export async function getZipCode(path) {
  const errorNotFound = {
    status: 404,
    message: 'Tidak ada hasil',
    data: [],
  }
  if (!path.trim()) {
    return errorNotFound
  } else {
    const {error, html} = await getHTML(path)

    // Jika gagal mendapatkan html
    if (error) return errorNotFound

    const zipcodes = parseHTML(html)

    return {
      status: 200,
      message: 'Berhasil medapatkan kodepos',
      data: zipcodes,
    }
  }
}
