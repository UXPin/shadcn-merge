import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuRadioItem as ContextMenuRadioItemM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Individual radio menu item.
 */
const ContextMenuRadioItem = ({ children, className, ...props }) => {
  return (
    <ContextMenuRadioItemM
      className={className}
      {...props}
      onSelect={(event) => event.preventDefault()}
    >
      {children}
    </ContextMenuRadioItemM>
  );
};

ContextMenuRadioItem.propTypes = {
  /** The content of the radio item. */
  children: PropTypes.node.isRequired,
  /** The value associated with this radio item. */
  value: PropTypes.string.isRequired,
  /** If true, the item is disabled. */
  disabled: PropTypes.bool,
};

export default ContextMenuRadioItem;
