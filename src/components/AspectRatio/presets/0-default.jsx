import * as React from 'react';
import AspectRatio from '../AspectRatio';
import Image from '../../Image/Image';

export default (
  <AspectRatio uxpId='aspect-ratio-1' ratio={2}>
    <Image
      src='https://images.unsplash.com/photo-1604871000636-074fa5117945'
      fit='cover'
      width='100%'
      height='100%'
      uxpId='aspect-ratio-image-1'
    />
  </AspectRatio>
);
