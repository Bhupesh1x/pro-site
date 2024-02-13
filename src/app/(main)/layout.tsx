import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
  );
}

export default MainLayout;
