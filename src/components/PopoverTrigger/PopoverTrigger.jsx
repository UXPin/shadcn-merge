import React from 'react';
import PropTypes from 'prop-types';
import { PopoverTrigger as PopoverTriggerM } from '../ui/popover';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/popover
 * @uxpindescription Element that toggles the popover visibility.
 */
const PopoverTrigger = ({ children, className, ...props }) => {
  return (
    <PopoverTriggerM className={className} {...props}>
      {children}
    </PopoverTriggerM>
  );
};

PopoverTrigger.propTypes = {
  /** Content children components. */
  children: PropTypes.node,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default PopoverTrigger;
