import React from 'react';
import PropTypes from 'prop-types';
import { Sheet as SheetM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription A container for displaying side panel overlays.
 */
const Sheet = ({ children, className, ...props }) => {
  return (
    <SheetM className={className} {...props}>
      {children}
    </SheetM>
  );
};

Sheet.propTypes = {
  /** The controlled open state of the dialog.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** The open state of the dialog when it is initially rendered. Use when you do not need to control its open state. */
  defaultOpen: PropTypes.bool,
  /** Event handler called when the open state of the dialog changes. */
  onOpenChange: PropTypes.func,
  /** The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers. */
  modal: PropTypes.bool,
  /** Child components to render inside the DialogRoot. */
  children: PropTypes.node,
};

export default Sheet;
