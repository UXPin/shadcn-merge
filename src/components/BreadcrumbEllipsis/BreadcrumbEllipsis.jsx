import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbEllipsis as BreadcrumbEllipsisM } from '../ui/breadcrumb';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/breadcrumb
 * @uxpindescription Ellipsis element to indicate more items.
 */
const BreadcrumbEllipsis = ({ children, className, ...props }) => {
  return <BreadcrumbEllipsisM className={className} {...props} />;
};

BreadcrumbEllipsis.propTypes = {
  /** Additional class names for styling. */
  className: PropTypes.string,
};

export default BreadcrumbEllipsis;
