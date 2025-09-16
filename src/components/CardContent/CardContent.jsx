import * as React from 'react';
import PropTypes from 'prop-types';
import { CardContent as CardContentM } from '../ui/card';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/card
 * @uxpindescription Displays a card with header, content, and footer.
 */
function CardContent(props) {
  return <CardContentM {...props} />;
}

CardContent.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardContent;
