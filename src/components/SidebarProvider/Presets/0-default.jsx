import * as React from 'react';
import SidebarProvider from '../SidebarProvider';
import Sidebar from '../../Sidebar/Sidebar';
import SidebarContent from '../../SidebarContent/SidebarContent';
import SidebarFooter from '../../SidebarFooter/SidebarFooter';
import SidebarGroup from '../../SidebarGroup/SidebarGroup';
import SidebarGroupAction from '../../SidebarGroupAction/SidebarGroupAction';
import SidebarGroupContent from '../../SidebarGroupContent/SidebarGroupContent';
import SidebarGroupLabel from '../../SidebarGroupLabel/SidebarGroupLabel';
import SidebarHeader from '../../SidebarHeader/SidebarHeader';
import SidebarInput from '../../SidebarInput/SidebarInput';
import SidebarInset from '../../SidebarInset/SidebarInset';
import SidebarMenu from '../../SidebarMenu/SidebarMenu';
import SidebarMenuAction from '../../SidebarMenuAction/SidebarMenuAction';
import SidebarMenuBadge from '../../SidebarMenuBadge/SidebarMenuBadge';
import SidebarMenuButton from '../../SidebarMenuButton/SidebarMenuButton';
import SidebarMenuItem from '../../SidebarMenuItem/SidebarMenuItem';
import SidebarMenuSkeleton from '../../SidebarMenuSkeleton/SidebarMenuSkeleton';
import SidebarMenuSub from '../../SidebarMenuSub/SidebarMenuSub';
import SidebarMenuSubButton from '../../SidebarMenuSubButton/SidebarMenuSubButton';
import SidebarMenuSubItem from '../../SidebarMenuSubItem/SidebarMenuSubItem';
import SidebarRail from '../../SidebarRail/SidebarRail';
import SidebarSeparator from '../../SidebarSeparator/SidebarSeparator';
import SidebarTrigger from '../../SidebarTrigger/SidebarTrigger';
export default (
  <SidebarProvider open={true} uxpId='sidebar-provider'>
    <Sidebar uxpId='sidebar'>
      <SidebarHeader uxpId='sidebar-header'>SIDEBAR HEADER</SidebarHeader>
      <SidebarContent uxpId='sidebar-content'>
        <SidebarGroup uxpId='sidebar-group-basic-menu'>
          <SidebarGroupLabel uxpId='sidebar-group-label-basic-menu'>
            Basic Menu
          </SidebarGroupLabel>
          <SidebarGroupAction uxpId='sidebar-group-action-basic-menu'>
            +
          </SidebarGroupAction>
          <SidebarGroupContent uxpId='sidebar-group-content-basic-menu'>
            <SidebarMenu uxpId='sidebar-menu-basic'>
              <SidebarMenuItem key='1' uxpId='sidebar-menu-item-1'>
                <SidebarMenuButton uxpId='sidebar-menu-button-1'>
                  Menu Item
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key='2' uxpId='sidebar-menu-item-2'>
                <SidebarMenuButton uxpId='sidebar-menu-button-2'>
                  With badge
                </SidebarMenuButton>
                <SidebarMenuBadge uxpId='sidebar-menu-badge-1'>
                  24
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator uxpId='sidebar-separator-1' />
        <SidebarGroup uxpId='sidebar-group-with-submenu'>
          <SidebarGroupLabel uxpId='sidebar-group-label-with-submenu'>
            With SubMenu
          </SidebarGroupLabel>
          <SidebarGroupContent uxpId='sidebar-group-content-with-submenu'>
            <SidebarMenu uxpId='sidebar-menu-with-submenu'>
              <SidebarMenuItem key='1' uxpId='sidebar-menu-item-with-submenu'>
                <SidebarMenuButton uxpId='sidebar-menu-button-with-submenu'>
                  Getting Started
                </SidebarMenuButton>
                <SidebarMenuSub uxpId='sidebar-menu-sub-installation'>
                  <SidebarMenuSubButton uxpId='sidebar-menu-sub-button-installation'>
                    Installation
                  </SidebarMenuSubButton>
                </SidebarMenuSub>
                <SidebarMenuSub uxpId='sidebar-menu-sub-getting-help'>
                  <SidebarMenuSubButton uxpId='sidebar-menu-sub-button-getting-help'>
                    Getting Help
                  </SidebarMenuSubButton>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter uxpId='sidebar-footer'>SIDEBAR FOOTER</SidebarFooter>
    </Sidebar>
  </SidebarProvider>
);
