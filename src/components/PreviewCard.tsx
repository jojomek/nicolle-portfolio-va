import { usePreview } from "./PreviewProvider";

interface Props {
  image: string;
  title: string;
  tag?: string;
  kind: "PDF" | "Spreadsheet" | "Certificate" | "Image";
}

export function PreviewCard({ image, title, tag, kind }: Props) {
  const { open } = usePreview();
  return (
    <button
      onClick={() => open({ kind: "image", src: image, title })}
      className="group relative block w-full text-left border border-border bg-card hover-lift overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute top-4 left-4 text-[0.65rem] tracking-luxe uppercase px-2.5 py-1 bg-background/70 backdrop-blur-sm border border-border">
          {kind}
        </span>
      </div>
      <div className="p-5">
        {tag && <div className="text-eyebrow mb-2">{tag}</div>}
        <h4 className="font-display text-xl leading-tight">{title}</h4>
        <div className="mt-3 text-[0.7rem] tracking-luxe uppercase text-muted-foreground group-hover:text-accent transition-colors">
          View Preview →
        </div>
      </div>
    </button>
  );
}
