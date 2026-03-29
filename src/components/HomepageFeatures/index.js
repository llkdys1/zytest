import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '1',
    img: require('@site/static/img/z46.jpg').default,
    description: (
      <>
        00000.
      </>
    ),
  },
  {
    title: '2',
      img: require('@site/static/img/fac.jpg').default,
    description: (
      <>
        111111.
      </>
    ),
  },
  {
    title: '3',
    img: require('@site/static/img/laf.jpg').default,
    description: (
      <>
        2222.
      </>
    ),
  },
];

function Feature({Svg,img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          {img ? (
              <img src={img} className={styles.featureImg} />
          ) : (
              <Svg className={styles.featureSvg} role="img" />
          )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
