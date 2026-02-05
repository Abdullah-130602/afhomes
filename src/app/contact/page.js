import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact AF Homes | Dubai Real Estate Agency",
  description:
    "Contact AF Homes to speak with a Dubai property specialist about buying, selling or renting your next home or investment property.",
  keywords: [
    "contact AF Homes",
    "Dubai real estate agency contact",
    "property agent Dubai phone",
    "real estate office Dubai",
  ],
  alternates: {
    canonical: "https://www.afhomes.ae/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
