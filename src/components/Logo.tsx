import Image from "next/image";
import Link from "next/link";

type LogoProps = { variant?: "dark" | "light"; className?: string; showTagline?: boolean };

/** Momentum kimliği: R harfi + büyüme oku ikonu ve RAENA wordmark */
export function Logo({ variant = "light", className = "", showTagline = true }: LogoProps) {
  const onDark = variant === "dark";
  return (
    <Link
      href="/"
      aria-label="RAENA ana sayfa"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/icon-256.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[22px] font-extrabold tracking-[0.04em] ${onDark ? "text-white" : "text-navy"}`}
        >
          RAENA
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[8.5px] font-bold tracking-[0.14em] uppercase ${onDark ? "text-mint" : "text-violet"}`}
          >
            E-Ticaret Büyüme Ajansı
          </span>
        )}
      </span>
    </Link>
  );
}
