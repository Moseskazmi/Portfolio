// Animated gradient blobs that sit behind the whole page.
export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[35rem] h-[35rem] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-highlight/20 blur-3xl animate-blob [animation-delay:-12s]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-30" />
    </div>
  );
}
