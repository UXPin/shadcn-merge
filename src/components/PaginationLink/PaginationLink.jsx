import * as React from 'react';
import PropTypes from 'prop-types';
import { PaginationLink as ShadcnPaginationLink } from '../ui/pagination';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/pagination
 * @uxpindescription Pagination link that navigates to a specific page.
 */
const PaginationLink = React.forwardRef(({ children, href, ...props }, ref) => (
  <ShadcnPaginationLink ref={ref} href={href} {...props}>
    {children}
  </ShadcnPaginationLink>
));

PaginationLink.propTypes = {
  /** The content of the pagination link. */
  children: PropTypes.node,

  /** URL the pagination link navigates to. */
  href: PropTypes.string.isRequired,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

PaginationLink.displayName = 'PaginationLink';

export default PaginationLink;
