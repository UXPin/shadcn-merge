'use client';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/typography
 * @uxpindescription Typography Paragraph component.
 */
export default function Paragraph({ className = '', children, ...props }) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`} {...props}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  children: PropTypes.node,
}; 