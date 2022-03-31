import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Java',
      description: 'Curso excelente de Java',
      duration: 500,
      teacher: {
        connect: {
          // Change to your teacher id
          id: '63323abe-e9e4-4e38-990d-050f21507c50',
        },
      },
    },
  });

  console.log('Create Course: ', result);
}

main();
