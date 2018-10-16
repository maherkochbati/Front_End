import { Users } from "./users.model";
import { Region } from "./region.model";

export class Pharmacie {


     id: number;
	adresse: string;
	nom: string;
	mail: string;
	tel: number;
	region: Region;
	userAdmin: Users;
  }
  