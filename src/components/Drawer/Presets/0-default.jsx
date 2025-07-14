import * as React from 'react';
import Drawer from '../Drawer';
import DrawerContent from '../../DrawerContent/DrawerContent';
import DrawerTrigger from '../../DrawerTrigger/DrawerTrigger';
import DrawerDescription from '../../DrawerDescription/DrawerDescription';
import DrawerTitle from '../../DrawerTitle/DrawerTitle';
import DrawerHeader from '../../DrawerHeader/DrawerHeader';
import DrawerFooter from '../../DrawerFooter/DrawerFooter';
import DrawerClose from '../../DrawerClose/DrawerClose';

import Button from '../../Button/Button';

export default (
  <Drawer uxpId='drawer-1' open={false} direction='right'>
    <DrawerTrigger uxpId='drawer-trigger-1'>Open Drawer</DrawerTrigger>
    <DrawerContent uxpId='drawer-content-1'>
      <DrawerHeader uxpId='drawer-header-1'>
        <DrawerTitle uxpId='drawer-title-1'>Title</DrawerTitle>
        <DrawerDescription uxpId='drawer-description-1'>
          Description
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter uxpId='drawer-footer-1'>
        <Button uxpId='drawer-footer-button-1'>Submit</Button>
        <DrawerClose uxpId='drawer-footer-close-1' asChild>
          <Button variant='outline' uxpId='drawer-footer-button-2'>
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
