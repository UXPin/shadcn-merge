import * as React from 'react';
import Card from '../Card';
import CardHeader from '../../CardHeader/CardHeader';
import CardContent from '../../CardContent/CardContent';
import CardDescription from '../../CardDescription/CardDescription';
import CardFooter from '../../CardFooter/CardFooter';
import CardTitle from '../../CardTitle/CardTitle';
import Button from '../../Button/Button';

export default (
  <Card className='w-[350px]' uxpId='card-1'>
    <CardHeader uxpId='card-header-1'>
      <CardTitle uxpId='card-title-1'>Card Title</CardTitle>
      <CardDescription uxpId='card-description-1'>
        This is a description of the card
      </CardDescription>
    </CardHeader>
    <CardContent uxpId='card-content-1'>Card content section</CardContent>
    <CardFooter className='flex justify-between' uxpId='card-footer-1'>
      <Button variant='default' uxpId='card-footer-button-1'>
        Submit
      </Button>
    </CardFooter>
  </Card>
);
