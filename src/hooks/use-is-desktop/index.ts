import { useMediaQuery } from 'react-responsive';

import { SMALL_LAPTOP_BREAKPOINT, MOBILE_BREAKPOINT } from '../../constants';

export const useIsDesktop = () => {
  const isDesktop = useMediaQuery({ minWidth: MOBILE_BREAKPOINT });
  const isSmallDesktop = useMediaQuery({ minWidth: MOBILE_BREAKPOINT + 1, maxWidth: SMALL_LAPTOP_BREAKPOINT });

  return { isDesktop, isMobile: !isDesktop, breakpointName: isDesktop ? 'desktop' : 'mobile', isSmallDesktop };
};
