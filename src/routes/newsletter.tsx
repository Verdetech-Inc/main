import Footer from "~/components/common/footer";
import Header from "~/components/common/header";
import TitleMeta from "~/components/meta/TitleMeta";
import IconMeta from "~/components/meta/IconMeta";
import DescriptionMeta from "~/components/meta/DescriptionMeta";
import UrlMeta from "~/components/meta/UrlMeta";
import SubscriptionForm from "~/components/forms/goodatcomputersubscribe/form";
import Spacer from "~/components/common/spacer";

export default function Newsletter() {
	return (
		<>
			<TitleMeta title="Verdetech Inc | Subscribe to Good At The Computer" />
			<IconMeta />
			<DescriptionMeta content="Good at the Computer is the official Verdetech Newsletter keeping people up to date and educated on using new digital technology as it is released and popularized." />
			<UrlMeta url="https://verdetech.io" />
			<div class="flex flex-col gap-[12px] p-[48px] items-center justify-center md:gap-[48px] min-h-[100vh] min-w-[100vw] bg-light text-dark">
				<div class="flex flex-col gap-[12px] max-w-[60ch] bg-white p-[24px] rounded-[12px] shadow-lg">
					<Header
						height="h3"
						title="Subscribe to Good At The Computer"
					/>
					<Spacer height={12} />
					<p>
						Good at the Computer is the official Verdetech Newsletter keeping
						people up to date and educated on using new digital technology as it
						is released and popularized.
					</p>
					<p>
						This newsletter is delivered at least once a week, perhaps more
						depending on any available news or other interesting things that
						have recently happened.
					</p>
					<p>
						The newsletter is free to subscribe to and minimally supported by
						ads. The purpose is to upskill you and help you get Good at the
						Computer.
					</p>
					<Spacer height={36} />
					<Header
						height="h2"
						title="Get Good Now"
					/>
					<SubscriptionForm />
					<Spacer />
				</div>
			</div>
		</>
	);
}
