import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Terms of Use and Service | Zori",
  description:
    "Terms of Use & Service for the Zori app — license, content, arbitration, and your agreement with Zori.",
};

const prose = "font-raleway-medium text-[#52504e] text-[16px] leading-[1.6]";
const h2 = "font-raleway-medium text-[#292827] text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4";
const h3 = "font-raleway-medium text-[#292827] text-[18px] md:text-[20px] mt-8 mb-3";
const strong = "text-[#292827]";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#f8f2ec]">
      <CookieConsent />
      <Header />
      <main className="section-offset mx-auto max-w-[720px] px-4 pb-16 pt-[calc(79px+2rem)] md:px-8 md:pb-24">
        <article className={prose}>
          <h1 className="font-raleway-medium text-[#292827] text-[28px] md:text-[36px] leading-[1.2] mb-2">
            Terms of Use and Service
          </h1>
          <p className="text-[15px] text-[#52504e] mb-8">
            <strong className="text-[#292827]">Last updated: April 6, 2026</strong>
          </p>

          <p className="mb-6">
            These Terms of Use &amp; Service (the &quot;Terms&quot; / the &quot;Agreement&quot;) are an agreement between
            Zori, operated by an individual entrepreneur registered in Portugal (&quot;Zori&quot; / the &quot;App&quot; /
            &quot;we&quot; / &quot;us&quot;) and any individual who is a user of Zori.
          </p>
          <p className="mb-6">
            By downloading, installing, accessing, or using the App, you accept and agree to be bound by all the terms of
            this Agreement. If you do not agree with any condition of this Agreement, immediately stop using the App and
            delete it from your device.
          </p>
          <p className="mb-4 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            PLEASE NOTE: THIS AGREEMENT CONTAINS A BINDING ARBITRATION PROVISION IN SECTION 12 THAT AFFECTS YOUR RIGHTS
            UNDER THIS AGREEMENT WITH RESPECT TO ALL SERVICE(S). THE ARBITRATION PROVISION REQUIRES THAT DISPUTES BE
            RESOLVED IN ARBITRATION ON AN INDIVIDUAL BASIS. IN ARBITRATION, THERE IS NO JUDGE OR JURY AND THERE IS LESS
            APPELLATE REVIEW THAN IN COURT.
          </p>
          <p className="mb-8 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            FURTHERMORE, THIS AGREEMENT CONTAINS DISCLAIMERS OF WARRANTIES, LIMITATIONS OF LIABILITY, AND A CLASS ACTION
            WAIVER.
          </p>
          <p className="mb-10">
            We may change these Terms on the App or Website. We may notify you specifically about some critical changes
            but are not obliged to do so in every case. Use of the App after any changes are made means that you accept
            such changes. After getting notice of changes to the Terms, if you do not object and opt out of the amended
            Terms within fourteen (14) days, the amended version of the Terms is binding upon you.
          </p>

          <h2 className={h2}>1. Service</h2>
          <p className="mb-8">
            Zori is an AI-powered astrology application that provides personalized astrological insights, birth chart
            analysis, daily horoscopes, an AI astrologer chat, and a reflection journal (collectively, the
            &quot;Service&quot;). You may need to create an account in order to access certain features of the Service.
          </p>

          <h2 className={h2}>2. License and License Restrictions</h2>
          <p className="mb-8">
            Subject to your full compliance with these Terms, you are granted a limited, non-exclusive,
            non-sublicensable, non-assignable, and non-transferable license to download, install, and use the App on a
            compatible device that you own or control, and solely for the purpose of using the Service for your own
            personal, non-commercial use.
          </p>
          <p className="mb-8">
            Except to the extent expressly permitted above, you shall not: (a) copy, reproduce, distribute, transfer (by
            sale, resale, renting, lending, license, sublicense, download, or otherwise), modify, create derivative works
            of, publicly perform, or publicly display any part of the App or any Content; (b) disrupt servers or networks
            connected to the App; (c) use or launch any automated system (including without limitation,
            &quot;robots&quot; and &quot;spiders&quot;) to access the App; (d) circumvent, disable, or otherwise interfere
            with security-related features of the App or features that prevent or restrict use or copying of any
            Content; (e) reverse-engineer, decompile, or disassemble the App except as permitted by applicable law; or
            (f) use the App for any commercial purpose without our prior written consent.
          </p>

          <h2 className={h2}>3. Intellectual Property Rights</h2>
          <h3 className={h3}>3.1. Ownership</h3>
          <p className="mb-6">
            Your use of the App is licensed and not sold to you under these Terms, and you acknowledge that Zori and its
            licensors retain all title, ownership rights, and Intellectual Property Rights in and to the App (and its
            related software). We reserve all rights not expressly granted herein. As used herein, the term
            &quot;Intellectual Property Rights&quot; means any and all rights in and to any and all trade secrets,
            patents, copyrights, service marks, trademarks, know-how, or similar intellectual property rights, as well
            as any and all moral rights, rights of privacy, publicity, and similar rights of any type under the laws or
            regulations of any governmental, regulatory, or judicial authority, whether foreign or domestic.
          </p>
          <h3 className={h3}>3.2. Content</h3>
          <p className="mb-6">
            The content, information, data, text, photographs, videos, audio clips, written posts, articles, astrological
            reports, AI-generated responses, graphics, and interactive features generated, provided, or otherwise made
            available on or through the App (collectively, the &quot;Materials&quot;), as well as the User Submissions
            (defined below) and the trademarks, service marks, and logos contained therein (collectively,
            &quot;Marks&quot;, and together with the Materials and User Submissions, the &quot;Content&quot;), is the
            property of Zori and/or its licensors and may be protected by applicable copyright or other intellectual
            property laws and treaties.
          </p>
          <h3 className={h3}>3.3. Use of Content</h3>
          <p className="mb-6">
            All Content is provided to you &quot;AS IS&quot; for your personal use only, and you acknowledge that all
            Content accessed, used, or relied upon by you is at your own risk and that you will be solely responsible and
            liable for any damage or loss to you or any other party resulting from such access, use, or reliance. We do
            not guarantee that any Content you access on or through the App is or will continue to be accurate.
          </p>
          <h3 className={h3}>3.4. AI-Generated Content</h3>
          <p className="mb-8">
            Portions of the Content are generated using artificial intelligence provided by third-party AI service
            providers. AI-generated astrological content, including horoscopes, personality profiles, and chat responses,
            is provided for entertainment, self-reflection, and personal growth purposes only. Such content may contain
            inaccuracies, and we make no guarantees regarding its accuracy, completeness, or suitability for any
            particular purpose.
          </p>

          <h2 className={h2}>4. User Submissions</h2>
          <h3 className={h3}>4.1. User Submissions</h3>
          <p className="mb-6">
            The App permits you to create and store content, including but not limited to journal entries, chat messages,
            quiz responses, and feedback (collectively, &quot;User Submissions&quot;). You shall be solely responsible for
            your User Submissions and the consequences of sharing them.
          </p>
          <h3 className={h3}>4.2. License to User Submissions</h3>
          <p className="mb-6">
            Subject to these Terms, by submitting User Submissions you hereby grant Zori a worldwide, non-exclusive,
            royalty-free, fully-paid, sub-licensable, and transferable license to use, reproduce, and process the User
            Submissions solely for the purpose of providing and improving the Service. For clarity, we do not use your
            private journal entries to train AI models or share them with third parties, except as required to provide
            the Service (e.g., cloud storage).
          </p>
          <h3 className={h3}>4.3. Journal Entries</h3>
          <p className="mb-8">
            Your journal entries are private by default and are stored securely. We do not share, publish, or disclose
            your journal entries to any third party except as described in the Privacy Policy. You retain full ownership
            of your journal content.
          </p>

          <h2 className={h2}>5. Terms of Payment</h2>
          <h3 className={h3}>5.1. Current Version</h3>
          <p className="mb-6">
            The current version of the Service is provided free of charge. All features are accessible without payment.
          </p>
          <h3 className={h3}>5.2. Future Paid Features</h3>
          <p className="mb-4">
            We may introduce optional paid features or subscriptions (&quot;Subscription&quot;) in future versions of the
            Service. If we do, the following terms will apply:
          </p>
          <p className="mb-6">
            If you purchase a Subscription through the Apple App Store, payment will be charged to your Apple Account at
            confirmation of purchase. Your Account will be charged for renewal within 24 hours prior to the end of the
            current period. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before
            the end of the current period.
          </p>
          <p className="mb-6">
            You can manage your Subscription and turn off auto-renewal by going to your Account Settings in the App Store
            after purchase. You may also contact us at{" "}
            <a href="mailto:product@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              product@zori.co
            </a>{" "}
            for assistance.
          </p>
          <h3 className={h3}>5.3. Refunds</h3>
          <p className="mb-8">
            Refunds for any future Subscriptions purchased through the Apple App Store are handled by Apple in accordance
            with their refund policies. To request a refund, please contact Apple Support directly.
          </p>

          <h2 className={h2}>6. Disclaimer Regarding Astrological and AI Content</h2>
          <p className="mb-4 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            THE APP IS DESIGNED FOR ENTERTAINMENT, SELF-REFLECTION, AND PERSONAL GROWTH PURPOSES ONLY. THE ASTROLOGICAL
            INSIGHTS, HOROSCOPES, PERSONALITY PROFILES, AI-GENERATED RESPONSES, AND OTHER CONTENT PROVIDED THROUGH THE
            SERVICE ARE NOT INTENDED TO SERVE AS AND SHOULD NOT BE RELIED UPON AS PROFESSIONAL MEDICAL, PSYCHOLOGICAL,
            FINANCIAL, LEGAL, OR OTHER PROFESSIONAL ADVICE.
          </p>
          <p className="mb-4 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            ALWAYS CONSULT QUALIFIED PROFESSIONALS FOR MATTERS REQUIRING PROFESSIONAL EXPERTISE, INCLUDING BUT NOT LIMITED
            TO MEDICAL DECISIONS, MENTAL HEALTH CONCERNS, FINANCIAL DECISIONS, AND LEGAL MATTERS.
          </p>
          <p className="mb-8 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            THE AI ASTROLOGER FEATURE GENERATES RESPONSES USING ARTIFICIAL INTELLIGENCE PROVIDED BY THIRD-PARTY SERVICE
            PROVIDERS AND MAY PRODUCE CONTENT THAT IS INACCURATE, INCOMPLETE, OR UNSUITABLE. YOU ACKNOWLEDGE AND AGREE THAT
            YOU USE SUCH CONTENT AT YOUR OWN RISK.
          </p>

          <h2 className={h2}>7. Privacy</h2>
          <p className="mb-8">
            We respect your privacy and the use and protection of your personal information. Your submission of personal
            information through the App is governed by our{" "}
            <Link href="/privacy" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              Privacy Policy
            </Link>
            . It contains important information and disclosures relating to the collection and use of your personal
            information by us.
          </p>

          <h2 className={h2}>8. Termination of Account</h2>
          <p className="mb-4">
            We may suspend or terminate your use of the App and/or Account at any time, at our sole discretion, without
            cause and without notice.
          </p>
          <p className="mb-4">
            You may terminate your Account at any time by contacting us at{" "}
            <a href="mailto:product@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              product@zori.co
            </a>{" "}
            or by deleting your Account through the App settings.
          </p>
          <p className="mb-8">
            Upon termination, your right to use the Service will immediately cease. We will delete your personal data in
            accordance with our Privacy Policy, except where retention is required by applicable law.
          </p>

          <h2 className={h2}>9. Disclaimers of Warranties</h2>
          <h3 className={h3}>9.1. Basic Disclaimers</h3>
          <p className="mb-4">
            Except where otherwise inapplicable or prohibited by law, to the fullest extent permitted by law, you
            expressly understand and agree that your use of the App is at your sole risk, and the App is provided on an
            &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
          </p>
          <p className="mb-3">
            We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to,
            implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no
            warranty that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>The App will meet your requirements;</li>
            <li>The App will be uninterrupted, timely, secure, or error-free;</li>
            <li>
              The results that may be obtained from the use of the App, including astrological data and AI-generated
              content, will be accurate or reliable;
            </li>
            <li>The quality of any data or service available on the App will meet your expectations; and</li>
            <li>Any errors in the App will be corrected.</li>
          </ul>
          <h3 className={h3}>9.2. Absence of Professional Advice</h3>
          <p className="mb-8">
            Any statement that may be provided on the App is for informational, entertainment, and self-reflection
            purposes only and is not intended to replace or substitute for any professional financial, medical, legal,
            psychological, or other advice.
            <br />
            <br />
            Zori makes no representations or warranties and, to the fullest extent permitted by law, expressly disclaims
            any and all liability relating to your reliance on the statements or other information offered or provided
            within or through the App. If you have specific concerns or a situation arises in which you require
            professional advice, you should consult with an appropriately trained and qualified specialist.
          </p>

          <h2 className={h2}>10. Limitation of Liability</h2>
          <p className="mb-4">
            Except where otherwise inapplicable or prohibited by law, you expressly understand and agree that, to the
            fullest extent permitted by law, Zori shall not be liable to you for any direct, indirect, incidental,
            special, consequential, punitive, or exemplary damages, including, but not limited to, damages for loss of
            profits, goodwill, use, data, or other intangible losses (even if Zori has been advised of the possibility of
            such damages), resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>(a) the use, attempted use, or the inability to use the App;</li>
            <li>(b) unauthorized access to or alteration of your transmissions or data;</li>
            <li>(c) statements or conduct of any user or third party on the App;</li>
            <li>(d) your reliance on content or data made available by us, including astrological or AI-generated content; or</li>
            <li>(e) any other matter relating to the App.</li>
          </ul>
          <p className="mb-8">
            Even if Zori is found liable under any theory, Zori&apos;s liability and your exclusive remedy will be
            limited to the greater of the fees you have paid to Zori in the twelve (12) months preceding the claim or
            €100 (or USD $100 for U.S. residents).
          </p>

          <h2 className={h2}>11. Indemnity by You</h2>
          <p className="mb-8">
            To the fullest extent permitted by law, you agree to indemnify, defend, and hold harmless Zori and all of
            its affiliates, officers, agents, and employees, from and against any loss, liability, claim, or demand,
            including reasonable attorney&apos;s fees and costs, made by any third party resulting from or in any way
            connected with your use of the App in violation of this Agreement and/or your breach of this Agreement
            and/or any of your representations and warranties set forth above.
          </p>

          <h2 className={h2}>12. Dispute Resolution by Mandatory Binding Arbitration and Class Action Waiver</h2>
          <p className="mb-4 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            PLEASE READ THIS SECTION CAREFULLY. IT REQUIRES YOU TO ARBITRATE DISPUTES WITH ZORI AND LIMITS THE MANNER IN
            WHICH YOU CAN SEEK RELIEF FROM US.
          </p>
          <h3 className={h3}>12.1. Applicability</h3>
          <p className="mb-6">
            This Arbitration Agreement governs any dispute between you and Zori, including but not limited to claims
            arising out of or relating to any aspect of the relationship between you and Zori. However, (1) you may assert
            claims in small claims court if your claims qualify; and (2) you or Zori may seek equitable relief in court
            for infringement or misuse of intellectual property rights.
          </p>
          <h3 className={h3}>12.2. Initial Dispute Resolution</h3>
          <p className="mb-6">
            Most disputes can be resolved without resort to arbitration. If you have any dispute with Zori, you agree
            that before taking any formal action, you will contact us at{" "}
            <a href="mailto:product@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              product@zori.co
            </a>{" "}
            and provide a brief, written description of the dispute and your contact information. The parties agree to
            use their best efforts to settle any dispute directly through good faith negotiations.
          </p>
          <h3 className={h3}>12.3. Binding Arbitration</h3>
          <p className="mb-3">If we cannot resolve the dispute informally within thirty (30) days:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              If you are <strong className={strong}>not a U.S. resident</strong>: disputes shall be resolved under the
              rules of the London Court of International Arbitration (&quot;LCIA&quot;). Information is available at{" "}
              <a
                href="https://www.lcia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#292827] underline underline-offset-2 hover:opacity-80"
              >
                https://www.lcia.org
              </a>
              .
            </li>
            <li>
              If you are a <strong className={strong}>U.S. resident</strong>: disputes shall be resolved under JAMS
              rules. Information is available at{" "}
              <a
                href="https://www.jamsadr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#292827] underline underline-offset-2 hover:opacity-80"
              >
                https://www.jamsadr.com
              </a>
              .
            </li>
          </ul>
          <h3 className={h3}>12.4. Arbitration Proceedings</h3>
          <p className="mb-3">
            <strong className={strong}>Arbitration Fees.</strong> Arbitration fees shall be determined in accordance
            with the applicable arbitration rules of the relevant arbitration body (LCIA or JAMS). If you are a consumer
            and initiate arbitration that is not frivolous or brought in bad faith, we will bear any filing fees and
            arbitration costs beyond what you would have paid to file a claim in court.
          </p>
          <p className="mb-3">
            <strong className={strong}>Arbitration Hearings.</strong> Hearings will be conducted by teleconference or
            videoconference, unless the arbitrator determines an in-person hearing is appropriate.
          </p>
          <p className="mb-6">
            <strong className={strong}>Choice of Law.</strong> The arbitrator shall apply: (1) for non-U.S. residents,
            the laws of Portugal; (2) for U.S. residents, Delaware law consistent with the Federal Arbitration Act.
          </p>
          <h3 className={h3}>12.5. Class Action Waiver and Jury Trial Waiver</h3>
          <p className="mb-4 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            NEITHER YOU NOR ZORI AGREES TO ANY ARBITRATION ON A CLASS BASIS. THE ARBITRATOR SHALL HAVE NO AUTHORITY TO
            PROCEED ON A CLASS BASIS. A PARTY MAY ASSERT A CLAIM ONLY IN THAT PARTY&apos;S INDIVIDUAL CAPACITY AND NOT AS
            A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS PROCEEDING.
          </p>
          <p className="mb-6 font-raleway-medium text-[15px] uppercase tracking-wide text-[#292827]">
            BY AGREEING TO ARBITRATION, YOU WAIVE YOUR RIGHT TO A JURY TRIAL AND YOUR RIGHTS TO OTHER RESOLUTION PROCESSES,
            SUCH AS A COURT ACTION.
          </p>
          <h3 className={h3}>12.6. Small Claims Court and IP Claims</h3>
          <p className="mb-6">
            Either party may bring enforcement actions or claims relating to intellectual property in a court with
            jurisdiction, or seek relief in small claims court for disputes within that court&apos;s jurisdiction.
          </p>
          <h3 className={h3}>12.7. 30-Day Right to Opt Out</h3>
          <p className="mb-6">
            You have the right to opt out of the arbitration and class action waiver provisions by sending notice to{" "}
            <a href="mailto:product@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              product@zori.co
            </a>{" "}
            with the subject line &quot;ARBITRATION AND CLASS ACTION WAIVER OPT-OUT&quot; within 30 days of first using
            the App. Otherwise, you will be bound by this Arbitration Agreement.
          </p>
          <h3 className={h3}>12.8. Severability</h3>
          <p className="mb-8">
            If any portion of this Arbitration Agreement is found to be unenforceable, the unenforceable provision shall
            be severed, and the remainder shall continue in full force and effect.
          </p>

          <h2 className={h2}>13. Changes to This Agreement</h2>
          <p className="mb-8">
            We reserve the right, at our sole discretion, to change this Agreement from time to time and at any time
            without prior notice by posting the changed Agreement on the App or Website, or by otherwise giving you
            notice of the changes. The changes shall be effective upon posting. Your continued use of the App following
            the effective date of any changes constitutes acceptance of those changes.
          </p>

          <h2 className={h2}>14. Term of the Agreement</h2>
          <p className="mb-4">
            This Agreement will take full force and effect when you access the App and will remain in effect while you
            use the App until your Account is terminated for whatever reason.
          </p>
          <p className="mb-8">
            After your Account is terminated, all terms that by their nature may survive termination shall be deemed to
            survive, including but not limited to Sections 3, 4, 6, and 9–16.
          </p>

          <h2 className={h2}>15. Electronic Signature</h2>
          <p className="mb-8">
            You acknowledge and agree that by tapping a button labeled &quot;SUBMIT,&quot; &quot;I ACCEPT,&quot; &quot;I
            AGREE,&quot; &quot;CONTINUE,&quot; or similar buttons, you are submitting a legally binding electronic
            signature and entering into a legally binding contract. You acknowledge that your electronic submissions
            constitute your agreement and intent to be bound by this Agreement.
          </p>

          <h2 className={h2}>16. Miscellaneous</h2>
          <h3 className={h3}>16.1. Governing Law and Venue</h3>
          <p className="mb-6">
            The laws of Portugal, excluding its conflicts of law principles, govern these Terms and your use of the
            Service. To the extent that any action relating to any dispute is not submitted to arbitration, each party
            submits to the exclusive jurisdiction of the courts of Lisbon, Portugal.
          </p>
          <h3 className={h3}>16.2. Entire Agreement; Severability</h3>
          <p className="mb-6">
            This Agreement and all other provisions referenced herein contain the entire agreement between you and Zori
            regarding the use of the App. If any provision of this Agreement is held invalid, the remainder of this
            Agreement shall continue in full force and effect.
          </p>
          <h3 className={h3}>16.3. No Waiver of Breach or Default</h3>
          <p className="mb-6">
            The failure to require performance of any provision will not affect our right to require performance at any
            time thereafter, nor will a waiver of any breach or default constitute a waiver of any subsequent breach or
            default.
          </p>
          <h3 className={h3}>16.4. Force Majeure</h3>
          <p className="mb-6">
            Zori shall not be responsible for any failure to perform due to unforeseen circumstances or causes beyond our
            reasonable control, including but not limited to: acts of God, war, riot, embargoes, acts of civil or military
            authority, terrorism, strikes, shortages in transportation or materials, failure of telecommunications or
            information services infrastructure, hacking, spam, or any failure of a computer, server, or software.
          </p>
          <h3 className={h3}>16.5. Apple-Specific Terms</h3>
          <p className="mb-8">
            You acknowledge and agree that these Terms are solely between you and Zori, not Apple. Zori, not Apple, is
            solely responsible for the App and its content. Apple has no obligation to furnish any maintenance or support
            services with respect to the App. To the extent that the App fails to conform to any applicable warranty,
            you may notify Apple, and Apple will refund the purchase price for the App to you (if applicable). Apple has
            no other warranty obligation with respect to the App. Apple is not responsible for addressing any claims by
            you or any third party relating to the App or your possession and/or use of the App. Apple is a third-party
            beneficiary of these Terms, and upon your acceptance of these Terms, Apple will have the right to enforce
            these Terms against you as a third-party beneficiary thereof.
          </p>

          <h2 className={h2}>17. Contact Information</h2>
          <p className="mb-4">Please contact us with any questions regarding this Agreement.</p>
          <p className="mb-2">
            <strong className={strong}>Email:</strong>{" "}
            <a href="mailto:product@zori.co" className="text-[#292827] underline underline-offset-2 hover:opacity-80">
              product@zori.co
            </a>
          </p>
          <p className="mb-6">
            <strong className={strong}>Attention of:</strong> Customer Support, Zori
          </p>
          <p className="mb-6">Zori is operated by an individual entrepreneur registered in Portugal.</p>

          <p className="font-jetbrains-mono text-[14px] uppercase text-[#52504e] pt-6 border-t border-[rgba(123,120,119,0.25)]">
            © 2026 Zori. All rights reserved.
          </p>
          <p className="mt-4 text-[15px] leading-[1.5]">
            Our app content, services, and products are designed for entertainment, self-reflection, and personal growth
            purposes only. They are not intended to serve as professional advice of any kind.
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
