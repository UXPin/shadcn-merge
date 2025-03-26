import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbLink as BreadcrumbLinkM } from '../ui/breadcrumb';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/breadcrumb
 * @uxpindescription Clickable breadcrumb link.
 */
const BreadcrumbLink = ({ children, className, ...props }) => {
  return (
    <BreadcrumbLinkM className={className} {...props}>
      {children}
    </BreadcrumbLinkM>
  );
};

BreadcrumbLink.propTypes = {
  /** Renders as child component (e.g. custom element). */
  asChild: PropTypes.bool,
  /** Href or props passed to the underlying anchor. */
  href: PropTypes.string,
  /** React children nodes (link text or icon). */
  children: PropTypes.node,
  /** Additional class names for styling. */
  className: PropTypes.string,
};

export default BreadcrumbLink;
