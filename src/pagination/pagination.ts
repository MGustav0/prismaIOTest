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
