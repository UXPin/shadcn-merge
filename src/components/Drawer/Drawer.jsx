import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as DrawerM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription A panel that slides in from the side of the screen to display content.
 *
 */
const Drawer = ({
  children,
  direction,
  className,
  ...props
}) => {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open])

  const onOpenChange = (value) => {
    props.uxpinOnChange(props.open, value, 'open');
    if (props.onOpenChange) {
      props.onOpenChange(value);
    }
  }

  return (
    <div>
      {/* <div
        id='jackDiv'
        style={{
          minWidth: '300px',
          minHeight: '300px',
          width: '100%',
          height: '100%',
        }}
      /> */}
      <DrawerM
        key={props.defaultOpen}
        direction={direction}
        className={className}
        {...props}
        open={open}
        onOpenChange={onOpenChange}
        // container={document.getElementById('jackDiv')}
      >
        {children}
      </DrawerM>
    </div>
  );
};

Drawer.propTypes = {
  /** Child components to render inside the DrawerRoot. */
  children: PropTypes.node,
  /** If true, the drawer is open by default. */
  defaultOpen: PropTypes.bool,
  /** The controlled open state of the drawer.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Event handler called when the open state of the drawer changes. */
  onOpenChange: PropTypes.func,
  /** If true, the drawer behaves as a modal. */
  modal: PropTypes.bool,
  /** The container element in which the drawer is rendered. Defaults to document.body. */
  container: PropTypes.instanceOf(HTMLElement),
  /** The direction from which the drawer originates. */
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Event handler called when the drawer's animation ends. */
  onAnimationEnd: PropTypes.func,
  /** If true, allows the drawer to be dismissed by clicking outside. */
  dismissible: PropTypes.bool,
  /** If true, restricts dragging to the handle only. */
  handleOnly: PropTypes.bool,
  /** If true, repositions inputs within the drawer for better accessibility. */
  repositionInputs: PropTypes.bool,
  /** An array of snap points for the drawer's position. */
  snapPoints: PropTypes.arrayOf(PropTypes.number),
  /** The active snap point index. */
  activeSnapPoint: PropTypes.number,
  /** Function to set the active snap point. */
  setActiveSnapPoint: PropTypes.func,
  /** Index from which the drawer fades in. */
  fadeFromIndex: PropTypes.number,
  /** If true, allows sequential snapping between points. */
  snapToSequentialPoint: PropTypes.bool,
};

export default Drawer;
