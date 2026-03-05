import Footer from "@/components/footer";
import Navbar from "@/components/navigation/navbar";
import { routes } from "@/routes";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar route={routes.navMain} />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer route={routes.footer} />
    </>
  );
}
