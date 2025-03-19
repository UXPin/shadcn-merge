import * as React from 'react';
import Pagination from '../Pagination';
import PaginationContent from '../../PaginationContent/PaginationContent';
import PaginationItem from '../../PaginationItem/PaginationItem';
import PaginationLink from '../../PaginationLink/PaginationLink';
import PaginationNext from '../../PaginationNext/PaginationNext';
import PaginationPrevious from '../../PaginationPrevious/PaginationPrevious';
import PaginationEllipsis from '../../PaginationEllipsis/PaginationEllipsis';
export default (
  <Pagination uxpId='pagination-1'>
    <PaginationContent uxpId='pagination-content-1'>
      <PaginationItem uxpId='pagination-item-1'>
        <PaginationPrevious href='#' uxpId='pagination-previous-1' />
      </PaginationItem>

      <PaginationItem uxpId='pagination-item-2'>
        <PaginationLink uxpId='pagination-link-1' href='#'>
          1
        </PaginationLink>
      </PaginationItem>

      <PaginationItem uxpId='pagination-item-3'>
        <PaginationLink uxpId='pagination-link-2' href='#' isActive>
          2
        </PaginationLink>
      </PaginationItem>

      <PaginationItem uxpId='pagination-item-4'>
        <PaginationEllipsis uxpId='pagination-ellipsis-1' />
      </PaginationItem>
      <PaginationItem uxpId='pagination-item-5'>
        <PaginationNext href='#' uxpId='pagination-next-1' />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);
