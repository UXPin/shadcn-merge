import * as React from 'react';
import Menubar from '../Menubar';
import MenubarMenu from '../../MenubarMenu/MenubarMenu';
import MenubarTrigger from '../../MenubarTrigger/MenubarTrigger';
import MenubarContent from '../../MenubarContent/MenubarContent';
import MenubarItem from '../../MenubarItem/MenubarItem';
import MenubarSubTrigger from '../../MenubarSubTrigger/MenubarSubTrigger';
import MenubarSeparator from '../../MenubarSeparator/MenubarSeparator';
import MenubarSubContent from '../../MenubarSubContent/MenubarSubContent';
import MenubarShortcut from '../../MenubarShortcut/MenubarShortcut';
import MenubarSub from '../../MenubarSub/MenubarSub';
import MenubarCheckboxItem from '../../MenubarCheckboxItem/MenubarCheckboxItem';
import MenubarRadioItem from '../../MenubarRadioItem/MenubarRadioItem';
import MenubarRadioGroup from '../../MenubarRadioGroup/MenubarRadioGroup';
import HtmlText from '../../HtmlComponents/HtmlText/HtmlText';

export default (
  <Menubar uxpId='menubar' className='text-foreground'>
    <MenubarMenu uxpId='file-menu'>
      <MenubarTrigger uxpId='file-trigger'>File</MenubarTrigger>
      <MenubarContent uxpId='file-content'>
        <MenubarItem uxpId='new-tab-item'>
          <HtmlText uxpId='dropdown-menu-item-2-htmltext'>New Tab</HtmlText>

          <MenubarShortcut uxpId='shortcut-1'>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem uxpId='new-window-item'>
          <HtmlText uxpId='dropdown-menu-item-2-htmltext'>New Window</HtmlText>

          <MenubarShortcut uxpId='shortcut-2'>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem uxpId='new-incognito-item' disabled>
          New Incognito Window
        </MenubarItem>
        <MenubarSeparator uxpId='file-separator1' />
        <MenubarSub uxpId='share-sub'>
          <MenubarSubTrigger uxpId='share-trigger'>Share</MenubarSubTrigger>
          <MenubarSubContent uxpId='share-content'>
            <MenubarItem uxpId='email-link-item'>Email link</MenubarItem>
            <MenubarItem uxpId='messages-item'>Messages</MenubarItem>
            <MenubarItem uxpId='notes-item'>Notes</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu uxpId='edit-menu'>
      <MenubarTrigger uxpId='edit-trigger'>
        Checkboxes &amp; Radios
      </MenubarTrigger>
      <MenubarContent uxpId='edit-content'>
        <MenubarCheckboxItem uxpId='bookmarks-bar-item'>
          Always Show Bookmarks Bar
        </MenubarCheckboxItem>
        <MenubarCheckboxItem uxpId='full-urls-item' checked>
          Always Show Full URLs
        </MenubarCheckboxItem>
        <MenubarSeparator uxpId='view-separator1' />

        <MenubarRadioGroup uxpId='profiles-radio-group' value='benoit'>
          <MenubarRadioItem uxpId='andy-radio-item' value='andy'>
            Andy
          </MenubarRadioItem>
          <MenubarRadioItem uxpId='benoit-radio-item' value='benoit'>
            Benoit
          </MenubarRadioItem>
          <MenubarRadioItem uxpId='luis-radio-item' value='Luis'>
            Luis
          </MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);
