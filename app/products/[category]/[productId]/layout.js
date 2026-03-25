import productsJson from "../../../../data/products.json";

export async function generateMetadata({ params }) {
    const { category, productId } = await params;
    const product = productsJson.find((p) => p.id === productId);

    if (!product) {
        return {
            title: "Product Not Found | Aerosem Kimya",
        };
    }

    const descriptionText = product.description 
        ? product.description.substring(0, 160) + (product.description.length > 160 ? "..." : "")
        : `High-performance ${product.name} designed for professional industrial applications.`;

    return {
        title: `${product.name} | Aerosem Kimya`,
        description: descriptionText,
        openGraph: {
            title: `${product.name} | Aerosem Kimya`,
            description: descriptionText,
            url: `https://aerosemkimya.com/products/${category}/${productId}`,
            images: [
                {
                    url: product.image,
                    alt: `Aerosem Kimya - ${product.name}`,
                }
            ]
        }
    };
}

export default function ProductDetailLayout({ children }) {
    return children;
}
