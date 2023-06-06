interface ISkill {
  name: string;
  bgColor: string;
  icon: string;
  progress: number;
}

interface IWork {
  key: string;
  name: string;
  company: string;
  description: string;
  dateFrom: string;
  dateTo: string;
}

interface IExperience {
  works: IWork[];
  year: string;
  skills?: ISkill[];
}
