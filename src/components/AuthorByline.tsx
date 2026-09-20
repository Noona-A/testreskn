import { Link } from "react-router-dom";
import { BadgeCheck, CalendarCheck } from "lucide-react";
import { AUTHOR, CONTENT_LAST_REVIEWED } from "@/lib/site";

interface AuthorBylineProps {
  lastReviewed?: string;
  className?: string;
  /** Use "onDark" when rendered over a dark or coloured background. */
  tone?: "default" | "onDark";
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

/** Visible author and review-date line for clinical content (E-E-A-T). */
const AuthorByline = ({ lastReviewed = CONTENT_LAST_REVIEWED, className = "", tone = "default" }: AuthorBylineProps) => {
  const dark = tone === "onDark";
  const text = dark ? "text-white/85" : "text-muted-foreground";
  const icon = dark ? "text-white" : "text-primary";
  const name = dark ? "text-white underline underline-offset-2 hover:text-white/80" : "text-foreground hover:text-primary";
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${text} ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <BadgeCheck className={`w-3.5 h-3.5 ${icon}`} aria-hidden="true" />
        <span>
          Written by{" "}
          <Link to="/about" className={`font-medium ${name}`}>
            {AUTHOR.name}
          </Link>
          , {AUTHOR.credentials}
        </span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarCheck className={`w-3.5 h-3.5 ${icon}`} aria-hidden="true" />
        <span>Last reviewed {formatDate(lastReviewed)}</span>
      </span>
    </div>
  );
};

export default AuthorByline;
