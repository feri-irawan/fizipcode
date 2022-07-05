# FiZipcode

Aplikasi berbasi web untuk mencari kode pos seluruh daerah Indonesia.

Muali dibuat pada 05/07/2022 pagi, oleh [Feri Irawan](https://github.com/feri-irawan)

Web: <https://fizipcode.vercel.app>

## Panduan Permintaan API

Berikut ini panduan untuk melakukan permintaan HTTP ke rute API

### Mencari Kode Pos Berdasarkan Kata Kunci

**URL:**

```plaintext
/api?search={KATA KUNCI DISINI}
```

**Contoh:**

```plaintext
/api?search=Bijawang
```

**Respon:**

```json
{
  "status": 200,
  "message": "Berhasil medapatkan kodepos",
  "data": [
    {
      "zipcode": "92661",
      "village": "Bijawang",
      "district": "Ujung Loe",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    }
  ]
}
```

### Mencari Kode Pos Berdasarkan Provinsi

> **Catatan:**
>
> Penulisan nama provinsi, kabupaten, kecamatan, atau desa dalam permintaan API harus dalam bentuk **slug** contoh: provinsi `Sulawesi Selatan` menjadi `sulawesi-selatan` atau kabupaten `Bulukumba` menjadi `bulukumba` atau kecamatan `Ujung Loe` menjadi `ujung-loe`

**URL:**

```plaintext
/api/area/{provinsi}
```

**Contoh:**

```plaintext
/api/area/sulawesi-selatan
```

**Respon:**

```json
{
  "status": 200,
  "message": "Berhasil medapatkan kodepos",
  "data": [
    {
      "zipcode": "92561",
      "village": "Polewali",
      "district": "Gantorang/Gantarang (Gangking)",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    },
    {
      "zipcode": "92161",
      "village": "Bontoala",
      "district": "Pallangga",
      "regency": "Gowa",
      "province": "Sulawesi Selatan"
    },
    {
      "zipcode": "91754",
      "village": "Mata Allo",
      "district": "Alla",
      "regency": "Enrekang",
      "province": "Sulawesi Selatan"
    }
  ]
}
```

### Mencari Kode Pos Berdasarkan Provinsi dan Kabupaten

**URL:**

```plaintext
/api/area/{provinsi}/{kabupaten}
```

**Contoh:**

```plaintext
/api/area/sulawesi-selatan/bulukumba
```

**Respon:**

```json
{
  "status": 200,
  "message": "Berhasil medapatkan kodepos",
  "data": [
    {
      "zipcode": "92661",
      "village": "Bijawang",
      "district": "Ujung Loe",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    },
    {
      "zipcode": "92552",
      "village": "Bulolohe",
      "district": "Rilau Ale",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    },
    {
      "zipcode": "92661",
      "village": "Garanta",
      "district": "Ujung Loe",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    }
  ]
}
```

### Mencari Kode Pos Berdasarkan Provinsi, Kabupaten dan Kecamatan

**URL:**

```plaintext
/api/area/{provinsi}/{kabupaten}/{kecamatan}
```

**Contoh:**

```plaintext
/api/area/sulawesi-selatan/bulukumba/ujung-loe
```

**Respon:**

```json
{
  "status": 200,
  "message": "Berhasil medapatkan kodepos",
  "data": [  
    {
      "zipcode": "92661",
      "village": "Bijawang",
      "district": "Ujung Loe",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    },
    {
      "zipcode": "92661",
      "village": "Tamatto",
      "district": "Ujung Loe",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    },
    {
      "zipcode": "92661",
      "village": "Garanta",
      "district": "Ujung Loe",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    }
  ]
}
```

### Mencari Kode Pos Berdasarkan Provinsi, Kabupaten, Kecamatan dan Desa

**URL:**

```plaintext
/api/area/{provinsi}/{kabupaten}/{kecamatan}/{desa}
```

**Contoh:**

```plaintext
/api/area/sulawesi-selatan/bulukumba/ujung-loe/bijawang
```

**Respon:**

```json
{
  "status": 200,
  "message": "Berhasil medapatkan kodepos",
  "data": [
    {
      "zipcode": "92661",
      "village": "Bijawang",
      "district": "Ujung Loe",
      "regency": "Bulukumba",
      "province": "Sulawesi Selatan"
    }
  ]
}
```
