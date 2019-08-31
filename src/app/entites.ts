export class WorkExp{
    companyName: string;
    position: string;
    description?: string;
    projects: Projects[];
    startYear: string;
    endYear: string;
    logo: string
}

export class Projects{
    title: string;
    description: string;
    responsibilities: string[];
}

export class Skill{
    name: string;
    score: number;
    logo: string;
    primary: boolean;
}

