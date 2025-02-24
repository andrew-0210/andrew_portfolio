'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScrolling({ children }) {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });

  return (
    <ReactLenis root options={{ duration: 1.5, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}
