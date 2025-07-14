'use client';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/typography
 * @uxpindescription Typography Header1 component.
 */
export default function Header1({ className = '', children, ...props }) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight text-balance ${className}`} {...props}>
      {children}
    </h1>
  );
}

Header1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}; 