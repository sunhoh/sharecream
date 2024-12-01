'use client';
import React from 'react';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="overlay-1" />
      <div className="center-modal w-[500px]">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Modal;
