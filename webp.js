const imagemin = require('imagemin'),
  webp = require('imagemin-webp')
const outputFolder = 'AAI_App/static/AAI_App/aai_images/artists/webp'
const produceWebP = async () => {
  await imagemin(['AAI_App/static/AAI_App/aai_images/artists/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin(['images/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 50
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()
