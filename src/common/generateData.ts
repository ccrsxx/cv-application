import { faker } from '@faker-js/faker';

export function generateData() {
  const name = faker.name.findName();
  return name;
}

export function getRandomSkill() {
  const listOfSkills = [
    'Project Management',
    'Problem Solving',
    'Time Management',
    'Communication',
    'Organization',
    'Tailwind CSS',
    'Leadership',
    'JavaScript',
    'TypeScript',
    'Teamwork',
    'Python',
    'Kotlin',
    'GitHub',
    'React',
    'Redux',
    'Swift',
    'Java',
    'Rust',
    'Dart',
    'Ruby',
    'Git',
    'C++',
    'C#',
    'Go'
  ];
  return faker.helpers.arrayElement(listOfSkills);
}
