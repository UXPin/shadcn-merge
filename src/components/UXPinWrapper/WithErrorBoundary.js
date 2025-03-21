import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div style={{ color: 'red' }}>
      <strong>ERROR:</strong> {error.message}
    </div>
  );
}

const WithErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

export default WithErrorBoundary;
