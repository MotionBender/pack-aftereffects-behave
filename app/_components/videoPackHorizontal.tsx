interface VideoPackHorizontalProps {
  src: string;
  width?: string; // Exemplo: "md:w-150"
  height?: string; // Exemplo: "md:h-80"
  padding?: string;
}

export default function VideoPackHorizontal({
  src,
  width = "md:w-150",
  height = "md:h-80",
  padding,
}: VideoPackHorizontalProps) {
  return (
    <div>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`${width} ${height} ${padding}`}
      />
    </div>
  );
}
