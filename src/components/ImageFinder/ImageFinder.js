import React, { Component } from 'react';
import fetchImages from '../ImageFinder/API/pixabayApi';
import ImageGallery from '../ImageFinder/ImageGallery/ImageGallery';
import Button from '../ImageFinder/Button/Buttons';
import Loader from '../ImageFinder/Loader/Loader';
import * as SC from './ImageFinder.module';
import Searchbar from '../ImageFinder/Searchbar/Searchbar'

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

export class ImageFinder extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
    fetchLength: null,
    isLoading: false,
    per_page: '4',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query && query !== '') {
      this.fetchImagesByQuery(query);
    } else if (query === prevState.query && page !== prevState.page) {
      this.fetchImagesByQuery(query);
    }
  }

  setNewPage = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  pageOptionsClick = e => {
    this.setState({ per_page: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    this.setState({ query: query, page: 1, gallery: [], fetchLength: 0 });
    e.target[0].value = '';
  };

  fetchImagesByQuery = (prevProps, prevState) => {
    const { query, page, per_page } = this.state;

    this.setState({ isLoading: true });

    fetchImages(query, page, per_page)
      .then(result => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...result],
          fetchLength: result.length,
          per_page: per_page,
        }));
      })
      .catch(error => {
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    // }
  };

  render() {
    const { gallery, fetchLength, isLoading } = this.state;

    return (
      <SC.DivSearchbar className="Searchbar">
        <SC.H1>Search image</SC.H1>

        <Searchbar
          handleSubmit={this.handleSubmit}
          pageOptionsClick={this.pageOptionsClick}
          per_pageOptions={per_pageOptions}
        />  

        <ImageGallery gallery={gallery} />

        <Loader isLoading={isLoading} />

        {fetchLength > 0 && !isLoading && (
          <Button getNewPage={this.setNewPage} />
        )}
      </SC.DivSearchbar>
    );
  }
}

export default ImageFinder;
