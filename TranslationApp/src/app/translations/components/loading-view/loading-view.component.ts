import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Translations } from '../../models/translations';

@Component({
  selector: 'app-loading-view',
  templateUrl: './loading-view.component.html',
  styleUrls: ['./loading-view.component.scss']
})
export class LoadingViewComponent {

  @Input() NLDisabled: boolean;
  @Input() ENDisabled: boolean;
  @Input() FRDisabled: boolean;
  @Output() load: EventEmitter<Translations> = new EventEmitter();

  constructor() { }

  loadNL() {
    this.load.emit(new Translations({language: 'nl', values: JSON.parse(this.nl)}));
  }

  loadEN() {
    this.load.emit(new Translations({language: 'en', values: JSON.parse(this.en)}));
  }

  loadFR() {
    this.load.emit(new Translations({language: 'fr', values: JSON.parse(this.fr)}));
  }

  // tslint:disable: member-ordering
  // tslint:disable: max-line-length
  private nl = `{
    "navigation": {
      "applicationTitle": "Bankbetalingen",
      "payments": "Betalingen",
      "settings": "Instellingen"
    },
    "payClosingScreens": {
      "overview": {
        "title": "Betalingen",
        "filters": {
          "payPeriodsPlaceholder": "Alle periodes",
          "searchPlaceHolder" : "Klant"
        },
        "grid": {
          "officialName": "Onderneming",
          "clientNumber": "Dossier",
          "payPeriod": "Loonperiode",
          "payGroup": "Loongroep",
          "type": "Type",
          "method": "Methode",
          "time": "Teller",
          "status": "Status",
          "lastStatusDate": "Status datum",
          "stateNumber": "Loonstaatnr.",
          "errorMessage": "Geen weer te geven data"
        }
      },
      "detail": {
        "information": {
          "paid": "Betaald",
          "amountTotal": "Totaal",
          "NotPaid": "Onbetaald",
          "dossier": "Dossier",
          "paymentMethod": "Methode van betaling",
          "accountNumber": "Bankrekeningnummer",
          "communication": "Mededeling",
          "treatmentDate": "Verwerkingsdatum",
          "payPeriod": "Loonperiode",
          "stateNumber": "Loonstaatnr.",
          "fileName": "Bestandsnaam",
          "noFileName": "Geen bestand",
          "payClosingDate": "Afsluiting lonen",
          "toProcessDate": "Te verwerken",
          "processedDate": "Verwerkt",
          "partiallyProcessedDate": "Gedeeltelijk",
          "releasedDate": "Te verwerken",
          "onHoldDate": "In wacht",
          "processingDate": "In verwerking",
          "cancelledDate": "Geannuleerd",
          "notTreatedDate": "Niet verwerkt"
        },
        "grid": {
          "setStatus": "Status opgeven",
          "selected": "geselecteerd",
          "workerName": "Werknemer",
          "ref": "Nr.",
          "amount": "Bedrag",
          "accountNumber": "Bankrekening",
          "status": "Status",
          "lastStatusDate": "Status datum",
          "searchPlaceHolder" : "Werknemer",
          "errorMessages": {
            "noIban": "Bankrekening ontbreekt",
            "amountZero": "Bedrag = 0",
            "amountNegative": "Bedrag is negatief"
          }
        },
        "paymentCancelModal": {
          "title": "Betaling annuleren",
          "body": "Bent u zeker dat u [count] betalingen wilt annuleren?"
        },
        "paymentOnHoldModal": {
          "title": "Betaling in wacht",
          "body": "Bent u zeker dat u [count] betalingen in wacht wilt zetten?"
        },
        "paymentReleaseModal": {
          "title": "Betaling vrijgeven",
          "body": "Bent u zeker dat u [count] betalingen wilt vrijgeven?"
        },
        "editPayment": {
          "title": "Update - Betalingsparmeters",
          "treatmentDateLabel": "Verwerkingsdatum",
          "treatmentDateRequiredError": "Verwerkingsdatum verplicht.",
          "treatmentDateInPastError": "Verwerkingsdatum moet in de toekomst liggen."
        },
        "editWorker": {
          "title": "Update - Betaling werknemer",
          "ibanLabel": "IBAN",
          "bicLabel": "BIC",
          "beneficiaryLabel": "Begunstigde"
        },
        "paymentError": {
          "employeesError": " {{errorCount}} werknemers met de status 'fout'",
          "notTreated": "{{notTreatedCount}} werknemers met de status 'niet-verwerkt'",
          "onHold": "{{onHoldCount}} werknemers met de status 'in wacht'",
          "onHoldAndNotTreated": "{{onHoldCount}} werknemers met de status 'in wacht \\n{{notTreatedCount}} werknemers met de status 'niet-verwerkt'"
        }
      },
      "shared": {
        "states": {
          "all": "Alle statussen",
          "toProcess": "Te verwerken",
          "processed": "Verwerkt",
          "processing": "In verwerking",
          "onHold": "In wacht",
          "canceled": "Geannuleerd",
          "partiallyProcessed": "Gedeeltelijk",
          "error": "Fout",
          "notTreated": "Niet verwerkt"
        },
        "forcePayment": "Betaling verwerken"
      }
    },
    "settingScreens": {
      "overview": {
        "title": "Klanten",
        "grid": {
          "enterpriseName": "Onderneming",
          "paymentMethod": "Methode van betaling",
          "errorMessage": "Geen weer te geven data",
          "searchPlaceHolder" : "Klant"
        }
      },
      "detail": {
        "paymentMethod": "Methode van betaling",
        "paymentType": "Soort betaling",
        "bankAccount": "Bankrekening",
        "bic": "BIC",
        "paymentExecution": "Uitvoering betaling",
        "fileGeneration": "Creëer bestand",
        "egNet": "bv. Loon",
        "egAdvance": "bv. Voorschot",
        "egGarnishment": "bv. \\"referentie loonbeslag\\"",
        "dossier": "Dossier",
        "editTitle": "Bijwerken - Standaardinstellingen",
        "defaultSettings": "Standaardinstellingen",
        "communication": "Mededeling",
        "dateFormat": "Formaat datum",
        "communicationNet": "Tekst voor betalingen \\"Netto\\"",
        "communicationAdvance": "Tekst voor betalingen \\"Voorschot\\"",
        "communicationGarnishment": "Tekst voor betalingen \\"Loonbeslag\\"",
        "notSupported": "Alleen Netto payments worden op dit moment behandeld"
      },
      "enum": {
        "fileGeneration": {
          "afterEachPayCalc": "Na elke loonberekening"
        },
        "paymentExecution": {
          "byPartena": "Door Partena"
        },
        "communication": {
          "salary": "Loon",
          "automatic": "Automatisch"
        },
        "dateFormat": {
          "shortDate": "Kort",
          "eg": "bv."
        }
      }
    },
    "shared": {
      "general": {
        "searchBoxPlaceholder": "Zoeken",
        "clear": "Wissen",
        "export": "Exporteren",
        "yes": "Ja",
        "no": "Nee"
      },
      "paymentMethods": {
        "all": "Alle methodes",
        "automatic": "Automatisch",
        "bankList": "Banklijst",
        "manual": "Manueel",
        "noBankPayment": "Geen bankbetaling"
      },
      "paymentTypes": {
        "all": "Alle soorten",
        "net": "Netto",
        "advance": "Voorschot",
        "garnishment": "Loonbeslag"
      },
      "updated": "Bijgewerkt"
    }
  }`;
  private en = `{
    "navigation": {
      "applicationTitle": "Bank payments",
      "payments": "Payments",
      "settings": "Settings"
    },
    "payClosingScreens": {
      "overview": {
        "title": "Payments",
        "filters": {
          "payPeriodsPlaceholder": "All periods",
          "searchPlaceHolder" : "Client"
        },
        "grid": {
          "officialName": "Enterprise",
          "clientNumber": "Payroll Unit",
          "payPeriod": "Pay period",
          "payGroup": "Pay group",
          "type": "Type",
          "method": "Method",
          "time": "Timer",
          "status": "Status",
          "lastStatusDate": "Status date",
          "stateNumber": "Pay Sheet no.",
          "errorMessage": "No data to display"
        }
      },
      "detail": {
        "information": {
          "paid": "Paid",
          "amountTotal": "Total",
          "NotPaid": "Not paid",
          "dossier": "Dossier",
          "paymentMethod": "Payment method",
          "accountNumber": "Bank Account number",
          "communication": "Communication",
          "treatmentDate": "Treatment date",
          "payPeriod": "Pay period",
          "stateNumber": "Pay Sheet no.",
          "fileName": "File name",
          "noFileName": "No file",
          "payClosingDate": "Pay closing",
          "toProcessDate": "To process",
          "processedDate": "Processed",
          "partiallyProcessedDate": "Partially",
          "releasedDate": "To process",
          "onHoldDate": "On hold",
          "processingDate": "Processing",
          "cancelledDate": "Cancelled",
          "notTreatedDate": "Not treated"
        },
        "grid": {
          "setStatus": "Set status",
          "selected": "selected",
          "workerName": "Employee",
          "ref": "No.",
          "amount": "Amount",
          "accountNumber": "Bank account",
          "status": "Status",
          "lastStatusDate": "Status date",
          "searchPlaceHolder" : "Employee",
          "errorMessages": {
            "noIban": "Bank account is missing",
            "amountZero": "The amount is 0",
            "amountNegative": "The amount is negative"
          }
        },
        "paymentCancelModal": {
          "title": "Cancel Payment",
          "body": "Are you sure you want cancel [count] payments?"
        },
        "paymentOnHoldModal": {
          "title": "Payment on hold",
          "body": "Are you sure you want to set [count] payments on hold?"
        },
        "paymentReleaseModal": {
          "title": "Release Payment",
          "body": "Are you sure you want to release [count] payments?"
        },
        "editPayment": {
          "title": "Update - Payment parameters",
          "treatmentDateLabel": "Treatment Date",
          "treatmentDateInPastError": "Treatment date must be in the future"
        },
        "editWorker": {
          "title": "Update - Employee payment",
          "ibanLabel": "IBAN",
          "bicLabel": "BIC",
          "beneficiaryLabel": "Beneficiary"
        },
        "paymentError": {
          "employeesError": " {{errorCount}} employees with status 'error'",
          "notTreated": "{{notTreatedCount}} employees with status 'not treated'",
          "onHold": "{{onHoldCount}} employees with status 'on hold'",
          "onHoldAndNotTreated": "{{onHoldCount}} employees with status 'on hold' \\n{{notTreatedCount}} employees with status 'not treated'"
        }
      },
      "shared": {
        "states": {
          "all": "All statuses",
          "toProcess": "To process",
          "processed": "Processed",
          "processing": "Processing",
          "onHold": "On hold",
          "canceled": "Cancelled",
          "partiallyProcessed": "Partially",
          "error": "Error",
          "notTreated": "Not treated"
        },
        "forcePayment": "Process payment"
      }
    },
    "settingScreens": {
      "overview": {
        "title": "Clients",
        "grid": {
          "enterpriseName": "Enterprise",
          "paymentMethod": "Payment method",
          "errorMessage": "No data to display",
          "searchPlaceHolder" : "Client"
        }
      },
      "detail": {
        "paymentMethod": "Payment method",
        "paymentType": "Payment type",
        "bankAccount": "Bank account",
        "bic": "BIC",
        "paymentExecution": "Payment execution",
        "fileGeneration": "File generation",
        "egNet": "e.g. Salary",
        "egAdvance": "e.g. Advance payment",
        "egGarnishment": "e.g.  \\"reference garnishement\\"",
        "dossier": "Dossier",
        "editTitle": "Update - Default settings",
        "defaultSettings": "Default settings",
        "communication": "Communication",
        "dateFormat": "Date format",
        "communicationNet": "Text for \\"Net\\" payments",
        "communicationAdvance": "Text for \\"Advance\\" payments",
        "communicationGarnishment": "Text for \\"Garnishment\\" payments",
        "notSupported": "Only Net payments will be handled for now"
      },
      "enum": {
        "fileGeneration": {
          "afterEachPayCalc": "After each pay calculation"
        },
        "paymentExecution": {
          "byPartena": "By Partena"
        },
        "communication": {
          "salary": "Salary",
          "automatic": "Automatic"
        },
        "dateFormat": {
          "shortDate": "Short",
          "eg": "e.g."
        }
      }
    },
    "shared": {
      "general": {
        "searchBoxPlaceholder": "Search",
        "clear": "Clear",
        "export": "Export",
        "yes": "Yes",
        "no": "No"
      },
      "paymentMethods": {
        "all": "All methods",
        "automatic": "Automatic",
        "bankList": "Bank list",
        "manual": "Manual",
        "noBankPayment": "No bank payment"
      },
      "paymentTypes": {
        "all": "All types",
        "net": "Net",
        "advance": "Advance",
        "garnishment": "Garnishment"
      },
      "updated": "Updated"
    },
    "random": {
      "random1":"",
      "random2":"bla bla",
      "random3":"",
      "random4":"test test",
      "random5": {
        "digging": {
          "extra": {
            "deep": {
              "inside": {
                "of": {
                  "a": {
                    "json": {
                      "sorry": "not sorry"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;
  private fr = `{
    "navigation": {
      "applicationTitle": "Paiements bancaires",
      "payments": "Paiements   ",
      "settings": "Paramètres"
    },
    "payClosingScreens": {
      "overview": {
        "title": "Paiements",
        "filters": {
          "payPeriodsPlaceholder": "Toutes les périodes",
          "searchPlaceHolder" : "Client"
        },
        "grid": {
          "officialName": "Entreprise",
          "clientNumber": "Dossier",
          "payPeriod": "Periode de paie",
          "payGroup": "Groupe de paie",
          "type": "Type",
          "method": "Methode",
          "time": "Compteur",
          "status": "Statut",
          "lastStatusDate": "Date du statut",
          "stateNumber": "N° etat",
          "errorMessage": "Pas de données à afficher"
        }
      },
      "detail": {
        "information": {
          "paid": "Payé",
          "amountTotal": "Total",
          "NotPaid": "Non payé",
          "dossier": "Dossier",
          "paymentMethod": "Méthode de paiement",
          "accountNumber": "Numéro de compte",
          "communication": "Communication",
          "treatmentDate": "Date de traitement",
          "payPeriod": "Période de paie",
          "stateNumber": "N° etat",
          "fileName": "Nom du fichier",
          "noFileName": "Pas de fichier",
          "payClosingDate": "Clôture de paie",
          "toProcessDate": "A traiter",
          "processedDate": "Traité",
          "partiallyProcessedDate": "Partiellement",
          "releasedDate": "A traiter",
          "onHoldDate": "En attente",
          "processingDate": "En cours de traitement",
          "cancelledDate": "Annulé ",
          "notTreatedDate": "Non traité"
        },
        "grid": {
          "setStatus": "Indiquer statut",
          "selected": "sélectionné(s)",
          "workerName": "Travailleur",
          "ref": "N°",
          "amount": "Montant",
          "accountNumber": "Compte bancaire",
          "status": "Statut",
          "lastStatusDate": "Date du statut",
          "searchPlaceHolder" : "Travailleur",
          "errorMessages": {
            "noIban": "Compte bancaire manquant",
            "amountZero": "Le montant = 0",
            "amountNegative": "Le montant est négatif"
          }
        },
        "paymentCancelModal": {
          "title": "Annuler le paiement",
          "body": "Confirmez-vous d'annuler  [count] paiement(s)?"
        },
        "paymentOnHoldModal": {
          "title": "Paiement en attente",
          "body": "Confirmez-vous de suspendre [count] paiement(s)?"
        },
        "paymentReleaseModal": {
          "title": "Traiter le paiement",
          "body": "Confirmez-vous de traiter [count] paiement(s)?"
        },
        "editPayment": {
          "title": "Mise à jour - Paramètres de paiement",
          "treatmentDateLabel": "Date de traitement",
          "treatmentDateRequiredError": "La date de traitement est un champ obligatoire",
          "treatmentDateInPastError": "La date de traitement doit être dans le futur"
        },
        "editWorker": {
          "title": "Mise à jour - Paiement travailleur",
          "ibanLabel": "IBAN",
          "bicLabel": "BIC",
          "beneficiaryLabel": "Bénéficiaire"
        },
        "paymentError": {
          "employeesError": " {{errorCount}} travailleurs avec le statut 'erreur'",
          "notTreated": "{{notTreatedCount}} travailleurs avec le statut 'non traité'",
          "onHold": "{{onHoldCount}} travailleurs avec le statut 'en attente'",
          "onHoldAndNotTreated": "{{onHoldCount}} travailleurs avec le statut 'en attente' \\n{{notTreatedCount}} travailleurs avec le statut 'non traité'"
        }
      },
      "shared": {
        "states": {
          "all": "Tous les statuts",
          "toProcess": "A traiter",
          "processed": "Traité",
          "processing": "En cours de traitement",
          "onHold": "En attente",
          "canceled": "Annulé",
          "partiallyProcessed": "Partiellement",
          "error": "Erreur",
          "notTreated": "Non traité"
        },
        "forcePayment": "Traiter le paiement"
      }
    },
    "settingScreens": {
      "overview": {
        "title": "Clients",
        "grid": {
          "enterpriseName": "Entreprise",
          "paymentMethod": "Methode de paiement",
          "errorMessage": "Pas de données à afficher",
          "searchPlaceHolder" : "Client"
        }
      },
      "detail": {
        "paymentMethod": "Méthode de paiement",
        "paymentType": "Type de paiement",
        "bankAccount": "Compte bancaire",
        "bic": "BIC",
        "paymentExecution": "Exécution du paiement",
        "fileGeneration": "Créer fichier",
        "egNet": "p.ex. Salaire",
        "egAdvance": "p.ex. Acompte",
        "egGarnishment": "p.ex. \\"référence saisie sur salaire\\"",
        "dossier": "Dossier",
        "editTitle": "Mise à jour - Paramètres par défaut",
        "defaultSettings": "Parametres par defaut",
        "communication": "Communication",
        "dateFormat": "Format de date",
        "communicationNet": "Texte pour paiements \\"Net\\"",
        "communicationAdvance": "Texte pour paiements \\"Acompte\\"",
        "communicationGarnishment": "Texte pour paiements \\"Saisie sur salaire\\"",
        "notSupported": "Seuls des payments Net seront traités pour l'instant"
      },
      "enum": {
        "fileGeneration": {
          "afterEachPayCalc": "Après chaque calcul de paie"
        },
        "paymentExecution": {
          "byPartena": "Par Partena"
        },
        "communication": {
          "salary": "Salaire",
          "automatic": "Automatiquement"
        },
        "dateFormat": {
          "shortDate": "Court",
          "eg": "p.ex."
        }
      }
    },
    "shared": {
      "general": {
        "searchBoxPlaceholder": "Rechercher",
        "clear": "Effacer",
        "export": "Exporter",
        "yes": "Oui",
        "no": "Non"
      },
      "paymentMethods": {
        "all": "Toutes les méthodes",
        "automatic": "Automatique",
        "bankList": "Liste bancaire",
        "manual": "Manuellement",
        "noBankPayment": "Pas de paiement bancaire"
      },
      "paymentTypes": {
        "all": "Toutes les types",
        "net": "Net",
        "advance": "Acompte",
        "garnishment": "Saisie sur salaire"
      },
      "updated": "Mis à jour"
    }
  }`;
}
