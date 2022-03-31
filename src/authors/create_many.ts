import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'John Doe 2',
      books: {
        createMany: {
          data: [
            {
              name: 'Book 2',
            },
            {
              name: 'Book 3',
            },
          ],
        },
      },
    },
  });

  console.log('Create author: ', result);
}

main();
