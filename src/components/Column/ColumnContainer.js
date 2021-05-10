import {connect} from 'react-redux';
//import { ProgressPlugin } from 'webpack';
import Column from './Column';

export const getCardsForColumn = ({cards}, listId) => cards.filter(card => card.listId == listId);

const mapStateToProps = (state, props) => ({
  columns: getCardsForColumn(state, props.id),
});



export default connect(mapStateToProps)(Column);