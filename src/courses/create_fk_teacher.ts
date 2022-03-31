import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      description: 'Curso excelente de React Native',
      duration: 300,
      fk_id_teacher: 'e0bc3181-120a-4913-9567-a6dea38b4eef',
    },
  });

  console.log('Create Course with foreign key (fk): ', result);
}

main();
