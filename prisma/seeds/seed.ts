import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.user.deleteMany({});

  const users = [
    {
      email: "john.doe@example.com",
      name: "John Doe",
    },
    {
      email: "jane.smith@example.com",
      name: "Jane Smith",
    },
    {
      email: "mike.wilson@example.com",
      name: "Mike Wilson",
    },
    {
      email: "sarah.brown@example.com",
      name: "Sarah Brown",
    },
    {
      email: "alex.turner@example.com",
      name: "Alex Turner",
    },
    {
      email: "emma.davis@example.com",
      name: "Emma Davis",
    },
    {
      email: "chris.martin@example.com",
      name: "Chris Martin",
    },
    {
      email: "lisa.anderson@example.com",
      name: "Lisa Anderson",
    },
    {
      email: "david.miller@example.com",
      name: "David Miller",
    },
    {
      email: "amy.white@example.com",
      name: "Amy White",
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
