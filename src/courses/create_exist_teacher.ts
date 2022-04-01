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
          id: '7f75a9ca-9916-41e3-b0f4-371e585f1baa',
        },
      },
    },
  });

  console.log('Create Course with existent teacher: ', result);
}

main();
