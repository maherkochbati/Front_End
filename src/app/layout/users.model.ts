import { Pharmacie } from "./pharmacie.model";
import { Role } from "./role.model";
export class Users {

    id: number;
    nom: string;
    prenom: String;
    username: string;
    mdp: String;
    email: String;
    etat: boolean; 
    pharmacie: Pharmacie;
    role: Role;
  
  }
  