import * as React from 'react';
import PropTypes from 'prop-types';
import { CardDescription as CardDescriptionM } from '../ui/card';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/card
 * @uxpindescription Displays a card with header, content, and footer.
 */
function CardDescription(props) {
  return <CardDescriptionM {...props} />;
}

CardDescription.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardDescription;
