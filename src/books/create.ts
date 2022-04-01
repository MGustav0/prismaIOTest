import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Book 4',
      author_id: 'f1b614d3-d4e6-4666-a4ef-4eb788594011',
    },
  });

  console.log('Create book with author: ', result);
}

main();
