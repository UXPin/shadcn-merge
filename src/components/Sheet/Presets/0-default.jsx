import * as React from 'react';
import Sheet from '../Sheet';
import SheetDescription from '../../SheetDescription/SheetDescription';
import SheetTrigger from '../../SheetTrigger/SheetTrigger';
import SheetTitle from '../../SheetTitle/SheetTitle';
import SheetHeader from '../../SheetHeader/SheetHeader';
import SheetContent from '../../SheetContent/SheetContent';
import SheetFooter from '../../SheetFooter/SheetFooter';
import SheetClose from '../../SheetClose/SheetClose';
import Button from '../../Button/Button';

export default (
  <Sheet uxpId='sheet'>
    <SheetTrigger asChild uxpId='sheet-trigger'>
      <Button variant='outline' uxpId='open-button'>
        Open
      </Button>
    </SheetTrigger>
    <SheetContent uxpId='sheet-content'>
      <SheetHeader uxpId='sheet-header'>
        <SheetTitle uxpId='sheet-title'>Edit profile</SheetTitle>
        <SheetDescription uxpId='sheet-description'>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>

      <SheetFooter uxpId='sheet-footer'>
        <SheetClose asChild uxpId='sheet-close'>
          <Button type='submit' uxpId='save-button'>
            Save changes
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
