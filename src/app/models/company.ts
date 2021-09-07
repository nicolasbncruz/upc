import { Project } from "./project";

export class Company {
    id: number;    
    name: string;
    ruc: string;
    image: string;
    address: string;    
    project: Project[];    
}