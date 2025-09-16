'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/combobox
 * @uxpindescription Configurable Combobox component (autocomplete/select) based on shadcn/ui.
 */
export default function Combobox({
  options = [],
  value = '',
  onChange = () => {},
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  disabled = false,
  className = '',
  popoverClassName = '',
  inputClassName = '',
  listClassName = '',
  emptyText = 'No options found.',
  width = 200,
}) {
  const [open, setOpen] = React.useState(false);

  const selected = options.find((opt) => opt.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn(`justify-between`, className)}
          style={{ width }}
          disabled={disabled}
        >
          {selected ? selected.label : placeholder}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(`p-0`, popoverClassName)} style={{ width }}>
        <Command>
          <CommandInput placeholder={searchPlaceholder} className={inputClassName} />
          <CommandList className={listClassName}>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === opt.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

Combobox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
    })
  ).isRequired,
  /** 
  * @uxpinbind onChange 0
  */
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  popoverClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  listClassName: PropTypes.string,
  emptyText: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}; 