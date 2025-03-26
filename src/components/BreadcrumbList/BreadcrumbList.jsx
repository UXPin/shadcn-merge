import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbList as BreadcrumbListM } from '../ui/breadcrumb';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/breadcrumb
 * @uxpindescription Container for breadcrumb items.
 */
const BreadcrumbList = ({ children, className, ...props }) => {
  return (
    <BreadcrumbListM className={className} {...props}>
      {children}
    </BreadcrumbListM>
  );
};

BreadcrumbList.propTypes = {
  /** React children nodes (breadcrumb items). */
  children: PropTypes.node,
  /** Additional class names for styling. */
  className: PropTypes.string,
};

export default BreadcrumbList;
