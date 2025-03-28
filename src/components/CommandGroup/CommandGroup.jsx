import React from 'react';
import PropTypes from 'prop-types';
import { CommandGroup as CommandGroupM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription Groups related command items.
 */
const CommandGroup = ({ children, className, ...props }) => {
  return (
    <CommandGroupM className={className} {...props}>
      {children}
    </CommandGroupM>
  );
};

CommandGroup.propTypes = {
  /** Group heading */
  heading: PropTypes.node,
  /** Unique group value (used if no heading is provided) */
  value: PropTypes.string,
  /** Force render group */
  forceMount: PropTypes.bool,
  /** Children */
  children: PropTypes.node,
  /** Additional className for styling */
  className: PropTypes.string,
};

export default CommandGroup;
