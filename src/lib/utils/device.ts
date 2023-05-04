export const isOnMobile = (): boolean => {
  return (/Android|Mobi/i).test(navigator.userAgent);
};