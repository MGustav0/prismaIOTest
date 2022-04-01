import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  let skip = 0;
  let exist = true;

  while (exist) {
    // eslint-disable-next-line no-await-in-loop
    const result = await prisma.courses.findMany({
      skip,
      // Number of items per page
      take: 2,
      // where: {
      //   // Change to your course module ID
      //   id: '285a8214-0867-4ae0-8ad5-aeab1a60614d',
      // },
    });
    skip += 2;

    if (result.length <= 0) {
      exist = false;
    }

    console.log('Courses: ', result);
    console.log(
      '----------------------------------------------------------------------',
    );
  }
}

main();
