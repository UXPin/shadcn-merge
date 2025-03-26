import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbPage as BreadcrumbPageM } from '../ui/breadcrumb';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/breadcrumb
 * @uxpindescription Current page indicator in the breadcrumb.
 */
const BreadcrumbPage = ({ children, className, ...props }) => {
  return (
    <BreadcrumbPageM className={className} {...props}>
      {children}
    </BreadcrumbPageM>
  );
};

BreadcrumbPage.propTypes = {
  /** React children nodes (usually page title). */
  children: PropTypes.node,
  /** Additional class names for styling. */
  className: PropTypes.string,
};

export default BreadcrumbPage;
