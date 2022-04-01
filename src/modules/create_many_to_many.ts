import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      // Change to your course id
      fk_id_course: 'c74ea251-2ab4-41a6-8b44-9b3e802cc7c4',
      // Change to your module id
      fk_id_module: '68270f29-e652-4d2a-86cc-cf8e240cf51e',
    },
  });

  console.log('Create Teacher: ', result);
}

main();
