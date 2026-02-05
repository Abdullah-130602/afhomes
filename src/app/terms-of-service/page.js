import TermsClient from "./TermsClient";

export const metadata = {
  title: "Terms & Conditions | A&F Homes Dubai Real Estate",
  description:
    "Read the A&F Homes Terms & Conditions to understand how you may use our website, property listings and services.",
  keywords: [
    "A&F Homes terms and conditions",
    "Dubai real estate website terms",
    "A&F Homes legal information",
  ],
  alternates: {
    canonical: "https://www.afhomes.ae/terms-of-service",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}


