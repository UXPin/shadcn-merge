import React from 'react';
import PropTypes from 'prop-types';
import { Calendar as CalendarM } from '../ui/calendar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/calendar
 * @uxpindescription A styled calendar component based on react-day-picker.
 */
const Calendar = (props) => {
  const [date, setDate] = React.useState();

  return <CalendarM {...props} selected={date} onSelect={setDate} />;
};

Calendar.propTypes = {
  /** Additional className for styling. */
  className: PropTypes.string,
  /** Object with class name mappings for different calendar parts. */
  // classNames: PropTypes.object,
  /** Whether to show days outside the current month. */
  showOutsideDays: PropTypes.bool,
  /** Enter a selection mode. */
  mode: PropTypes.oneOf(['single', 'multiple', 'range']),
  /** Disabled days that cannot be selected. */
  disabled: PropTypes.bool,
  /** The selected day(s).   */
  // selected: PropTypes.oneOfType([
  //   PropTypes.instanceOf(Date),
  //   PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  //   PropTypes.shape({
  //     from: PropTypes.instanceOf(Date),
  //     to: PropTypes.instanceOf(Date),
  //   }),
  //   PropTypes.oneOf([undefined]),
  // ]),
  /** When true, the selection is required. */
  // required: PropTypes.bool,
  /** Event callback when a date is selected.*/
  onSelect: PropTypes.func,
};

export default Calendar;
