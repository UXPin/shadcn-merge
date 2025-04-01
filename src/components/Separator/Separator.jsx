import React from 'react';
import PropTypes from 'prop-types';
import { Separator as SeparatorM } from '../ui/separator';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/separator
 * @uxpindescription A visual divider used to separate content or sections.
 */
const Separator = ({ className, ...props }) => {
  return <SeparatorM className={className} {...props} />;
};

Separator.propTypes = {
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Orientation of the separator; either 'horizontal' or 'vertical'. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Whether or not the component is purely decorative. When true, accessibility-related attributes are updated so that the rendered element is removed from the accessibility tree. */
  decorative: PropTypes.bool,
  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default Separator;
