import React from 'react';
import PropTypes from 'prop-types';
import { HoverCardContent as HoverCardContentM } from '../ui/hover-card';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/hover-card
 * @uxpindescription The content that appears when the hover card is triggered.
 */
const HoverCardContent = ({
  children,
  className,
  sideOffset,
  align,
  ...props
}) => {
  return (
    <HoverCardContentM
      className={className}
      sideOffset={sideOffset}
      align={align}
      {...props}
    >
      {children}
    </HoverCardContentM>
  );
};

HoverCardContent.propTypes = {
  /** The content inside the hover card panel */
  children: PropTypes.node.isRequired,

  /** Offset from the trigger element */
  sideOffset: PropTypes.number,

  /** Align position relative to the trigger */
  align: PropTypes.oneOf(['start', 'center', 'end']),

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default HoverCardContent;
