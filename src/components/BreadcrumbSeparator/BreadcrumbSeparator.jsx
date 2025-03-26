import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbSeparator as BreadcrumbSeparatorM } from '../ui/breadcrumb';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/breadcrumb
 * @uxpindescription Separator element between breadcrumb items.
 */
const BreadcrumbSeparator = ({ children, className, ...props }) => {
  return (
    <BreadcrumbSeparatorM className={className} {...props}>
      {children}
    </BreadcrumbSeparatorM>
  );
};

BreadcrumbSeparator.propTypes = {
  /** Optional custom separator content (e.g. icon or character). */
  children: PropTypes.node,
  /** Additional class names for styling. */
  className: PropTypes.string,
};

export default BreadcrumbSeparator;
