import * as React from 'react';
import PropTypes from 'prop-types';
import { Pagination as ShadcnPagination } from '../ui/pagination';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/pagination
 * @uxpindescription Pagination component with page navigation, next and previous links.
 */
const Pagination = React.forwardRef(
  ({ children, className, ...props }, ref) => (
    <ShadcnPagination ref={ref} className={className} {...props}>
      {children}
    </ShadcnPagination>
  )
);

Pagination.propTypes = {
  /** The content of the pagination component. */
  children: PropTypes.node,

  /** Additional classes to style the pagination component. */
  className: PropTypes.string,
};

Pagination.displayName = 'Pagination';

export default Pagination;
