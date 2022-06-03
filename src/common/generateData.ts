import { faker } from '@faker-js/faker';

export function generateData() {
  const name = faker.name.findName();
  return name;
}
