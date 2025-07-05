export function VideoEmbed(props: Readonly<{ youtubeId: string }>) {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 aspect-video">
      <iframe
        className="w-full h-full rounded-xl shadow-lg"
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export function AudioPlayer(props: Readonly<{ source: string }>) {
  return (
    <div className="w-full max-w-5xl mx-auto my-4">
      <audio controls className="w-full">
        <source src={props.source} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={`text-center my-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};
