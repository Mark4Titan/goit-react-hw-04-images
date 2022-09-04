import PropTypes from "prop-types"
import * as SC from '../Searchbar/Searchbar.module';

const Searchbar = ({ handleSubmit, pageOptionsClick, per_pageOptions, reff }) => {
  return (
    <header className="SearchbarHeader">
      <SC.FORM className="SearchForm" onSubmit={handleSubmit}>
        <SC.INPUT
          ref={reff}
          className="classNameinput"
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
          name="query"
        />

        <SC.BUTTON type="submit" className="button">
          <span className="button_label">Search</span>
        </SC.BUTTON>
        <SC.SPAN>
          to display
          <SC.SELECT onChange={pageOptionsClick}>
            {per_pageOptions.map(per_pageOptions => (
              <option key={per_pageOptions.value} value={per_pageOptions.value}>
                {per_pageOptions.value}
              </option>
            ))}
          </SC.SELECT>
        </SC.SPAN>
      </SC.FORM>
    </header>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pageOptionsClick: PropTypes.func.isRequired,
  per_pageOptions: PropTypes.array.isRequired,
  reff: PropTypes.object.isRequired
};


export default Searchbar;
