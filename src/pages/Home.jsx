import Hero from "../features/home/Hero";
import SignupForm from "../features/home/SignupForm";
import InfoPictures from "../features/home/InfoPictures";
import InfoText from "../features/home/InfoText";
import CallToAction from "../features/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <SignupForm />
      <InfoPictures />
      <InfoText />
      <CallToAction />
    </>
  );
}
