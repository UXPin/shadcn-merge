import * as React from 'react';
import Avatar from '../Avatar';
import AvatarFallback from '../../AvatarFallback/AvatarFallback';
import AvatarImage from '../../AvatarImage/AvatarImage';
export default (
  <Avatar uxpId='avatar-1'>
    <AvatarImage
      src='https://i.pravatar.cc'
      alt='User Avatar'
      uxpId='avatar-image-1'
    />
    <AvatarFallback uxpId='avatar-fallback-1'>UA</AvatarFallback>
  </Avatar>
);
