import * as React from 'react';
import ContextMenu from '../ContextMenu';
import ContextMenuCheckboxItem from '../../ContextMenuCheckboxItem/ContextMenuCheckboxItem';
import ContextMenuContent from '../../ContextMenuContent/ContextMenuContent';
import ContextMenuTrigger from '../../ContextMenuTrigger/ContextMenuTrigger';
import ContextMenuItem from '../../ContextMenuItem/ContextMenuItem';
import ContextMenuShortcut from '../../ContextMenuShortcut/ContextMenuShortcut';
import ContextMenuSub from '../../ContextMenuSub/ContextMenuSub';
import ContextMenuSubTrigger from '../../ContextMenuSubTrigger/ContextMenuSubTrigger';
import ContextMenuSubContent from '../../ContextMenuSubContent/ContextMenuSubContent';
import ContextMenuSeparator from '../../ContextMenuSeparator/ContextMenuSeparator';
import ContextMenuRadioGroup from '../../ContextMenuRadioGroup/ContextMenuRadioGroup';
import ContextMenuLabel from '../../ContextMenuLabel/ContextMenuLabel';
import ContextMenuRadioItem from '../../ContextMenuRadioItem/ContextMenuRadioItem';
import HtmlText from '../../HtmlComponents/HtmlText/HtmlText';

export default (
  <ContextMenu uxpId='context-menu' className='text-foreground'>
    <ContextMenuTrigger uxpId='context-menu-trigger'>
      Right-Click me!
    </ContextMenuTrigger>
    <ContextMenuContent uxpId='context-menu-content'>
      <ContextMenuItem inset uxpId='context-menu-item-back'>
        <HtmlText uxpId='context-menu-item-back-htmltext'>Back</HtmlText>

        <ContextMenuShortcut uxpId='shortcut-back'>⌘ B</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuSub uxpId='context-menu-sub-more-tools'>
        <ContextMenuSubTrigger inset uxpId='context-menu-sub-trigger'>
          More Tools
        </ContextMenuSubTrigger>
        <ContextMenuSubContent uxpId='context-menu-sub-content'>
          <ContextMenuItem uxpId='context-menu-item-name-window'>
            Name Window...
          </ContextMenuItem>
          <ContextMenuSeparator uxpId='context-menu-separator-1' />
          <ContextMenuItem uxpId='context-menu-item-developer-tools'>
            Developer Tools
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>

      <ContextMenuSeparator uxpId='context-menu-separator-2' />
      <ContextMenuCheckboxItem
        checked
        uxpId='context-menu-checkbox-show-bookmarks'
      >
        Show Bookmarks Bar
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem uxpId='context-menu-checkbox-show-urls'>
        Show Full URLs
      </ContextMenuCheckboxItem>
      <ContextMenuSeparator uxpId='context-menu-separator-3' />
      <ContextMenuRadioGroup value='pedro' uxpId='context-menu-radio-group'>
        <ContextMenuLabel inset uxpId='context-menu-label-people'>
          People
        </ContextMenuLabel>
        <ContextMenuRadioItem
          value='pedro'
          uxpId='context-menu-radio-item-pedro'
        >
          Pedro Duarte
        </ContextMenuRadioItem>
        <ContextMenuRadioItem value='colm' uxpId='context-menu-radio-item-colm'>
          Colm Tuite
        </ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  </ContextMenu>
);
