import Footer from "@/components/footer";
import Navbar from "@/components/navigation/navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer />
    </>
  );
}
