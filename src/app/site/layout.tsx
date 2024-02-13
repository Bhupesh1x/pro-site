import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

import Navigation from "@/components/site/Navigation";

type Props = {
  children: React.ReactNode;
};

function SiteLayout({ children }: Props) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main>
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
}

export default SiteLayout;
