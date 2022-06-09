import { faker } from '@faker-js/faker';

export function getTwoSentences(text?: string) {
  const targetText = text || faker.name.jobTitle();
  return targetText.split(' ').slice(0, -1).join(' ');
}

export function generateBasicData() {
  let [firstName, lastName] = [
    faker.name.firstName(),
    faker.name.lastName()
  ].map((name) => name.toLowerCase());

  const website = `${lastName}.com`;
  const email = `${firstName}@${lastName}.com`;
  const phone = faker.phone.phoneNumber('+62 ### #### ####');

  [firstName, lastName] = [firstName, lastName].map(
    (name) => `${name[0].toUpperCase()}${name.slice(1)}`
  );

  return {
    firstName,
    lastName,
    website,
    email,
    phone
  };
}

export function generateData() {
  const { firstName, lastName, website, email, phone } = generateBasicData();

  return {
    info: {
      firstName,
      lastName,
      profession: getTwoSentences(),
      profile: faker.lorem.paragraph()
    },
    contact: {
      website,
      email,
      address: faker.address.streetAddress(),
      phone
    },
    education: [
      {
        degree: getTwoSentences(),
        university: faker.company.companyName(),
        from: `${faker.date.past().getFullYear()}`,
        to: `${faker.date.future().getFullYear()}`
      },
      {
        degree: getTwoSentences(),
        university: faker.company.companyName(),
        from: `${faker.date.past().getFullYear()}`,
        to: `${faker.date.future().getFullYear()}`
      }
    ],
    experience: [
      {
        title: getTwoSentences(),
        company: faker.company.companyName(),
        from: `${faker.date.past().getFullYear()}`,
        to: `${faker.date.future().getFullYear()}`,
        description: faker.lorem.paragraph()
      },
      {
        title: getTwoSentences(),
        company: faker.company.companyName(),
        from: `${faker.date.past().getFullYear()}`,
        to: `${faker.date.future().getFullYear()}`,
        description: faker.lorem.paragraph()
      }
    ],
    skills: [
      {
        skill: getTwoSentences(),
        key: Math.random(),
        placeholder: getTwoSentences()
      },
      {
        skill: getTwoSentences(),
        key: Math.random(),
        placeholder: getTwoSentences()
      },
      {
        skill: getTwoSentences(),
        key: Math.random(),
        placeholder: getTwoSentences()
      },
      {
        skill: getTwoSentences(),
        key: Math.random(),
        placeholder: getTwoSentences()
      },
      {
        skill: getTwoSentences(),
        key: Math.random(),
        placeholder: getTwoSentences()
      }
    ]
  };
}
