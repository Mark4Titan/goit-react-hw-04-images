import PropTypes from "prop-types"
import * as SC from '../Searchbar/Searchbar.module';

const Searchbar = ({ handleSubmit, pageOptionsClick, per_pageOptions }) => {
  return (
    <header className="SearchbarHeader">
      <SC.FORM className="SearchForm" onSubmit={handleSubmit}>
        <SC.INPUT
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
          <SC.SELECT onClick={pageOptionsClick}>
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
  handleSubmit: PropTypes.any,
  pageOptionsClick: PropTypes.any,
  per_pageOptions: PropTypes.shape({
    map: PropTypes.func,
    value: PropTypes.any
  })
}

export default Searchbar;
