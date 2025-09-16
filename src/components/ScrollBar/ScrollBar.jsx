import React from 'react';
import PropTypes from 'prop-types';
import { ScrollBar as ScrollBarM } from '../ui/scroll-area';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/scroll-area
 * @uxpindescription The scrollbar used within the scroll area for scrolling content.
 */
const ScrollBar = ({ children, className, ...props }) => {
  return (
    <ScrollBarM className={className} {...props}>
      {children}
    </ScrollBarM>
  );
};

ScrollBar.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional CSS classes
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Change the rendered element for the one passed as a child
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Force mounting when more control is needed
   * @uxpinignoreprop
   */
  forceMount: PropTypes.bool,
  /** Orientation of the scrollbar */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default ScrollBar;
