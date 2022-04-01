import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: 'Aprendendo firebase do zero',
      name: 'Aprendendo Firebase',
      courses: {
        create: {
          course: {
            connect: {
              // Change to your course id
              id: '8e211d03-6120-40d2-ae63-82518276be2b',
            },
          },
        },
      },
    },
  });

  console.log('Create Teacher: ', result);
}

main();
