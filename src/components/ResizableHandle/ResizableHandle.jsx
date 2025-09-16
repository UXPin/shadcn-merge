import React from 'react';
import PropTypes from 'prop-types';
import { ResizableHandle as ResizableHandleM } from '../ui/resizable';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/resizable
 * @uxpindescription Handle used to resize adjacent panels.
 */
const ResizableHandle = ({ children, className, ...props }) => {
  return <ResizableHandleM className={className} {...props} />;
};

ResizableHandle.propTypes = {
  /** Custom drag UI; can be any arbitrary React element(s) */
  children: PropTypes.node,
  /** Class name to attach to root element
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  withHandle: PropTypes.bool,
  /** Allow margin when determining resizable handle hit detection
   * @uxpinignoreprop
   */
  hitAreaMargins: PropTypes.shape({
    /** Margin (in px) for coarse pointer devices (e.g., touch) */
    coarse: PropTypes.number,
    /** Margin (in px) for fine pointer devices (e.g., mouse) */
    fine: PropTypes.number,
  }),
  /** Disable the drag handle */
  disabled: PropTypes.bool,
  /** Resize handle id (unique within group); falls back to useId when not provided */
  id: PropTypes.string,
  /** Called when dragging state changes (true/false) */
  onDragging: PropTypes.func,
  /** CSS style to attach to root element
   * @uxpinignoreprop
   */
  style: PropTypes.object,
  /** HTML element tag name for root element */
  tagName: PropTypes.string,
};

export default ResizableHandle;
