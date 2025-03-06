import * as React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonM } from 'primereact/button';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/card
 * @uxpindescription Displays a card with header, content, and footer.
 */
function Button(props) {
  return <ButtonM {...props} />;
}

Button.propTypes = {
  /** Text to display on the button. */
  label: PropTypes.string,
  /** Name of the icon to display on the button. */
  icon: PropTypes.string,
  /** Position of the icon ('left' or 'right'). */
  iconPos: PropTypes.oneOf(['left', 'right']),
  /** Displays a loading indicator. */
  loading: PropTypes.bool,
  /** Icon to display while loading. */
  loadingIcon: PropTypes.string,
  /** Disables the button. */
  disabled: PropTypes.bool,
  /** Callback function when the button is clicked. */
  onClick: PropTypes.func,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
  /** Defines the style of the button ('secondary', 'success', 'info', 'warning', 'help', 'danger', 'contrast'). */
  severity: PropTypes.oneOf([
    'secondary',
    'success',
    'info',
    'warning',
    'help',
    'danger',
    'contrast',
  ]),
  /** Adds a shadow to indicate elevation. */
  raised: PropTypes.bool,
  /** Adds border radius to the button. */
  rounded: PropTypes.bool,
  /** Removes background and border for a textual button. */
  text: PropTypes.bool,
  /** Displays a border without a background. */
  outlined: PropTypes.bool,
  /** Renders the button as a link. */
  link: PropTypes.bool,
  /** Value to display in a badge. */
  badge: PropTypes.string,
  /** ClassName of the badge element. */
  badgeClassName: PropTypes.string,
  /** Size of the button ('small', 'normal', 'large'). */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
};

export default Button;
