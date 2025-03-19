import React from 'react';
import PropTypes from 'prop-types';
import { AlertDescription as AlertDescriptionM } from '../ui/alert';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert
 * @uxpindescription Description component for the Alert, typically used for additional details.
 */
const AlertDescription = (props) => {
  return <AlertDescriptionM {...props} />;
};

AlertDescription.propTypes = {
  /** The content inside the alert description */
  children: PropTypes.node,

  /** Custom class names for styling */
  className: PropTypes.string,
};

export default AlertDescription;
