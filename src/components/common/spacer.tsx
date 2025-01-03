import { Show } from "solid-js";

interface SpacerProps {
	height?: number;
}

/**
 * Spacer component
 *
 * @param {SpacerProps} props - Component props
 * @param {number} props.height - Height of the spacer in pixels
 */
export default function Spacer(props: SpacerProps) {
	return (
		<>
			<Show when={props.height === undefined}>
				<div class="min-h-[24px]"></div>
			</Show>
			<Show when={props.height !== undefined}>
				<div
					style={{
						height: `${props.height}px`,
					}}
				></div>
			</Show>
		</>
	);
}
