import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const title = '404';

const NotFoundPage = (): JSX.Element => (
  <Layout title={title}>
    <div className="container">
      <h1>Not found</h1>
      <p>You just hit a route that doesn't exist</p>
    </div>
  </Layout>
);

export const Head = () => <SEO title={title} />;

export default NotFoundPage;
