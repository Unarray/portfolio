export const isDomElementVisible = (domRect: DOMRect): boolean => {
  return domRect.bottom >= 0 && domRect.top <= window.innerHeight;
};