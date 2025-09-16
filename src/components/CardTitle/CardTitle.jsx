import * as React from 'react';
import PropTypes from 'prop-types';
import { CardTitle as CardTitleM } from '../ui/card';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/card
 * @uxpindescription Displays a card with header, content, and footer.
 */
function CardTitle(props) {
  return <CardTitleM {...props} />;
}

CardTitle.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardTitle;
