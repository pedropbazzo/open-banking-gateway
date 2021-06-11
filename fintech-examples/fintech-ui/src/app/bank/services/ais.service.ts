import { Injectable } from '@angular/core';
import { LoARetrievalInformation, LoTRetrievalInformation } from '../../models/consts';
import { FinTechAccountInformationService } from '../../api';

@Injectable({
  providedIn: 'root'
})
export class AisService {
  constructor(private finTechAccountInformationService: FinTechAccountInformationService) {}

  private static isoDate(toConvert: Date) {
    return toConvert.toISOString().split('T')[0];
  }

  getAccounts(bankId: string, loARetrievalInformation: LoARetrievalInformation, xCreateConsentIfNone: string, withBalance: boolean, online: boolean) {
    const okurl = window.location.pathname;
    const notOkUrl = okurl.replace(/account.*/, '');

    return this.finTechAccountInformationService.aisAccountsGET(
      bankId,
      '',
      '',
      okurl,
      notOkUrl,
      loARetrievalInformation,
      xCreateConsentIfNone,
      withBalance,
      online,
      'response'
    );
  }

  getTransactions(
    bankId: string,
    accountId: string,
    loTRetrievalInformation: LoTRetrievalInformation,
    xCreateConsentIfNone: string,
    online: boolean
  ) {
    const okurl = window.location.pathname;
    const notOkUrl = okurl.replace(/account.*/, 'accounts');

    return this.finTechAccountInformationService.aisTransactionsGET(
      bankId,
      accountId,
      '',
      '',
      okurl,
      notOkUrl,
      loTRetrievalInformation,
      xCreateConsentIfNone,
      '1970-01-01',
      AisService.isoDate(new Date()),
      null,
      'both',
      null,
      online,
      'response'
    );
  }
}
