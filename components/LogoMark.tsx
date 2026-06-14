/**
 * The Fit wordmark, recreated as inline JSX (no image asset).
 * thin italic "the" + bold neon-lime "fit" + muted "by sinan kal".
 */
export default function LogoMark({
  showByline = true,
  className = '',
}: {
  showByline?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-baseline leading-none ${className}`}>
      <span className="font-body text-2xl font-light italic text-[#F0F0F0]">
        the
      </span>
      <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#C8F000]">
        fit
      </span>
      {showByline && (
        <span className="ml-1.5 text-[10px] font-light tracking-[0.1em] text-[#666666]">
          by sinan kal
        </span>
      )}
    </span>
  );
}
