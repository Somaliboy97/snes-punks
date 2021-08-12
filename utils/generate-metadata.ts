import { getImageUrl } from "./spaces"

export default async function generateMetadata(punk) {
  const data: any = {}
  data.id = punk.id
  data.image = await getImageUrl(punk.id)
  data.external_url = `https://snespunks.com/gallery/${punk.id}`
  data.name = `SNES Punk #${punk.id + 1}`
  data.description = `SNES Punk #${punk.id + 1} is an unique NFT generated by an AI specialist in the awesome 90's 16-Bits art style that was commonly used in videogames.`
  data.attributes = punk.traits.data
  data.background_color = '648596'

  return data
}