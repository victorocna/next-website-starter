import { Button, Hero, Layout } from '../components';

const Page = () => {
  return (
    <Layout>
      <Hero minHeight={400}>
        <div className="text-center space-y-4 my-12">
          <h2 className="text-4xl">Hero image</h2>
          <p className="text-lg">
            Capture the attention of your audience with this hero image. Less is more
          </p>
          <div className="flex space-x-4 justify-center">
            <Button>View demo</Button>
            <Button>Contact us</Button>
          </div>
        </div>
      </Hero>
    </Layout>
  );
};

export default Page;
