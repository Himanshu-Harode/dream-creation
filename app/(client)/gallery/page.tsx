import { playfair } from "@/lib/fonts"
import { client } from "@/sanity/lib/client"
import BackButton from "@/components/custom/BackButton"
import GalleryFilter from "@/components/custom/GallaryFilter"

interface Gallery {
  _id: string
  authorName: string
  scriptType: string
  gallaryImage?: {
    asset?: {
      url: string
    }
  }
}

async function getGallery(): Promise<Gallery[]> {
  return await client.fetch(`
    *[_type=="gallery"] | order(_createdAt desc){
      _id,
      authorName,
      scriptType,
      gallaryImage{
        asset->{
          url
        }
      }
    }
  `)
}

const Gallery = async () => {
  const data = await getGallery()

  return (
    <section className="px-6 md:px-16 lg:px-32 py-20">
      <BackButton />

      {/* Heading */}

      <div className="mt-6 space-y-4 max-w-3xl">
        <h1 className={`${playfair.className} text-5xl`}>Student Gallery</h1>

        <p className="text-gray-600 dark:text-gray-200 text-lg">
          Explore the beautiful calligraphy work created by our talented
          students across various styles and techniques
        </p>
      </div>

      {/* Filter + Gallery */}

      <div className="mt-12">
        <GalleryFilter data={data} />
      </div>
    </section>
  )
}

export default Gallery
