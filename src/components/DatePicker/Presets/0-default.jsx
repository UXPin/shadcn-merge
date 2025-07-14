import * as React from 'react';
import DatePicker from '../DatePicker';

export default function DatePickerDefaultPreset() {
  const [date, setDate] = React.useState(new Date());
  return (
    <DatePicker
      uxpId='datepicker-1'
      date={date}
      onDateChange={setDate}
      placeholder='Pick a date'
      width={240}
    />
  );
} 