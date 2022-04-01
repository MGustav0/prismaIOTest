import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Blockchain',
      description: 'Curso excelente de Blockchain',
      duration: 300,
      // teacher: {
      //   connectOrCreate: {
      //     where: {
      //       name: 'John Doe',
      //     },
      //     create: {
      //       name: 'John Doe',
      //     },
      //   },
      // },
    },
  });

  console.log('Create Course: ', result);
}

main();
