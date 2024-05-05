import { DetailsImages } from "@/components/organisms/detailsImages";
import { HomeGalery } from "@/components/organisms/home";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-300 w-full h-[calc(100vh-125px)] ">
        <HomeGalery />
      </div>
    </main>
  );
}
