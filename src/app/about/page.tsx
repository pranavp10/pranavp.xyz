import { Quote, quotes } from "../../components/Quote";

const Page = () => {
  return (
    <div>
      <div className="px-7 pt-4 pb-5">
        <div className="text-subtle space-y-6 leading-relaxed">
          <p>Hi,</p>
          <p>
            I’m <strong>Pranav Patel</strong>, a software engineer who loves
            building products. I enjoy turning ideas into real things that
            people can use. Right now, I’m planning to build a SaaS product and
            would love to collaborate.
          </p>
          <p>
            If you’re a designer, software engineer, product manager, marketer,
            or SEO specialist, let’s connect and create something amazing
            together!
          </p>
          <p>
            Also, if you’re a student and need any help, feel free to email me.
            You can reach out to me for anything!
          </p>
          <p>Looking forward to hearing from you.</p>
          <p className="mt-4">
            Best,
            <br />
            <strong>Pranav Patel</strong>
            <br />
            <a href="mailto:hi@pranavp.xyz" className="text-blue-500">
              hi@pranavp.xyz
            </a>
          </p>
        </div>
      </div>
      <Quote quote={quotes.about.quote} author={quotes.about.author} />
    </div>
  );
};

export default Page;
