import * as React from 'react';
import PropTypes from 'prop-types';
import { Label as ShadcnLabel } from '../ui/label';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/label
 * @uxpindescription Renders an accessible label associated with controls.
 */
const Label = React.forwardRef(({ children, ...props }, ref) => (
  <ShadcnLabel ref={ref} {...props}>
    {children}
  </ShadcnLabel>
));

Label.propTypes = {
  /** The content of the label. */
  children: PropTypes.node.isRequired,

  /** The ID of the control to which the label is associated. */
  htmlFor: PropTypes.string,

  /** Additional classes to style the label. */
  className: PropTypes.string,
};

Label.displayName = 'Label';

export default Label;
