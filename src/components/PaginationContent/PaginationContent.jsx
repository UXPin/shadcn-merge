import * as React from 'react';
import PropTypes from 'prop-types';
import { PaginationContent as ShadcnPaginationContent } from '../ui/pagination';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/pagination
 * @uxpindescription Container for pagination items.
 */
const PaginationContent = React.forwardRef(({ children, ...props }, ref) => (
  <ShadcnPaginationContent ref={ref} {...props}>
    {children}
  </ShadcnPaginationContent>
));

PaginationContent.propTypes = {
  /** The content of the pagination container. */
  children: PropTypes.node,
  /** Additional classes to style the  component. */
  className: PropTypes.string,
};

PaginationContent.displayName = 'PaginationContent';

export default PaginationContent;
