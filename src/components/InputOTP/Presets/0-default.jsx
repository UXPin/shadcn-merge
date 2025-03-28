import * as React from 'react';
import InputOTP from '../InputOTP';
import InputOTPGroup from '../../InputOTPGroup/InputOTPGroup';
import InputOTPSlot from '../../InputOTPSlot/InputOTPSlot';
import InputOTPSeparator from '../../InputOTPSeparator/InputOTPSeparator';
export default (
  <InputOTP maxLength={6} uxpId='input-otp'>
    <InputOTPGroup uxpId='input-otp-group-1'>
      <InputOTPSlot index={0} uxpId='input-otp-slot-0' />
      <InputOTPSlot index={1} uxpId='input-otp-slot-1' />
      <InputOTPSlot index={2} uxpId='input-otp-slot-2' />
    </InputOTPGroup>
    <InputOTPSeparator uxpId='input-otp-separator' />
    <InputOTPGroup uxpId='input-otp-group-2'>
      <InputOTPSlot index={3} uxpId='input-otp-slot-3' />
      <InputOTPSlot index={4} uxpId='input-otp-slot-4' />
      <InputOTPSlot index={5} uxpId='input-otp-slot-5' />
    </InputOTPGroup>
  </InputOTP>
);
