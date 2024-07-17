export async function seed(knex) {
  await knex("outfit").del();

  await knex("outfit").insert([
    {
      id: 1,
      name: 'Cas summer outfit',
      date: "2024-07-10",
      description: "Casual summer outfit with a blue t-shirt and denim shorts.",
      clothing_item_ids: JSON.stringify([1, 11]),
      thumbnail: "https://i.pinimg.com/564x/0c/43/fa/0c43fa5cc8d7e82a2112806ea558b72b.jpg"
    },
    {
      id: 2,
      name: "Dinner outfit",
      date: "2024-07-11",
      description: "Elegant evening outfit with a red taffeta dress.",
      clothing_item_ids: JSON.stringify([4]),
      thumbnail: "https://i.pinimg.com/originals/7d/dc/fd/7ddcfd9c30ace768131c877df8ed6276.jpg"
    },
    {
      id: 3,
      name: "Cozy winter outfit",
      date: "2024-07-12",
      description: "Winter outfit with a wool coat and ankle boots.",
      clothing_item_ids: JSON.stringify([13, 15]),
      thumbnail: "https://i.pinimg.com/736x/d0/f1/64/d0f164041939f814b207530c97f1f8d9.jpg"
    },
    {
      id: 4,
      name: "Graphic tee outfit",
      date: "2024-07-13",
      description: "Casual day out with a graphic tee and cargo pants.",
      clothing_item_ids: JSON.stringify([17, 19]),
      thumbnail: "https://i.pinimg.com/564x/0a/88/1a/0a881a9c2f70c0365b54d2fa192dce64.jpg"
    },
    {
      id: 5,
      name: "Evening party",
      date: "2024-07-14",
      description: "Evening party outfit with an elegant gown and black heels.",
      clothing_item_ids: JSON.stringify([14, 16]),
      thumbnail: "https://i.pinimg.com/564x/b5/ad/02/b5ad0245a81999a8366b1ed5f4ed9a6b.jpg"
    },
    {
      id: 6,
      name: 'Floral Summer outfit',
      date: "2024-07-15",
      description: "Summer outing with a floral dress and sun hat.",
      clothing_item_ids: JSON.stringify([6, 10]),
      thumbnail: "https://i.pinimg.com/564x/7c/04/61/7c0461f9b34158462ccebc70beeb4a0b.jpg"
    },
    {
      id: 7,
      name: "Chic fall outfit",
      date: "2024-07-16",
      description: "Cool autumn look with a leather jacket and boho skirt.",
      clothing_item_ids: JSON.stringify([8, 9]),
      thumbnail: "https://i.pinimg.com/564x/28/80/7f/28807f4f511ddbc8897ba3c6721f52ca.jpg"
    },
  ]);
}
