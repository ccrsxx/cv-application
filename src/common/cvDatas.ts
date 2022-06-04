import type { ICvData } from '../types';

export const cvConfig = {
  previewWidthPercent: 0.55,
  resumeWidth: 950,
  resumeHeight: 1300,
  minScale: 0.35,
  maxScale: 1.5
};

export const defaultCvData = {
  info: {
    firstName: '',
    lastName: '',
    profession: '',
    profileText: ''
  },
  contact: {
    website: '',
    email: '',
    location: '',
    phone: ''
  },
  education: [
    {
      degree: '',
      school: '',
      from: '',
      to: ''
    },
    {
      degree: '',
      school: '',
      from: '',
      to: ''
    }
  ],
  work: [
    {
      title: '',
      company: '',
      from: '',
      to: ''
    },
    {
      title: '',
      company: '',
      from: '',
      to: ''
    }
  ],
  skills: [
    {
      skill: ''
    },
    {
      skill: ''
    },
    {
      skill: ''
    },
    {
      skill: ''
    },
    {
      skill: ''
    }
  ]
};
