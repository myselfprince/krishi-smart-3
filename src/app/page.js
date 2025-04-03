import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Homepage />
      <Services />
      <SuccessStories />
      <Footer />
    </>
  );
}
