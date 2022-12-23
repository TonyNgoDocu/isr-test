import styles from './index.module.css';

export function Index({time}) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <p>
        It is {time}
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const time = new Date().toString();
  // eslint-disable-next-line no-console
  console.log('Current Time: ', time);
  return { props: { time }, revalidate: 60 };
}

export default Index;
