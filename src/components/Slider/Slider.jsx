import * as React from 'react';
import PropTypes from 'prop-types';
import { Slider as SliderM } from '../ui/slider';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/slider
 * @uxpindescription An input where the user selects a value from within a given range.
 */
function Slider(props) {
  return <SliderM {...props} />;
}

Slider.propTypes = {
  /** If true, changes the element to render as a child.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The additional CSS classes for styling. */
  className: PropTypes.string,
  /** Child components to render inside the slider. */
  children: PropTypes.node,
  /** The controlled value of the slider. */
  value: PropTypes.arrayOf(PropTypes.number),
  /** The initial value of the slider. */
  defaultValue: PropTypes.arrayOf(PropTypes.number),
  /** If true, disables the slider. */
  disabled: PropTypes.bool,
  /** Direction of the slider, either "ltr" or "rtl". */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** Associated form of the slider. */
  form: PropTypes.string,
  /** If true, inverts the slider. */
  inverted: PropTypes.bool,
  /** The maximum value of the slider. */
  max: PropTypes.number,
  /** The minimum value of the slider. */
  min: PropTypes.number,
  /** Minimum steps between thumbs. */
  minStepsBetweenThumbs: PropTypes.number,
  /** Name of the slider input. */
  name: PropTypes.string,
  /** Callback when the value is committed. */
  onValueCommit: PropTypes.func,
  /** Callback when the value changes. */
  onValueChange: PropTypes.func,
  /** The orientation of the slider, either "horizontal" or "vertical". */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** The step value of the slider. */
  step: PropTypes.number,
};

export default Slider;
