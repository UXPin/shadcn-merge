import * as React from 'react';
import PropTypes from 'prop-types';
import { CardFooter as CardFooterM } from '../ui/card';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/card
 * @uxpindescription Displays a card with header, content, and footer.
 */
function CardFooter(props) {
  return <CardFooterM {...props} />;
}

CardFooter.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardFooter;
