import './App.css';
import SearchBar from './Components/SearchBar';
import searchImages from './api';
import ImageList from './Components/ImageList';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async(term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div>
      Picture search App
      <SearchBar handleSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
