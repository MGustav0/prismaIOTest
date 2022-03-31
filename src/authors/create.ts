import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'John Doe',
      books: {
        create: {
          name: 'Book 1',
        },
      },
    },
  });

  console.log('Create author: ', result);
}

main();
