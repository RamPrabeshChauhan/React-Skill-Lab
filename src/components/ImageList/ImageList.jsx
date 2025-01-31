import React, {useState, useEffect} from 'react'
import {fetchImagesWithAxios} from '../../services/api'
import SearchBar from '../SearchBar/SearchBar'
import Style from './ImageList.module.css'

const ImageList = () => {
  const [images, setImages] = useState([])
  const [totalPages, setTotalPages] = useState(1)
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

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
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
      <div className={Style.imagesContainer}>
        {images.map((image) => (
          <div key={image.id} className={Style.imageCard} onClick={() => handleImageClick(image)}>
            <img src={image.urls.small_s3} alt={image.alt_description} loading='lazy' low />
            <h2>{capitalizeWords(image.alt_description).substring(0, 50) || 'Image description not available'}</h2>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={Style.modalOverlay} onClick={closeModal}>
          <div className={Style.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.urls.full} alt={selectedImage.alt_description || 'Image description not available'} loading='lazy' />
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
    </div>
  )
}

export default ImageList
