import * as React from 'react';
import PropTypes from 'prop-types';
import { Card as CardM } from '../ui/card';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/card
 * @uxpindescription Displays a card with header, content, and footer.
 */
function Card(props) {
  return <CardM {...props} />;
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
