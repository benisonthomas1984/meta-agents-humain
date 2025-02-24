import dynamic from "next/dynamic"
import Header from "../components/Header"

const OrderPage = dynamic(() => import("./order-page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export const dynamicParams = true

export async function generateStaticParams() {
  // Generate a limited number of static pages at build time
  return [{ slug: "default" }]
}

export default function Order({ params }) {
  return (
    <>
      <Header />
      <OrderPage params={params} />
    </>
  )
}

