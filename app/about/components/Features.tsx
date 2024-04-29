import Link from "next/link";
import { Section } from "./Section";

export const Features = () => {
  return (
    <Section title="Service Features" subTitle="Has many great features">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-6 shadow space-y-3 relative">
          <div className="aspect-video bg-muted"></div>
          <h2>
            <Link href="/">
              Title
              <span className="absolute inset-0"></span>
            </Link>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button>Tag</button>
        </div>
        <div className="border p-6 rounded-xl shadow">aaa</div>
        <div className="border p-6 rounded-xl shadow">aaa</div>
      </div>
    </Section>
  );
};