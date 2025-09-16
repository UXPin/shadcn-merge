'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/date-picker
 * @uxpindescription Configurable DatePicker component based on shadcn/ui.
 */
export default function DatePicker({
  date,
  onDateChange = () => {},
  placeholder = 'Pick a date',
  disabled = false,
  className = '',
  popoverClassName = '',
  buttonClassName = '',
  calendarProps = {},
  width = 240,
  open, // controlled open state
  onOpenChange, // controlled open handler
}) {
  // Convert string to Date
  const dateObj = date ? new Date(date + 'T00:00:00') : undefined;

  // Helper to format Date to YYYY-MM-DD
  const formatDate = (d) =>
    d && !isNaN(d.getTime())
      ? d.toISOString().slice(0, 10)
      : '';

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          data-empty={!dateObj}
          className={cn(
            'pl-3 text-left font-normal flex gap-2 items-center',
            !dateObj && 'text-muted-foreground',
            buttonClassName
          )}
          style={{ width }}
          disabled={disabled}
        >
          <CalendarIcon className='h-4 w-4 opacity-50' />
          {dateObj ? dateObj.toLocaleDateString() : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-auto p-0', popoverClassName)} align='start'>
        <Calendar
          mode='single'
          selected={dateObj}
          onSelect={(d) => {
            onDateChange(formatDate(d));
          }}
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}

DatePicker.propTypes = {
  /**
   * Currently selected date (controlled, string in YYYY-MM-DD format)
   * @uxpinbind onDateChange 0
   */
  date: PropTypes.string,
  /**
   * Callback when date changes (returns string in YYYY-MM-DD format)
   */
  onDateChange: PropTypes.func,
  /**
   * Controls popover open state (controlled)
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /**
   * Callback when popover open state changes
   */
  onOpenChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  popoverClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  calendarProps: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}; 