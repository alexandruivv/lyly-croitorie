'use client';

import React, { ReactNode, Suspense, useEffect } from "react";
import ReactGA from "react-ga4";
import { useSearchParams } from "next/navigation";

interface Props {
  children?: ReactNode;
}

const GaInitializer = ({children}: Props) => {
  const params = useSearchParams();

  useEffect(() => {
    ReactGA.initialize("G-JP6E0E8DQ5");
    if (params.has('plt', 'fb')) {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Vizita Facebook" });
    } else {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Vizita Generala" });
    }
  }, []);


  return (
    <Suspense>{children}</Suspense>
  );
};

export default GaInitializer;