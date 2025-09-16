'use client';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/typography
 * @uxpindescription Typography Header3 component.
 */
export default function Header3({ className = '', children, ...props }) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
}

Header3.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
}; 