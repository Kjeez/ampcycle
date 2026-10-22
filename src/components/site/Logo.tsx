import Image from 'next/image';

/** Off-white AmpCycle wordmark for dark backgrounds (public/logo.png is the original green). */
export function Logo({ height = 22 }: { height?: number }) {
  return (
    <Image
      src="/logo-white.png"
      alt="AmpCycle"
      width={413}
      height={92}
      priority
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
