import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de ReactJS',
      description: 'Curso excelente de ReactJS',
      duration: 300,
    },
  });

  console.log('Create Course: ', result);
}

main();
