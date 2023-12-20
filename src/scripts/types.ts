export type TSeason = {
    closeProjects: number;
    income: number;
    hired: number;
    dismissed: number;
    newProjects: number;
    };
export type TSeasons = {
    winter: TSeason;
    autumn: TSeason;
    summer: TSeason;
    spring: TSeason;
    };
export type THired = {
    name: string;
    departament: string;
    experience: number;
    isClosedProjects: boolean;
    salary: number;
};
