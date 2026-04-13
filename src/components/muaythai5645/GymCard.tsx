interface GymInfo {
  image: string;
  imagePosition?: string;
  city: string;
  rank: number;
  badge?: string;
  badgeType?: "red" | "gold";
  name: string;
  description: string;
  location: string;
  pricePerDay: string;
  pricePerMonth: string;
  schedule: string;
  accommodation: string;
  howToGet: string;
  whatsapp?: string;
  googleMaps: string;
  website: string;
  facebook?: string;
  instagram?: string;
  youtubeVideos?: { title: string; url: string }[];
  activities: string[];
  pros: string[];
  cons: string[];
  reviews: { text: string; author: string }[];
  idealFor: string;
}

const GymCard = ({ gym }: { gym: GymInfo }) => {
  return (
    <div className="guide-gym-card" id={`gym-${gym.rank}`}>
      <div className="relative">
        <img
          src={gym.image}
          alt={gym.name}
          className="w-full h-64 sm:h-72 object-cover"
          style={gym.imagePosition ? { objectPosition: gym.imagePosition } : undefined}
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="guide-activity-tag">{gym.city}</span>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="font-display text-2xl text-foreground">#{gym.rank}</span>
        </div>
        {gym.badge && (
          <div className="absolute bottom-4 left-4">
            <span className={gym.badgeType === "gold" ? "guide-gym-badge-gold" : "guide-gym-badge"}>
              {gym.badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-3">{gym.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{gym.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          <div className="guide-info-grid-item">
            <div className="guide-info-label">Localização</div>
            <div className="guide-info-value">{gym.location}</div>
          </div>
          <div className="guide-info-grid-item">
            <div className="guide-info-label">Preço (aula avulsa)</div>
            <div className="guide-info-value">{gym.pricePerDay}</div>
          </div>
          <div className="guide-info-grid-item">
            <div className="guide-info-label">Preço (pacote mensal)</div>
            <div className="guide-info-value">{gym.pricePerMonth}</div>
          </div>
          <div className="guide-info-grid-item">
            <div className="guide-info-label">Horários de Treino</div>
            <div className="guide-info-value">{gym.schedule}</div>
          </div>
          <div className="guide-info-grid-item">
            <div className="guide-info-label">Acomodação</div>
            <div className="guide-info-value">{gym.accommodation}</div>
          </div>
          <div className="guide-info-grid-item">
            <div className="guide-info-label">Como Chegar</div>
            <div className="guide-info-value">{gym.howToGet}</div>
          </div>
        </div>

        {gym.whatsapp && (
          <div className="guide-info-grid-item">
            <div className="guide-info-label">WhatsApp</div>
            <div className="guide-info-value">
              <a href={`https://wa.me/${gym.whatsapp.replace(/[^0-9]/g, "")}`} className="text-gold hover:text-gold-dark transition-colors">
                {gym.whatsapp}
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          <a href={gym.googleMaps} target="_blank" rel="noopener noreferrer" className="guide-link-button">📍 Google Maps</a>
          <a href={gym.website} target="_blank" rel="noopener noreferrer" className="guide-link-button">🌐 Site Oficial</a>
          {gym.facebook && <a href={gym.facebook} target="_blank" rel="noopener noreferrer" className="guide-link-button">📘 Facebook</a>}
          {gym.instagram && <a href={gym.instagram} target="_blank" rel="noopener noreferrer" className="guide-link-button">📸 Instagram</a>}
        </div>

        {gym.youtubeVideos && gym.youtubeVideos.length > 0 && (
          <div className="mt-6">
            <h4 className="font-display text-xl text-foreground mb-3">Vídeos no YouTube</h4>
            <div className="flex flex-col gap-2">
              {gym.youtubeVideos.map((v, i) => (
                <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className="guide-link-button text-left">
                  🎬 {v.title}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          {gym.activities.map((a, i) => (
            <span key={i} className="guide-activity-tag">{a}</span>
          ))}
        </div>

        <div className="mt-8">
          <h4 className="font-display text-xl text-foreground mb-3">✅ Pontos Positivos</h4>
          <ul className="space-y-2">
            {gym.pros.map((p, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-gold mt-0.5">•</span> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-display text-xl text-foreground mb-3">⚠️ Pontos de Atenção</h4>
          <ul className="space-y-2">
            {gym.cons.map((c, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span> {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="font-display text-xl text-foreground mb-3">Reviews ⭐⭐⭐⭐⭐</h4>
          <div className="space-y-4">
            {gym.reviews.map((r, i) => (
              <div key={i} className="guide-review-card">
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{r.text}"</p>
                <p className="text-xs text-gold mt-3">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-foreground">
          <span className="text-gold">Ideal para:</span> {gym.idealFor}
        </p>
      </div>
    </div>
  );
};

export default GymCard;
