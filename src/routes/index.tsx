import CleanLr from "~/components/landing-pages/heroes/clean-lr";
import ProductGrid from "~/components/landing-pages/sections/product-grid";
import { ProductCardProps } from "~/components/common/product-card";
import Footer from "~/components/common/footer";
import Header from "~/components/common/header";
import { createSignal } from "solid-js";
import TitleMeta from "~/components/meta/TitleMeta";
import IconMeta from "~/components/meta/IconMeta";
import DescriptionMeta from "~/components/meta/DescriptionMeta";
import UrlMeta from "~/components/meta/UrlMeta";

export default function Home() {
	const [productsRef, setProductsRef] = createSignal<HTMLDivElement | null>(
		null
	);
	const [teamRef, setTeamRef] = createSignal<HTMLDivElement | null>(null);
	const [contactRef, setContactRef] = createSignal<HTMLDivElement | null>(null);

	const scrollTo = (ref: HTMLDivElement | null) => {
		if (ref) {
			ref.scrollIntoView({ behavior: "smooth" });
		}
	};

	const activeProducts: ProductCardProps[] = [
		{
			title: "The Nonna",
			description: (
				<p>
					The Nonna is a reinvented{" "}
					<a
						href="https://getnonna.com"
						class="underline"
					>
						borosilicate glass coffee percolator
					</a>{" "}
					designed to reduce plastic exposure for coffee and tea drinkers.
				</p>
			),
			image: "/Products/NonnaCardBg.png",
			link: "https://getnonna.com",
		},
		{
			title: "GPTBoss",
			description: (
				<p>
					GPTBoss is a tool for managing the memory and focus of Frontier Large
					Language Models with a specific focus on business operations.{" "}
					<a
						href="https://gptboss.com"
						class="underline"
					>
						Try GPTBoss for Free
					</a>
				</p>
			),
			image: "/Products/GPTBossCardBg.png",
			link: "https://gptboss.com",
		},
	];

	const Team: ProductCardProps[] = [
		{
			title: "Mitchell Schols",
			image: "/Team/Mitch.jpeg",
			description: (
				<p>
					Mitchell is a brand developer, search marketer, designer, and
					executive.
				</p>
			),
		},
		{
			title: "Mackenzie Bowes",
			image: "/Team/Mack.jpeg",
			description: (
				<p>
					Mackenzie is a software developer, designer, speaker, writer, and
					consultant.
				</p>
			),
		},
	];

	return (
		<>
			<TitleMeta title="Verdetech Inc" />
			<IconMeta />
			<DescriptionMeta content="Verdetech Inc is a design lab, consultancy, and engineering house solving the problems of the future today." />
			<UrlMeta url="https://verdetech.io" />
			<CleanLr
				scrollTo={(index: number) => {
					const refs = [productsRef(), teamRef(), contactRef()];
					scrollTo(refs[index]);
				}}
			/>
			<ProductGrid
				title="Active Products"
				products={activeProducts}
				ref={(el: HTMLDivElement) => setProductsRef(el)}
			/>
			<ProductGrid
				title="Team"
				products={Team}
				ref={(el: HTMLDivElement) => setTeamRef(el)}
			/>
			<div
				class="flex flex-col gap-[12px] items-center justify-center md:gap-[48px] md:h-[100vh] md:w-[100vw] bg-light text-dark"
				ref={(el: HTMLDivElement) => setContactRef(el)}
			>
				<Header
					title="Book a Meeting"
					height="h2"
				/>
				<div
					innerHTML={`<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/verdetechlabs/30min" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->`}
				/>
			</div>
			<Footer
				sitename="Verdetech Inc"
				email="verdetechlabs@gmail.com"
			/>
		</>
	);
}
