import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    // where: {
    //   // Change to your course ID
    //   id: 'c74ea251-2ab4-41a6-8b44-9b3e802cc7c4',
    // },
    include: {
      modules: true,
    },
  });

  console.log(JSON.stringify(result));
  console.log('Find courses: ', result);
}

main();
