import { ActionBox, Button, Header, Hero, Layout } from '../components';

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
    <div className="p-4">
      <ActionBox image="/images/pexels-pixabay-38544.jpg">
        <h2 className="font-semibold text-lg mb-2">Mobile apps</h2>
        <p className="text-gray-700 mb-4">
          Quisque velit quam, ultricies eu urna a, fermentum sodales libero. Ut congue nisl euismod,
          sagittis lectus id, lobortis magna.
        </p>
        <Button variant="accent" className="mb-2">
          Learn more
        </Button>
      </ActionBox>
    </div>
    <div className="p-4">
      <ActionBox image="/images/pexels-dids-3844788.jpg">
        <h2 className="font-semibold text-lg mb-2">Art &amp; illustrations</h2>
        <p className="text-gray-700 mb-4">
          Velit quam, ultricies a, fermentum sodales libero. Ut congue nisl euismod, sagittis lectus
          id, lobortis lorem nulla magna dolor.
        </p>
        <Button variant="secondary" className="mb-2">
          Learn more
        </Button>
      </ActionBox>
    </div>
  </Layout>
);

export default Page;
