export interface ContactFormPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  teamSize: string;
  services: string[];
  currentChallenges: string;
  timeline: string;
  budget: string;
  customBudget: string;
  additionalInfo: string;
  recaptchaToken: string | null;
}

export const emptyContactFormData: Omit<ContactFormPayload, "recaptchaToken"> = {
  name: "",
  email: "",
  company: "",
  phone: "",
  industry: "",
  teamSize: "",
  services: [],
  currentChallenges: "",
  timeline: "",
  budget: "",
  customBudget: "",
  additionalInfo: "",
};
