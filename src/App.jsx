import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn';
import ImageModal from './components/ImageModal';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

const API_KEY = 'iRU1FJbCjL6PtN6q8X1gwk-qWsdJeH8e9DRn8y1cz9Y'; 
const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const fetchImages = async (query, page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
      setTotalResults(response.data.total);
    } catch (err) {
      setError('Error fetching images.');
      toast.error('Error fetching images.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery === '') {
      toast.error('Please enter a search term.');
      return;
    }
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query !== '') {
      fetchImages(query, page);
    }
  }, [query, page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && images.length < totalResults && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
