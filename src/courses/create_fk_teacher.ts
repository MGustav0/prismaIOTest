import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      description: 'Curso excelente de React Native',
      duration: 300,
      // Change to your teacher id
      fk_id_teacher: '7f75a9ca-9916-41e3-b0f4-371e585f1baa',
    },
  });

  console.log('Create Course with foreign key (fk): ', result);
}

main();
