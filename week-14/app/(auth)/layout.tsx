export default function banner({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Hi 20% off for next few days</div>
      {children}
    </div>
  );
}
