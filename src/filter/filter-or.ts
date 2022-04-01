import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            // Change to your course name
            contains: 'NodeJS',
          },
        },
        {
          name: {
            // Change to your course name
            contains: 'React Native',
          },
        },
      ],
      AND: [
        {
          duration: 300,
        },
      ],
    },
  });

  console.log('Create Teacher: ', result);
}

main();
