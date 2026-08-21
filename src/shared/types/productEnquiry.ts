export interface ProductEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
  recaptchaToken: string | null;
}

export const emptyProductEnquiryFormData: Omit<
  ProductEnquiryPayload,
  "recaptchaToken"
> = {
  name: "",
  email: "",
  phone: "",
  company: "",
  product: "",
  message: "",
};
