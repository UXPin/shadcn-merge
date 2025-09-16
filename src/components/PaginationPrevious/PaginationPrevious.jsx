import * as React from 'react';
import PropTypes from 'prop-types';
import { PaginationPrevious as ShadcnPaginationPrevious } from '../ui/pagination';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/pagination
 * @uxpindescription Button to navigate to the previous page.
 */
const PaginationPrevious = React.forwardRef(({ href, ...props }, ref) => (
  <ShadcnPaginationPrevious ref={ref} href={href} {...props} />
));

PaginationPrevious.propTypes = {
  /** URL to navigate to the previous page. */
  href: PropTypes.string.isRequired,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

PaginationPrevious.displayName = 'PaginationPrevious';

export default PaginationPrevious;
