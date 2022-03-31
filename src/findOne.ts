import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // SELECT * FROM courses LIMIT 1
  // const result = await prisma.courses.findFirst();

  // SELECT * FROM courses ORDER BY id DESC LIMIT 1
  const result = await prisma.courses.findFirst({
    take: -1,
  });

  console.log('Find one Course: ', result);
}

main();
