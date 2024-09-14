import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn';
import ImageModal from './components/ImageModal';
import { Toaster } from 'react-hot-toast';

const API_KEY = 'iRU1FJbCjL6PtN6q8X1gwk-qWsdJeH8e9DRn8y1cz9Y';
const IMAGES_PER_PAGE = 12; // 3 rzędy po 4 obrazki

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios
        .get(`https://api.unsplash.com/search/photos`, {
          params: { query, page, per_page: IMAGES_PER_PAGE },
          headers: { Authorization: `Client-ID ${API_KEY}` },
        })
        .then((response) => {
          setImages((prevImages) => [...prevImages, ...response.data.results]);
          setLoading(false);
        })
        .catch((error) => {
          setError('Something went wrong. Please try again.');
          setLoading(false);
        });
    }
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [images]);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <div ref={galleryRef}>
        <ImageGallery images={images} onImageClick={handleImageClick} />
      </div>
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={!!modalImage}
        onRequestClose={handleCloseModal}
        image={modalImage}
      />
      <Toaster />
    </div>
  );
};

export default App;
