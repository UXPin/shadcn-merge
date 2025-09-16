'use client';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/typography
 * @uxpindescription Typography Header2 component.
 */
export default function Header2({ className = '', children, ...props }) {
  return (
    <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`} {...props}>
      {children}
    </h2>
  );
}

Header2.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
}; 