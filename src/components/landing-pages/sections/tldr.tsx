import Header from "~/components/common/header";
import Kicker from "~/components/common/kicker";
import { For } from "solid-js";

interface TLDRProps {
	kickerContents: string[];
}

export default function TLDR({ kickerContents }: TLDRProps) {
	return (
		<>
			<div class="flex flex-col md:p-[96px] gap-[12px] justify-center text-dark p-[24px] mx-auto">
				<Header
					height="h2"
					title="TLDR"
				/>
				<div class="flex flex-wrap gap-[12px] max-w-[640px] md:max-w-[800px]">
					<For each={kickerContents}>
						{(kickerContent) => <Kicker text={kickerContent} />}
					</For>
				</div>
			</div>
		</>
	);
}
