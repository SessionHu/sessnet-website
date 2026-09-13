import type React from 'react';
import { Link } from 'react-router-dom';
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

interface ScrollListProps {
  pl: [string, string, any?][];
}

const ScrollList = ({ pl }: ScrollListProps) => {
  for (let i = pl.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pl[i], pl[j]] = [pl[j], pl[i]];
  }
	return (
    <div className={styles.scrollList}>
      <ul>
        {pl.concat(pl).map((e, i) => {
          return (
            <li key={i}>{
              e[0] === 'p' ? <img src={e[1]} style={e[2]} /> : e[1]
            }</li>
          );
        })}
      </ul>
    </div>
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
        <p><b>Software Development: </b>Over 6 years of development experience. High performance and cross-platform and device compatibility.</p>
        <p><b>Network Solutions: </b>Top participant in the dn42 internet and well-known for excellent network quality and architecture.</p>
        <p><b>Open Infrastructure: </b>Open and transparent infrastructure help you defend your security and freedom.</p>
      </section>
      <section>
        <h2>Partners</h2>
        <ScrollList pl={[
          ['p', 'https://dn42.li/dn42.svg', {height:'200%',transform:'translateY(-25%)'}],
          ['p', 'https://raw.githubusercontent.com/NeoCloud/NeoNetwork/master/logo.png'],
          ['p', 'https://peeringdb-media-prod.s3.amazonaws.com/media/logos_user_supplied/network-33599-7fa2825b.jpg', {height:'80%'}],
          ['p', 'https://peeringdb-media-prod.s3.amazonaws.com/media/logos_user_supplied/organization-42473-dc42bfbc.png', {height:'80%'}],
          ['p', 'https://dn42.burble.com/burble-dn42-64.png', {height:'30%'}],
          ['p', 'https://iedon.net/favicon.ico'],
          ['p', 'https://blog.sherpherd.net/img/sernet-logo-small.svg'],
          ['p', 'https://avatars.githubusercontent.com/u/88564180?s=200&v=4'],
          ['p', 'https://nosla42.pmman.tech/storage/logo-light.webp'],
          ['p', 'https://he.net/images/helogo.gif', {height:'40%'}],
          ['p', 'https://cloud.nbdnet.com/storage/logo-light.webp', {height:'50%'}],
          ['p', 'https://cogentco.com/files/images/c2020/cogentco_logo.png', {height:'40%'}],
          ['p', 'https://static.xhustudio.eu.org/images/svg/CF_logomark.svg', {height:'40%'}],
          ['p', 'https://intranet.services/favicon.svg'],
          ['p', '/favicon.svg'],
          ['p', 'https://szsyzx.cn/assets/icon.svg'],
          ['p', 'https://bafybeihkkofkadcizwqqy6go2vy6g4ipmw7d5deeiaf2qfy2tt6z5wzoxa.ipfs.dget.top?filename=he-xp-network-logo.jpg', {height:'90%'}],
          ['p', 'https://www.constant.com/favicons/favicon-96.png', {height:'80%'}],
        ]}/>
      </section>
      <section>
        <h2>Feedbacks</h2>
        <ScrollList pl={[
          ['p', 'https://bafybeiay5gtrxmcysmtzouirxlpxphdxnqvjr542kwfeylfv57thuybile.ipfs.dget.top?filename=kioubit-use-sess-for-trace.webp'],
          ['p', 'https://bafybeig6gprd5quemycf4ogqy4wwbsvofz2x34yqmrhehq24ximdprnzrq.ipfs.dget.top?filename=kioubit-always-like-sess.webp'],
          ['p', 'https://bafybeihhce7xeaoavqgfauierjqnb4bevdyoskjlqfizoqfb44gjlalt5i.ipfs.dget.top?filename=cyancc-please-join-yukisino-ix.webp'],
          ['p', 'https://bafybeic7ury5cowwcqvtrjnmdwv4szjylcot5dsbe43xcipbi66cddxx6i.ipfs.dget.top?filename=nedifinita-driven-by-sess.webp'],
        ]}/>
      </section>
      <section>
        <h2>Sales</h2>
        <p>Matrix Group: <Link to="https://matrix.to/#/!YwqwnCuNtSOyWOCytE:matrix.org">!YwqwnCuNtSOyWOCytE:matrix.org</Link></p>
        <p>E-Mail: <Link to="mailto:sales@sess.moe">sales@sess.moe</Link></p>
      </section>
    </>
  )
};
