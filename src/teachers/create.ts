import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.teachers.create({
    data: {
      name: 'John Doe 8',
    },
  });

  console.log('Create Teacher: ', result);
}

main();
