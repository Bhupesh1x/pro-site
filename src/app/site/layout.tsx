import Navigation from "@/components/site/Navigation";

type Props = {
  children: React.ReactNode;
};

function SiteLayout({ children }: Props) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}

export default SiteLayout;
