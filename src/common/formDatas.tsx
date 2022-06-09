import { faker } from '@faker-js/faker';
import { generateBasicData, getTwoSentences } from './generateData';

const { firstName, lastName, website, email, phone } = generateBasicData();

export const formData = {
  info: {
    inputFields: [
      {
        id: 'firstName',
        wide: false,
        type: 'text',
        label: 'First Name',
        textarea: false,
        placeholder: firstName
      },
      {
        id: 'lastName',
        wide: false,
        type: 'text',
        label: 'Last Name',
        textarea: false,
        placeholder: lastName
      },
      {
        id: 'profession',
        wide: true,
        type: 'text',
        label: 'Professional Title',
        textarea: false,
        placeholder: getTwoSentences()
      },
      {
        id: 'profile',
        wide: true,
        type: 'text',
        label: 'Profile',
        textarea: true,
        placeholder: 'I am a full-stack developer with a passion for ...'
      }
    ]
  },
  contact: {
    inputFields: [
      {
        id: 'website',
        wide: true,
        type: 'text',
        label: 'Website',
        textarea: false,
        placeholder: website
      },
      {
        id: 'email',
        wide: true,
        type: 'text',
        label: 'Email',
        textarea: false,
        placeholder: email
      },
      {
        id: 'address',
        wide: false,
        type: 'text',
        label: 'Address',
        textarea: false,
        placeholder: faker.address.streetAddress()
      },
      {
        id: 'phone',
        wide: false,
        type: 'text',
        label: 'Phone',
        textarea: false,
        placeholder: phone
      }
    ]
  },
  education: {
    inputFields: [
      {
        id: 'degree',
        wide: false,
        type: 'text',
        label: 'Degree',
        textarea: false,
        placeholder: `Bachelor of ${faker.name
          .jobType()
          .replace(/\w/, (i) => i.toUpperCase())}`
      },
      {
        id: 'university',
        wide: false,
        type: 'text',
        label: 'University',
        textarea: false,
        placeholder: `University of ${faker.address.cityName()}`
      },
      {
        id: 'from',
        wide: false,
        type: 'text',
        label: 'From',
        textarea: false,
        placeholder: `${faker.date.past().getFullYear()}`
      },
      {
        id: 'to',
        wide: false,
        type: 'text',
        label: 'To',
        textarea: false,
        placeholder: `${faker.date.future().getFullYear()}`
      }
    ]
  },
  experience: {
    inputFields: [
      {
        id: 'title',
        wide: false,
        type: 'text',
        label: 'Title',
        textarea: false,
        placeholder: getTwoSentences()
      },
      {
        id: 'company',
        wide: false,
        type: 'text',
        label: 'Company',
        textarea: false,
        placeholder: faker.company.companyName()
      },
      {
        id: 'from',
        wide: false,
        type: 'text',
        label: 'From',
        textarea: false,
        placeholder: `${faker.date.past().getFullYear()}`
      },
      {
        id: 'to',
        wide: false,
        type: 'text',
        label: 'To',
        textarea: false,
        placeholder: `${faker.date.future().getFullYear()}`
      },
      {
        id: 'description',
        wide: true,
        type: 'text',
        label: 'Description',
        textarea: true,
        placeholder: 'I was Senior Software Engineer at ...'
      }
    ]
  },
  skills: {
    inputFields: [
      {
        id: 'skill',
        wide: true,
        type: 'text',
        label: '',
        textarea: false,
        placeholder: ''
      }
    ]
  }
};
