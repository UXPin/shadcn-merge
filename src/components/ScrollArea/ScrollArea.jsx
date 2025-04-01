import React from 'react';
import PropTypes from 'prop-types';
import { ScrollArea as ScrollAreaM } from '../ui/scroll-area';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/scroll-area
 * @uxpindescription A scrollable container for content with a customizable scrollbar.
 */
const ScrollArea = ({ children, className, ...props }) => {
  return (
    <ScrollAreaM
      className={className}
      {...props}
      style={{ height: props.height, width: props.width }}
    >
      {children}
    </ScrollAreaM>
  );
};

ScrollArea.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Height of the scroll-area */
  height: PropTypes.number,
  /** Change the rendered element for the one passed as a child
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Determines scrollbar visibility behavior */
  type: PropTypes.oneOf(['auto', 'always', 'scroll', 'hover']),
  /** Delay in milliseconds before hiding scrollbars after user interaction */
  scrollHideDelay: PropTypes.number,
  /** Reading direction of the scroll area */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** Nonce attribute for Content Security Policy */
  nonce: PropTypes.string,
};

export default ScrollArea;
