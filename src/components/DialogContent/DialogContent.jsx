import React from 'react';
import PropTypes from 'prop-types';
import { DialogContent as DialogContentM } from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Container for the dialog's content.
 */
const DialogContent = ({ children, className, ...props }) => {
  return (
    <DialogContentM className={className} {...props}>
      {children}
    </DialogContentM>
  );
};

DialogContent.propTypes = {
  /** The content of the dialog. */
  children: PropTypes.node.isRequired,
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. */
  forceMount: PropTypes.bool,
  /** Event handler called when auto-focusing on open. Can be prevented. */
  onOpenAutoFocus: PropTypes.func,
  /** Event handler called when auto-focusing on close. Can be prevented. */
  onCloseAutoFocus: PropTypes.func,
  /** Event handler called when the escape key is down. Can be prevented. */
  onEscapeKeyDown: PropTypes.func,
  /** Event handler called when an interaction happens outside the content. Can be prevented. */
  onInteractOutside: PropTypes.func,
  /** Event handler called when focus moves outside the content. Can be prevented. */
  onFocusOutside: PropTypes.func,
  /** Event handler called when a pointer event occurs outside the content. Can be prevented. */
  onPointerDownOutside: PropTypes.func,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DialogContent;
