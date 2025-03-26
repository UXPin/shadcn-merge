import * as React from 'react';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbEllipsis from '../../BreadcrumbEllipsis/BreadcrumbEllipsis';
import BreadcrumbItem from '../../BreadcrumbItem/BreadcrumbItem';
import BreadcrumbLink from '../../BreadcrumbLink/BreadcrumbLink';
import BreadcrumbList from '../../BreadcrumbList/BreadcrumbList';
import BreadcrumbPage from '../../BreadcrumbPage/BreadcrumbPage';
import BreadcrumbSeparator from '../../BreadcrumbSeparator/BreadcrumbSeparator';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import DropdownMenuContent from '../../DropdownMenuContent/DropdownMenuContent';
import DropdownMenuItem from '../../DropdownMenuItem/DropdownMenuItem';
import DropdownMenuTrigger from '../../DropdownMenuTrigger/DropdownMenuTrigger';

export default (
  <Breadcrumb uxpId='breadcrumb'>
    <BreadcrumbList uxpId='breadcrumb-list'>
      <BreadcrumbItem uxpId='breadcrumb-item-home'>
        <BreadcrumbLink href='/' uxpId='breadcrumb-link-home'>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator uxpId='breadcrumb-separator-1' />
      <BreadcrumbItem uxpId='breadcrumb-item-dropdown'>
        <DropdownMenu uxpId='dropdown-menu'>
          <DropdownMenuTrigger
            className='flex items-center gap-1'
            uxpId='dropdown-trigger'
          >
            <BreadcrumbEllipsis
              className='h-4 w-4'
              uxpId='breadcrumb-ellipsis'
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start' uxpId='dropdown-menu-content'>
            <DropdownMenuItem uxpId='dropdown-item-docs'>
              Documentation
            </DropdownMenuItem>
            <DropdownMenuItem uxpId='dropdown-item-themes'>
              Themes
            </DropdownMenuItem>
            <DropdownMenuItem uxpId='dropdown-item-github'>
              GitHub
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbSeparator uxpId='breadcrumb-separator-2' />
      <BreadcrumbItem uxpId='breadcrumb-item-components'>
        <BreadcrumbLink
          href='/docs/components'
          uxpId='breadcrumb-link-components'
        >
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator uxpId='breadcrumb-separator-3' />
      <BreadcrumbItem uxpId='breadcrumb-item-breadcrumb'>
        <BreadcrumbPage uxpId='breadcrumb-page'>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
