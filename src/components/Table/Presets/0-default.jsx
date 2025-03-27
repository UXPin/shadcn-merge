import * as React from 'react';
import Table from '../Table';
import TableBody from '../../TableBody/TableBody';
import TableCaption from '../../TableCaption/TableCaption';
import TableCell from '../../TableCell/TableCell';
import TableFooter from '../../TableFooter/TableFooter';
import TableHead from '../../TableHead/TableHead';
import TableHeader from '../../TableHeader/TableHeader';
import TableRow from '../../TableRow/TableRow';
export default (
  <Table uxpId='table'>
    <TableCaption uxpId='table-caption'>
      A list of your recent invoices.
    </TableCaption>
    <TableHeader uxpId='table-header'>
      <TableRow uxpId='table-row-header'>
        <TableHead uxpId='table-head-invoice'>Invoice</TableHead>
        <TableHead uxpId='table-head-status'>Status</TableHead>
        <TableHead uxpId='table-head-method'>Method</TableHead>
        <TableHead uxpId='table-head-amount'>Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody uxpId='table-body'>
      <TableRow key='invoice' uxpId='table-row-1'>
        <TableCell uxpId='table-cell-invoice'>INV001</TableCell>
        <TableCell uxpId='table-cell-status'>Paid</TableCell>
        <TableCell uxpId='table-cell-method'>Paypal</TableCell>
        <TableCell uxpId='table-cell-amount'>$250.00</TableCell>
      </TableRow>

      <TableRow key='invoice' uxpId='table-row-2'>
        <TableCell uxpId='table-cell-invoice-2'>INV002</TableCell>
        <TableCell uxpId='table-cell-status-2'>Pending</TableCell>
        <TableCell uxpId='table-cell-method-2'>Credit Card</TableCell>
        <TableCell uxpId='table-cell-amount-2'>$1,000.00</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter uxpId='table-footer'>
      <TableRow uxpId='table-row-footer'>
        <TableCell colSpan={3} uxpId='table-cell-total'>
          Total
        </TableCell>
        <TableCell uxpId='table-cell-total-amount'>$1,250.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);
