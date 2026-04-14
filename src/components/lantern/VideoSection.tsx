const VideoSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
        See It With Your Own{" "}
        <span className="text-gradient-gold">Eyes</span>
      </h2>
      <p className="text-muted-foreground font-body text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Watch and feel the magic of the Lantern Festival. This is just a taste of what you'll experience.
      </p>

      <div className="relative rounded-2xl overflow-hidden border-glow glow-gold aspect-video">
        <iframe
          src="https://www.youtube.com/embed/QkT51OFGVsg"
          title="Lantern Festival - Chiang Mai"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default VideoSection;
