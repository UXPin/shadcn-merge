import React from 'react';
import PropTypes from 'prop-types';
import { HoverCardTrigger as HoverCardTriggerM } from '../ui/hover-card';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/hover-card
 * @uxpindescription The element that triggers the hover card when hovered.
 */
const HoverCardTrigger = ({ children, className, ...props }) => {
  return (
    <HoverCardTriggerM className={className} {...props}>
      {children}
    </HoverCardTriggerM>
  );
};

HoverCardTrigger.propTypes = {
  /** The trigger content or element */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default HoverCardTrigger;
