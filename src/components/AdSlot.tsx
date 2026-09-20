import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

/** Set VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX once the AdSense account is approved. */
export const ADSENSE_CLIENT: string = import.meta.env.VITE_ADSENSE_CLIENT ?? "";

interface AdSlotProps {
  /** Ad unit slot ID from AdSense. Leave empty to rely on Auto ads only. */
  slot?: string;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Responsive display ad. Renders nothing until an AdSense client ID is configured,
 * so the site can ship ad-ready without showing empty boxes.
 */
const AdSlot = ({ slot, className = "" }: AdSlotProps) => {
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADSENSE_CLIENT || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Ad blockers throw here. Ignore.
    }
  }, [slot]);

  if (!ADSENSE_CLIENT) return null;

  return (
    <>
      <Helmet>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </Helmet>
      {slot && (
        <div className={`my-8 ${className}`} aria-label="Advertisement">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      )}
    </>
  );
};

export default AdSlot;
