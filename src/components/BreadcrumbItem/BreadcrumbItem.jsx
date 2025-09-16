import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbItem as BreadcrumbItemM } from '../ui/breadcrumb';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/breadcrumb
 * @uxpindescription A single breadcrumb item.
 */
const BreadcrumbItem = ({ children, className, ...props }) => {
  return (
    <BreadcrumbItemM className={className} {...props}>
      {children}
    </BreadcrumbItemM>
  );
};

BreadcrumbItem.propTypes = {
  /** React children nodes (usually links or pages). */
  children: PropTypes.node,
  /** Additional class names for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default BreadcrumbItem;
