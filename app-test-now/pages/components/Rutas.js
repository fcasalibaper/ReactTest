import Link from 'next/link';
import {Button} from '../../styles/base.styles.js';

const Rutas = () => (
  <div>
    <Button primary>
      <Link href="/">
        <a>home Page</a>
      </Link>
    </Button>
    <Button>
      <Link href="/About">
        <a>About Page</a>
      </Link>
    </Button>
  </div>
)

export default Rutas;
