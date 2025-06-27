import React from 'react';

export default function layout({ children, modal }) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
