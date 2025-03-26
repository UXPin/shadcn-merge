import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuSeparator as ContextMenuSeparatorM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Visual separator between menu items.
 */
const ContextMenuSeparator = ({ children, className, ...props }) => {
  return (
    <ContextMenuSeparatorM className={className} {...props}>
      {children}
    </ContextMenuSeparatorM>
  );
};

ContextMenuSeparator.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ContextMenuSeparator;
