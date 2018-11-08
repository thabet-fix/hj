export class UtilisateurCompte {
    public id: number;
    public type: string;
    public nom: string;
    public prenom: string;
    public image: string;
    public sexe: string;
    public date_naissance: Date;
    public lieu_naissance: string;
    public telephone : string;
    public email : string;
    public nationalite : string;
    public pays : string;
    public ville :string;
    public poste : string;
    public secteur : string;
    public type_contrat: string;
    public resume: string;
    public axe_motivation: string;
    public sivp : boolean;
    public duree_sivp: number;
    public cv : string;

  
  
    constructor(
        id: number, type: string, nom: string, prenom: string, image: string, 
        sexe: string, date_naissance: Date, telephone: string, email: string,
        nationalite: string, pays: string, ville: string,
        poste: string, secteur: string, type_contrat: string, resume: string, 
        axe_motivation: string, sivp: boolean, duree_sivp: number, cv: string
        ) {
      this.id = id;
      this.type = type;
      this.image = image;
      this.nom = nom;
      this.prenom = prenom;
      this.sexe = sexe;
      this.date_naissance = date_naissance;
      this.telephone = telephone;
      this.email = email;
      this.nationalite = nationalite;
      this.pays = pays;
      this.ville = ville;
      this.poste = poste;
      this.secteur = secteur;
      this.type_contrat = type_contrat;
      this.resume = resume;
      this.axe_motivation = axe_motivation;
      this.sivp = sivp;
      this.duree_sivp = duree_sivp;
      this.cv = cv;
    }
  }