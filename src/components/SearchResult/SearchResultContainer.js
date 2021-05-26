import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForSearch } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  
  return {
    cards :getCardsForSearch(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResult);
