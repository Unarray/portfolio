export const isOnMobile = (): boolean => {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent);
};