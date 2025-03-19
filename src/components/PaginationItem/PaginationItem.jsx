import * as React from 'react';
import PropTypes from 'prop-types';
import { PaginationItem as ShadcnPaginationItem } from '../ui/pagination';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/pagination
 * @uxpindescription Individual item within the pagination.
 */
const PaginationItem = React.forwardRef(({ children, ...props }, ref) => (
  <ShadcnPaginationItem ref={ref} {...props}>
    {children}
  </ShadcnPaginationItem>
));

PaginationItem.propTypes = {
  /** The content inside the pagination item. */
  children: PropTypes.node,
  /** Additional classes to style the  component. */
  className: PropTypes.string,
};

PaginationItem.displayName = 'PaginationItem';

export default PaginationItem;
