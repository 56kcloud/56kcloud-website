import Nav from "../components/nav";
import Hero from "../components/homepage/hero";
import Logos from "../components/homepage/logos";
import Feature from "../components/homepage/feature";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <header
          className="bg-blue-900 bg-cover bg-center lg:pb-14"
          style={{ backgroundImage: "url(images/matterhorn-by-night.jpg)" }}
        >
          <Nav />
          <Hero />
        </header>
        <main>
          <Logos />
          <Feature
            title="Your app, cross-platform"
            body="Faster, cheaper and simpler, cross-platform applications allow you to reach your users, on their plaftorm, using a single codebase. Edeltech uses the Qt framework to build modern and responsive mobile and desktop applications."
            imageUrl="/images/app.png"
          />
          <Feature
            title="Accelerate your Cloud migration"
            body="Migrate any workload - application, website, database, storage, physical or virtual server, or an entire data center - from an on-premises environment, hosting facility, or other public cloud to AWS. Edeltech can help you define your entire infrastructure as code and automate the deployment by creating a CI/CD pipeline that fits your needs."
            imageUrl="/images/cloud.png"
            reverse={true}
            altBackground={true}
          />
          <Feature
            title="Leverage Machine Learning"
            body="Improve your business by applying Machine Learning techniques to gain insight and optimize your product. Edeltech helps you prepare your data, train models and deploy them so that you and your customers can benefit from them."
            imageUrl="/images/ai.png"
          />
        </main>
      </div>
    </div>
  );
}
