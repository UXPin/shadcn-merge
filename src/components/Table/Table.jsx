import React from 'react';
import PropTypes from 'prop-types';
import { Table as TableM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Wrapper component for rendering a table with responsive scroll.
 */
const Table = ({ children, className, ...props }) => {
  return (
    <TableM className={className} {...props}>
      {children}
    </TableM>
  );
};

Table.propTypes = {
  /** The content of the Table. */
  children: PropTypes.node,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default Table;
