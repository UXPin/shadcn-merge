import * as React from 'react';
import PropTypes from 'prop-types';
import { AspectRatio as AspectRatioM } from '../ui/aspect-ratio';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/aspect-ratio
 * @uxpindescription Displays content within a desired ratio.
 */
function AspectRatio(props) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <AspectRatioM {...props} />
    </div>
  );
}

AspectRatio.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** If true, changes the element to render as a child.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The desired ratio. */
  ratio: PropTypes.number,
};

export default AspectRatio;
