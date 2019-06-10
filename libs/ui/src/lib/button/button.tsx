import React, { ReactNode } from 'react';

import './button.css';

/* tslint:disable:no-empty-interface */
export interface ButtonProps {
  children: ReactNode;
  link: String;
}

export const Button = ({children, link}: ButtonProps) => {
  return (
    <button>
      {children} {link}
    </button>
  );
};

export default Button;
