export class Experience {
    public titre: string;
    public nom_societe: string;
    public date_debut: Date;
    public date_fin: Date;
    public description: string;
  
    constructor(
    titre: string, nom_societe: string, date_debut: Date, date_fin: Date, description: string) {
    this.titre = titre;
    this.nom_societe = nom_societe;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.description = description;
    }
  } 
  