import React from 'react';
import PropTypes from 'prop-types';
import { Alert as AlertM } from '../ui/alert';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert
 * @uxpindescription Displays a prominent message or status.
 */
const Alert = (props) => {
  return <AlertM {...props} />;
};

Alert.propTypes = {
  /** The content inside the alert */
  children: PropTypes.node,

  /** Custom class names for styling
   *
   *  @uxpincontroltype tailwindclassname
   * */
  className: PropTypes.string,

  /** Specifies the alert variant */
  variant: PropTypes.oneOf(['default', 'destructive']),
};

export default Alert;
