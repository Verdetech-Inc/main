import Kicker from "~/components/common/kicker";
import Header from "~/components/common/header";
import Button from "~/components/common/button";
import HeroSlider from "../custom/HeroSlider";
import { Show } from "solid-js";

type ref = HTMLDivElement | null;

interface HeroProps {
	scrollTo?: (ref: any) => void;
}

export default function CleanLr(props: HeroProps) {
	const { scrollTo } = props;
	const safeScrollTo = (arg: any) => {
		if (scrollTo === undefined) {
			return;
		} else {
			console.log({ arg });
			scrollTo(arg);
		}
	};
	const kickerBits = [
		"+10,000 Business Points to your score",
		"More than 87% Maple Syrup",
		"Bisphenol-A Free Web Technology",
		"Made from 100% Recycled Pixels",
	];
	const getRandomKicker = () => {
		return kickerBits[Math.floor(Math.random() * kickerBits.length)];
	};

	return (
		<div class="flex flex-col-reverse pt-[24px] gap-[24px] md:gap-[12px] p-[48px] items-center justify-center md:flex-row md:gap-[48px] h-[100vh] w-[100vw] bg-light text-dark">
			<div class="flex flex-col gap-[24px] md:max-w-[640px]">
				<Kicker text={getRandomKicker()} />
				<div class="flex flex-col gap-[12px]">
					<Header
						title="Verdetech Inc Canada"
						height="h1"
					/>
					<Header
						title="Green Design for the Future of Business"
						height="h3"
					/>
					<Header
						title="Verdetech Inc is a design lab, consultancy, and engineering house solving the problems of the future today."
						height="h2"
					/>
				</div>
				<div class="flex gap-[12px]">
					<Show when={scrollTo === undefined}>
						<Button type="secondary">Active Products</Button>
						<Button type="secondary">Team</Button>
						<Button type="main">Contact</Button>
					</Show>
					<Show when={scrollTo !== undefined}>
						<Button
							onClick={() => safeScrollTo(0)}
							type="secondary"
						>
							Active Products
						</Button>
						<Button
							onClick={() => safeScrollTo(1)}
							type="secondary"
						>
							Team
						</Button>
						<Button
							onClick={() => safeScrollTo(2)}
							type="main"
						>
							Contact
						</Button>
					</Show>
				</div>
			</div>
			<HeroSlider />
		</div>
	);
}
