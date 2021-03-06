import { Button, Header, Hero, Layout } from '../components';

const Page = () => (
  <Layout withFooter>
    <Hero minHeight={400}>
      <Header />
      <div className="text-center space-y-4 my-12">
        <h2 className="text-4xl">Hero image</h2>
        <p className="text-lg">
          Capture the attention of your audience with this hero image. Less is more
        </p>
        <div className="flex space-x-4 justify-center">
          <Button variant="primary">View demo</Button>
          <Button variant="accent">Contact us</Button>
        </div>
      </div>
    </Hero>
  </Layout>
);

export default Page;
