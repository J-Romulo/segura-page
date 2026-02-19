import { Badges } from "./sections/badges";
import { ComparisonTable } from "./sections/comparisonTable";
import { Competitors } from "./sections/competitors";
import { Compliance } from "./sections/compliance";
import { FAQ } from "./sections/faq";
import { GartnerReport } from "./sections/gartnerReport";
import { HeroBanner } from "./sections/heroBanner";
import { ManagementResources } from "./sections/managementResources";
import { Overview } from "./sections/overview";
import { PamReview } from "./sections/pamReview";
import { Partners } from "./sections/partners";
import { PeerInsights } from "./sections/peerInsights";
import { Testimonials } from "./sections/testimonials";
import { WhySegura } from "./sections/whySegura";

export function Homepage() {
    return (
        <div className='relative w-full h-full bg-slate-100'>
            <HeroBanner />
            <Overview />
            <Partners />
            <WhySegura />
            <Testimonials />
            <Compliance />
            <PamReview />
            <GartnerReport />
            <ComparisonTable />
            <PeerInsights />
            <Competitors />
            <Badges />
            <FAQ />
            <ManagementResources />
        </div>
    )
}