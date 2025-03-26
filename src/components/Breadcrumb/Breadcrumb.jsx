import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as BreadcrumbM } from '../ui/breadcrumb';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/breadcrumb
 * @uxpindescription Root breadcrumb navigation wrapper.
 */
const Breadcrumb = ({ children, className, ...props }) => {
  return (
    <BreadcrumbM className={className} {...props}>
      {children}
    </BreadcrumbM>
  );
};

Breadcrumb.propTypes = {
  /** React children nodes. */
  children: PropTypes.node,
  /** Custom separator to render between breadcrumb items. */
  separator: PropTypes.node,
  /** Additional class names for styling. */
  className: PropTypes.string,
};

export default Breadcrumb;
