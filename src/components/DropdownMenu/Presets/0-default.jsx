import * as React from 'react';
import DropdownMenu from '../DropdownMenu';
import DropdownMenuContent from '../../DropdownMenuContent/DropdownMenuContent';
import DropdownMenuItem from '../../DropdownMenuItem/DropdownMenuItem';
import DropdownMenuTrigger from '../../DropdownMenuTrigger/DropdownMenuTrigger';
import DropdownMenuGroup from '../../DropdownMenuGroup/DropdownMenuGroup';
import DropdownMenuLabel from '../../DropdownMenuLabel/DropdownMenuLabel';
import DropdownMenuShortcut from '../../DropdownMenuShortcut/DropdownMenuShortcut';
import DropdownMenuSeparator from '../../DropdownMenuSeparator/DropdownMenuSeparator';
import DropdownMenuSubContent from '../../DropdownMenuSubContent/DropdownMenuSubContent';
import DropdownMenuSubTrigger from '../../DropdownMenuSubTrigger/DropdownMenuSubTrigger';
import DropdownMenuPortal from '../../DropdownMenuPortal/DropdownMenuPortal';
import DropdownMenuSub from '../../DropdownMenuSub/DropdownMenuSub';
import Button from '../../Button/Button';
import HtmlText from '../../HtmlComponents/HtmlText/HtmlText';
import DropdownMenuCheckboxItem from '../../DropdownMenuCheckboxItem/DropdownMenuCheckboxItem';
import DropdownMenuRadioGroup from '../../DropdownMenuRadioGroup/DropdownMenuRadioGroup';
import DropdownMenuRadioItem from '../../DropdownMenuRadioItem/DropdownMenuRadioItem';

export default (
  // <DropdownMenu uxpId='dropdown-menu-1'>
  //   <DropdownMenuTrigger asChild uxpId='dropdown-menu-trigger-1'>
  //     <Button variant='outline' uxpId='dropdown-menu-trigger-button-1'>
  //       Open
  //     </Button>
  //   </DropdownMenuTrigger>

  //   <DropdownMenuContent className='w-56' uxpId='dropdown-menu-content-1'>
  //     <DropdownMenuLabel uxpId='dropdown-menu-label-1'>
  //       My Account
  //     </DropdownMenuLabel>

  //     <DropdownMenuSeparator uxpId='dropdown-menu-seperator-1' />

  //     <DropdownMenuGroup uxpId='dropdown-menu-group-1'>
  //       <DropdownMenuItem uxpId='dropdown-menu-group-1-item-1'>
  //         Profile
  //         <DropdownMenuShortcut uxpId='dropdown-menu-group-1-shortcut-1'>
  //           ⇧⌘P
  //         </DropdownMenuShortcut>
  //       </DropdownMenuItem>
  //       <DropdownMenuItem uxpId='dropdown-menu-group-1-item-2'>
  //         Billing
  //         <DropdownMenuShortcut uxpId='dropdown-menu-group-1-shortcut-2'>
  //           ⌘B
  //         </DropdownMenuShortcut>
  //       </DropdownMenuItem>
  //       <DropdownMenuItem uxpId='dropdown-menu-group-1-item-3'>
  //         Settings
  //         <DropdownMenuShortcut uxpId='dropdown-menu-group-1-shortcut-3'>
  //           ⌘S
  //         </DropdownMenuShortcut>
  //       </DropdownMenuItem>
  //       <DropdownMenuItem uxpId='dropdown-menu-group-1-item-4'>
  //         Keyboard shortcuts
  //         <DropdownMenuShortcut uxpId='dropdown-menu-group-1-shortcut-4'>
  //           ⌘K
  //         </DropdownMenuShortcut>
  //       </DropdownMenuItem>
  //     </DropdownMenuGroup>

  //     <DropdownMenuSeparator uxpId='dropdown-menu-seperator-2' />

  //     <DropdownMenuGroup uxpId='dropdown-menu-group-2'>
  //       <DropdownMenuItem uxpId='dropdown-menu-group-2-item-1'>
  //         Team
  //       </DropdownMenuItem>

  //       <DropdownMenuSub uxpId='dropdown-menu-group-2-sub-1'>
  //         <DropdownMenuSubTrigger uxpId='dropdown-menu-group-2-sub-1-trigger-1'>
  //           Invite users
  //         </DropdownMenuSubTrigger>

  //         <DropdownMenuPortal uxpId='dropdown-menu-group-2-sub-1-portal-1'>
  //           <DropdownMenuSubContent uxpId='dropdown-menu-group-2-sub-1-subcontent-1'>
  //             <DropdownMenuItem uxpId='dropdown-menu-group-2-sub-1-item-1'>
  //               Email
  //             </DropdownMenuItem>
  //             <DropdownMenuItem uxpId='dropdown-menu-group-2-sub-1-item-2'>
  //               Message
  //             </DropdownMenuItem>
  //             <DropdownMenuSeparator uxpId='dropdown-menu-group-2-sub-1-seperator-1' />
  //             <DropdownMenuItem uxpId='dropdown-menu-group-2-sub-1-item-3'>
  //               More...
  //             </DropdownMenuItem>
  //           </DropdownMenuSubContent>
  //         </DropdownMenuPortal>
  //       </DropdownMenuSub>
  //       <DropdownMenuItem uxpId='dropdown-menu-group-2-item-2'>
  //         New Team
  //         <DropdownMenuShortcut uxpId='dropdown-menu-group-2-shortcut-2'>
  //           ⌘+T
  //         </DropdownMenuShortcut>
  //       </DropdownMenuItem>
  //     </DropdownMenuGroup>

  //     <DropdownMenuSeparator uxpId='dropdown-menu-seperator-3' />

  //     <DropdownMenuItem uxpId='dropdown-menu-item-1'>GitHub</DropdownMenuItem>
  //     <DropdownMenuItem uxpId='dropdown-menu-item-2'>Support</DropdownMenuItem>
  //     <DropdownMenuItem disabled uxpId='dropdown-menu-item-3'>
  //       API
  //     </DropdownMenuItem>

  //     <DropdownMenuSeparator uxpId='dropdown-menu-seperator-4' />

  //     <DropdownMenuItem uxpId='dropdown-menu-item-4'>
  //       Log out
  //       <DropdownMenuShortcut uxpId='dropdown-menu-item-4-shortcut-1'>
  //         ⇧⌘Q
  //       </DropdownMenuShortcut>
  //     </DropdownMenuItem>
  //   </DropdownMenuContent>
  // </DropdownMenu>
  <DropdownMenu uxpId='dropdown-menu-1'>
    <DropdownMenuTrigger uxpId='dropdown-menu-trigger-1'>
      <Button variant='outline' uxpId='dropdown-menu-trigger-button-1'>
        Open
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent uxpId='dropdown-menu-content-1'>
      <DropdownMenuLabel uxpId='dropdown-menu-label-1'>
        My Account
      </DropdownMenuLabel>

      <DropdownMenuSeparator uxpId='dropdown-menu-separator-1' />
      <DropdownMenuItem uxpId='dropdown-menu-item-1'>
        <HtmlText uxpId='dropdown-menu-item-1-htmltext'>Profile</HtmlText>
        <DropdownMenuShortcut uxpId='dropdown-menu-item-1-shortcut'>
          ⇧⌘P
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem uxpId='dropdown-menu-item-2'>
        <HtmlText uxpId='dropdown-menu-item-2-htmltext'>Billing</HtmlText>
        <DropdownMenuShortcut uxpId='dropdown-menu-item-2-shortcut'>
          ⌘B
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator uxpId='dropdown-menu-seperator-1' />
      <DropdownMenuItem uxpId='dropdown-menu-item-3'>Team</DropdownMenuItem>
      <DropdownMenuSub uxpId='dropdown-menu-group-2-sub-1'>
        <DropdownMenuSubTrigger uxpId='dropdown-menu-group-2-sub-1-trigger-1'>
          Invite users
        </DropdownMenuSubTrigger>

        <DropdownMenuSubContent uxpId='dropdown-menu-group-2-sub-1-subcontent-1'>
          <DropdownMenuItem uxpId='dropdown-menu-group-2-sub-1-item-1'>
            Email
          </DropdownMenuItem>
          <DropdownMenuItem uxpId='dropdown-menu-group-2-sub-1-item-2'>
            Message
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuCheckboxItem uxpId='dropdown-menu-checkbox-1'>
        Panel Positioning
      </DropdownMenuCheckboxItem>
      <DropdownMenuRadioGroup
        value='option1'
        uxpId='dropdown-menu-radiogroup-1'
      >
        <DropdownMenuRadioItem
          value='option1'
          uxpId='dropdown-menu-radiogroup-radio-1'
        >
          Left
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value='option2'
          uxpId='dropdown-menu-radiogroup-radio-2'
        >
          Right
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);
