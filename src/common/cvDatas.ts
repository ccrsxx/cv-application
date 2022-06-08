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
    profile: ''
  },
  contact: {
    website: '',
    email: '',
    address: '',
    phone: ''
  },
  education: [
    {
      degree: '',
      university: '',
      from: '',
      to: ''
    }
  ],
  experience: [
    {
      title: '',
      company: '',
      from: '',
      to: '',
      description: ''
    }
  ],
  skills: [
    {
      skill: '',
      key: 0,
      placeholder: 'Python'
    },
    {
      skill: '',
      key: 1,
      placeholder: 'JavaScript'
    },
    {
      skill: '',
      key: 2,
      placeholder: 'TypeScript'
    }
  ]
};

export const defaultFormIndexes = {
  education: 0,
  experience: 0
};
