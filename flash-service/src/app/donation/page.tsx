import { DonationPost } from "@/components/DonationPost";

export default function Donation() {
  const posts = [
    {
      id: 1,
      imageURL: "https://picsum.photos/350/175",
      title: "la Société Protectrice des Animaux (SPA)",
      description: `Grâce à ces contributions, la SPA peut financer les soins vétérinaires, l'alimentation, l'hébergement et la réhabilitation des animaux recueillis dans ses refuges. Les dons permettent également de mener des campagnes de sensibilisation et de soutenir des actions légales contre la maltraitance animale. Chaque geste compte pour améliorer la vie de milliers d'animaux en leur offrant une seconde chance.`,
      current_fp: 1000,
      total_fp: 3000,
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/400/250",
      title: "Les Restos du Cœur",
      description: `Chaque contribution aide à distribuer des repas, offrir un hébergement d’urgence, ainsi que des services d’accompagnement social et d’insertion. Grâce à vos dons, des milliers de familles reçoivent un soutien indispensable pour améliorer leur quotidien et retrouver de l’espoir.`,
      current_fp: 44446,
      total_fp: 50000,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center p-5 space-y-8 overflow-y-scroll bg-gray-100">
        {posts.map((p) => (
          <DonationPost
            key={p.id}
            imageURL={p.imageURL}
            title={p.title}
            description={p.description}
            current_fp={p.current_fp}
            total_fp={p.total_fp}
          />
        ))}
      </div>
    </>
  );
}
