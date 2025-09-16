import * as React from 'react';
import PropTypes from 'prop-types';
import { PaginationNext as ShadcnPaginationNext } from '../ui/pagination';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/pagination
 * @uxpindescription Button to navigate to the next page.
 */
const PaginationNext = React.forwardRef(({ href, ...props }, ref) => (
  <ShadcnPaginationNext ref={ref} href={href} {...props} />
));

PaginationNext.propTypes = {
  /** URL to navigate to the next page. */
  href: PropTypes.string.isRequired,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

PaginationNext.displayName = 'PaginationNext';

export default PaginationNext;
