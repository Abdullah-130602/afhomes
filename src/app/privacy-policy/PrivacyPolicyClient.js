"use client";

import Layout from "../layout/index";
import LayoutHero from "../components/hero";
import heroBg from "@/assets/whyusHero.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const sections = [
  {
    title: "1. Who we are",
    body: [
      "A&F Homes is a real estate agency based in Dubai, UAE. We assist our customers in the purchase, sale, and rental of properties for residential and investment purposes.",
      "This privacy policy will cover the collection, use, and protection of your personal data when you use our website, communicate with us, or view our adverts on platforms such as Meta (Facebook and Instagram), and other ad networks.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "We receive information that you provide to us directly, such as when you:",
      "- submit a form on our website, such as a contact, valuation, consultation, or newsletter request;",
      "- interact with us by phone, email, WhatsApp, or social media; or",
      "- ask for information about a particular property or service.",
      "Information you provide to us might include things like your name, email address, phone number, preferred areas, budget, and anything else you want to let us know.",
      "In addition, we may automatically collect certain types of information when you interact with our website, including things like:",
      "- information about the devices and browsers you use to access the internet;",
      "- IP address and location;",
      "- pages visited, duration of visit, and what you do on those pages; and",
      "- use of cookies and similar tracking technologies for things like analytics and advertising.",
    ],
  },
  {
    title: "3. How we use your information",
    body: [
      "We use your information to:",
      "- reply to your queries and property recommendations;",
      "- arrange viewings, valuations, and consultations;",
      "- send you relevant information about properties, market information, and services (where applicable);",
      "- improve our website, content, and user experience; and",
      "- comply with legal and regulatory requirements applicable in the UAE.",
    ],
  },
  {
    title: "4. Advertising, Meta technologies and cookies",
    body: [
      "We use advertising and analytics tools provided by third parties such as Meta (Facebook, Instagram), Google, and other ad networks to reach people who may be interested in our services.",
      "The third parties may use cookies, pixels, and other similar technologies to collect or receive information from your browser, such as pages viewed, IP address, and device information. They may then use that information to measure, optimize, and personalize ads.",
      "Where we have obtained your consent, or where we have a legitimate interest in the use of cookies that are not strictly necessary for the functioning of the website, we may collect information from your browser using cookies. You may manage or disable cookies through your browser settings. Please note that disabling cookies may impact the functionality of the website.",
      "Meta may use the data it collects via its technologies in accordance with its own Data Policy. You may learn more about how to manage the ads you see from Meta companies via the ad preferences tool available on Facebook and Instagram.",
    ],
  },
  {
    title: "5. Data sharing",
    body: [
      "We do not sell your personal information.",
      "We may share your information with trusted third parties only when it is necessary for the purposes mentioned in this Privacy Policy, such as:",
      "- Technology and hosting providers who run our website and CRM systems;",
      "- Marketing and analytics partners like Meta and Google who assist us with running marketing campaigns and measuring their effectiveness; and",
      "- Professional service providers like legal and compliance experts, if necessary.",
      "The information shared with these third parties will always be done with reasonable care taken to ensure they will properly protect the information and only use it for the agreed-upon purpose.",
    ],
  },
  {
    title: "6. Data retention and security",
    body: [
      "We keep your personal information only for as long as it is needed for the purposes described in this Privacy Policy, or as required by applicable laws and regulations.",
      "We take technical and organizational measures to ensure that your information is not accessed, lost, or misused by unauthorized parties. However, we cannot promise that your information will be completely secure.",
    ],
  },
  {
    title: "7. Your rights and choices",
    body: [
      "Depending on where you are and the laws that apply to you, you might have the following rights:",
      "- access the personal information we hold about you;",
      "- ask us to correct information we hold about you if it is incorrect or incomplete;",
      "- ask us to delete information we hold about you, where applicable;",
      "- object to certain types of processing, including direct marketing; and",
      "- withdraw consent to the processing of information about you where consent is the basis for the processing.",
      "To exercise any of these rights or to update your communication preferences, please contact us using the details below.",
    ],
  },
  {
    title: "8. Children’s privacy",
    body: [
      "Our services are not intended for children and we do not knowingly collect personal information from anyone under the age of 18. If you believe that a child has provided us with their information, please contact us so that we can remove it.",
    ],
  },
  {
    title: "9. Contact us",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your data, you can contact us at:",
      "Email: info@afhomes.ae",
      "Office: Dubai, United Arab Emirates",
    ],
  },
  {
    title: "10. Updates to this policy",
    body: [
      "This Privacy Policy may also change over time to reflect changes to our practices, our legal obligations, or our services. The Last Updated date at the bottom of this page will indicate when the latest changes occurred.",
    ],
  },
];

const PrivacyPolicyClient = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <LayoutHero
          title="Privacy Policy"
          subTitle="How A&F Homes uses and protects your data"
          description="Learn how we collect, use and safeguard your information when you browse our website, contact us or interact with our ads on Meta and other platforms."
          heroBg={heroBg}
        />

        <section className="py-16 md:py-20 px-4 md:px-0">
          <motion.div
            className="max-w-4xl mx-auto section-padding bg-white/80 rounded-2xl shadow-sm border border-slate-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={itemVariants}
              className="border-b border-slate-200 px-6 md:px-10 pt-8 pb-6"
            >
              <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                Effective for A&F Homes digital properties
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Last updated 25 January {currentYear}
              </p>
            </motion.div>

            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="px-6 md:px-10 py-6 md:py-7 border-b border-slate-100 last:border-b-0"
              >
                <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm md:text-base leading-relaxed text-slate-700">
                  {section.body.map((paragraph, idx) => {
                    if (paragraph.startsWith("- ")) {
                      return (
                        <p key={idx} className="pl-4">
                          {paragraph}
                        </p>
                      );
                    }
                    return <p key={idx}>{paragraph}</p>;
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <section className="py-10 px-4 md:px-0">
            <motion.div
              className="max-w-4xl mx-auto section-padding bg-white/80 rounded-2xl shadow-sm border border-slate-100"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div
                variants={itemVariants}
                className="border-b border-slate-200 px-6 md:px-10 pt-8 pb-6"
              >
                <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                  Effective for A&F Homes digital properties
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Last updated 25 January {currentYear}
                </p>
              </motion.div>
            </motion.div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default PrivacyPolicyClient;
