// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

export default function UXPinWrapper({ children }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
