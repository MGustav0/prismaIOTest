import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      // Change to your course id
      id: '20b5114e-bcb3-4da3-a266-4361f6b54131',
    },
    data: {
      duration: 150,
    },
  });

  console.log('Find one Course: ', result);
}

main();
