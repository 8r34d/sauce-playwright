// refine methods

import { expect, type Locator, type Page } from "@playwright/test";

export type RefineAboutYouData = {
  annualIncome: string;
  additionalAnnualIncome: boolean;
  bonusesOvertimeCommission: string;
  governmentBenefits: string;
  otherGuaranteedIncome: string;
};

export type RefineJointApplicantData = {
  addJointApplicant: boolean;
  annualIncome: string;
  additionalAnnualIncome: boolean;
  bonusesOvertimeCommission: string;
  governmentBenefits: string;
  otherGuaranteedIncome: string;
};

export type RefineOutgoingsAndCommitmentsData = {
  dependents: number;
  creditCardOverdrafts: string;
  majorMonthlyCommitments: boolean;
  otherMajorMonthlyCommitments: string;
};

export type RefineHomeBuyingJourney =
  | "Just researching"
  | "Viewing properties in person"
  | "Making or made an offer"
  | "Had an offer accepted";

export type RefineYourMortgagePreferencesData = {
  deposit: string;
  term: string;
  isFlat: boolean;
  firstTimeBuyer: boolean;
  homeBuyingJourney: RefineHomeBuyingJourney;
};

export type RefineData = {
  aboutYou: RefineAboutYouData;
  addJointApplicant: RefineJointApplicantData;
  outgoingsAndCommitments: RefineOutgoingsAndCommitmentsData;
  yourMortgagePreferences: RefineYourMortgagePreferencesData;
};

export type TestData = {
  refine: RefineData;
};

export async function aboutYou(
  page: Page,
  data: TestData,
  options: { additionalAnnualIncome: true }
) {
  const aboutYouData = data.refine.aboutYou;
}

export async function addJointApplicant(
  page: Page,
  data: TestData,
  options: { additionalAnnualIncome: true }
) {
  const jointApplicantData = data.refine.addJointApplicant;
}

export async function outgoingsAndCommitments(
  page: Page,
  data: TestData,
  options: { majorMonthlyCommitments: true }
) {
  const outgoingsData = data.refine.outgoingsAndCommitments;
}

export async function yourMortgagePreferences(
  page: Page,
  data: TestData,
  options: {
    isFlat: true;
    firstTimeBuyer: true;
    homeBuyingJourney: RefineHomeBuyingJourney;
  }
) {
  const mortgagePreferencesData = data.refine.yourMortgagePreferences;
}
