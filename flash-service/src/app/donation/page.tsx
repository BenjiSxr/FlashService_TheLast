import { DonationPost } from "@/components/DonationPost";

export default function Donation() {
  const posts = [
    {
      id: 1,
      imageURL: "https://picsum.photos/350/175",
      title: "La SPA",
      description: `Bonjour, Monsieur. Permettez-moi de vous éclairer à ce sujet. L'ivoire est traditionnellement de couleur crème ou blanc cassé, avec parfois des nuances jaunâtres en fonction de son âge ou de son origine. Cette teinte douce est souvent associée à une élégance intemporelle.
            Si vous avez d'autres questions, n'hésitez pas à me solliciter.`,
      current_fp: 1000,
      total_fp: 3000,
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/400/250",
      title: "autre",
      description: `Bonjour, Monsieur. Permettez-moi de vous éclairer à ce sujet. L'ivoire est traditionnellement de couleur crème ou blanc cassé, avec parfois des nuances jaunâtres en fonction de son âge ou de son origine. Cette teinte douce est souvent associée à une élégance intemporelle.
            Si vous avez d'autres questions, n'hésitez pas à me solliciter.`,
      current_fp: 44446,
      total_fp: 50000,
    },
    {
      id: 3,
      imageURL: "https://picsum.photos/500/300",
      title: "autre",
      description: `Bonjour, Monsieur. Permettez-moi de vous éclairer à ce sujet. L'ivoire est traditionnellement de couleur crème ou blanc cassé, avec parfois des nuances jaunâtres en fonction de son âge ou de son origine. Cette teinte douce est souvent associée à une élégance intemporelle.
            Si vous avez d'autres questions, n'hésitez pas à me solliciter.`,
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