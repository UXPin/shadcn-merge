'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { toast, Toaster } from 'sonner';
import { Button } from '../ui/button';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sonner
 * @uxpindescription Configurable Sonner toast component with customizable button and toast content.
 */
export default function Sonner({
  buttonLabel = 'Show Toast',
  buttonVariant = 'outline',
  buttonClassName = '',
  toastTitle = 'Event has been created',
  toastDescription = '',
  toastActionLabel = '',
  onToastAction = () => {},
  toastDuration = 4000,
  toastClassName = '',
  buttonProps = {},
  toastProps = {},
}) {
  const handleClick = () => {
    toast(toastTitle, {
      description: toastDescription,
      duration: toastDuration,
      className: toastClassName,
      action: toastActionLabel
        ? {
            label: toastActionLabel,
            onClick: onToastAction,
          }
        : undefined,
      ...toastProps,
    });
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        className={buttonClassName}
        onClick={handleClick}
        {...buttonProps}
      >
        {buttonLabel}
      </Button>
      <Toaster />
    </>
  );
}

Sonner.propTypes = {
  /** Button label */
  buttonLabel: PropTypes.node,
  /** Button variant (outline, default, etc.) */
  buttonVariant: PropTypes.string,
  /** Button className */
  buttonClassName: PropTypes.string,
  /** Additional props for Button */
  buttonProps: PropTypes.object,
  /** Toast title (main message) */
  toastTitle: PropTypes.node,
  /** Toast description (optional) */
  toastDescription: PropTypes.node,
  /** Toast action label (optional) */
  toastActionLabel: PropTypes.node,
  /** Toast action callback (optional) */
  onToastAction: PropTypes.func,
  /** Toast duration in ms (optional) */
  toastDuration: PropTypes.number,
  /** Toast className (optional) */
  toastClassName: PropTypes.string,
  /** Additional props for toast */
  toastProps: PropTypes.object,
}; 