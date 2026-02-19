import Link from "next/link";
import { Accordion } from "../../../../../components/ui/Accordion";

const FAQS = [
  {
    question: "Who is Segura® and what does the company specialize in?",
    answer: (
      <p className='text-base font-light'>
        <b>
          Segura® is a worldwide identity and privileged access management
          company.
        </b>{" "}
        We specialize in protecting critical systems, credentials, and data with
        an all-in-one identity security platform. Built for speed, simplicity,
        and compliance, Segura® helps businesses secure privileged access,
        manage digital identities, and prevent breaches without slowing down
        operations.
        <br />
        <br />
        Recognized by Gartner, KuppingerCole, and Frost & Sullivan,{" "}
        <b>
          Segura® is trusted worldwide for innovation, reliability, and customer
          experience.
        </b>{" "}
        On Gartner Peer Insights, real users consistently rank Segura® as the #1
        PAM solution.{" "}
        <Link href='/products/privileged-access-management'>
          Learn more about Segura® and our all-in-one PAM platform.
        </Link>{" "}
        ›
      </p>
    ),
  },
  {
    question:
      "What makes Segura® different from other cybersecurity companies?",
    answer: (
      <p className='text-base font-light'>
        <b>
          Unlike legacy PAM vendors, Segura® is fast to deploy, easy to use, and
          cost-effective.
        </b>{" "}
        Our all-in-one platform reduces total cost of ownership by up to 70% and
        deploys in minutes, not months.
        <br />
        <br />
        With built-in compliance reporting, automated password rotation, and
        real-time monitoring,{" "}
        <b>Segura® gives teams full control without complexity.</b>{" "}
        <Link href='/company/segura-vs-cyberark'>
          See how Segura® compares to legacy PAM vendors. ›
        </Link>
      </p>
    ),
  },
  {
    question: "Why did senhasegura rebrand and change its name to Segura®?",
    answer: (
      <p className='text-base font-light'>
        For over 12 years, Segura® has been a leader in Privileged Access
        Management, helping organizations worldwide take back control of
        identity security. As we've grown, so has our vision.
        <br />
        <br />
        The rebrand from senhasegura to Segura® reflects our global growth and
        our mission to provide futureproof identity security.{" "}
        <b>"Segura" means safe,</b> and it represents our commitment to
        protecting organizations worldwide with bold, trusted, and modern
        solutions.{" "}
        <Link href='/new-brand'>
          Read more about the Segura® rebrand story. ›
        </Link>
      </p>
    ),
  },
  {
    question:
      "Can Segura® solutions integrate with my existing IT and security systems?",
    answer: (
      <p className='text-base font-light'>
        <b>Yes. Segura® PAM integrates with more than 174 platforms—</b>from
        modern SaaS like Okta, AWS, and ServiceNow to legacy IT systems such as
        Active Directory. You can{" "}
        <b>
          deploy across on-prem, cloud, or hybrid environments in as little as 7
          minutes
        </b>{" "}
        and start controlling privileged access without disrupting your existing
        stack.
        <br />
        <br />
        If you don't see the integration you need, we'll create it for you.{" "}
        <Link href='/services/integration'>
          Explore 174+ Segura® integrations ›
        </Link>
      </p>
    ),
  },
  {
    question: "Does Segura® offer 24/7 customer support for clients worldwide?",
    answer: (
      <p className='text-base font-light'>
        <b>Yes. Segura® provides award-winning, 24/7 global support</b> backed
        by our Centers of Excellence in São Paulo, Riyadh, Austin, and Katowice.
        Our localized teams give clients help in their region and language,
        while our experts are always available around the clock to{" "}
        <b>
          resolve issues, configure integrations, and maximize value from the
          platform.
        </b>
        <br />
        <br />
        This dedication to customer success has earned Segura®{" "}
        <b>consistent 5-star reviews</b> on Gartner Peer Insights.{" "}
        <Link href='/products/privileged-access-management'>
          See why customers rate Segura® support 5 stars ›
        </Link>
      </p>
    ),
  },
  {
    question:
      "How quickly can Segura®'s services and solutions be deployed after sign-up?",
    answer: (
      <p className='text-base font-light'>
        Segura® is built for fast, secure deployment. Many clients{" "}
        <b>start protecting privileged access in under 10 minutes</b> thanks to
        our agentless architecture, flexible connectors, and intuitive
        workflows.
        <br />
        <br />
        Segura® scales quickly across cloud, on-prem, and hybrid
        environments—helping global teams secure privileged access up to 90%{" "}
        <b>faster than competitors.</b>{" "}
        <Link href='/demo'>
          Request a demo to see how fast Segura® can deploy ›
        </Link>
      </p>
    ),
  },
  {
    question:
      "In which countries and regions does Segura® operate its services?",
    answer: (
      <p className='text-base font-light'>
        <b>Segura® operates worldwide,</b> supporting clients in{" "}
        <b>70+ countries across every major region,</b> including North America,
        Europe, Latin America, the Middle East, Asia, Africa, and Oceania.
        <br />
        <br />
        Our{" "}
        <b>
          Centers of Excellence in Austin, Katowice, Riyadh, and São Paulo
        </b>{" "}
        provide localized expertise and 24/7 support.{" "}
        <Link href='/contact'>Find local Segura® support in your region ›</Link>
      </p>
    ),
  },
  {
    question:
      "Why should businesses trust Segura® for cybersecurity and data protection?",
    answer: (
      <p className='text-base font-light'>
        Segura® is trusted by IT teams in over 70 countries and consistently
        recognized by leading analysts as a global PAM leader.
        <br />
        <br />
        On <b>Gartner Peer Insights,</b> real users give Segura® the industry's
        highest score: <b>4.9 out of 5 stars,</b> with 98% saying they would
        recommend our solution.
        <br />
        <br />
        Our platform is certified for{" "}
        <b>ISO 27001:2022, ISO 27701:2019, SOC 2 Type II, SOC 3 Type II,</b> and
        adheres to <b>GDPR, LGPD, and CCPA.</b>{" "}
        <Link href='/company/achievements'>
          See Segura® certifications and analyst recognition ›
        </Link>
      </p>
    ),
  },
];

export function FAQ() {
  return (
    <section
      className='bg-deep-green text-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto flex flex-col gap-8 w-full max-md:max-w-full justify-center px-12'>
        <div className='flex flex-col gap-10 w-full justify-center items-center'>
          <div className='flex flex-col gap-3 w-full items-center mb-8'>
            <h2 className='font-display text-4xl font-semibold text-center'>
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className='flex flex-col flex-1 w-full gap-8'>
            {FAQS.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.question}
                defaultOpen={index === 0}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
