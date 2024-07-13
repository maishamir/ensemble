export async function seed(knex) {
  await knex("clothing_item").del();

  await knex("clothing_item").insert([
    {
      id: 1,
      name: "Cotton Blue T-Shirt",
      category: "Top",
      size: "M",
      image_url:
        "https://i.pinimg.com/564x/0c/43/fa/0c43fa5cc8d7e82a2112806ea558b72b.jpg",
    },
    {
      id: 2,
      name: "Clara Baggy Low-Rise Organic Jeans",
      category: "Bottom",
      size: "32",
      image_url:
        "https://i.pinimg.com/originals/18/89/9e/18899ef61efe347c20e10bf0de973654.jpg",
    },
    {
      id: 3,
      name: "BB80 Court Sneaker",
      category: "Footwear",
      size: "M",
      image_url:
        "https://i.pinimg.com/originals/65/97/a8/6597a8159cd1f178cb384c94e07c09df.jpg",
    },
    {
      id: 4,
      name: "Liliana Red Taffeta",
      category: "Dress",
      size: "L",
      image_url:
        "https://i.pinimg.com/originals/7d/dc/fd/7ddcfd9c30ace768131c877df8ed6276.jpg",
    },
    {
      id: 5,
      name: "Silver Long Clutch Evening Wallet",
      category: "Accessory",
      size: "One-Size",
      image_url:
        "https://i.pinimg.com/originals/f7/d4/ce/f7d4ceb801fd36407fd22cfb5472722f.jpg",
    },
    {
      id: 6,
      name: "Floral Summer Dress",
      category: "Dress",
      size: "S",
      image_url:
        "https://i.pinimg.com/originals/8c/9e/8f/8c9e8fce43c7d1c6df5c0348e7b2a93c.jpg",
    },
    {
      id: 7,
      name: "Casual Sneakers",
      category: "Footwear",
      size: "L",
      image_url:
        "https://i.pinimg.com/originals/09/5e/22/095e226c1e0bfb30fd2a7d0d4ad8a9a0.jpg",
    },
    {
      id: 8,
      name: "Black Leather Jacket",
      category: "Top",
      size: "L",
      image_url:
        "https://i.pinimg.com/originals/41/a0/2f/41a02f02d8adbd5c7381d29bc5e1a2b6.jpg",
    },
    {
      id: 9,
      name: "Boho Maxi Skirt",
      category: "Bottom",
      size: "M",
      image_url:
        "https://i.pinimg.com/originals/b0/6e/4e/b06e4e3c3b7d48a8b142c98b23d8f7c6.jpg",
    },
    {
      id: 10,
      name: "Straw Sun Hat",
      category: "Accessory",
      size: "One-Size",
      image_url:
        "https://i.pinimg.com/originals/12/3b/37/123b37a63a2a7418e7d23305cfc37e14.jpg",
    },
    {
      id: 11,
      name: "Vintage Denim Shorts",
      category: "Bottom",
      size: "S",
      image_url:
        "https://i.pinimg.com/originals/2f/0a/3b/2f0a3b8e7f1c0b7b82b8a3f6f5e8a62f.jpg",
    },
    {
      id: 12,
      name: "Polka Dot Blouse",
      category: "Top",
      size: "M",
      image_url:
        "https://i.pinimg.com/originals/d6/5b/27/d65b27c1eb7ad34e31c9f26b1b88c9c1.jpg",
    },
    {
      id: 13,
      name: "Winter Wool Coat",
      category: "Top",
      size: "XL",
      image_url:
        "https://i.pinimg.com/originals/3a/1b/23/3a1b23a84b5f09c5f1b393f547b5e228.jpg",
    },
    {
      id: 14,
      name: "Elegant Evening Gown",
      category: "Dress",
      size: "M",
      image_url:
        "https://i.pinimg.com/originals/43/c2/8d/43c28d0b8e6f88f8a2e9c8c2e7a2a2d4.jpg",
    },
    {
      id: 15,
      name: "Ankle Boots",
      category: "Footwear",
      size: "M",
      image_url:
        "https://i.pinimg.com/originals/a8/7e/4c/a87e4c7c0b6d4a9a8b4a1f7b9a1a6b9a.jpg",
    },
    {
      id: 16,
      name: "Classic Black Heels",
      category: "Footwear",
      size: "L",
      image_url:
        "https://i.pinimg.com/originals/78/7d/4d/787d4d3f8e6f88f8a2e9c8c2e7a2a2d4.jpg",
    },
    {
      id: 17,
      name: "Graphic Tee",
      category: "Top",
      size: "S",
      image_url:
        "https://i.pinimg.com/originals/b8/7e/4c/b87e4c7c0b6d4a9a8b4a1f7b9a1a6b9a.jpg",
    },
    {
      id: 18,
      name: "Puffer Jacket",
      category: "Top",
      size: "M",
      image_url:
        "https://i.pinimg.com/originals/98/7d/4d/987d4d3f8e6f88f8a2e9c8c2e7a2a2d4.jpg",
    },
    {
      id: 19,
      name: "Khaki Cargo Pants",
      category: "Bottom",
      size: "L",
      image_url:
        "https://i.pinimg.com/originals/a8/7e/4c/a87e4c7c0b6d4a9a8b4a1f7b9a1a6b9a.jpg",
    },
    {
      id: 20,
      name: "Summer Sandals",
      category: "Footwear",
      size: "M",
      image_url:
        "https://i.pinimg.com/originals/f8/7d/4d/f87d4d3f8e6f88f8a2e9c8c2e7a2a2d4.jpg",
    },
  ]);
}
