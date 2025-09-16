import * as React from 'react';
import PropTypes from 'prop-types';
import { PaginationEllipsis as ShadcnPaginationEllipsis } from '../ui/pagination';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/pagination
 * @uxpindescription Represents an ellipsis in pagination, indicating skipped pages.
 */
const PaginationEllipsis = React.forwardRef((props, ref) => (
  <ShadcnPaginationEllipsis ref={ref} {...props} />
));
PaginationEllipsis.propTypes = {
  /** The content inside the pagination item. */
  children: PropTypes.node,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

PaginationEllipsis.displayName = 'PaginationEllipsis';

export default PaginationEllipsis;
