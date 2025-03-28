import React from 'react';
import PropTypes from 'prop-types';
import { CommandEmpty as CommandEmptyM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription Empty state for no command results.
 */
const CommandEmpty = ({ children, className, ...props }) => {
  return (
    <CommandEmptyM className={className} {...props}>
      {children}
    </CommandEmptyM>
  );
};

CommandEmpty.propTypes = {
  /** CommandEmpty content */
  children: PropTypes.node,
  /** Additional className for styling */
  className: PropTypes.string,
};

export default CommandEmpty;
