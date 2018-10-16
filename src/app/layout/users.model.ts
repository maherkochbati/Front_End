import { Pharmacie } from "./pharmacie.model";
import { Role } from "./role.model";
export class Users {

    id: number;
    nom: String;
    prenom: String;
    username: String;
    mdp: String;
    email: String;
    pharmacie: Pharmacie;
    role: Role;
  
  }
  