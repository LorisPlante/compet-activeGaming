import { ComponentPropsWithoutRef } from "react";

export const Logo = (props: ComponentPropsWithoutRef<"svg"> & { sizew?: number; sizeh?: number; color?: string }) => {
  return (
    <svg width={props.sizew} height={props.sizeh} viewBox="0 0 103 70" fill="none" {...props}>
      <path
        d="M55.1993 20.8811V34.6344L54.3338 33.9837L48.61 29.6951L48.3944 29.534V23.4082L31.5212 38.2855H43.4266V44.385H13.8223L14.9796 43.4386L54.2741 11.1896L55.1596 10.4634V20.4768C55.206 20.6214 55.206 20.7792 55.206 20.8778L55.1993 20.8811Z"
        className="fill-text-secondary"
      />
      <path
        d="M89.3303 25.3569L88.1894 26.3034L49.3261 58.549L48.4373 59.2851V49.2651C48.3909 49.1172 48.3909 48.9594 48.3909 48.8608V35.538L49.2565 36.1854L54.9803 40.4741L55.1959 40.6351V46.2745L70.8454 31.4563H60.1669V25.3569H89.3269H89.3303Z"
        className={`${props.color}`}
      />
    </svg>
  );
};
