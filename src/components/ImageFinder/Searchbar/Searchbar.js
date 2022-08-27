import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import fetchImages from '../API/pixabayApi';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Buttons';

const per_pageOptions = [
 
  {
    value: 3,
  },
  {
    value: 6,
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
    value: 128,
  },
];

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
    fetchLength: null,
    isLoading: false,
    per_page: '3',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      query !== prevState.query &&
      query !== ''
    ) {
      this.fetchImagesByQuery(query);
    }
    else if (query === prevState.query && page !== prevState.page) {
      this.fetchImagesByQuery(query);
    }
  }

 

  setNewPage = e => {
    e.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  er_pageOptionsClick = e => {
    this.setState({ per_page: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    this.setState({ query: '', page: 1, gallery: [], fetchLength: 0 });
    this.setState({ query: query});
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
      <div className="Searchbar">
        <h1>Search image</h1>

        <header className="SearchbarHeader">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <input
              className="classNameinput"
              type="text"
              autoComplete="off"
              autoFocus={true}
              placeholder="Search images and photos"
              name="query"
            />

            <button type="submit" className="button">
              <span className="button_label">Search</span>
            </button>
            <span>
              відобразити
              <select onClick={this.er_pageOptionsClick}>
                {per_pageOptions.map(per_pageOptions => (
                  <option
                    key={per_pageOptions.value}
                    value={per_pageOptions.value}
                  >
                    {per_pageOptions.value}
                  </option>
                ))}
              </select>
            </span>
          </form>
        </header>

        <ImageGallery gallery={gallery} />

        <Audio
          height="180"
          width="180"
          radius="9"
          color="green"
          ariaLabel="Loading..."
          // wrapperStyle
          wrapperClass="AudioSearchbar"
          visible={isLoading}
        />

        {fetchLength > 0 && !isLoading && (
          <Button getNewPage={this.setNewPage} />
        )}
      </div>
    );
  }
}

export default Searchbar;
