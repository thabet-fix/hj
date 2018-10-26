export class Emploi {
    public id: number;
    public titre: string;
    public description: string;
    public type_contrat: string;
    public type_temp: string;
    public lieu: string;
    public secteur: string;
    public renumeration: string;
    public experience: string;
  
  
    constructor(id: number, titre: string, description: string, type_contrat: string, type_temp: string, lieu: string, secteur: string, renumeration: string, experience: string) {
      this.id = id;
      this.titre = titre;
      this.description = description;
      this.type_contrat = type_contrat;
      this.type_temp = type_temp;
      this.lieu = lieu;
      this.secteur = secteur;
      this.renumeration = renumeration;
      this.experience = experience;
    }
  }