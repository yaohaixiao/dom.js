export function isContainingBlock(element: Element): boolean {
  // TODO: Try and use feature detection here instead
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
  const css = getComputedStyle(element);

  // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return (
    css.transform !== 'none' ||
    css.perspective !== 'none' ||
    // @ts-ignore (TS 4.1 compat)
    css.contain === 'paint' ||
    ['transform', 'perspective'].includes(css.willChange) ||
    (isFirefox && css.willChange === 'filter') ||
    (isFirefox && (css.filter ? css.filter !== 'none' : false))
  );
}