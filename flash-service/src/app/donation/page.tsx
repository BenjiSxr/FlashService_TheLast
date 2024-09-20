import { DonationPost } from "@/components/DonationPost";

export default function Donation() {
  const posts = [
    {
      id: 1,
      imageURL: "https://picsum.photos/350/175",
      title: "test",
      current_fp: 1000,
      total_fp: 3000,
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/400/250",
      title: "autre",
      current_fp: 44446,
      total_fp: 50000,
    },
    {
      id: 3,
      imageURL: "https://picsum.photos/500/300",
      title: "autre",
      current_fp: 44446,
      total_fp: 50000,
    },
  ];
  return (
    <>
      <div className="p-6 space-y-8 overflow-y-scroll ">
        {posts.map((p) => (
          <DonationPost
            key={p.id} // Assurez-vous que `p.id` est unique
            imageURL={p.imageURL}
            title={p.title}
            current_fp={p.current_fp}
            total_fp={p.total_fp}
          />
        ))}
      </div>
    </>
  );
}
