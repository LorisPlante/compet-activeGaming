import { ComponentPropsWithoutRef } from "react";

export const TiktokIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M12.3433 24.3441H12.2899C5.61535 24.3441 0.185059 18.9138 0.185059 12.2392V12.1859C0.185059 5.51134 5.61535 0.0810547 12.2899 0.0810547H12.3433C19.0178 0.0810547 24.4481 5.51134 24.4481 12.1859V12.2392C24.4481 18.9138 19.0178 24.3441 12.3433 24.3441ZM12.2899 0.902333C6.06788 0.902333 1.00634 5.96386 1.00634 12.1859V12.2392C1.00634 18.4612 6.06788 23.5228 12.2899 23.5228H12.3433C18.5653 23.5228 23.6268 18.4612 23.6268 12.2392V12.1859C23.6268 5.96386 18.5653 0.902333 12.3433 0.902333H12.2899Z" />
      <path d="M17.9828 8.97167V11.185C17.596 11.1472 17.0933 11.0594 16.5373 10.8557C15.8113 10.5896 15.2709 10.2258 14.917 9.94405V14.4176L14.9079 14.4036C14.9137 14.4923 14.917 14.5826 14.917 14.6738C14.917 16.8954 13.1093 18.7038 10.8869 18.7038C8.66457 18.7038 6.85693 16.8954 6.85693 14.6738C6.85693 12.4522 8.66457 10.643 10.8869 10.643C11.1046 10.643 11.3181 10.6602 11.5267 10.6939V12.8752C11.3263 12.8037 11.1112 12.7652 10.8869 12.7652C9.83489 12.7652 8.9783 13.6209 8.9783 14.6738C8.9783 15.7267 9.83489 16.5824 10.8869 16.5824C11.939 16.5824 12.7956 15.7259 12.7956 14.6738C12.7956 14.6344 12.7948 14.595 12.7923 14.5555V5.8623H15.004C15.0122 6.04956 15.0196 6.23846 15.0278 6.42571C15.0426 6.79446 15.174 7.14842 15.4032 7.43833C15.6717 7.77916 16.0684 8.17502 16.6252 8.49122C17.1467 8.78606 17.6362 8.91334 17.9828 8.9733V8.97167Z" />
    </svg>
  );
};
