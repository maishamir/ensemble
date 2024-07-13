export async function seed(knex) {
  await knex("outfit").del();

  await knex("outfit").insert([
    {
      id: 1,
      date: "2024-07-10",
      description: "Casual summer outfit with a blue t-shirt and denim shorts.",
      clothing_item_ids: JSON.stringify([1, 11]),
      images: JSON.stringify([
        "https://i.pinimg.com/originals/5a/8b/6e/5a8b6ee7e5cf7623f539cfcbe65f7cf1.jpg",
        "https://i.pinimg.com/originals/2f/0a/3b/2f0a3b8e7f1c0b7b82b8a3f6f5e8a62f.jpg",
      ]),
    },
    {
      id: 2,
      date: "2024-07-11",
      description: "Elegant evening outfit with a red taffeta dress.",
      clothing_item_ids: JSON.stringify([4]),
      images: JSON.stringify([
        "https://i.pinimg.com/originals/7d/dc/fd/7ddcfd9c30ace768131c877df8ed6276.jpg",
      ]),
    },
    {
      id: 3,
      date: "2024-07-12",
      description: "Winter outfit with a wool coat and ankle boots.",
      clothing_item_ids: JSON.stringify([13, 15]),
      images: JSON.stringify([
        "https://i.pinimg.com/originals/3a/1b/23/3a1b23a84b5f09c5f1b393f547b5e228.jpg",
        "https://i.pinimg.com/originals/a8/7e/4c/a87e4c7c0b6d4a9a8b4a1f7b9a1a6b9a.jpg",
      ]),
    },
    {
      id: 4,
      date: "2024-07-13",
      description: "Casual day out with a graphic tee and cargo pants.",
      clothing_item_ids: JSON.stringify([17, 19]),
      images: JSON.stringify([
        "https://i.pinimg.com/originals/b8/7e/4c/b87e4c7c0b6d4a9a8b4a1f7b9a1a6b9a.jpg",
        "https://i.pinimg.com/originals/a8/7e/4c/a87e4c7c0b6d4a9a8b4a1f7b9a1a6b9a.jpg",
      ]),
    },
    {
      id: 5,
      date: "2024-07-14",
      description: "Evening party outfit with an elegant gown and black heels.",
      clothing_item_ids: JSON.stringify([14, 16]),
      images: JSON.stringify([
        "https://i.pinimg.com/originals/43/c2/8d/43c28d0b8e6f88f8a2e9c8c2e7a2a2d4.jpg",
        "https://i.pinimg.com/originals/78/7d/4d/787d4d3f8e6f88f8a2e9c8c2e7a2a2d4.jpg",
      ]),
    },
    {
      id: 6,
      date: "2024-07-15",
      description: "Summer outing with a floral dress and sun hat.",
      clothing_item_ids: JSON.stringify([6, 10]),
      images: JSON.stringify([
        "https://i.pinimg.com/originals/8c/9e/8f/8c9e8fce43c7d1c6df5c0348e7b2a93c.jpg",
        "https://i.pinimg.com/originals/12/3b/37/123b37a63a2a7418e7d23305cfc37e14.jpg",
      ]),
    },
    {
      id: 7,
      date: "2024-07-16",
      description: "Cool autumn look with a leather jacket and boho skirt.",
      clothing_item_ids: JSON.stringify([8, 9]),
      images: JSON.stringify([
        "https://i.pinimg.com/originals/41/a0/2f/41a02f02d8adbd5c7381d29bc5e1a2b6.jpg",
        "https://i.pinimg.com/originals/b0/6e/4e/b06e4e3c3b7d48a8b142c98b23d8f7c6.jpg",
      ]),
    },
  ]);
}
