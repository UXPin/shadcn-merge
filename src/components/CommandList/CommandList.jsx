import React from 'react';
import PropTypes from 'prop-types';
import { CommandList as CommandListM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription List wrapper displaying command results.
 */
const CommandList = ({ children, className, ...props }) => {
  return (
    <CommandListM className={className} {...props}>
      {children}
    </CommandListM>
  );
};

CommandList.propTypes = {
  /** List content */
  children: PropTypes.node,
  /** ARIA label for list */
  label: PropTypes.string,
  /** Additional className for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default CommandList;
