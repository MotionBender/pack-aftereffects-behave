interface VideoPackVerticalProps {
  src: string;
}

export default function VideoPackVertical({ src }: VideoPackVerticalProps) {
  return (
    <div>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="md:w-80 md:h-150 shadow"
      />
    </div>
  );
}
