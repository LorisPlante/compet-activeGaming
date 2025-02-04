import { ComponentPropsWithoutRef } from "react";

export const EmailIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M4 4.5H20C21.1 4.5 22 5.4 22 6.5V18.5C22 19.6 21.1 20.5 20 20.5H4C2.9 20.5 2 19.6 2 18.5V6.5C2 5.4 2.9 4.5 4 4.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 6.5L12 13.5L2 6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
