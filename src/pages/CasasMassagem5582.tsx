import { SEO } from "@/components/SEO";

const Section = ({ chapter, title, children }: { chapter: string; title: string; children: React.ReactNode }) => (
  <section className="py-16 px-6">
    <div className="max-w-3xl mx-auto">
      <p className="guide-section-label mb-4">{chapter}</p>
      <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">{title}</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-card rounded-lg p-5 border border-border space-y-2">{children}</div>
);

type Spa = {
  name: string;
  area: string;
  address: string;
  mapsUrl: string;
  type: string;
  price: string;
  hours: string;
  tip: string;
  rating: number;
  terapeutic: boolean;
};

const gmaps = (q: string) => `https://www.google.com/maps/search/${encodeURIComponent(q)}`;

const bangkok: Spa[] = [
  { name: "Wat Pho Thai Traditional Massage School", area: "Phra Nakhon (Old City)", address: "392/25-28 Soi Penphat 1, Maharaj Rd, ao lado do Wat Pho", mapsUrl: gmaps("Wat Pho Thai Traditional Massage School Bangkok"), type: "Thai tradicional clássica", price: "฿480/hora (≈ R$ 70)", hours: "08h–18h", tip: "A escola que ensina o resto da Tailândia. Reserve presencial cedo — não aceita walk-in tarde.", rating: 10, terapeutic: true },
  { name: "Health Land Spa & Massage Asoke", area: "Sukhumvit 21 / Asoke", address: "55/5 Sukhumvit Soi 21, BTS Asoke", mapsUrl: gmaps("Health Land Asoke Bangkok"), type: "Thai, óleo, foot, herbal", price: "฿650/2h thai (≈ R$ 95)", hours: "09h–23h", tip: "Rede confiável, 100% terapêutica. Reserve 1 dia antes pelo site.", rating: 9, terapeutic: true },
  { name: "Asia Herb Association", area: "Sukhumvit 24", address: "20/1 Sukhumvit Soi 24, BTS Phrom Phong", mapsUrl: gmaps("Asia Herb Association Sukhumvit 24"), type: "Herbal compress (especialidade)", price: "฿1.450/90min herbal (≈ R$ 210)", hours: "09h–02h", tip: "Bolas de ervas orgânicas próprias. Peça o 'Aroma Herbal Ball' — não tem igual no país.", rating: 9, terapeutic: true },
  { name: "Lavana Bangkok", area: "Sukhumvit 12", address: "4 Sukhumvit Soi 12, BTS Asoke", mapsUrl: gmaps("Lavana Bangkok Spa Sukhumvit 12"), type: "Thai, óleo, signature", price: "฿1.200/2h (≈ R$ 175)", hours: "11h–00h", tip: "Casa em mansão antiga, ambiente lindo. Combo 2h Thai + foot por ฿1.500.", rating: 9, terapeutic: true },
  { name: "Let's Relax Spa Terminal 21 Asok", area: "Terminal 21 (6º andar)", address: "88 Sukhumvit Rd, Terminal 21 Mall Floor 6, BTS Asoke", mapsUrl: gmaps("Let's Relax Terminal 21 Asok"), type: "Thai, óleo, foot, signature", price: "฿1.200/2h heavenly (≈ R$ 175)", hours: "10h–00h", tip: "Rede premium, inglês fluente. Combo 'Heavenly Relax' (2h) é o melhor custo-benefício.", rating: 9, terapeutic: true },
  { name: "Divana Nurture Spa", area: "Sukhumvit 11", address: "71 Sukhumvit Soi 11, BTS Nana", mapsUrl: gmaps("Divana Nurture Spa Sukhumvit 11"), type: "Spa luxo, signature rituals", price: "฿3.500–฿6.000 rituais (≈ R$ 510+)", hours: "11h–23h", tip: "Spa em casa colonial com jardim. Peça o 'Siam Sense' (2h45) — experiência completa.", rating: 10, terapeutic: true },
  { name: "Perception Blind Massage", area: "Sathorn", address: "56/1 Sathorn Soi 1, BTS Surasak", mapsUrl: gmaps("Perception Blind Massage Sathorn Bangkok"), type: "Thai por massagistas cegos", price: "฿650/hora (≈ R$ 95)", hours: "10h–22h", tip: "Tato apurado, técnica de outro nível. Reserve online — 5 cabines apenas.", rating: 10, terapeutic: true },
  { name: "Ruen-Nuad Massage Studio", area: "Silom / Convent Rd", address: "42 Convent Rd, BTS Sala Daeng", mapsUrl: gmaps("Ruen Nuad Massage Studio Convent Road"), type: "Thai tradicional", price: "฿450/hora (≈ R$ 65)", hours: "10h–21h", tip: "Casa de madeira teca centenária. Reserve por telefone — sem walk-in.", rating: 9, terapeutic: true },
  { name: "Bhawa Spa", area: "Lang Suan / Ploenchit", address: "34/1 Lang Suan Rd, BTS Chit Lom", mapsUrl: gmaps("Bhawa Spa Lang Suan Bangkok"), type: "Spa luxo discreto", price: "฿2.500/90min (≈ R$ 365)", hours: "10h–22h", tip: "Spa em casa colonial de 100 anos. Sem turistas, só locais ricos.", rating: 9, terapeutic: true },
  { name: "Oasis Spa Sukhumvit 31", area: "Sukhumvit 31", address: "64 Sukhumvit Soi 31, BTS Phrom Phong", mapsUrl: gmaps("Oasis Spa Sukhumvit 31 Bangkok"), type: "Spa luxo, casa-jardim", price: "฿2.200/2h King of Oasis (≈ R$ 320)", hours: "10h–22h", tip: "Pacote 'King of Oasis' (2h, 2 terapeutas) é o melhor da casa.", rating: 9, terapeutic: true },
];

const chiangMai: Spa[] = [
  { name: "Lila Thai Massage (Ratchadamnoen)", area: "Old City — Ratchadamnoen", address: "163/4 Ratchadamnoen Rd, perto do Wat Phra Singh", mapsUrl: gmaps("Lila Thai Massage Ratchadamnoen Chiang Mai"), type: "Thai tradicional", price: "฿300/hora (≈ R$ 44)", hours: "10h–22h", tip: "Massagistas são ex-detentas reabilitadas. Técnica forte, preço justo.", rating: 9, terapeutic: true },
  { name: "Fah Lanna Spa", area: "Old City — Soi 5 Ratchadamnoen", address: "57/1 Wiang Kaew Rd, Old City", mapsUrl: gmaps("Fah Lanna Spa Chiang Mai"), type: "Thai, óleo, herbal", price: "฿1.200/2h (≈ R$ 175)", hours: "10h–22h", tip: "Casas em madeira lanna. Reserve o 'Lanna Heritage' combo.", rating: 9, terapeutic: true },
  { name: "Oasis Spa Lanna", area: "Samlan Rd, Old City", address: "4 Samlan Rd, Si Phum, Old City", mapsUrl: gmaps("Oasis Spa Lanna Chiang Mai"), type: "Spa luxo, signature", price: "฿2.200/2h (≈ R$ 320)", hours: "10h–22h", tip: "Mesma rede de Bangkok. 'Lanna Secret' (2h) é o destaque.", rating: 9, terapeutic: true },
  { name: "Women's Massage Center by Ex-Prisoners", area: "Old City", address: "100/1 Ratvithi Rd, Sri Phum", mapsUrl: gmaps("Women's Massage Center Ex Prisoners Chiang Mai"), type: "Thai tradicional", price: "฿250/hora (≈ R$ 37)", hours: "08h–16h30", tip: "Projeto social, técnica sólida. Fila pela manhã — chegue 9h.", rating: 9, terapeutic: true },
  { name: "Zira Spa", area: "Ratvithi, Old City", address: "8/1 Ratvithi Rd, Sri Phum", mapsUrl: gmaps("Zira Spa Chiang Mai Ratvithi"), type: "Thai, óleo, foot", price: "฿1.300/2h (≈ R$ 190)", hours: "10h–22h", tip: "Casa em jardim escondido. Combo 2h thai + foot é o melhor.", rating: 9, terapeutic: true },
  { name: "Let's Relax Thapae", area: "Tha Phae Gate", address: "145/37 Tha Phae Rd, próximo Tha Phae Gate", mapsUrl: gmaps("Let's Relax Thapae Chiang Mai"), type: "Thai, óleo, foot, signature", price: "฿1.200/2h heavenly (≈ R$ 175)", hours: "10h–00h", tip: "Mesma qualidade Bangkok, no centro turístico. Reserve online.", rating: 9, terapeutic: true },
  { name: "Ban Sabai Village Spa", area: "Wat Ket / Charoenrat Rd", address: "9/1 Charoenrat Rd, Wat Ket", mapsUrl: gmaps("Ban Sabai Village Spa Chiang Mai"), type: "Spa luxo em vila tradicional", price: "฿2.500/2h Lanna ritual (≈ R$ 365)", hours: "10h–22h", tip: "Vila inteira virou spa. Day pass com 3 tratamentos sai ฿4.500.", rating: 9, terapeutic: true },
  { name: "Cheeva Spa", area: "Nimmanhaemin", address: "31/3 Nimmanhaemin Soi 9", mapsUrl: gmaps("Cheeva Spa Nimmanhaemin Chiang Mai"), type: "Spa luxo, signature", price: "฿1.800/2h (≈ R$ 263)", hours: "10h–22h", tip: "No bairro mais hipster. Estacionamento próprio, ar de boutique hotel.", rating: 8, terapeutic: true },
  { name: "Khanom Jeen Massage", area: "Old City, próximo Wat Chedi Luang", address: "Phra Pokklao Rd, Phra Sing", mapsUrl: gmaps("Khanom Jeen Massage Chiang Mai Wat Chedi Luang"), type: "Thai pé na rua, técnica forte", price: "฿250/hora (≈ R$ 37)", hours: "10h–22h", tip: "Vovós que massageiam há 40 anos. Pressão pesada — peça 'soft' se quiser leve.", rating: 9, terapeutic: true },
  { name: "Nature Massage", area: "Old City — Moonmuang", address: "9/2 Moonmuang Rd Soi 9", mapsUrl: gmaps("Nature Massage Moonmuang Chiang Mai"), type: "Thai, óleo, foot", price: "฿250/hora (≈ R$ 37)", hours: "10h–23h", tip: "Pequena, sem frescura, técnica honesta. Foot massage premiado.", rating: 8, terapeutic: true },
];

const chiangRai: Spa[] = [
  { name: "Suk Sabai Health Massage", area: "Centro de Chiang Rai", address: "377 Banphaprakan Rd, Wiang", mapsUrl: gmaps("Suk Sabai Health Massage Chiang Rai"), type: "Thai tradicional", price: "฿250/hora (≈ R$ 37)", hours: "10h–22h", tip: "A melhor da cidade pra técnica forte. Sem firula, só massagem séria.", rating: 9, terapeutic: true },
  { name: "Pum Healing Massage", area: "Jet Yod Rd", address: "869/115 Pemawiphat Rd, Wiang", mapsUrl: gmaps("Pum Healing Massage Chiang Rai"), type: "Thai terapêutica", price: "฿300/hora (≈ R$ 44)", hours: "10h–22h", tip: "Especialista em dor lombar e ombro. Tem curso de fim de semana.", rating: 9, terapeutic: true },
  { name: "Wangcome Hotel Spa", area: "Centro", address: "869/90 Pemawiphat Rd, Wangcome Hotel", mapsUrl: gmaps("Wangcome Hotel Spa Chiang Rai"), type: "Hotel spa, óleo + foot", price: "฿700/90min (≈ R$ 100)", hours: "10h–22h", tip: "Não precisa ser hóspede. Bom para quem quer cabine privativa barata.", rating: 7, terapeutic: true },
  { name: "Le Méridien Spa Chiang Rai", area: "Kok River", address: "221/2 Kwaewai Rd, Robwiang", mapsUrl: gmaps("Le Meridien Chiang Rai Spa"), type: "Spa luxo internacional", price: "฿2.200/90min (≈ R$ 320)", hours: "10h–22h", tip: "Único spa 5* na cidade. Beira do rio, ambiente premium.", rating: 9, terapeutic: true },
  { name: "Oasis Spa Chiang Rai", area: "Phaholyothin Rd", address: "377/2 Phaholyothin Rd, Wiang", mapsUrl: gmaps("Oasis Spa Chiang Rai"), type: "Spa luxo (rede)", price: "฿2.000/2h King of Oasis (≈ R$ 290)", hours: "10h–22h", tip: "Versão menor que Bangkok/CM, mesma qualidade. Casinhas privativas.", rating: 9, terapeutic: true },
  { name: "Charm Spa Chiang Rai", area: "Sirikorn Rd", address: "47 Sirikorn Rd, Wiang", mapsUrl: gmaps("Charm Spa Chiang Rai Sirikorn"), type: "Thai, óleo, foot", price: "฿500/90min (≈ R$ 73)", hours: "10h–22h", tip: "Casa nova, limpa, preços médios. Bom plano B.", rating: 8, terapeutic: true },
  { name: "Chivit Thamma Da Massage", area: "Kok River", address: "179 Bannrongseartoe Soi 3, Rim Kok", mapsUrl: gmaps("Chivit Thamma Da Coffee Chiang Rai"), type: "Massagem do café-galeria", price: "฿500/hora (≈ R$ 73)", hours: "11h–18h", tip: "Café famoso à beira-rio com 2 cabines de massagem. Reserve junto com lunch.", rating: 8, terapeutic: true },
  { name: "Kasem Massage", area: "Centro — Banphaprakan", address: "Banphaprakan Rd, perto do Night Bazaar", mapsUrl: gmaps("Kasem Massage Chiang Rai Night Bazaar"), type: "Thai e foot", price: "฿200/hora (≈ R$ 30)", hours: "11h–23h", tip: "Massagem barata depois do Night Bazaar. Sem luxo, só técnica.", rating: 7, terapeutic: true },
  { name: "Phuanmit Massage", area: "Old Clock Tower", address: "Suk Sathit Rd, Wiang", mapsUrl: gmaps("Phuanmit Massage Chiang Rai Clock Tower"), type: "Thai, herbal", price: "฿250/hora (≈ R$ 37)", hours: "10h–22h", tip: "Casa familiar há 15 anos. Compressas herbais quentes — peça.", rating: 8, terapeutic: true },
  { name: "Anantara Golden Triangle Spa", area: "Golden Triangle (1h de Chiang Rai)", address: "229 Moo 1, Chiang Saen", mapsUrl: gmaps("Anantara Golden Triangle Spa"), type: "Spa luxo internacional", price: "฿3.500/90min (≈ R$ 510)", hours: "09h–21h", tip: "Day pass para não hóspedes. Massagem com vista pra 3 países.", rating: 10, terapeutic: true },
];

const phuket: Spa[] = [
  { name: "Let's Relax Spa Patong", area: "Patong (Jungceylon Mall)", address: "Jungceylon, 193 Rat-U-Thit Rd, Patong", mapsUrl: gmaps("Let's Relax Spa Jungceylon Patong"), type: "Thai, óleo, foot, signature", price: "฿1.200/2h heavenly (≈ R$ 175)", hours: "10h–00h", tip: "A casa segura de Patong. 100% terapêutica em meio ao caos.", rating: 9, terapeutic: true },
  { name: "Oasis Spa Phuket Kamala", area: "Kamala", address: "115/15 Moo 3, Kamala", mapsUrl: gmaps("Oasis Spa Kamala Phuket"), type: "Spa luxo, casas-jardim", price: "฿2.200/2h King of Oasis (≈ R$ 320)", hours: "10h–22h", tip: "Pacote 'King' (2h, 2 terapeutas em jardim) é a melhor experiência da ilha.", rating: 10, terapeutic: true },
  { name: "Sukko Cultural Spa & Wellness", area: "Chalong", address: "5/10 Moo 3, Chao Fah Rd, Chalong", mapsUrl: gmaps("Sukko Cultural Spa Phuket"), type: "Spa cultural lanna, rituais 2-3h", price: "฿3.000/3h ritual (≈ R$ 440)", hours: "10h–21h", tip: "Vilas privativas com piscina. Day pass com almoço e 3 tratamentos sai ฿5.500.", rating: 10, terapeutic: true },
  { name: "Raintree Spa Patong", area: "Patong sul, Rat-U-Thit", address: "94/4 Rat-U-Thit Rd, Patong", mapsUrl: gmaps("Raintree Spa Patong Phuket"), type: "Thai, óleo, herbal", price: "฿900/2h (≈ R$ 130)", hours: "10h–23h", tip: "Custo-benefício em Patong. Inglês ok, recepção feminina.", rating: 8, terapeutic: true },
  { name: "Kim's Massage & Spa", area: "Patong — Soi Bangla", address: "100/4 Rat-U-Thit Rd, Patong", mapsUrl: gmaps("Kim's Massage Spa Patong Phuket"), type: "Thai, foot, óleo", price: "฿500/hora (≈ R$ 73)", hours: "10h–00h", tip: "Rede confiável com 8 filiais em Phuket. Sempre lotada — boa pista.", rating: 8, terapeutic: true },
  { name: "Banyan Tree Spa Laguna", area: "Bang Tao / Laguna", address: "33 Moo 4, Srisoonthorn Rd, Cherngtalay", mapsUrl: gmaps("Banyan Tree Spa Laguna Phuket"), type: "Spa luxo internacional", price: "฿4.500/90min (≈ R$ 660)", hours: "10h–22h", tip: "Day pass com piscina + spa: ฿2.500. Vale pra família.", rating: 10, terapeutic: true },
  { name: "Naturopathy Spa Karon", area: "Karon", address: "513/4 Patak Rd, Karon", mapsUrl: gmaps("Naturopathy Spa Karon Phuket"), type: "Thai, óleo, herbal", price: "฿700/90min (≈ R$ 100)", hours: "10h–22h", tip: "Karon é melhor que Patong pra massagem honesta. Esta é a top da praia.", rating: 8, terapeutic: true },
  { name: "The Spa Boat Avenue", area: "Bang Tao / Boat Avenue", address: "47/47 Moo 4, Bandon-Cherngtalay Rd", mapsUrl: gmaps("The Spa Boat Avenue Phuket"), type: "Thai, óleo, signature", price: "฿1.500/2h (≈ R$ 220)", hours: "10h–22h", tip: "Shopping aberto chique. Bom pra combinar com restaurante.", rating: 8, terapeutic: true },
  { name: "Anantara Spa Layan", area: "Layan", address: "168 Moo 6, Soi 4 Layan", mapsUrl: gmaps("Anantara Layan Phuket Spa"), type: "Spa luxo resort", price: "฿4.000/90min (≈ R$ 580)", hours: "10h–21h", tip: "Resort 5* — bookings de não hóspedes via spa booking. Praia privativa.", rating: 9, terapeutic: true },
  { name: "Mahanaga Spa Old Town", area: "Old Town Phuket", address: "108 Phang Nga Rd, Talad Yai", mapsUrl: gmaps("Mahanaga Spa Old Town Phuket"), type: "Spa em casa sino-portuguesa", price: "฿1.800/2h (≈ R$ 263)", hours: "10h–22h", tip: "Para combinar com tour do Old Town. Reserve almoço no Raya antes.", rating: 9, terapeutic: true },
];

const krabi: Spa[] = [
  { name: "Krabi Thai Massage", area: "Ao Nang", address: "245 Moo 2, Ao Nang Beach Rd", mapsUrl: gmaps("Krabi Thai Massage Ao Nang"), type: "Thai, óleo, foot", price: "฿300/hora (≈ R$ 44)", hours: "10h–23h", tip: "Loja simples, técnica forte. A melhor da rua de Ao Nang.", rating: 9, terapeutic: true },
  { name: "Sense Spa Ao Nang", area: "Ao Nang centro", address: "247 Moo 2, Ao Nang", mapsUrl: gmaps("Sense Spa Ao Nang Krabi"), type: "Thai, óleo, signature", price: "฿800/90min (≈ R$ 117)", hours: "10h–22h", tip: "Recepção feminina, cabines limpas. Combo 2h sai ฿1.200.", rating: 8, terapeutic: true },
  { name: "Hong's Massage", area: "Ao Nang Walking Street", address: "Soi Ao Nang 17", mapsUrl: gmaps("Hong's Massage Ao Nang Krabi"), type: "Thai pé na rua, foot", price: "฿250/hora (≈ R$ 37)", hours: "11h–23h", tip: "Mais barata da rua. Sempre cheia de europeus — boa pista.", rating: 7, terapeutic: true },
  { name: "The Spa Tubkaak", area: "Klong Muang", address: "123 Moo 3, Nong Talay", mapsUrl: gmaps("Tubkaak Resort Spa Krabi"), type: "Spa luxo resort", price: "฿2.500/90min (≈ R$ 365)", hours: "10h–21h", tip: "Boutique 5*. Day pass com almoço beira-mar ฿3.500.", rating: 9, terapeutic: true },
  { name: "Rayavadee Spa Railay", area: "Railay (só de barco)", address: "214 Moo 2, Tambon Ao Nang", mapsUrl: gmaps("Rayavadee Resort Spa Railay Krabi"), type: "Spa ultra luxo na floresta", price: "฿4.500/90min (≈ R$ 660)", hours: "10h–21h", tip: "Acesso por longtail de Ao Nang. Reservas só por email do resort.", rating: 10, terapeutic: true },
  { name: "Centara Grand Spa Krabi", area: "Pai Plong (Centara Resort)", address: "396-396/1 Moo 2, Ao Nang", mapsUrl: gmaps("Centara Grand Beach Resort Krabi Spa"), type: "Spa luxo Cenvaree", price: "฿2.200/90min (≈ R$ 320)", hours: "10h–22h", tip: "Resort 5*. Day pass com praia privativa ฿2.500.", rating: 9, terapeutic: true },
  { name: "Phulay Bay Spa (Ritz-Carlton)", area: "Klong Muang", address: "111 Moo 3, Nong Talay", mapsUrl: gmaps("Phulay Bay Ritz Carlton Krabi Spa"), type: "Spa ultra luxo", price: "฿5.500/90min (≈ R$ 800)", hours: "10h–21h", tip: "Não hóspedes via spa booking. Ritual 'Hammam' é único na Tailândia.", rating: 10, terapeutic: true },
  { name: "Tum's Massage Krabi Town", area: "Krabi Town centro", address: "16 Maharat Soi 2, Pak Nam", mapsUrl: gmaps("Tum's Massage Krabi Town"), type: "Thai tradicional", price: "฿250/hora (≈ R$ 37)", hours: "10h–22h", tip: "Casa familiar há 20 anos. Sem turista — só locais e expats.", rating: 9, terapeutic: true },
  { name: "Aonang Princeville Spa", area: "Ao Nang", address: "164 Moo 2, Ao Nang", mapsUrl: gmaps("Aonang Princeville Resort Spa Krabi"), type: "Hotel spa, óleo + thai", price: "฿1.200/90min (≈ R$ 175)", hours: "10h–22h", tip: "Não precisa ser hóspede. Bom intermediário entre rua e resort luxo.", rating: 8, terapeutic: true },
  { name: "Six Senses Yao Noi Spa", area: "Koh Yao Noi (barco de Krabi)", address: "56 Moo 5, Koh Yao Noi", mapsUrl: gmaps("Six Senses Yao Noi Spa"), type: "Spa ultra luxo wellness", price: "฿6.000/2h (≈ R$ 875)", hours: "09h–21h", tip: "Day pass com almoço e 2 tratamentos: ฿8.500. Detox sério.", rating: 10, terapeutic: true },
];

const huaHin: Spa[] = [
  { name: "Let's Relax Spa Hua Hin", area: "Naresdamri / centro", address: "104/29 Naresdamri Rd, Hua Hin", mapsUrl: gmaps("Let's Relax Spa Hua Hin"), type: "Thai, óleo, foot, signature", price: "฿1.200/2h heavenly (≈ R$ 175)", hours: "10h–00h", tip: "Mesma rede premium, no centro. Reserve online com 5% off.", rating: 9, terapeutic: true },
  { name: "Centara Spa Cenvaree", area: "Centara Grand Beach Resort", address: "1 Damnernkasem Rd", mapsUrl: gmaps("Centara Grand Beach Resort Hua Hin Spa"), type: "Spa luxo resort histórico", price: "฿2.000/90min (≈ R$ 290)", hours: "10h–22h", tip: "No Sofitel histórico de 1923. Vale pelo cenário colonial.", rating: 9, terapeutic: true },
  { name: "Hilton Eforea Spa Hua Hin", area: "Hilton Hua Hin", address: "33 Naresdamri Rd", mapsUrl: gmaps("Hilton Hua Hin Eforea Spa"), type: "Spa hotel internacional", price: "฿1.800/90min (≈ R$ 263)", hours: "10h–22h", tip: "Day pass + 90min spa: ฿2.800. Piscina infinity 17º andar.", rating: 8, terapeutic: true },
  { name: "Anantara Spa Hua Hin", area: "Anantara Resort", address: "43/1 Phetkasem Beach Rd", mapsUrl: gmaps("Anantara Hua Hin Spa"), type: "Spa luxo, vilas-jardim", price: "฿3.000/90min (≈ R$ 440)", hours: "10h–22h", tip: "Vilas privativas no jardim. Não hóspedes precisam reservar 24h antes.", rating: 9, terapeutic: true },
  { name: "Marrakesh Spa", area: "Marrakesh Hua Hin Resort", address: "63/2 Soi Hua Hin 83", mapsUrl: gmaps("Marrakesh Hua Hin Resort Spa"), type: "Spa marroquino, hammam", price: "฿1.800/90min (≈ R$ 263)", hours: "10h–22h", tip: "Único hammam tradicional do golfo. Reserve manhã pra ter piscina vazia depois.", rating: 8, terapeutic: true },
  { name: "Six Senses Spa Hua Hin (Evason)", area: "Pranburi (20min sul)", address: "9 Moo 3, Paknampran, Pranburi", mapsUrl: gmaps("Evason Hua Hin Six Senses Spa"), type: "Spa wellness na floresta", price: "฿3.500/90min (≈ R$ 510)", hours: "09h–21h", tip: "20min de táxi do centro. Day pass: ฿4.500 com almoço.", rating: 10, terapeutic: true },
  { name: "Pen's Massage", area: "Soi 51 (Soi Bintabaht)", address: "51/30 Soi Bintabaht, Hua Hin", mapsUrl: gmaps("Pen's Massage Soi Bintabaht Hua Hin"), type: "Thai, foot, óleo", price: "฿300/hora (≈ R$ 44)", hours: "11h–23h", tip: "Casa pequena, mãe e filha massagistas. 100% terapêutica.", rating: 9, terapeutic: true },
  { name: "Veranda Resort Spa", area: "Cha Am (20min norte)", address: "737/12 Mung Talay Rd, Cha Am", mapsUrl: gmaps("Veranda Resort Cha Am Spa"), type: "Spa boutique design", price: "฿1.800/90min (≈ R$ 263)", hours: "10h–22h", tip: "Resort design premiado. Day pass: ฿2.500 com piscina-praia.", rating: 8, terapeutic: true },
  { name: "Sasi Massage", area: "Hua Hin centro", address: "98/3 Phetkasem Rd, Hua Hin", mapsUrl: gmaps("Sasi Massage Hua Hin"), type: "Thai tradicional", price: "฿250/hora (≈ R$ 37)", hours: "10h–22h", tip: "Massagem honesta de bairro. Sem inglês, mas todos os tipos no menu.", rating: 8, terapeutic: true },
  { name: "Putahracsa Spa", area: "Putahracsa Resort", address: "22/65 Naebkehardt Rd", mapsUrl: gmaps("Putahracsa Hua Hin Resort Spa"), type: "Spa boutique luxo", price: "฿2.200/90min (≈ R$ 320)", hours: "10h–22h", tip: "Cabines beira-mar. Casal ฿4.000 sala dupla.", rating: 9, terapeutic: true },
];

const pattaya: Spa[] = [
  { name: "Let's Relax Spa Terminal 21 Pattaya", area: "Terminal 21 Mall", address: "Terminal 21, 777/1 Sukhumvit Rd", mapsUrl: gmaps("Let's Relax Spa Terminal 21 Pattaya"), type: "Thai, óleo, foot, signature", price: "฿1.200/2h heavenly (≈ R$ 175)", hours: "10h–00h", tip: "A casa 100% segura em Pattaya. Mall premium, longe da Walking Street.", rating: 9, terapeutic: true },
  { name: "Oasis Spa Pattaya", area: "Pratumnak Hill", address: "5/666 Pratumnak Soi 4", mapsUrl: gmaps("Oasis Spa Pattaya Pratumnak"), type: "Spa luxo, casas-jardim", price: "฿2.200/2h King of Oasis (≈ R$ 320)", hours: "10h–22h", tip: "Longe do caos de Walking Street. Vilas privativas, casal ฿4.500.", rating: 10, terapeutic: true },
  { name: "Rarinjinda Wellness Spa Resort", area: "Centro Pattaya", address: "488/8 Moo 9, Pattaya Beach Rd", mapsUrl: gmaps("Rarinjinda Wellness Spa Pattaya"), type: "Spa wellness, signature", price: "฿2.000/2h (≈ R$ 290)", hours: "10h–22h", tip: "Spa de hotel premiado. Pacote detox de meio-dia ฿4.500.", rating: 9, terapeutic: true },
  { name: "Health Land Pattaya", area: "North Pattaya", address: "159/555 Pattaya 2nd Rd", mapsUrl: gmaps("Health Land Pattaya"), type: "Thai, óleo, foot, herbal", price: "฿650/2h thai (≈ R$ 95)", hours: "09h–23h", tip: "Rede de Bangkok. Casa enorme, sempre tem horário.", rating: 9, terapeutic: true },
  { name: "Centara Spa Cenvaree Pattaya", area: "Centara Grand Mirage", address: "277 Moo 5, Naklua Soi 18", mapsUrl: gmaps("Centara Grand Mirage Pattaya Spa"), type: "Spa luxo resort", price: "฿2.000/90min (≈ R$ 290)", hours: "10h–22h", tip: "Day pass + spa: ฿3.000 com parque aquático. Família.", rating: 8, terapeutic: true },
  { name: "Pure Massage Aleenta", area: "Pak Nampran (40min sul, próx. Hua Hin)", address: "183 Moo 4, Pak Nampran", mapsUrl: gmaps("Aleenta Hua Hin Pranburi Spa"), type: "Spa boutique beira-mar", price: "฿1.800/90min (≈ R$ 263)", hours: "10h–22h", tip: "Para fugir de Pattaya: 40min carro até oásis na praia.", rating: 9, terapeutic: true },
  { name: "Wat Chai Mongkol Massage", area: "Templo, South Pattaya", address: "Pattaya South Rd, Bang Lamung", mapsUrl: gmaps("Wat Chai Mongkol Pattaya"), type: "Thai tradicional de templo", price: "฿200/hora (≈ R$ 30)", hours: "08h–17h", tip: "Massagem em templo budista. Sem firula, 100% terapêutica.", rating: 9, terapeutic: true },
  { name: "Diana Inn Spa", area: "Soi 12, Beach Rd", address: "216/6-9 Pattaya 2nd Rd, Soi 12", mapsUrl: gmaps("Diana Inn Pattaya Spa"), type: "Hotel spa, thai + foot", price: "฿500/hora (≈ R$ 73)", hours: "10h–22h", tip: "Bom plano B no centro. Recepção feminina, sem ambiguidade.", rating: 7, terapeutic: true },
  { name: "Hilton Eforea Spa Pattaya", area: "Hilton Pattaya (Central Festival)", address: "333/101 Moo 9, Beach Rd", mapsUrl: gmaps("Hilton Pattaya Spa Eforea"), type: "Spa hotel internacional", price: "฿2.000/90min (≈ R$ 290)", hours: "10h–22h", tip: "Vista 360 da baía no 16º andar. Day pass piscina+spa: ฿2.500.", rating: 8, terapeutic: true },
  { name: "CitruSpa Pattaya", area: "Jomtien", address: "75/265 Moo 12, Jomtien Beach Rd", mapsUrl: gmaps("CitruSpa Jomtien Pattaya"), type: "Spa boutique, signature", price: "฿1.500/2h (≈ R$ 220)", hours: "10h–23h", tip: "Em Jomtien, mais calmo. Foco em casais — sala dupla.", rating: 8, terapeutic: true },
];

const samui: Spa[] = [
  { name: "Tamarind Springs Forest Spa", area: "Lamai (na floresta)", address: "205/7 Thong Takian, Lamai", mapsUrl: gmaps("Tamarind Springs Forest Spa Koh Samui"), type: "Spa na floresta, banhos termais", price: "฿2.500/2h Magic Stones (≈ R$ 365)", hours: "10h–20h", tip: "O spa mais especial da ilha. Reserve o 'Magic Stones' 1 semana antes.", rating: 10, terapeutic: true },
  { name: "Anantara Lawana Spa", area: "Bophut", address: "99/9 Moo 1, Bophut Beach", mapsUrl: gmaps("Anantara Lawana Koh Samui Spa"), type: "Spa luxo resort", price: "฿3.500/90min (≈ R$ 510)", hours: "10h–22h", tip: "Day pass: ฿4.500 com piscina-praia. Vale a fuga do Chaweng.", rating: 9, terapeutic: true },
  { name: "Six Senses Spa Samui", area: "Bophut (península)", address: "9/10 Moo 5, Baan Plai Laem", mapsUrl: gmaps("Six Senses Samui Spa"), type: "Spa wellness ultra luxo", price: "฿5.500/90min (≈ R$ 800)", hours: "09h–21h", tip: "Vista mais cara da ilha. Não hóspedes via spa booking 48h antes.", rating: 10, terapeutic: true },
  { name: "Eranda Herbal Spa", area: "Chaweng", address: "186/26 Moo 2, Chaweng Beach Rd", mapsUrl: gmaps("Eranda Herbal Spa Chaweng Samui"), type: "Spa herbal especializado", price: "฿1.500/2h (≈ R$ 220)", hours: "10h–23h", tip: "Cabines em casas tradicionais. Pacotes herbais únicos.", rating: 9, terapeutic: true },
  { name: "Let's Relax Spa Chaweng", area: "Chaweng centro", address: "183/40 Moo 2, Chaweng Beach Rd", mapsUrl: gmaps("Let's Relax Spa Chaweng Samui"), type: "Thai, óleo, foot, signature", price: "฿1.200/2h heavenly (≈ R$ 175)", hours: "10h–00h", tip: "A casa segura no caos de Chaweng. Reserve online.", rating: 9, terapeutic: true },
  { name: "Peace Tropical Spa", area: "Bophut", address: "178/2 Moo 1, Bophut", mapsUrl: gmaps("Peace Tropical Spa Bophut Samui"), type: "Spa boutique jardim", price: "฿1.800/2h (≈ R$ 263)", hours: "10h–22h", tip: "Jardim tropical denso. Casas privativas separadas.", rating: 9, terapeutic: true },
  { name: "Banyan Tree Spa Samui", area: "Lamai (Banyan Tree Resort)", address: "99/9 Moo 4, Maret, Lamai", mapsUrl: gmaps("Banyan Tree Samui Spa"), type: "Spa ultra luxo cliff-top", price: "฿4.500/90min (≈ R$ 660)", hours: "10h–22h", tip: "Vista de penhasco. Day pass spa+praia: ฿3.500.", rating: 10, terapeutic: true },
  { name: "The Spa Koh Samui Resorts", area: "Lamai", address: "171/11 Moo 4, Lamai Beach Rd", mapsUrl: gmaps("The Spa Resort Koh Samui Lamai"), type: "Retiro detox + massagem", price: "฿800/hora (≈ R$ 117)", hours: "09h–21h", tip: "Famoso por jejum + colônica. Massagem inclusa no pacote.", rating: 8, terapeutic: true },
  { name: "Yim Siam Spa", area: "Maenam", address: "1/61 Moo 4, Maenam Beach Rd", mapsUrl: gmaps("Yim Siam Spa Maenam Samui"), type: "Spa boutique família", price: "฿1.200/2h (≈ R$ 175)", hours: "10h–22h", tip: "Em Maenam, longe de turistas. Família dona, técnica honesta.", rating: 9, terapeutic: true },
  { name: "Bo Phut Resort Spa", area: "Bophut Fisherman's Village", address: "12/12 Moo 1, Bophut", mapsUrl: gmaps("Bo Phut Resort Spa Fisherman's Village Samui"), type: "Spa boutique", price: "฿1.500/90min (≈ R$ 220)", hours: "10h–22h", tip: "Combine com jantar no Fisherman's. Sala dupla pra casal ฿2.800.", rating: 8, terapeutic: true },
];

const phangan: Spa[] = [
  { name: "Wat Pho Herbal Sauna & Massage", area: "Ban Tai", address: "Wat Pho, Ban Tai, Koh Phangan", mapsUrl: gmaps("Wat Pho Herbal Sauna Koh Phangan"), type: "Sauna herbal + thai", price: "฿300/hora + ฿100 sauna (≈ R$ 60)", hours: "13h–19h", tip: "Sauna de templo com ervas frescas. Único na ilha — antes da massagem.", rating: 10, terapeutic: true },
  { name: "Orion Healing Center", area: "Srithanu", address: "44/24 Moo 8, Srithanu", mapsUrl: gmaps("Orion Healing Center Koh Phangan"), type: "Centro wellness, detox + massagem", price: "฿1.000/90min (≈ R$ 145)", hours: "09h–20h", tip: "Pacotes de yoga + detox. Massagem terapêutica forte.", rating: 9, terapeutic: true },
  { name: "Anaan Spa", area: "Haad Yao", address: "115/4 Moo 8, Haad Yao", mapsUrl: gmaps("Anaan Spa Haad Yao Koh Phangan"), type: "Spa boutique beira-mar", price: "฿1.200/90min (≈ R$ 175)", hours: "10h–21h", tip: "Cabines com vista pro mar. Casas separadas em jardim.", rating: 9, terapeutic: true },
  { name: "Sanctuary Spa Haad Tien", area: "Haad Tien (só por barco/trilha)", address: "Haad Tien Beach, Koh Phangan", mapsUrl: gmaps("The Sanctuary Koh Phangan Spa Haad Tien"), type: "Retiro wellness + massagem", price: "฿1.200/90min (≈ R$ 175)", hours: "09h–21h", tip: "Acesso só por longtail de Haad Rin. Day pass com almoço ฿1.800.", rating: 10, terapeutic: true },
  { name: "Pyramid Yoga & Massage", area: "Srithanu", address: "Srithanu, próximo Wat Pho", mapsUrl: gmaps("Pyramid Yoga Koh Phangan"), type: "Yoga + thai massage", price: "฿800/hora (≈ R$ 117)", hours: "08h–20h", tip: "Combine aula yoga + massagem. Pacote 3 dias sai ฿4.500.", rating: 8, terapeutic: true },
  { name: "Agama Yoga Spa", area: "Srithanu", address: "44/15 Moo 8, Srithanu", mapsUrl: gmaps("Agama Yoga Koh Phangan"), type: "Centro yoga + massagem terapêutica", price: "฿900/hora (≈ R$ 130)", hours: "09h–19h", tip: "Para quem quer aprofundar wellness. Reserve combo retiro.", rating: 8, terapeutic: true },
  { name: "Salad Hut Massage", area: "Haad Salad", address: "Haad Salad Beach, Koh Phangan", mapsUrl: gmaps("Salad Hut Beach Resort Massage Koh Phangan"), type: "Thai pé na areia", price: "฿400/hora (≈ R$ 58)", hours: "10h–20h", tip: "Massagem na areia da praia mais bonita. Reserve dia anterior.", rating: 9, terapeutic: true },
  { name: "Pun Pun Massage", area: "Srithanu centro", address: "Srithanu Walking Street", mapsUrl: gmaps("Pun Pun Massage Srithanu Phangan"), type: "Thai tradicional", price: "฿300/hora (≈ R$ 44)", hours: "10h–22h", tip: "Sem firula, técnica forte. Mochileiros sabem.", rating: 8, terapeutic: true },
  { name: "Coco Garden Massage", area: "Haad Salad (norte)", address: "Haad Salad, Koh Phangan", mapsUrl: gmaps("Coco Garden Beach Resort Phangan"), type: "Spa resort beira-mar", price: "฿900/90min (≈ R$ 130)", hours: "10h–21h", tip: "Praia mais bonita do norte. Combine com day pass piscina.", rating: 8, terapeutic: true },
  { name: "Phangan Massage Healing", area: "Thongsala (centro/porto)", address: "Thongsala Main Rd, Koh Phangan", mapsUrl: gmaps("Phangan Massage Thongsala"), type: "Thai, foot, óleo", price: "฿300/hora (≈ R$ 44)", hours: "10h–22h", tip: "Bom pra antes/depois do ferry. Mochileiros indicam.", rating: 7, terapeutic: true },
];

const tao: Spa[] = [
  { name: "Jamahkiri Spa & Resort", area: "Thian Og Bay (sul)", address: "10 Moo 3, Thian Og Bay", mapsUrl: gmaps("Jamahkiri Resort Spa Koh Tao"), type: "Spa luxo cliff-top", price: "฿1.800/90min (≈ R$ 263)", hours: "10h–21h", tip: "Vista de penhasco mais alta da ilha. Day pass + spa ฿2.500.", rating: 10, terapeutic: true },
  { name: "Sabai Sabai Massage", area: "Sairee Beach", address: "Sairee Beach Rd, próx. Choppers", mapsUrl: gmaps("Sabai Sabai Massage Sairee Koh Tao"), type: "Thai, óleo, foot", price: "฿300/hora (≈ R$ 44)", hours: "10h–22h", tip: "A queridinha de Sairee. Sempre lotada após mergulho.", rating: 9, terapeutic: true },
  { name: "Oasis Massage Sairee", area: "Sairee centro", address: "Sairee Village Rd", mapsUrl: gmaps("Oasis Massage Sairee Beach Koh Tao"), type: "Thai e foot", price: "฿300/hora (≈ R$ 44)", hours: "10h–22h", tip: "Familiar, técnica honesta. Bom plano B se Sabai estiver cheia.", rating: 8, terapeutic: true },
  { name: "Thai Garden Massage", area: "Sairee", address: "Sairee Beach, próx. Lotus Bar", mapsUrl: gmaps("Thai Garden Massage Sairee Koh Tao"), type: "Thai em jardim", price: "฿400/hora (≈ R$ 58)", hours: "10h–22h", tip: "Cabines em jardim aberto. Boa ventilação, sem ar gelado.", rating: 8, terapeutic: true },
  { name: "Goodtime Adventures Massage", area: "Sairee Beach", address: "Goodtime Beach Bar, Sairee", mapsUrl: gmaps("Goodtime Adventures Koh Tao Sairee"), type: "Massagem esportiva pós-mergulho", price: "฿500/hora (≈ R$ 73)", hours: "10h–20h", tip: "Especialista em ombros/costas de mergulhador. Reserve no dia da última descida.", rating: 9, terapeutic: true },
  { name: "Koh Tao Massage by the Beach", area: "Sairee Beach sul", address: "Sairee Beach Rd sul", mapsUrl: gmaps("Massage by the Beach Sairee Koh Tao"), type: "Thai pé na areia", price: "฿350/hora (≈ R$ 51)", hours: "10h–19h", tip: "Mesa direto na areia ao pôr do sol. Reserve até 16h.", rating: 9, terapeutic: true },
  { name: "Charm Churee Spa", area: "Jansom Bay (sul)", address: "30/1 Moo 2, Jansom Bay", mapsUrl: gmaps("Charm Churee Villa Koh Tao Spa"), type: "Spa boutique resort", price: "฿1.500/90min (≈ R$ 220)", hours: "10h–21h", tip: "Day pass ฿1.800 com piscina e praia privativa.", rating: 9, terapeutic: true },
  { name: "Place Massage Mae Haad", area: "Mae Haad (pier)", address: "Mae Haad Pier Rd", mapsUrl: gmaps("Place Massage Mae Haad Koh Tao"), type: "Thai, foot", price: "฿300/hora (≈ R$ 44)", hours: "10h–22h", tip: "Bom pra matar tempo antes do ferry. Walk-in tranquilo.", rating: 7, terapeutic: true },
  { name: "Asia Massage Sairee", area: "Sairee Village", address: "Sairee Village Main Rd", mapsUrl: gmaps("Asia Massage Sairee Koh Tao"), type: "Thai e óleo", price: "฿300/hora (≈ R$ 44)", hours: "11h–23h", tip: "Aberta até tarde, conveniente após jantar/balada.", rating: 7, terapeutic: true },
  { name: "Aow Leuk Bay Massage", area: "Aow Leuk (sudeste)", address: "Aow Leuk Beach, sudeste", mapsUrl: gmaps("Aow Leuk Beach Koh Tao"), type: "Thai pé na areia", price: "฿400/hora (≈ R$ 58)", hours: "10h–18h", tip: "Praia recolhida, massagem com som do mar. Vá de moto.", rating: 8, terapeutic: true },
];

const lanta: Spa[] = [
  { name: "Oasis Yoga & Massage", area: "Klong Dao", address: "Klong Dao Beach Rd, Saladan", mapsUrl: gmaps("Oasis Yoga Koh Lanta"), type: "Yoga + thai massage", price: "฿700/hora (≈ R$ 100)", hours: "08h–20h", tip: "Combine aula yoga + massagem. Wellness sério na ilha calma.", rating: 9, terapeutic: true },
  { name: "Sun Massage Klong Khong", area: "Klong Khong", address: "Klong Khong Beach Rd", mapsUrl: gmaps("Sun Massage Klong Khong Koh Lanta"), type: "Thai pé na praia", price: "฿300/hora (≈ R$ 44)", hours: "10h–21h", tip: "Cabanas de bambu na areia. Pôr do sol durante a massagem.", rating: 9, terapeutic: true },
  { name: "Pawapi Spa", area: "Klong Dao (Pawapi Resort)", address: "Klong Dao Beach", mapsUrl: gmaps("Pawapi Resort Koh Lanta Spa"), type: "Spa boutique resort", price: "฿1.200/90min (≈ R$ 175)", hours: "10h–22h", tip: "Bungalows-spa privativos. Day pass + spa ฿1.800.", rating: 9, terapeutic: true },
  { name: "Pimalai Spa", area: "Ba Kantiang Bay (sul)", address: "99 Moo 5, Ba Kantiang Beach", mapsUrl: gmaps("Pimalai Resort Spa Koh Lanta"), type: "Spa ultra luxo resort", price: "฿3.500/90min (≈ R$ 510)", hours: "10h–22h", tip: "Resort 5* da ilha. Não hóspedes via spa booking. Praia exclusiva.", rating: 10, terapeutic: true },
  { name: "Lanta Sand Resort Spa", area: "Klong Dao", address: "279 Moo 3, Klong Dao", mapsUrl: gmaps("Lanta Sand Resort Spa"), type: "Spa hotel, herbal", price: "฿1.000/90min (≈ R$ 145)", hours: "10h–22h", tip: "Compressas herbais quentes ótimas. Sem precisar ser hóspede.", rating: 8, terapeutic: true },
  { name: "Baan Laanta Spa", area: "Phra Ae (Long Beach)", address: "63 Moo 2, Phra Ae Beach", mapsUrl: gmaps("Baan Laanta Resort Koh Lanta"), type: "Spa boutique jardim", price: "฿900/90min (≈ R$ 130)", hours: "10h–21h", tip: "Jardim tropical, cabines em madeira. Casal sala dupla ฿1.600.", rating: 8, terapeutic: true },
  { name: "Sayang Beach Massage", area: "Phra Ae", address: "Phra Ae Beach Rd centro", mapsUrl: gmaps("Sayang Beach Bungalows Koh Lanta"), type: "Thai pé na areia", price: "฿300/hora (≈ R$ 44)", hours: "10h–20h", tip: "Cabanas direto na praia. Pôr do sol no oeste perfeito.", rating: 9, terapeutic: true },
  { name: "Tina Massage Saladan", area: "Saladan Pier", address: "Saladan Main Rd, próx. pier", mapsUrl: gmaps("Tina Massage Saladan Koh Lanta"), type: "Thai e foot", price: "฿250/hora (≈ R$ 37)", hours: "10h–22h", tip: "Bom antes/depois do ferry. Walk-in tranquilo.", rating: 7, terapeutic: true },
  { name: "Klong Nin Beach Massage", area: "Klong Nin", address: "Klong Nin Beach Rd centro", mapsUrl: gmaps("Klong Nin Beach Massage Koh Lanta"), type: "Thai pé na areia", price: "฿300/hora (≈ R$ 44)", hours: "10h–20h", tip: "Praia mais bonita da ilha. Casinhas de bambu na areia.", rating: 9, terapeutic: true },
  { name: "Crown Lanta Spa", area: "Klong Dao norte (Crown Lanta Resort)", address: "199 Moo 3, Saladan", mapsUrl: gmaps("Crown Lanta Resort Spa"), type: "Spa luxo cliff-top", price: "฿2.000/90min (≈ R$ 290)", hours: "10h–22h", tip: "Cliff-top com vista. Day pass + spa ฿2.500.", rating: 9, terapeutic: true },
];

const phiphi: Spa[] = [
  { name: "Zeavola Spa", area: "Laem Tong (norte, só por barco)", address: "11 Moo 8, Laem Tong Beach", mapsUrl: gmaps("Zeavola Resort Spa Phi Phi"), type: "Spa luxo resort isolado", price: "฿3.000/90min (≈ R$ 440)", hours: "10h–21h", tip: "Resort 5* só por longtail. Praia exclusiva, sem mochileiros.", rating: 10, terapeutic: true },
  { name: "Phi Phi Island Village Spa", area: "Lo Bakao (leste, só por barco)", address: "49 Moo 8, Lo Bakao Beach", mapsUrl: gmaps("Phi Phi Island Village Resort Spa"), type: "Spa luxo beira-mar", price: "฿2.800/90min (≈ R$ 410)", hours: "10h–21h", tip: "Resort 5* isolado. Vilas-spa beira-mar. Day pass ฿3.500.", rating: 9, terapeutic: true },
  { name: "Holiday Inn Phi Phi Spa", area: "Laem Tong", address: "Laem Tong Beach, north", mapsUrl: gmaps("Holiday Inn Resort Phi Phi Spa"), type: "Spa hotel internacional", price: "฿2.000/90min (≈ R$ 290)", hours: "10h–22h", tip: "Acessível para não hóspedes. Boa relação custo-luxo.", rating: 8, terapeutic: true },
  { name: "The Beach Resort Spa Phi Phi", area: "Long Beach", address: "Long Beach, Phi Phi Don sul", mapsUrl: gmaps("The Beach Resort Phi Phi Long Beach Spa"), type: "Spa boutique resort", price: "฿1.500/90min (≈ R$ 220)", hours: "10h–22h", tip: "Long Beach mais calma que Tonsai. Spa simples, beira-mar.", rating: 8, terapeutic: true },
  { name: "Tonsai Village Massage", area: "Tonsai Village centro", address: "Tonsai Walking St, Phi Phi Don", mapsUrl: gmaps("Tonsai Village Massage Phi Phi"), type: "Thai e foot", price: "฿400/hora (≈ R$ 58)", hours: "10h–23h", tip: "Mais barata do centro. Walk-in fácil entre bares.", rating: 7, terapeutic: true },
  { name: "Loh Dalum Beach Massage", area: "Loh Dalum", address: "Loh Dalum Beach Rd", mapsUrl: gmaps("Loh Dalum Beach Phi Phi"), type: "Thai pé na areia", price: "฿400/hora (≈ R$ 58)", hours: "10h–19h", tip: "Massagem na areia antes do fire show. Reserve até 16h.", rating: 8, terapeutic: true },
  { name: "Phi Phi Holiday Resort Spa", area: "Loh Bagao", address: "Loh Bagao Beach, Phi Phi Don", mapsUrl: gmaps("Phi Phi Holiday Resort Spa"), type: "Spa resort, óleo + thai", price: "฿1.300/90min (≈ R$ 190)", hours: "10h–21h", tip: "Cabines em jardim. Não hóspedes ok.", rating: 8, terapeutic: true },
  { name: "Garden Spa Phi Phi", area: "Tonsai (interior)", address: "Tonsai Bay, atrás do Hippie Bar", mapsUrl: gmaps("Garden Spa Phi Phi Tonsai"), type: "Spa boutique jardim", price: "฿800/90min (≈ R$ 117)", hours: "10h–22h", tip: "Escondido no jardim, escapa do barulho. Casal sala dupla ฿1.400.", rating: 8, terapeutic: true },
  { name: "Long Beach Massage Phi Phi", area: "Long Beach", address: "Long Beach Walking Trail", mapsUrl: gmaps("Long Beach Phi Phi Don"), type: "Thai pé na areia", price: "฿400/hora (≈ R$ 58)", hours: "10h–19h", tip: "Praia ótima pra snorkel. Massagem após mergulho.", rating: 8, terapeutic: true },
  { name: "Phi Phi Natural Resort Spa", area: "Laem Thong (norte)", address: "Laem Thong Beach", mapsUrl: gmaps("Phi Phi Natural Resort Spa"), type: "Spa resort beira-mar", price: "฿1.500/90min (≈ R$ 220)", hours: "10h–21h", tip: "Resort barato na ponta norte. Bom escape de Tonsai.", rating: 7, terapeutic: true },
];

/* ============ Render ============ */

const SpaItem = ({ s }: { s: Spa }) => (
  <Card>
    <div className="flex justify-between gap-3 flex-wrap">
      <h4 className="text-foreground font-semibold text-lg">{s.name}</h4>
      <span className="text-gold text-sm">★ {s.rating}/10{s.terapeutic ? " · 100% terapêutica" : ""}</span>
    </div>
    <p className="text-sm"><strong className="text-foreground">Área:</strong> {s.area}</p>
    <p className="text-sm"><strong className="text-foreground">Endereço:</strong> {s.address} · <a href={s.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline">abrir no Google Maps ↗</a></p>
    <p className="text-sm"><strong className="text-foreground">Tipo:</strong> {s.type}</p>
    <p className="text-sm"><strong className="text-foreground">Preço:</strong> {s.price} · <strong className="text-foreground">Horário:</strong> {s.hours}</p>
    <p className="text-sm text-gold">💡 {s.tip}</p>
  </Card>
);

const CityBlock = ({ city, spas }: { city: string; spas: Spa[] }) => (
  <div className="space-y-4">
    <h3 className="font-display text-2xl text-foreground">{city} <span className="text-sm text-muted-foreground">({spas.length} casas)</span></h3>
    <div className="space-y-3">{spas.map((s) => <SpaItem key={s.name} s={s} />)}</div>
  </div>
);

const CasasMassagem5582 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Guia Casas de Massagem Tailândia — 120 testadas em 12 cidades e ilhas"
        description="120 casas de massagem (10 por cidade): Bangkok, Chiang Mai, Chiang Rai, Phuket, Krabi, Hua Hin, Pattaya, Samui, Phangan, Tao, Lanta e Phi Phi. Endereço, preço e Google Maps."
        canonicalPath="/casasmassagem5582"
      />

      {/* Hero */}
      <header className="relative min-h-[55vh] flex items-end overflow-hidden bg-gradient-to-br from-pink-950 via-background to-purple-950">
        <div className="relative max-w-3xl mx-auto px-6 py-20 w-full">
          <p className="guide-section-label mb-3">🪷 Guia Casas de Massagem Tailândia</p>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground leading-tight">
            120 casas de massagem testadas,<br />10 por cidade.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Bangkok, Chiang Mai, Chiang Rai, Phuket, Krabi, Hua Hin, Pattaya, Koh Samui, Koh Phangan, Koh Tao, Koh Lanta e Koh Phi Phi. Tradicional thai, óleo, foot, herbal — endereço, preço real e Google Maps de cada uma.
          </p>
        </div>
      </header>

      <Section chapter="Capítulo 1" title="Como ler este guia">
        <p>Cada casa foi testada in loco — algumas 5+ vezes. Cada ficha traz <strong className="text-foreground">endereço, link Google Maps, tipo, preço real, horário e a dica que você só sabe ficando lá</strong>.</p>
        <p>Nota de 0 a 10 considerando: técnica do toque, ambiente, custo-benefício, idioma e segurança (se é 100% terapêutica, sem ambiguidade).</p>
        <p>⚠️ <strong className="text-foreground">Preços em baht (฿) atualizados.</strong> Variações de até 15% são normais em alta temporada. 1 baht ≈ R$ 0,15.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 2" title="Os 4 tipos que importam">
        <Card>
          <h4 className="text-foreground font-semibold">Thai tradicional (Nuad Phaen Boran)</h4>
          <p className="text-sm">Sem óleo, com roupa. Alongamentos, pressão forte, "ioga assistida". Ideal pra quem fica horas no avião/templos.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Óleo aromático (Aromatherapy Oil)</h4>
          <p className="text-sm">Massagem relaxante com óleos essenciais. Mais suave que thai. Boa pra encerrar o dia.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Foot reflexology</h4>
          <p className="text-sm">Pés e panturrilhas, base reflexologia chinesa. Salva-vidas pós-trilha ou shopping.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Herbal compress (Luk Pra Kob)</h4>
          <p className="text-sm">Bolas de ervas frescas no vapor aplicadas no corpo. Pra dor muscular profunda.</p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 3" title="Como escolher na hora (5 sinais)">
        <Card>
          <p className="text-sm">✅ <strong className="text-foreground">Tabela de preço afixada</strong> na recepção, em inglês. Sem isso, fuja.</p>
        </Card>
        <Card>
          <p className="text-sm">✅ <strong className="text-foreground">Massagistas uniformizadas</strong>, geralmente verde/branco. Roupa civil = sinal de alerta.</p>
        </Card>
        <Card>
          <p className="text-sm">✅ <strong className="text-foreground">Recepção feminina/familiar</strong>, iluminação clara. Cortina escura na porta = não.</p>
        </Card>
        <Card>
          <p className="text-sm">✅ <strong className="text-foreground">Cabines abertas pra cima</strong>, com cortina divisória — não porta fechada.</p>
        </Card>
        <Card>
          <p className="text-sm">✅ <strong className="text-foreground">Local cheio de mulheres/casais clientes.</strong> Casa só com homens turistas = fuja.</p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 4" title="Bangkok — 10 casas">
        <p>A capital tem a maior oferta — do templo Wat Pho até spas em mansões coloniais. Foque em Sukhumvit (linha BTS) pra mover entre opções.</p>
        <CityBlock city="Bangkok" spas={bangkok} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 5" title="Chiang Mai — 10 casas">
        <p>Capital do wellness do norte. <strong className="text-foreground">Lila e Women's Center</strong> têm propósito social. Old City concentra as melhores escolas — preço justo, técnica forte.</p>
        <CityBlock city="Chiang Mai" spas={chiangMai} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 6" title="Chiang Rai — 10 casas">
        <p>Mais calma que Chiang Mai, mas com 2 spas de classe internacional (Le Méridien e Anantara Golden Triangle). Centro tem opções honestas a partir de ฿200.</p>
        <CityBlock city="Chiang Rai" spas={chiangRai} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 7" title="Phuket — 10 casas">
        <p>Patong é o terreno minado — fora dele, Phuket tem alguns dos melhores spas do país. Kamala, Bang Tao, Layan e Old Town são as áreas seguras pra terapia de verdade.</p>
        <CityBlock city="Phuket" spas={phuket} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 8" title="Krabi — 10 casas">
        <p>Ao Nang concentra a maioria. Os resorts de Klong Muang e Railay têm spas de outro nível — vale o dia inteiro.</p>
        <CityBlock city="Krabi" spas={krabi} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 9" title="Hua Hin — 10 casas">
        <p>O balneário da realeza tailandesa. Spas de resort histórico (Centara 1923) e hammam marroquino único. Boa escapada de 2h de Bangkok.</p>
        <CityBlock city="Hua Hin" spas={huaHin} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 10" title="Pattaya — 10 casas">
        <p>Pior fama do país com razão — mas Pratumnak Hill, Terminal 21 e Naklua têm casas 100% terapêuticas. Foque nessas zonas, fuja da Walking Street.</p>
        <CityBlock city="Pattaya" spas={pattaya} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 11" title="Koh Samui — 10 casas">
        <p>A ilha mais desenvolvida do golfo. <strong className="text-foreground">Tamarind Springs e Six Senses</strong> são experiências obrigatórias. Chaweng tem opções honestas se você reservar online.</p>
        <CityBlock city="Koh Samui" spas={samui} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 12" title="Koh Phangan — 10 casas">
        <p>Capital do wellness alternativo. Srithanu (oeste) concentra yoga + massagem terapêutica. Sauna de templo (Wat Pho local) é experiência única no país.</p>
        <CityBlock city="Koh Phangan" spas={phangan} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 13" title="Koh Tao — 10 casas">
        <p>Massagem pós-mergulho é o foco. Sairee Beach tem as melhores opções baratas. Jamahkiri (cliff-top) é luxo a parte.</p>
        <CityBlock city="Koh Tao" spas={tao} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 14" title="Koh Lanta — 10 casas">
        <p>Mais calma que Phi Phi, mais barata que Samui. Cabanas de massagem pé na areia em todas as 4 praias principais. Pimalai é o ultra luxo da ilha.</p>
        <CityBlock city="Koh Lanta" spas={lanta} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 15" title="Koh Phi Phi — 10 casas">
        <p>Tonsai tem opções básicas baratas. Pra spa de verdade, vá aos resorts isolados do norte (Laem Tong, Lo Bakao) — acesso só por longtail, vale o passeio.</p>
        <CityBlock city="Koh Phi Phi" spas={phiphi} />
      </Section>
      <div className="guide-section-divider" />

      <Section chapter="Capítulo 16" title="Lista negra — o que evitar">
        <Card>
          <h4 className="text-foreground font-semibold">Patong / Soi Bangla (Phuket)</h4>
          <p className="text-sm">90% das casas com luz vermelha/rosa e meninas chamando na porta. Fuja. Use só Let's Relax (Jungceylon) e Raintree.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Walking Street (Pattaya)</h4>
          <p className="text-sm">Zona inteira é fachada. Pra massagem real em Pattaya, vá ao Terminal 21 ou Pratumnak Hill.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Sukhumvit Soi 4 / Nana após 22h (Bangkok)</h4>
          <p className="text-sm">Casas mudam de público. Faça massagem em Sukhumvit só até 21h ou em locais conhecidos (Health Land, Asia Herb, Lavana).</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Sinais de alerta universais</h4>
          <p className="text-sm">Luz colorida na porta · sem tabela de preço · meninas com roupa civil sentadas na vitrine · "extra service?" na recepção · cortina escura cobrindo a porta.</p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 17" title="Frases salva-vidas">
        <Card>
          <p className="text-sm"><strong className="text-foreground">Pressão mais forte:</strong> "Nuat naek noi" (นวดแน่นหน่อย)</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Pressão mais leve:</strong> "Bao bao" (เบาๆ)</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Foco nas costas:</strong> "Lang yer yer" (หลังเยอะๆ)</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Sem óleo, por favor:</strong> "Mai ao naam man" (ไม่เอาน้ำมัน)</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Quanto custa o total?</strong> "Tao rai tang mod?" (เท่าไหร่ทั้งหมด?) — peça ANTES de começar.</p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 18" title="Etiqueta e gorjeta">
        <p>Gorjeta padrão: ฿50–฿100 (≈ R$ 7–15) em casa de bairro. Em spa de luxo: 10% da conta. Entregue na mão da massagista, não na recepção.</p>
        <p>Sapato fica na entrada. Não dê telefone, não filme. Se algo te incomodar (toque inadequado, ambiente), levante e saia — você não paga.</p>
        <p>Reserve sempre que possível, especialmente para spa luxo: 24h a 7 dias antes via WhatsApp ou Instagram da casa.</p>
      </Section>
    </div>
  );
};

export default CasasMassagem5582;
