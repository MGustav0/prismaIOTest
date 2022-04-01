import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      // Change to your course module ID
      id: '285a8214-0867-4ae0-8ad5-aeab1a60614d',
    },
  });

  console.log('Create Teacher: ', result);
}

main();
