import { DonationPost } from "@/components/DonationPost";

export default function Donation() {
  const posts = [
    {
      id: 1,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4HvDPeMqpZSAiTMafD7_7AFax36YhRVriw&s",
      title: "La SPA",
      description: `La spa, ou société par actions simplifiée (SAS), est une forme juridique d'entreprise très prisée en France pour sa flexibilité et sa simplicité. Elle permet de créer une société avec un ou plusieurs associés sans minimum de capital, bien que la loi impose un capital social d’au moins 1 euro.`,
      current_fp: 1000,
      total_fp: 3000,
    },
    {
      id: 2,
      imageURL:
        "https://www.hi.org/sn_uploads/fck/IMG_BANDEAUX_PAGE_TABLETTE-LOGO.jpg",
      title: "Handicap International",
      description: `Handicap International est une organisation non gouvernementale (ONG) internationale dédiée à la défense des droits des personnes en situation de handicap et à l’amélioration de leur qualité de vie. Fondée en 1982, l'ONG œuvre dans de nombreux pays à travers le monde, en réponse aux crises humanitaires et aux situations d'urgence.`,
      current_fp: 44446,
      total_fp: 50000,
    },
    {
      id: 3,
      imageURL:
        "https://collecte.restosducoeur.org/wp-content/uploads/2022/11/facebook-share.jpg",
      title: "Restos du Coeur",
      description: `Les Restos du Cœur est une association caritative française fondée en 1985 par l'humoriste Coluche. Son objectif principal est de lutter contre la pauvreté et l'exclusion sociale en fournissant une aide alimentaire et des services de soutien aux personnes en difficulté.`,
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
