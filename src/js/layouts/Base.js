import React from 'react';
import Navbar from '../components/Navbar';

export default function BaseLayout({ children, ...props }) {
  return (
    <>
      <Navbar {...props} />
      {children}
    </>
  );
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

// Higher order component is function that takes in a component and returns a new component
// taking in Component and returns a new stateless functional component with props
// Example: Chat.js -> export default withBaseLayout(Chat, { canGoBack: true });
export const withBaseLayout = (Component, config) => (props) => {
  const viewName = getDisplayName(Component);
  return (
    <>
      <Navbar {...config} view={viewName} />
      <Component {...props} />
    </>
  );
};
