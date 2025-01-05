import TitleMeta from "~/components/meta/TitleMeta";
import IconMeta from "~/components/meta/IconMeta";
import DescriptionMeta from "~/components/meta/DescriptionMeta";
import UrlMeta from "~/components/meta/UrlMeta";
import Footer from "~/components/common/footer";
import LRHero from "~/components/landing-pages/heroes/lr-hero";
import RegisterForWebinarForm from "~/components/forms/registerForWebinar";
import TLDR from "~/components/landing-pages/sections/tldr";
import SplitSection from "~/components/landing-pages/sections/split-section";

export default function AIWebinar() {
	const TLDRKickers = [
		"Learn AI for Fun & Profit",
		"Technical, Experienced Host",
		"Any technical level welcome",
		"All industries welcome",
		"In Depth Technical Discussions",
		"Free Replays on YouTube",
		"Wednesdays at 13:00 Pacific Time",
		"Live, Q&A Focused",
		"All AI Models",
		"> $325,000 generated from AI Devving",
		"> 3,000 hours AI Devving",
	];
	return (
		<>
			<TitleMeta title="AI Webinar" />
			<IconMeta />
			<DescriptionMeta content="AI Webinar" />
			<UrlMeta url="https://verde.tech/ai-webinar" />
			<div class="flex flex-col">
				<div class="flex flex-col md:flex-row gap-[12px] items-center justify-center bg-[#3D5A80] text-light p-[24px]">
					<img
						src="/Products/GPTBossLogo.png"
						alt="GPTBoss Logo"
						style={{
							"max-height": "26px",
						}}
					/>
					<p>GPTBoss is proudly developed by Verdetech Inc.</p>
				</div>
				<LRHero
					title="Learn AI from an Active Developer"
					subtitle="Mackenzie Bowes (GPTBoss creator) is running live webinars covering everything you need to know to get better at using AI for fun and profit"
					kickerContent="+10,000 Business Points"
					rightContent={
						<>
							<video
								src="https://assets.gptboss.com/verdetechio-AiDeveloper.mp4"
								controls
								style={{
									"margin-left": `48px`,
									"margin-right": `48px`,
								}}
							/>
						</>
					}
					additionalLeftContent={<RegisterForWebinarForm />}
				/>
				<TLDR kickerContents={TLDRKickers} />
				<SplitSection
					title="Practical Insight"
					kicker="3000+ hours coding AI systems"
					content="While working in industry, we attempted a lot of our own experiments, including PDF parsing, web scraping & parsing, email parsing, speech to text, email outbound automation, chat bifurcation, autoprompting, and more. By hand writing these systems, we have deep insight into the benefits, drawbacks, and use-value."
					subContent={
						<div class="flex flex-col gap-[12px] px-[24px] py-[12px] text-light rounded-md">
							<img
								src="/Webinar/PracticalInsight.png"
								class="max-w-full md:max-w-[512px]"
							/>
						</div>
					}
					direction="right"
					additionalMainContent={<RegisterForWebinarForm />}
				/>
				<SplitSection
					title="Ask anything!"
					content="In building GPTBoss, we’ve seen hundreds of thousands of experiments users have performed and requests they’ve made. If you’re wondering about how to get something done with AI, ask us and we’ve probably seen it before."
					kicker="90k+ users supported"
					subContent={
						<div class="flex flex-col gap-[12px] px-[24px] py-[12px] text-light rounded-md">
							<img
								src="/Webinar/AskAnything.png"
								class="max-w-full md:max-w-[512px]"
							/>
						</div>
					}
					direction="left"
					additionalMainContent={<RegisterForWebinarForm />}
				/>
				<SplitSection
					title="Completely Free"
					kicker="Hosted Live on YouTube"
					content="These Office Hours are hosted live on YouTube. the goal here is audience participation, and getting to answer the exact questions on your mind about using AI for Fun and Profit... all for free!"
					subContent={
						<div class="flex flex-col gap-[12px] px-[24px] py-[12px] text-light rounded-md">
							<img
								src="/Webinar/Free.png"
								class="max-w-full md:max-w-[512px]"
							/>
						</div>
					}
					direction="right"
					additionalMainContent={<RegisterForWebinarForm />}
				/>
				<Footer
					sitename="Verdetch.io"
					email="verdetechlabs@gmail.com"
				/>
			</div>
		</>
	);
}
