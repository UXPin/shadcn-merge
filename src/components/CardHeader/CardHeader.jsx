import * as React from 'react';
import PropTypes from 'prop-types';
import { CardHeader as CardHeaderM } from '../ui/card';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/card
 * @uxpindescription Displays a card with header, content, and footer.
 */
function CardHeader(props) {
  return <CardHeaderM {...props} />;
}

CardHeader.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardHeader;
