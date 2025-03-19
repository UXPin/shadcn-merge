import React from 'react';
import PropTypes from 'prop-types';
import { AlertTitle as AlertTitleM } from '../ui/alert';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert
 * @uxpindescription Title component for the Alert, typically used to display a heading.
 */
const AlertTitle = (props) => {
  return <AlertTitleM {...props} />;
};

AlertTitle.propTypes = {
  /** The content inside the alert title */
  children: PropTypes.node,

  /** Custom class names for styling */
  className: PropTypes.string,
};

export default AlertTitle;
