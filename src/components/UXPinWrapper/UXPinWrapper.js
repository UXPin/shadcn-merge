// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { SidebarProvider } from "../ui/sidebar";

function ErrorFallback({ error }) {
  return (
    <div style={{ color: 'red' }}>
      <strong>ERROR:</strong> {error.message}
    </div>
  );
}


function getComponentName(type) {
  if (!type) return "";
  return (
      type.displayName || ''
  );
}

function isSidebarComponentType(type, depth = 0) {
  if (!type || depth > 5) return false; // zapobieganie nieskończonej rekurencji

  const name = getComponentName(type);

  if (name.includes("Sidebar")) {
    return true;
  }

  return (
      isSidebarComponentType(type.WrappedComponent, depth + 1) ||
      isSidebarComponentType(type.render, depth + 1) ||
      isSidebarComponentType(type.type, depth + 1)
  );
}

function isSidebarComponent(component) {
  return isSidebarComponentType(component?.type);
}


function containsSidebar(element) {
  if (!element) return false;
  if (isSidebarComponent(element)) return true;

  const children = element.props?.children;
  if (Array.isArray(children)) {
    return children.some(containsSidebar);
  } else if (typeof children === "object") {
    return containsSidebar(children);
  }

  return false;
}

export default function UXPinWrapper({ children }) {
  const shouldWrapWithSidebarProvider = containsSidebar(children);

  const wrapped = shouldWrapWithSidebarProvider ? (
      <SidebarProvider>{children}</SidebarProvider>
  ) : (
      children
  );

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{wrapped}</ErrorBoundary>;
}
