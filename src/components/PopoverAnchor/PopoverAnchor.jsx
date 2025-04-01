import React from 'react';
import PropTypes from 'prop-types';
import { PopoverAnchor as PopoverAnchorM } from '../ui/popover';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/popover
 * @uxpindescription Anchor point for positioning the popover.
 */
const PopoverAnchor = ({ children, className, ...props }) => {
  return (
    <PopoverAnchorM className={className} {...props}>
      {children}
    </PopoverAnchorM>
  );
};

PopoverAnchor.propTypes = {
  /** Content children components. */
  children: PropTypes.node,
  /** Additional classes to style the  component. */
  className: PropTypes.string,
};

export default PopoverAnchor;
