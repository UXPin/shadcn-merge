import React from 'react';
import PropTypes from 'prop-types';
import { HoverCardTrigger as HoverCardTriggerM } from '../ui/hover-card';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div style={{ color: 'red' }}>
      <strong>ERROR:</strong> {error.message}
    </div>
  );
}

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/hover-card
 * @uxpindescription The element that triggers the hover card when hovered.
 */
const HoverCardTrigger = ({ children, className, ...props }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HoverCardTriggerM className={className} {...props}>
        {children}
      </HoverCardTriggerM>
    </ErrorBoundary>
  );
};

HoverCardTrigger.propTypes = {
  /** The trigger content or element */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default HoverCardTrigger;
