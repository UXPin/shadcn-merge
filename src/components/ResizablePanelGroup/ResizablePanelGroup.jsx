import React from 'react';
import PropTypes from 'prop-types';
import { ResizablePanelGroup as ResizablePanelGroupM } from '../ui/resizable';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/resizable
 * @uxpindescription Container for a group of resizable panels.
 */
const ResizablePanelGroup = ({ className, ...props }) => {
  return (
    <ResizablePanelGroupM className={className} {...props}>
      {props.children}
    </ResizablePanelGroupM>
  );
};

ResizablePanelGroup.propTypes = {
  /** Unique id used to auto-save group arrangement via localStorage
   * @uxpinignoreprop
   */
  autoSaveId: PropTypes.string,
  /** Arbitrary React element(s) */
  children: PropTypes.node,
  /** Class name to attach to root element
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Group orientation */
  direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  /** Group id; falls back to useId when not provided */
  id: PropTypes.string,
  /** Called when group layout changes
   * @uxpinignoreprop
   */
  onLayout: PropTypes.func,
  /** Custom storage API; defaults to localStorage
   * @uxpinignoreprop
   */
  storage: PropTypes.shape({
    getItem: PropTypes.func.isRequired,
    setItem: PropTypes.func.isRequired,
  }),
  /** CSS style to attach to root element */
  style: PropTypes.object,
  /** HTML element tag name for root element */
  tagName: PropTypes.string,
};

export default ResizablePanelGroup;
