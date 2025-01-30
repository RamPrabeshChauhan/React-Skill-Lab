import React, {useState, useEffect, Suspense} from 'react'
import {fetchImagesWithAxios} from '../../services/api'
import SearchBar from '../SearchBar/SearchBar'
import Loading from '../Loading/Loading'
import Style from './ImageList.module.css'

const ImageList = () => {
  const [images, setImages] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState('nature')
  const [selectedImage, setSelectedImage] = useState(null)
  const [error, setError] = useState(null)

  const fetchImages = async (query, page) => {
    setError(null)
    try {
      const data = await fetchImagesWithAxios(query, page, 12)
      setImages(data.results)
      setTotalPages(data.total_pages)
    } catch (err) {
      setError(err.message)
    } finally {
    }
  }

  useEffect(() => {
    fetchImages(query, currentPage)
  }, [query, currentPage])

  const handleSearch = (newQuery) => {
    setQuery(newQuery)
    setCurrentPage(1)
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className={Style.imageList}>
      <SearchBar onSearch={handleSearch} />
      <h1>{query[0].toUpperCase() + query.slice(1)} Image Gallery</h1>
      {error && <div className={Style.error}>Error: {error}</div>}
      <Suspense fallback={<Loading />}>
        <div className={Style.imagesContainer}>
          {images.map((image) => (
            <div key={image.id} className={Style.imageCard} onClick={() => handleImageClick(image)}>
              <img src={image.urls.regular} alt={image.alt_description} />
              <h2>{image.alt_description?.substring(0, 50) || 'Nature Image'}</h2>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={Style.modalOverlay} onClick={closeModal}>
            <div className={Style.modalContent} onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.urls.full} alt={selectedImage.alt_description || 'Full size'} />
              <button className={Style.closeButton} onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        )}

        <div className={Style.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} / {totalPages}
          </span>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </Suspense>
    </div>
  )
}

export default ImageList
