import * as React from 'react';
import CommandDialog from '../CommandDialog';
import CommandEmpty from '../../CommandEmpty/CommandEmpty';
import CommandGroup from '../../CommandGroup/CommandGroup';
import CommandInput from '../../CommandInput/CommandInput';
import CommandItem from '../../CommandItem/CommandItem';
import CommandList from '../../CommandList/CommandList';
import CommandSeparator from '../../CommandSeparator/CommandSeparator';
import CommandShortcut from '../../CommandShortcut/CommandShortcut';
import HtmlText from '../../HtmlComponents/HtmlText/HtmlText';
export default (
  <CommandDialog uxpId='command'>
    <CommandInput
      placeholder='Type a command or search...'
      uxpId='command-input'
    />
    <CommandList uxpId='command-list'>
      <CommandEmpty uxpId='command-empty'>No results found.</CommandEmpty>
      <CommandGroup heading='Suggestions' uxpId='command-group-suggestions'>
        <CommandItem uxpId='command-item-calendar'>Calendar</CommandItem>
        <CommandItem uxpId='command-item-search-emoji'>
          Search Emoji
        </CommandItem>
        <CommandItem disabled uxpId='command-item-calculator'>
          Calculator
        </CommandItem>
      </CommandGroup>
      <CommandSeparator uxpId='command-separator-1' />
      <CommandGroup heading='Settings' uxpId='command-group-settings'>
        <CommandItem uxpId='command-item-profile'>
          <HtmlText uxpId='html-text-profile'>Profile</HtmlText>
          <CommandShortcut uxpId='command-shortcut-profile'>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem uxpId='command-item-billing'>
          <HtmlText uxpId='html-text-billing'>Billing</HtmlText>
          <CommandShortcut uxpId='command-shortcut-billing'>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem uxpId='command-item-settings'>
          <HtmlText uxpId='html-text-settings'>Settings</HtmlText>
          <CommandShortcut uxpId='command-shortcut-settings'>
            ⌘S
          </CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
);
