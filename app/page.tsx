import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HomeIndex from "@/components/home/HomeIndex";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>    
      <Header />
      <HomeIndex lang={lang} />
      <Footer />  
    </>
  )
}
