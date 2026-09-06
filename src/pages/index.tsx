import styles from './index.module.scss';

interface FeatureCardProps {
  title: string,
  children: React.ReactNode
}

const FeatureCard = ({ title, children }: FeatureCardProps) => {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  );
};

export default () => {
  return (
    <>
    	<header>
        <h1>SessNetwork</h1>
        <p>Build Next Generation Interconnected Network Without Border...</p>
      </header>
      <section className={styles.featureCards}>
      	<FeatureCard title="Freedom">100% powered by Free/Libre Software. Unlimited possibility for all.</FeatureCard>
      	<FeatureCard title="Decentralized">Web 3 technologies advocators. Decentralization and stability.</FeatureCard>
      	<FeatureCard title="Experience">Old-fashioned but advanced strategy. Classical and Elegant experience.</FeatureCard>
      </section>
      <section>
      	<h2>Services</h2>
      	<p><b>Software Development: </b>...</p>
      	<p><b>Network Solutions: </b>...</p>
      	<p><b>Open Infrastructure: </b>...</p>
      </section>
      <section>
      	<h2>Partners</h2>
      </section>
      <section>
      	<h2>Feedbacks</h2>
      </section>
      <section>
      	<h2>Sales</h2>
      </section>
    </>
  )
};
