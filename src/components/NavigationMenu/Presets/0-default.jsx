import * as React from 'react';
import NavigationMenu from '../NavigationMenu';
import NavigationMenuList from '../../NavigationMenuList/NavigationMenuList';
import NavigationMenuItem from '../../NavigationMenuItem/NavigationMenuItem';
import NavigationMenuTrigger from '../../NavigationMenuTrigger/NavigationMenuTrigger';
import NavigationMenuContent from '../../NavigationMenuContent/NavigationMenuContent';
import NavigationMenuLink from '../../NavigationMenuLink/NavigationMenuLink';
import Button from '../../Button/Button';

export default (
  <NavigationMenu uxpId='navigation-menu'>
    <NavigationMenuList uxpId='navigation-menu-list-1'>
      <NavigationMenuItem uxpId='item-one' value='item-1'>
        <NavigationMenuTrigger uxpId='item-one-trigger'>
          Item One
        </NavigationMenuTrigger>
        <NavigationMenuContent uxpId='item-one-content'>
          <NavigationMenuLink uxpId='link-one-1'>
            <Button variant='link' size='sm' uxpId='button-link-one-1'>
              Link 1
            </Button>
          </NavigationMenuLink>
          <NavigationMenuLink uxpId='link-one-2'>
            <Button variant='link' size='sm' uxpId='button-link-one-2'>
              Link 2
            </Button>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuList uxpId='navigation-menu-list-2'>
      <NavigationMenuItem uxpId='item-two' value='item-2'>
        <NavigationMenuTrigger uxpId='item-two-trigger'>
          Item Two
        </NavigationMenuTrigger>
        <NavigationMenuContent uxpId='item-two-content'>
          <NavigationMenuLink uxpId='link-two-1'>
            <Button variant='link' size='sm' uxpId='button-link-two-1'>
              Link 1
            </Button>
          </NavigationMenuLink>
          <NavigationMenuLink uxpId='link-two-2'>
            <Button variant='link' size='sm' uxpId='button-link-two-2'>
              Link 2
            </Button>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
