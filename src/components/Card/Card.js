import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';


class Card extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
    }

    static defaultProps = {
        title: settings.cardCreatorText,
    }

    render() {
        return (
            <section className={styles.component}>
                {this.props.title}
            </section>
        )
    }
}

export default Card;
