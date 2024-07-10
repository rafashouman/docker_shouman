import React from 'react';

export default function StyledComponent({ children, classBody }) {
  return (
    <div className={classBody || 'page'}>
      {children}
    </div>
  );
}
