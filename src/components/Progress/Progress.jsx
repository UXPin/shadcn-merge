import React from 'react';
import PropTypes from 'prop-types';
import { Progress as ProgressM } from '../ui/progress';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/progress
 * @uxpindescription Displays a progress bar to show completion status.
 */
const Progress = ({ className, value, ...props }) => {
  return <ProgressM className={className} value={value} {...props} />;
};

Progress.propTypes = {
  /** If true, the component will render as its child component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Current progress value. */
  value: PropTypes.number,
  /** Maximum progress value. */
  max: PropTypes.number,
  /** Function to get the accessible label text representing the current value. */
  getValueLabel: PropTypes.func,
};

export default Progress;
