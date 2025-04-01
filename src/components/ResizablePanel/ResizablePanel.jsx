import React from 'react';
import PropTypes from 'prop-types';
import { ResizablePanel as ResizablePanelM } from '../ui/resizable';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/resizable-panel
 * @uxpindescription A panel within the resizable panel group.
 */
const ResizablePanel = ({ children, className, defaultSize, ...props }) => {
  return (
    <ResizablePanelM className={className} {...props}>
      {children}
    </ResizablePanelM>
  );
};

ResizablePanel.propTypes = {
  /** Arbitrary React element(s) */
  children: PropTypes.node,
  /** Class name to attach to root element */
  className: PropTypes.string,
  /** Panel should collapse to this size
   * @uxpinignoreprop
   */
  collapsedSize: PropTypes.number,
  /** Panel should collapse when resized beyond its minSize
   * @uxpinignoreprop
   */
  collapsible: PropTypes.bool,
  /** Initial size of panel (numeric value between 1–100)
   *  @uxpinbind onResize 0
   */
  defaultSize: PropTypes.number,
  /** Panel id (unique within group); falls back to useId when not provided */
  id: PropTypes.string,
  /** Maximum allowable size of panel (1–100); defaults to 100 */
  maxSize: PropTypes.number,
  /** Minimum allowable size of panel (1–100); defaults to 10 */
  minSize: PropTypes.number,
  /** Called when panel is collapsed
   * @uxpinignoreprop
   */
  onCollapse: PropTypes.func,
  /** Called when panel is expanded
   * @uxpinignoreprop
   */
  onExpand: PropTypes.func,
  /** Called when panel is resized; receives new size between 1–100
   */
  onResize: PropTypes.func,
  /** Order of panel within group; required for conditionally rendered panels
   * @uxpinignoreprop
   */
  order: PropTypes.number,
  /** CSS style to attach to root element */
  style: PropTypes.object,
  /** HTML element tag name for root element */
  tagName: PropTypes.string,
};

export default ResizablePanel;
