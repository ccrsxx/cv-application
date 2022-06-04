export interface ICvData {
  info: {
    firstName: string;
    lastName: string;
    profession: string;
    profileText: string;
  };
  contact: {
    website: string;
    email: string;
    location: string;
    phone: string;
  };
  education: {
    degree: string;
    school: string;
    from: string;
    to: string;
  }[];
  work: {
    title: string;
    company: string;
    from: string;
    to: string;
  }[];
  skills: {
    skill: string;
  }[];
}
