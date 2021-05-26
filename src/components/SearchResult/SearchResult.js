import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';


class SearchResult extends React.Component {
    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }
  
    render() {
      const {title, icon, cards} = this.props;

      return (
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}> {title} <span className={styles.icon}> <Icon name={icon} /> </span></h3>
          
            <div className={styles.cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
        
          </section>
        </Container>
      );
    }
}

export default SearchResult;
