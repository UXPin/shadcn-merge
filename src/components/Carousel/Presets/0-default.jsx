import * as React from 'react';
import Carousel from '../Carousel';
import CarouselContent from '../../CarouselContent/CarouselContent';
import CarouselItem from '../../CarouselItem/CarouselItem';
import CarouselNext from '../../CarouselNext/CarouselNext';
import CarouselPrevious from '../../CarouselPrevious/CarouselPrevious';
import Card from '../../Card/Card';
import CardContent from '../../CardContent/CardContent';

export default (
  <Carousel uxpId='carousel'>
    <CarouselContent uxpId='carousel-content'>
      <CarouselItem uxpId='carousel-item-1'>
        <Card uxpId='card-1'>
          <CardContent uxpId='card-content-1'>ITEM 1</CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem uxpId='carousel-item-2'>
        <Card uxpId='card-2'>
          <CardContent uxpId='card-content-2'>ITEM 2</CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem uxpId='carousel-item-3'>
        <Card uxpId='card-3'>
          <CardContent uxpId='card-content-3'>ITEM 3</CardContent>
        </Card>
      </CarouselItem>
    </CarouselContent>
    <CarouselNext uxpId='carousel-next'>Next</CarouselNext>
    <CarouselPrevious uxpId='carousel-previous'>Previous</CarouselPrevious>
  </Carousel>
);
