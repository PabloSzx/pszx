import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const useTracking = () => {
  const { pathname } = useRouter();
  const trackerRef = useRef<any>();
  useEffect(() => {
    trackerRef.current = require("ackee-tracker").create(
      {
        server: "https://ackee.pablosz.tech",
        domainId: "8c780402-fea8-4df2-bbc2-eaceb1a6f028",
      },
      {
        ignoreLocalhost: false,
        detailed: true,
      }
    );
  }, []);
  useEffect(() => {
    return trackerRef.current.record();
  }, [pathname]);
};
