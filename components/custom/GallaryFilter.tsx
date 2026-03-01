"use client"

import { useState } from "react"
import ShowcaseGallery from "./ShowcaseGallery"

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

const categories = [
  "All",
  "Modern Script",
  "Copperplate",
  "Wedding",
  "Brush Lettering",
  "Business",
  "Engraving",
  "Resin Art",
]

const GalleryFilter = ({ data }: { data: Gallery[] }) => {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All" ? data : data.filter((item) => item.scriptType === active)

  return (
    <div>
      {/* Filter Title */}

      <h3 className="mb-4 text-sm font-medium">Filter by Category</h3>

      {/* Buttons */}

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm transition
              
              ${
                active === cat
                  ? "bg-black text-white  dark:bg-gray-200 dark:text-black"
                  : "bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery */}

      {filtered.length > 0 ? (
        <ShowcaseGallery data={filtered} />
      ) : (
        <p className="text-center text-gray-500">
          No items found in this category
        </p>
      )}
    </div>
  )
}

export default GalleryFilter
