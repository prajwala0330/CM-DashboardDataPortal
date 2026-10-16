/**
 * Redesign U6: keyboard access for clickable elements that are not <button>s
 * (upload boxes, text links, tabs, sortable headers). Spread next to the existing onClick:
 *   <div onClick={fn} {...clickableProps(fn)}>
 * The element becomes focusable and Enter / Space run the same handler as a click.
 * Pass role = null to keep the element's own role (e.g. table headers).
 */
export const clickableProps = (handler, role = 'button') => ({
  ...(role ? { role } : {}),
  tabIndex: 0,
  onKeyDown: (e) => {
    const key = (e.key || '').toLowerCase();
    if (key === 'enter' || key === ' ' || key === 'spacebar') {
      e.preventDefault();
      // handled here - don't let an outer clickable element (e.g. the Mission Documents tile) react too
      e.stopPropagation();
      handler(e);
    }
  }
});
