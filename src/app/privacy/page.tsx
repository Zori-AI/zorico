import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Privacy Policy | Zori",
  description:
    "Privacy Policy for the Zori mobile application and zori.co website — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8f2ec]">
      <CookieConsent />
      <Header />
      <main className="section-offset mx-auto max-w-[720px] px-4 pb-16 pt-[calc(79px+2rem)] md:px-8 md:pb-24">
        <article className="font-raleway-medium text-[#52504e] text-[16px] leading-[1.6]">
          <h1 className="font-raleway-medium text-[#292827] text-[28px] md:text-[36px] leading-[1.2] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-[#52504e] mb-8">
            <strong className="text-[#292827]">Last updated: April 6, 2026</strong>
          </p>

          <p className="mb-6">
            This Privacy Policy governs your use of the Zori mobile application (the &quot;App&quot;) and the website
            located at zori.co (the &quot;Website&quot;), collectively referred to as the &quot;Service,&quot; and
            describes the data we collect, how it is stored, how that data may be used, with whom it may be shared, and
            your choices about such uses and disclosures. Please be sure to carefully read the entirety of this Privacy
            Policy when using our Service.
          </p>

          <p className="mb-4">
            <strong className="text-[#292827]">&quot;GDPR&quot;</strong> means the General Data Protection Regulation
            (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural
            persons with regard to the processing of personal data and on the free movement of such data.
          </p>
          <p className="mb-4">
            <strong className="text-[#292827]">&quot;EEA&quot;</strong> includes all current Member States to the European
            Union and the European Economic Area.
          </p>
          <p className="mb-4">
            <strong className="text-[#292827]">&quot;CCPA&quot;</strong> means the California Consumer Privacy Act of
            2018, as amended by the California Privacy Rights Act of 2020.
          </p>
          <p className="mb-8">
            <strong className="text-[#292827]">&quot;Process&quot;</strong>, in respect of personal data, includes to
            collect, store, use, and disclose to others.
          </p>
          <p className="mb-10">
            Check the Zori Terms of Use (the &quot;Terms&quot;) for the meaning of defined words (those with capital
            letters) not explicitly defined in this Privacy Policy.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            1. Personal Data Controller
          </h2>
          <p className="mb-6">
            Zori is operated by an individual entrepreneur registered in Portugal. For any privacy-related inquiries,
            data access requests, or concerns regarding your personal data, please contact us at:{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            2. What Categories of Personal Data Do We Collect?
          </h2>
          <p className="mb-6">
            We collect data you make available to us voluntarily (for example, email address, name, date of birth). We
            also collect data automatically when you use the Service (for example, your IP address, device type).
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-8 mb-3">
            2.1. Data You Give Us
          </h3>
          <p className="mb-4">
            You provide us data about yourself when you register for and/or use the Service, for example, when you create
            a user account (&quot;Account&quot;), complete quizzes, write journal entries, or report a problem. The data
            that you give us includes:
          </p>
          <p className="mb-3">
            <strong className="text-[#292827]">Account data.</strong> This includes your email address and password.
          </p>
          <p className="mb-3">
            <strong className="text-[#292827]">Birth chart data.</strong> This includes your date of birth, time of birth
            (if provided), and place of birth, which are used to generate personalized astrological content.
          </p>
          <p className="mb-3">
            <strong className="text-[#292827]">Journal data.</strong> If you use the reflection journal feature, we
            collect the text, timestamps, and any tags or metadata associated with your journal entries.
          </p>
          <p className="mb-4">
            <strong className="text-[#292827]">Quiz and preference data.</strong> This includes your responses to
            quizzes, personality assessments, and any preferences you set within the App.
          </p>
          <p className="mb-8">
            By providing Account data you agree and understand that certain profile information may be visible to other
            users if you choose to share it. Please do not provide personal data that you would not want to be accessible.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-8 mb-3">
            2.2. Data We Collect Automatically
          </h3>
          <p className="mb-3">
            <strong className="text-[#292827]">Data about how you found us.</strong> We collect data about your
            referring URL (that is, the place on the Web where you were when you tapped on our ad).
          </p>
          <p className="mb-3">
            <strong className="text-[#292827]">Cookies and similar technologies.</strong> As applicable, our Website and
            App use cookies and similar technologies that record data about the use of our Service to distinguish you
            from other users. You can control cookies through your browser settings.
          </p>
          <p className="mb-3">
            <strong className="text-[#292827]">Browser and device data.</strong> We collect data from or about the
            devices from which you access the Service, depending on the permissions you have granted. Examples of such
            data include: language settings, IP address, location, time zone, type and model of a device, device
            settings, operating system, Internet service provider, mobile carrier, and hardware ID.
          </p>
          <p className="mb-4">
            We may also collect your Apple Identifier for Advertising (&quot;IDFA&quot;) or Google Advertising ID
            (&quot;AAID&quot;) (depending on the operating system of your device). You can typically reset these numbers
            through the settings of your device&apos;s operating system (but we do not control this).
          </p>
          <p className="mb-8">
            <strong className="text-[#292827]">Usage data.</strong> We record how you interact with our Service. For
            example, we log the features and content you interact with, how often and how long you use the Service, what
            sections you use, and other interactions.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-8 mb-3">
            2.3. AI-Generated Content
          </h3>
          <p className="mb-8">
            Our Service uses artificial intelligence provided by third-party AI service providers to generate personalized
            astrological insights, horoscopes, and responses based on the data you provide. The inputs you submit (such as
            birth data, quiz responses, and chat messages) may be transmitted to these providers solely for the purpose of
            generating content within the Service. We do not use your personal journal entries to train AI models.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            3. For What Purposes Do We Process Your Personal Data?
          </h2>
          <p className="mb-4">We process your personal data:</p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.1. To Provide the Service to You
          </h3>
          <p className="mb-6">
            This includes enabling you to use the App in a seamless manner, generating personalized astrological content,
            powering the AI astrologer chat, and preventing or addressing Service errors or technical issues.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.2. To Research and Analyze Your Use of the Service
          </h3>
          <p className="mb-6">
            This helps us to better understand our business, analyze our operations, maintain, improve, innovate, plan,
            design, and develop the Service and new products. We conduct surveys, research, and test features in
            development. We analyze the data we have to evaluate our Service and conduct audits and troubleshooting
            activities to improve content and layouts.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.3. To Customize the Service for You
          </h3>
          <p className="mb-6">
            We use your data to personalize your experience, including the astrological content, daily horoscopes, and
            recommendations presented to you.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.4. To Process Your Payments
          </h3>
          <p className="mb-6">
            If we introduce paid products and/or services within the Service in the future, we will use third-party
            services for payment processing (for example, Apple&apos;s In-App Purchase system). We do not and will not
            collect or store full credit card number data.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.5. To Enforce the Terms and Prevent Fraud
          </h3>
          <p className="mb-6">
            We use personal data to enforce our agreements and contractual commitments, to detect, prevent, and combat
            fraud. As a result of such processing, we may share your information with others, including law enforcement
            agencies (in particular, if a dispute arises in connection with the Terms).
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.6. To Communicate with You Regarding Your Use of Our Service
          </h3>
          <p className="mb-6">
            We may communicate with you, for example, by email or push notifications. As a result of such processing, we
            may send you messages about your astrological updates, journal reminders, and Service-related information.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.7. To Show and/or Send You Marketing Communications
          </h3>
          <p className="mb-6">
            We process your personal data for our marketing campaigns. We may add your email address to our marketing
            list. As a result, you will receive information about our Service, features, offers, promotions, and events.
            You can opt out of marketing emails at any time by using the unsubscribe link in the email or by contacting us
            at{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
            .
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.8. To Provide You Customer Service and Support
          </h3>
          <p className="mb-6">
            As a result of such processing, we will send you messages about the availability of our Service, security,
            payment transactions, legal notices, or other Service-related information.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.9. To Personalize Our Ads
          </h3>
          <p className="mb-6">
            We and our partners may use your personal data to tailor ads and show them to you at relevant times.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            3.10. To Comply with Legal Obligations
          </h3>
          <p className="mb-8">
            We may process, use, or share your data when the law requires it, in particular, if a law enforcement agency
            requests your data by available legal means.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            4. Legal Basis for Data Processing (EEA Only)
          </h2>
          <p className="mb-6">
            In this section, we identify the legal basis we use for each particular purpose of processing. For more
            information on a particular purpose, please refer to Section 3. This section applies only to EEA-based users.
          </p>
          <p className="mb-6">We process your personal data under the following legal grounds:</p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">4.1. Your Consent</h3>
          <p className="mb-6">
            Where you have provided explicit consent, for example, to receive marketing communications or to process
            special categories of data.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            4.2. To Perform Our Contract with You
          </h3>
          <p className="mb-3">Under this legal basis we:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide the Service</li>
            <li>Customize your experience</li>
            <li>Generate personalized astrological content</li>
            <li>Communicate with you regarding your use of the Service</li>
            <li>Manage your Account and provide you with customer support</li>
            <li>Process your payments (if applicable)</li>
          </ul>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            4.3. For Our (or Others&apos;) Legitimate Interests
          </h3>
          <p className="mb-4">
            Unless those interests are overridden by your interests or fundamental rights and freedoms that require
            protection of personal data. We rely on legitimate interests:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              To communicate with you regarding your use of our Service — our interest is to encourage you to use our
              Service more often. We also take into account the potential benefits to you.
            </li>
            <li>
              To research and analyze your use of the Service — our interest is in improving the Service so that we
              understand users&apos; preferences and are able to provide a better experience.
            </li>
            <li>
              To send you marketing communications — our interest is to promote the Service in a measured and appropriate
              way.
            </li>
            <li>
              To personalize our ads — our interest is to promote the Service in a reasonably targeted way.
            </li>
            <li>
              To enforce the Terms and to prevent and combat fraud — our interests are enforcing our legal rights,
              preventing and addressing fraud and unauthorized use of the Service.
            </li>
          </ul>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            4.4. To Comply with Legal Obligations
          </h3>
          <p className="mb-8">
            Under this legal basis we, in particular, verify your identity and respond to lawful requests from
            authorities.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            5. California Privacy Rights
          </h2>
          <p className="mb-4">
            This section provides additional details about how we process personal data of California consumers and the
            rights available to them under the California Consumer Privacy Act of 2018 (&quot;CCPA&quot;) and
            California&apos;s Shine the Light law. This section applies only to residents of California, United States.
          </p>
          <p className="mb-3">If you are a resident of California, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Know what personal data we collect, use, disclose, and sell about you.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt out of the sale of your personal data (we do not sell personal data).</li>
            <li>Non-discrimination for exercising your privacy rights.</li>
          </ul>
          <p className="mb-6">
            If you are a California resident and wish to exercise any of these rights, please contact us at{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>{" "}
            with &quot;California Privacy Rights Request&quot; in the subject line. You may make this request once per
            twelve-month period. We will respond within forty-five (45) days of receiving your verified request.
          </p>
          <p className="mb-8">
            We do not sell personal data of California consumers. We do not have actual knowledge that we sell the
            personal data of consumers under 16 years of age.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            6. Data Retention
          </h2>
          <p className="mb-4">
            We will retain personal data for the period necessary to fulfill the purposes outlined in this Privacy Policy
            unless a longer retention period is required or permitted by law.
          </p>
          <p className="mb-4">
            Even if you disable or delete your Account, we may retain certain data to meet our legal obligations, resolve
            disputes, and enforce our agreements.
          </p>
          <p className="mb-8">
            Journal entries and personal astrological data will be deleted within thirty (30) days of Account deletion,
            unless retention is required by applicable law.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            7. With Whom Do We Share Your Personal Data?
          </h2>
          <p className="mb-6">
            We share information with third parties that help us operate, provide, improve, integrate, customize, support,
            and market our Service. The types of third parties we share information with include:
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            7.1. Service Providers
          </h3>
          <p className="mb-3">
            We share personal data with third parties that we hire to provide services or perform business functions on
            our behalf, based on our instructions. These may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cloud storage providers</li>
            <li>Data analytics providers (e.g., Firebase, Amplitude)</li>
            <li>Third-party AI service providers (for generating astrological content)</li>
            <li>Marketing partners (social media networks, email delivery services)</li>
            <li>Payment processing contractors (e.g., Apple In-App Purchase), if applicable</li>
          </ul>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            7.2. Law Enforcement Agencies and Other Public Authorities
          </h3>
          <p className="mb-6">
            We may use and disclose personal data to enforce the Terms, to protect our rights, privacy, safety, or
            property, and/or that of our affiliates, you or others, and to respond to requests from courts, law
            enforcement agencies, regulatory agencies, and other public and government authorities, or in other cases
            provided for by law.
          </p>

          <h3 className="font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-6 mb-3">
            7.3. Third Parties as Part of a Merger or Acquisition
          </h3>
          <p className="mb-8">
            We may share personal data with any affiliated entity and may transfer such information in the course of a
            corporate transaction, such as the sale of our business, a divestiture, merger, consolidation, or asset
            sale, or in the unlikely event of bankruptcy.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            8. International Data Transfers
          </h2>
          <p className="mb-4">
            We may transfer personal data to countries other than the country in which the data was originally collected
            in order to provide the Service and for purposes indicated in this Privacy Policy. If these countries do not
            have the same data protection laws as the country in which you initially provided the information, we deploy
            special safeguards.
          </p>
          <p className="mb-8">
            In particular, if we transfer personal data originating from the EEA to countries without an adequate level
            of data protection, we use one of the following legal bases: (i) Standard Contractual Clauses approved by the
            European Commission, or (ii) the European Commission adequacy decisions about certain countries.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="mb-8">
            We may modify this Privacy Policy at any time. If we decide to make material changes to this Privacy Policy,
            you will be notified through our Service or by other available means and will have an opportunity to review the
            revised Privacy Policy. By continuing to access or use the Service after those changes become effective, you
            agree to be bound by the revised Privacy Policy.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            10. Age Limitation
          </h2>
          <p className="mb-8">
            We do not knowingly process personal data from persons under 18 years of age. If you learn that anyone younger
            than 18 has provided us with personal data, please contact us at{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
            .
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            11. Privacy Rights
          </h2>
          <p className="mb-4">To be in control of your personal data, you have the following rights:</p>
          <p className="mb-4">
            <strong className="text-[#292827]">Accessing / reviewing / updating / correcting your personal data.</strong>{" "}
            You may review, edit, or change the personal data that you had previously provided to us by accessing your
            Account settings. You may also request a copy of your personal data collected during your use of the Service at{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
            .
          </p>
          <p className="mb-4">
            <strong className="text-[#292827]">Deleting your personal data.</strong> You can request erasure of your
            personal data by sending us an email at{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
            . When you request deletion of your personal data, we will use reasonable efforts to honor your request. In some
            cases, we may be legally required to keep some of the data for a certain time; in such event, we will fulfill
            your request after we have complied with our obligations.
          </p>
          <p className="mb-4">
            <strong className="text-[#292827]">Objecting to or restricting the use of your personal data.</strong> You can
            ask us to stop using all or some of your personal data or limit our use thereof by sending a request at{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
            .
          </p>
          <p className="mb-4">
            <strong className="text-[#292827]">The right to lodge a complaint with a supervisory authority.</strong> We
            would love you to contact us directly so we could address your concerns. Nevertheless, you have the right to
            lodge a complaint with a competent data protection supervisory authority, in particular in the EU Member State
            where you reside, work, or where the alleged infringement has taken place. In Portugal, the relevant authority
            is the Comissão Nacional de Proteção de Dados (CNPD).
          </p>
          <p className="mb-4">
            <strong className="text-[#292827]">The right to data portability.</strong> If you wish to receive your
            personal data in a machine-readable format, you can send a respective request at{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
            .
          </p>
          <p className="mb-8">
            You may submit requests through an authorized agent, in which case we will need to verify the agent&apos;s
            identity, your identity, and their authority to act on your behalf before we can process the request.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            12. How Do We Handle &quot;Do Not Track&quot; Requests?
          </h2>
          <p className="mb-8">
            Except as otherwise stipulated in this Privacy Policy, the Service does not support &quot;Do Not Track&quot;
            requests. To determine whether any of the third-party services it uses honor &quot;Do Not Track&quot; requests,
            please read their privacy policies.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            13. Disclaimer Regarding Astrological Content
          </h2>
          <p className="mb-8">
            The astrological insights, horoscopes, personality profiles, and other content generated by the Service are
            provided for entertainment, self-reflection, and personal growth purposes only. They are not intended to serve
            as professional medical, psychological, financial, or legal advice. Always consult qualified professionals for
            matters requiring professional expertise.
          </p>

          <h2 className="font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4">
            14. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or our collection, use, or storage of your
            data, please do not hesitate to contact us at:
          </p>
          <p className="mb-2">
            <strong className="text-[#292827]">Email:</strong>{" "}
            <a href="mailto:support@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              support@zori.co
            </a>
          </p>
          <p className="mb-10">Zori is operated by an individual entrepreneur registered in Portugal.</p>

          <p className="font-jetbrains-mono text-[14px] uppercase text-[#52504e] pt-6 border-t border-[rgba(123,120,119,0.25)]">
            © 2026 Zori. All rights reserved.
          </p>

          <p className="mt-8">
            <Link
              href="/"
              className="font-raleway-medium text-[16px] text-[#292827] underline underline-offset-2 hover:opacity-80"
            >
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
}
