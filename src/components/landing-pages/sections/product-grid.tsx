import { For } from "solid-js";
import Header from "~/components/common/header";
import Button from "~/components/common/button";
import ProductCard, {
	ProductCardProps,
} from "~/components/common/product-card";

interface ProductGridProps {
	title: string;
	products: ProductCardProps[];
	ref?: any;
}

export default function ProductGrid(props: ProductGridProps) {
	let gridClass = "grid grid-cols-1 gap-[24px] md:grid-cols-2 max-w-[960px]";
	// target 3 cols if over 2 products
	if (props.products.length > 2) {
		gridClass = "grid grid-cols-1 gap-[24px] md:grid-cols-3 max-w-[960px]";
	}

	return (
		<div
			class="flex flex-col gap-[12px] p-[48px] items-center justify-center md:gap-[48px] min-h-[100vh] min-w-[100vw] bg-light text-dark"
			ref={props?.ref}
		>
			<Header
				title={props.title}
				height="h2"
			/>
			<div class={gridClass}>
				<For each={props.products}>
					{(product) => (
						<ProductCard
							image={product.image}
							title={product.title}
							description={product.description}
							link={product.link}
						/>
					)}
				</For>
			</div>
		</div>
	);
}
