/* Shared handle to the app's Lenis instance so pages can smooth-scroll
   programmatically (native scrollIntoView stutters against Lenis's rAF loop).
   App.jsx assigns it when Lenis is created and nulls it on cleanup. */
export const lenisRef = { current: null }
