import React from 'react';
import PropTypes from 'prop-types';
import { CommandItem as CommandItemM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription An individual selectable command item.
 */
const CommandItem = ({ children, className, ...props }) => {
  return (
    <CommandItemM className={className} {...props}>
      {children}
    </CommandItemM>
  );
};

CommandItem.propTypes = {
  /** Children */
  children: PropTypes.node,
  /** Item value */
  value: PropTypes.string,
  /** Keywords to match against */
  keywords: PropTypes.arrayOf(PropTypes.string),
  /** Disable this item */
  disabled: PropTypes.bool,
  /** Callback when item is selected */
  onSelect: PropTypes.func,
  /** Force render even if filtered out */
  forceMount: PropTypes.bool,
  /** Additional className for styling */
  className: PropTypes.string,
};

export default CommandItem;
