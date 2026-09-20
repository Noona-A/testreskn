import { ArrowUpRight } from "lucide-react";
import { isAffiliate } from "@/lib/affiliates";

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Show the small "affiliate" tag next to the link text. Defaults to true for affiliate URLs. */
  showLabel?: boolean;
}

/**
 * Outbound retail link. Adds rel="sponsored" (required by Google for paid links),
 * opens in a new tab, and carries a visible disclosure for ASA/CAP compliance.
 */
const AffiliateLink = ({ href, children, className = "", showLabel }: AffiliateLinkProps) => {
  const affiliate = isAffiliate(href);
  const label = showLabel ?? affiliate;
  return (
    <a
      href={href}
      target="_blank"
      rel={affiliate ? "sponsored nofollow noopener" : "noopener noreferrer"}
      className={`inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors ${className}`}
    >
      {children}
      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
      {label && (
        <span
          className="ml-1 text-[10px] uppercase tracking-wide text-muted-foreground"
          title="We may earn a commission at no extra cost to you"
        >
          affiliate
        </span>
      )}
    </a>
  );
};

export default AffiliateLink;
