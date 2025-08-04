// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div style={{ color: 'red' }}>
      <strong>ERROR:</strong> {error.message}
    </div>
  );
}

export default function UXPinWrapper({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}
