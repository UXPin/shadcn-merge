import * as React from 'react';
import PropTypes from 'prop-types';
import { Badge as BadgeM } from '../ui/badge';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/badge
 * @uxpindescription Displays a badge or a component that looks like a badge.
 */
function Badge(props) {
  return <BadgeM {...props} />;
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'secondary', 'outline', 'destructive']),
};

export default Badge;
