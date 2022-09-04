import React, { useState, useEffect, useRef } from 'react';
import fetchImages from '../ImageFinder/API/pixabayApi';
import ImageGallery from '../ImageFinder/ImageGallery/ImageGallery';
import Button from '../ImageFinder/Button/Buttons';
import Loader from '../ImageFinder/Loader/Loader';
import * as SC from './ImageFinder.module';
import Searchbar from '../ImageFinder/Searchbar/Searchbar';

const per_pageOptions = [
  {
    value: 4,
  },
  {
    value: 8,
  },
  {
    value: 12,
  },
  {
    value: 24,
  },
  {
    value: 32,
  },
  {
    value: 64,
  },
  {
    value: 124,
  },
];

export const ImageFinder = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [gallerys, setGallery] = useState([]);
  const [fetchLength, setFetchLength] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [per_page, setPer_page] = useState(4);
  const inputEl = useRef(null);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);

    fetchImages(query, page, per_page)
      .then(result => {
        const { hits, totalHits } = result.data;
        setGallery(prevState => [...prevState, ...hits]);
        if (page === 1) setFetchLength(totalHits - per_page)
        else setFetchLength(privState => privState - per_page);
        console.log(result.data);
        setPer_page(per_page);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        if (page === 1) return;
        setTimeout(
          () =>
            window.scrollBy({
              top: document.documentElement.scrollHeight / (per_page / 2),
              behavior: 'smooth',
            }),
          1
        );
      });
  }, [query, page, per_page]);

  useEffect(() => {
    if (query === inputEl.current.value) inputEl.current.value = '';
  }, [query, page]);

  const setNewPage = e => {
    setPage(prevState => prevState + 1);
  };

  const pageOptionsClick = e => {
    setGallery([]);
    setPer_page(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputEl.current.value === '') return;
    if (inputEl.current.value === query) {
      setPage(prevState => prevState + 1);
      return;
    }
    // debugger
    setPage(1);
    setQuery(inputEl.current.value);
    setGallery([]);
    setFetchLength(0);
  };

  return (
    <SC.DivSearchbar className="Searchbar">
      <SC.H1>
        Search image {query}
      </SC.H1>

      <Searchbar
        handleSubmit={handleSubmit}
        pageOptionsClick={pageOptionsClick}
        per_pageOptions={per_pageOptions}
        reff={inputEl}
      />

      <ImageGallery gallery={gallerys} />

      <Loader isLoading={isLoading} />

      {fetchLength > 0 && !isLoading && (
        <Button getNewPage={setNewPage} fetchLength={fetchLength} />
      )}
    </SC.DivSearchbar>
  );
};

export default ImageFinder;
