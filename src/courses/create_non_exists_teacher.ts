import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Elixir',
      description: 'Curso excelente de Elixir',
      duration: 200,
      teacher: {
        create: {
          name: 'John Doe 3',
        },
      },
    },
  });

  console.log('Create Course: ', result);
}

main();
