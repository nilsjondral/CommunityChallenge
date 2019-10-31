import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';
import { Translations } from '../../models/translations';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  constructor(private sandbox: TranslationsSandboxService) { }

  ngOnInit() {
    // testing purposes
    this.sandbox.loadTranslation(new Translations({language: 'nl', values: JSON.parse(this.nl)}));
    this.sandbox.loadTranslation(new Translations({language: 'en', values: JSON.parse(this.en)}));
  }

  // tslint:disable: member-ordering
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
          "onHoldAndNotTreated": "{{onHoldCount}} werknemers met de status 'in wacht {{notTreatedCount}} werknemers met de status 'niet-verwerkt'"
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
          "onHoldAndNotTreated": "{{onHoldCount}} employees with status 'on hold' {{notTreatedCount}} employees with status 'not treated'"
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
    }
  }`;
}
