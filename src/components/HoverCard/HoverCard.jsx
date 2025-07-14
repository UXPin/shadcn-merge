import React from 'react';
import PropTypes from 'prop-types';
import { HoverCard as HoverCardM } from '../ui/hover-card';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/hover-card
 * @uxpindescription A wrapper component for hover-based interactions revealing content.
 */
const HoverCard = ({
  children,
  openDelay,
  closeDelay,
  className,
  ...props
}) => {
  return (
    <HoverCardM
      key={props.defaultOpen}
      openDelay={openDelay}
      closeDelay={closeDelay}
      className={className}
      {...props}
    >
      {children}
    </HoverCardM>
  );
};

HoverCard.propTypes = {
  /** Child components to render inside the HoverCardRoot. */
  children: PropTypes.node,
  /** The duration (in milliseconds) from when the mouse leaves the trigger or content until the hover card closes. */
  closeDelay: PropTypes.number,
  /** The open state of the hover card when it is initially rendered. Use when you do not need to control its open state. */
  defaultOpen: PropTypes.bool,
  /** The controlled open state of the hover card.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** The duration (in milliseconds) from when the mouse enters the trigger until the hover card opens. */
  openDelay: PropTypes.number,
  /** Event handler called when the open state of the hover card changes. */
  onOpenChange: PropTypes.func,
};

export default HoverCard;
