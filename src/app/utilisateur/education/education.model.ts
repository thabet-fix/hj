export class Education {
    public titre: string;
    public nom_ecole: string;
    public date_debut: Date;
    public date_fin: Date;
    public description: string;
  
    constructor(
    titre: string, nom_ecole: string, date_debut: Date, date_fin: Date, description: string) {
    this.titre = titre;
    this.nom_ecole = nom_ecole;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.description = description;
    }
  } 
  