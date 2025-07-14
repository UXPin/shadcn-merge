'use client';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/typography
 * @uxpindescription Typography Header4 component.
 */
export default function Header4({ className = '', children, ...props }) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h4>
  );
}

Header4.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}; 