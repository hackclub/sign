const AirtablePlus = require('airtable-plus')

const sign = new AirtablePlus({
  baseID: 'appS0DW7u8FumvGfS',
  apiKey: 'keyfpyfwx1pVtM36t', // DO NOT COMMIT THIS
  tableName: 'Sign'
})

export default async (req, res) => {
  const data = (await sign.read())[0]

  if (req.method === 'POST') {
    let { color1, color2, direction } = JSON.parse(req.body)
    console.log(req.body)
    console.log(direction)

    if (!color1) color1 = data.fields['Color 1']
    if (!color2) color2 = data.fields['Color 2']
    if (!direction) direction = data.fields['Direction']

    sign.update('recxhclTNywsjGNUw', {
      'Color 1': color1,
      'Color 2': color2,
      'Direction': direction
    })

    return res.status(200).end()
  }

  if (req.method === 'GET') {
    return res.json({
      color1: data.fields['Color 1'],
      color2: data.fields['Color 2'],
      direction: data.fields['Direction']
    })
  }
}
