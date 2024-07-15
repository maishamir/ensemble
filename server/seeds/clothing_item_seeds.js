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
        "https://i.pinimg.com/564x/7f/b1/12/7fb1121d59fd4bd24c92df173fd430fb.jpg",
    },
    {
      id: 6,
      name: "Floral Summer Dress",
      category: "Dress",
      size: "S",
      image_url:
        "https://i.pinimg.com/564x/7c/04/61/7c0461f9b34158462ccebc70beeb4a0b.jpg",
    },
    {
      id: 7,
      name: "Casual Sneakers",
      category: "Footwear",
      size: "L",
      image_url:
        "https://i.pinimg.com/564x/3e/e8/59/3ee8591bb02b564ad46251f64493d9d9.jpg",
    },
    {
      id: 8,
      name: "Black Leather Jacket",
      category: "Top",
      size: "L",
      image_url:
        "https://i.pinimg.com/564x/28/80/7f/28807f4f511ddbc8897ba3c6721f52ca.jpg",
    },
    {
      id: 9,
      name: "Boho Maxi Skirt",
      category: "Bottom",
      size: "M",
      image_url:
        "https://i.pinimg.com/736x/9d/de/76/9dde760e09ca02a290c91d3e6e18859d.jpg",
    },
    {
      id: 10,
      name: "Straw Sun Hat",
      category: "Accessory",
      size: "One-Size",
      image_url:
        "https://i.pinimg.com/564x/09/d0/00/09d0008b98a5b67ee749a0809d134ab4.jpg",
    },
    {
      id: 11,
      name: "Vintage Denim Shorts",
      category: "Bottom",
      size: "S",
      image_url:
        "https://i.pinimg.com/564x/17/4f/0a/174f0a1bad3b86da9290f94a01c3d425.jpg",
    },
    {
      id: 12,
      name: "Polka Dot Blouse",
      category: "Top",
      size: "M",
      image_url:
        "https://i.pinimg.com/564x/54/bb/74/54bb7439ff1ed9b8c24fd1771dfe00a4.jpg",
    },
    {
      id: 13,
      name: "Winter Wool Coat",
      category: "Top",
      size: "XL",
      image_url:
        "https://i.pinimg.com/736x/d0/f1/64/d0f164041939f814b207530c97f1f8d9.jpg",
    },
    {
      id: 14,
      name: "Elegant Evening Gown",
      category: "Dress",
      size: "M",
      image_url:
        "https://i.pinimg.com/564x/b5/ad/02/b5ad0245a81999a8366b1ed5f4ed9a6b.jpg",
    },
    {
      id: 15,
      name: "Ankle Boots",
      category: "Footwear",
      size: "M",
      image_url:
        "https://i.pinimg.com/736x/b9/58/ee/b958ee7b5511daf6d06767cfe33e8737.jpg",
    },
    {
      id: 16,
      name: "Classic Black Heels",
      category: "Footwear",
      size: "L",
      image_url:
        "https://i.pinimg.com/564x/71/78/03/71780344d61b42b66b9089e24365cac3.jpg",
    },
    {
      id: 17,
      name: "Graphic Tee",
      category: "Top",
      size: "S",
      image_url:
        "https://i.pinimg.com/564x/0a/88/1a/0a881a9c2f70c0365b54d2fa192dce64.jpg",
    },
    {
      id: 18,
      name: "Puffer Jacket",
      category: "Top",
      size: "M",
      image_url:
        "https://i.pinimg.com/564x/4c/40/3a/4c403a046bbbb6c167a31ea1003cfb83.jpg",
    },
    {
      id: 19,
      name: "Khaki Cargo Pants",
      category: "Bottom",
      size: "L",
      image_url:
        "https://i.pinimg.com/564x/16/c9/e9/16c9e9092f802e53d758c3eba2e90e44.jpg",
    },
    {
      id: 20,
      name: "Summer Sandals",
      category: "Footwear",
      size: "M",
      image_url:
        "https://i.pinimg.com/564x/79/83/ac/7983acca34b2b1d86f3d77238f1ebb5a.jpg",
    },
  ]);
}
