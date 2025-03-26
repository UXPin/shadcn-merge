import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuLabel as ContextMenuLabelM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Non-interactive label inside the menu.
 */
const ContextMenuLabel = ({ children, className, ...props }) => {
  return (
    <ContextMenuLabelM className={className} {...props}>
      {children}
    </ContextMenuLabelM>
  );
};

ContextMenuLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ContextMenuLabel;
