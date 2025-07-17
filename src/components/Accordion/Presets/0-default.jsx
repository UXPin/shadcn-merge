import * as React from 'react';
import Accordion from '../Accordion';
import AccordionContent from '../../AccordionContent/AccordionContent';
import AccordionItem from '../../AccordionItem/AccordionItem';
import AccordionTrigger from '../../AccordionTrigger/AccordionTrigger';
export default (
  <Accordion
    type='single'
    collapsible
    className="bg-background text-foreground"
    defaultValue='item-2'
    uxpId='accordion-1'
  >
    <AccordionItem value='item-1' uxpId='accordion-item-1'>
      <AccordionTrigger uxpId='accordion-trigger-1'>
        Is it accessible?
      </AccordionTrigger>
      <AccordionContent uxpId='accordion-content-1'>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-2' uxpId='accordion-item-2'>
      <AccordionTrigger uxpId='accordion-trigger-2'>
        Is it styled?
      </AccordionTrigger>
      <AccordionContent uxpId='accordion-content-2'>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-3' uxpId='accordion-item-3'>
      <AccordionTrigger uxpId='accordion-trigger-3'>
        Is it animated?
      </AccordionTrigger>
      <AccordionContent uxpId='accordion-content-3'>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
