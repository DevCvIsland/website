import Image from 'next/image';
import styles from '../styles/Attributes.module.css';
import { routes } from '../utils/routes';

const WhaleImage: React.FunctionComponent<{ whaleID: number; type: string }> =
  ({ whaleID, type }) => {
    return (
      <>
        <a target="_blank" href={`${routes.internal.whale}/${whaleID}`}>
          <Image
            src={`/images/${type}/${whaleID}.png`}
            width="50px"
            height="50px"
            title={`Whale #${whaleID}`}
          ></Image>
        </a>
      </>
    );
  };

const Attributes = () => {
  return (
    <>
      <h1 className={styles.title}>Types and Attributes</h1>
      <h3 className={styles.whaleTypes}>Whale Types</h3>
      <table className={styles.table}>
        <tr>
          <th className={styles.columName}>Attribute</th>
          <th className={styles.columName}>#</th>
          <th className={styles.columName}>Avg Sale</th>
          <th className={styles.columName}>Cheapest</th>
          <th className={styles.columName}>More Examples</th>
        </tr>
        <tr>
          <td className={styles.attribute}>Alien</td>
          <td className={styles.columnElement}>262</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={1594} type="aliens" />
            <WhaleImage whaleID={578} type="aliens" />
            <WhaleImage whaleID={2878} type="aliens" />
            <WhaleImage whaleID={3063} type="aliens" />
            <WhaleImage whaleID={1813} type="aliens" />
            <WhaleImage whaleID={3318} type="aliens" />
            <WhaleImage whaleID={183} type="aliens" />
            <WhaleImage whaleID={1108} type="aliens" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Ape</td>
          <td className={styles.columnElement}>508</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={1170} type="apes" />
            <WhaleImage whaleID={2730} type="apes" />
            <WhaleImage whaleID={589} type="apes" />
            <WhaleImage whaleID={220} type="apes" />
            <WhaleImage whaleID={1871} type="apes" />
            <WhaleImage whaleID={2276} type="apes" />
            <WhaleImage whaleID={3041} type="apes" />
            <WhaleImage whaleID={406} type="apes" />
          </td>
        </tr>

        <tr>
          <td className={styles.attribute}>Zombie</td>
          <td className={styles.columnElement}>1040</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={189} type="zombies" />
            <WhaleImage whaleID={320} type="zombies" />
            <WhaleImage whaleID={364} type="zombies" />
            <WhaleImage whaleID={3268} type="zombies" />
            <WhaleImage whaleID={1465} type="zombies" />
            <WhaleImage whaleID={2185} type="zombies" />
            <WhaleImage whaleID={687} type="zombies" />
            <WhaleImage whaleID={34} type="zombies" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Normal</td>
          <td className={styles.columnElement}>1540</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={72} type="normals" />
            <WhaleImage whaleID={666} type="normals" />
            <WhaleImage whaleID={855} type="normals" />
            <WhaleImage whaleID={1306} type="normals" />
            <WhaleImage whaleID={2111} type="normals" />
            <WhaleImage whaleID={2282} type="normals" />
            <WhaleImage whaleID={2474} type="normals" />
            <WhaleImage whaleID={2634} type="normals" />
          </td>
        </tr>
      </table>

      <h3 className={styles.whaleTypes}>Attributes</h3>
      <table className={styles.table}>
        <tr>
          <th className={styles.columName}>Attribute</th>
          <th className={styles.columName}>#</th>
          <th className={styles.columName}>Avg Sale</th>
          <th className={styles.columName}>Cheapest</th>
          <th className={styles.columName}>More Examples</th>
        </tr>
        <tr>
          <td className={styles.attribute}>Police Cap</td>
          <td className={styles.columnElement}>53</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={884} type="police-cap" />
            <WhaleImage whaleID={927} type="police-cap" />
            <WhaleImage whaleID={1085} type="police-cap" />
            <WhaleImage whaleID={1529} type="police-cap" />
            <WhaleImage whaleID={78} type="police-cap" />
            <WhaleImage whaleID={2505} type="police-cap" />
            <WhaleImage whaleID={2673} type="police-cap" />
            <WhaleImage whaleID={3196} type="police-cap" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Fez</td>
          <td className={styles.columnElement}>163</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={297} type="fez" />
            <WhaleImage whaleID={470} type="fez" />
            <WhaleImage whaleID={860} type="fez" />
            <WhaleImage whaleID={1253} type="fez" />
            <WhaleImage whaleID={1447} type="fez" />
            <WhaleImage whaleID={2631} type="fez" />
            <WhaleImage whaleID={2713} type="fez" />
            <WhaleImage whaleID={3313} type="fez" />
          </td>
        </tr>

        <tr>
          <td className={styles.attribute}>Do Rag</td>
          <td className={styles.columnElement}>175</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={189} type="do-rag" />
            <WhaleImage whaleID={838} type="do-rag" />
            <WhaleImage whaleID={1177} type="do-rag" />
            <WhaleImage whaleID={1539} type="do-rag" />
            <WhaleImage whaleID={2264} type="do-rag" />
            <WhaleImage whaleID={2466} type="do-rag" />
            <WhaleImage whaleID={2407} type="do-rag" />
            <WhaleImage whaleID={3035} type="do-rag" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Cowboy Hat</td>
          <td className={styles.columnElement}>175</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={364} type="cowboy-hat" />
            <WhaleImage whaleID={481} type="cowboy-hat" />
            <WhaleImage whaleID={3009} type="cowboy-hat" />
            <WhaleImage whaleID={1302} type="cowboy-hat" />
            <WhaleImage whaleID={1883} type="cowboy-hat" />
            <WhaleImage whaleID={1822} type="cowboy-hat" />
            <WhaleImage whaleID={2108} type="cowboy-hat" />
            <WhaleImage whaleID={931} type="cowboy-hat" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Knitted Cap</td>
          <td className={styles.columnElement}>181</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={823} type="knitted-cap" />
            <WhaleImage whaleID={1044} type="knitted-cap" />
            <WhaleImage whaleID={1306} type="knitted-cap" />
            <WhaleImage whaleID={1144} type="knitted-cap" />
            <WhaleImage whaleID={1928} type="knitted-cap" />
            <WhaleImage whaleID={2599} type="knitted-cap" />
            <WhaleImage whaleID={2551} type="knitted-cap" />
            <WhaleImage whaleID={3169} type="knitted-cap" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Tiara</td>
          <td className={styles.columnElement}>182</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={367} type="tiara" />
            <WhaleImage whaleID={604} type="tiara" />
            <WhaleImage whaleID={1019} type="tiara" />
            <WhaleImage whaleID={1279} type="tiara" />
            <WhaleImage whaleID={1309} type="tiara" />
            <WhaleImage whaleID={1653} type="tiara" />
            <WhaleImage whaleID={2391} type="tiara" />
            <WhaleImage whaleID={2474} type="tiara" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Cap</td>
          <td className={styles.columnElement}>184</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={248} type="cap" />
            <WhaleImage whaleID={946} type="cap" />
            <WhaleImage whaleID={1285} type="cap" />
            <WhaleImage whaleID={973} type="cap" />
            <WhaleImage whaleID={1672} type="cap" />
            <WhaleImage whaleID={1837} type="cap" />
            <WhaleImage whaleID={1677} type="cap" />
            <WhaleImage whaleID={2844} type="cap" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Top Hat</td>
          <td className={styles.columnElement}>186</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={84} type="top-hat" />
            <WhaleImage whaleID={1098} type="top-hat" />
            <WhaleImage whaleID={1272} type="top-hat" />
            <WhaleImage whaleID={1316} type="top-hat" />
            <WhaleImage whaleID={1415} type="top-hat" />
            <WhaleImage whaleID={1436} type="top-hat" />
            <WhaleImage whaleID={1914} type="top-hat" />
            <WhaleImage whaleID={2217} type="top-hat" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Hat</td>
          <td className={styles.columnElement}>186</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={1194} type="hat" />
            <WhaleImage whaleID={1330} type="hat" />
            <WhaleImage whaleID={1382} type="hat" />
            <WhaleImage whaleID={1465} type="hat" />
            <WhaleImage whaleID={1635} type="hat" />
            <WhaleImage whaleID={1990} type="hat" />
            <WhaleImage whaleID={2111} type="hat" />
            <WhaleImage whaleID={2893} type="hat" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Pilot Helmet</td>
          <td className={styles.columnElement}>187</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={505} type="pilot-helmet" />
            <WhaleImage whaleID={533} type="pilot-helmet" />
            <WhaleImage whaleID={594} type="pilot-helmet" />
            <WhaleImage whaleID={636} type="pilot-helmet" />
            <WhaleImage whaleID={1051} type="pilot-helmet" />
            <WhaleImage whaleID={1502} type="pilot-helmet" />
            <WhaleImage whaleID={2965} type="pilot-helmet" />
            <WhaleImage whaleID={3210} type="pilot-helmet" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Headband</td>
          <td className={styles.columnElement}>189</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={320} type="headband" />
            <WhaleImage whaleID={514} type="headband" />
            <WhaleImage whaleID={682} type="headband" />
            <WhaleImage whaleID={1748} type="headband" />
            <WhaleImage whaleID={1450} type="headband" />
            <WhaleImage whaleID={1857} type="headband" />
            <WhaleImage whaleID={2124} type="headband" />
            <WhaleImage whaleID={2610} type="headband" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Cap Forward</td>
          <td className={styles.columnElement}>191</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={857} type="cap-forward" />
            <WhaleImage whaleID={1170} type="cap-forward" />
            <WhaleImage whaleID={1247} type="cap-forward" />
            <WhaleImage whaleID={1312} type="cap-forward" />
            <WhaleImage whaleID={2201} type="cap-forward" />
            <WhaleImage whaleID={2282} type="cap-forward" />
            <WhaleImage whaleID={2342} type="cap-forward" />
            <WhaleImage whaleID={3111} type="cap-forward" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Fedora</td>
          <td className={styles.columnElement}>271</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={72} type="fedora" />
            <WhaleImage whaleID={162} type="fedora" />
            <WhaleImage whaleID={398} type="fedora" />
            <WhaleImage whaleID={701} type="fedora" />
            <WhaleImage whaleID={803} type="fedora" />
            <WhaleImage whaleID={2950} type="fedora" />
            <WhaleImage whaleID={3011} type="fedora" />
            <WhaleImage whaleID={3332} type="fedora" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Tassle Hat</td>
          <td className={styles.columnElement}>275</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={36} type="tassle-hat" />
            <WhaleImage whaleID={150} type="tassle-hat" />
            <WhaleImage whaleID={158} type="tassle-hat" />
            <WhaleImage whaleID={1804} type="tassle-hat" />
            <WhaleImage whaleID={1860} type="tassle-hat" />
            <WhaleImage whaleID={2062} type="tassle-hat" />
            <WhaleImage whaleID={2730} type="tassle-hat" />
            <WhaleImage whaleID={3206} type="tassle-hat" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Beanie</td>
          <td className={styles.columnElement}>278</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={568} type="beanie" />
            <WhaleImage whaleID={677} type="beanie" />
            <WhaleImage whaleID={861} type="beanie" />
            <WhaleImage whaleID={1063} type="beanie" />
            <WhaleImage whaleID={1624} type="beanie" />
            <WhaleImage whaleID={2185} type="beanie" />
            <WhaleImage whaleID={2562} type="beanie" />
            <WhaleImage whaleID={2604} type="beanie" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Clown Eyes Green</td>
          <td className={styles.columnElement}>286</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={1044} type="clown-eyes-green" />
            <WhaleImage whaleID={1422} type="clown-eyes-green" />
            <WhaleImage whaleID={1719} type="clown-eyes-green" />
            <WhaleImage whaleID={2800} type="clown-eyes-green" />
            <WhaleImage whaleID={2878} type="clown-eyes-green" />
            <WhaleImage whaleID={2886} type="clown-eyes-green" />
            <WhaleImage whaleID={2956} type="clown-eyes-green" />
            <WhaleImage whaleID={3237} type="clown-eyes-green" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Viking Hat</td>
          <td className={styles.columnElement}>314</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={137} type="viking-hat" />
            <WhaleImage whaleID={146} type="viking-hat" />
            <WhaleImage whaleID={1768} type="viking-hat" />
            <WhaleImage whaleID={1773} type="viking-hat" />
            <WhaleImage whaleID={1832} type="viking-hat" />
            <WhaleImage whaleID={2107} type="viking-hat" />
            <WhaleImage whaleID={2288} type="viking-hat" />
            <WhaleImage whaleID={2416} type="viking-hat" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Clown Eyes Blue</td>
          <td className={styles.columnElement}>380</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={724} type="clown-eyes-blue" />
            <WhaleImage whaleID={740} type="clown-eyes-blue" />
            <WhaleImage whaleID={864} type="clown-eyes-blue" />
            <WhaleImage whaleID={1016} type="clown-eyes-blue" />
            <WhaleImage whaleID={1631} type="clown-eyes-blue" />
            <WhaleImage whaleID={1653} type="clown-eyes-blue" />
            <WhaleImage whaleID={2683} type="clown-eyes-blue" />
            <WhaleImage whaleID={3268} type="clown-eyes-blue" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Vape</td>
          <td className={styles.columnElement}>469</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={1308} type="vape" />
            <WhaleImage whaleID={1533} type="vape" />
            <WhaleImage whaleID={2174} type="vape" />
            <WhaleImage whaleID={2547} type="vape" />
            <WhaleImage whaleID={2683} type="vape" />
            <WhaleImage whaleID={2745} type="vape" />
            <WhaleImage whaleID={2750} type="vape" />
            <WhaleImage whaleID={3218} type="vape" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Blue Eye Shadow</td>
          <td className={styles.columnElement}>486</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={50} type="blue-eye-shadow" />
            <WhaleImage whaleID={367} type="blue-eye-shadow" />
            <WhaleImage whaleID={398} type="blue-eye-shadow" />
            <WhaleImage whaleID={546} type="blue-eye-shadow" />
            <WhaleImage whaleID={604} type="blue-eye-shadow" />
            <WhaleImage whaleID={817} type="blue-eye-shadow" />
            <WhaleImage whaleID={823} type="blue-eye-shadow" />
            <WhaleImage whaleID={2991} type="blue-eye-shadow" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Pipe</td>
          <td className={styles.columnElement}>497</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={49} type="pipe" />
            <WhaleImage whaleID={158} type="pipe" />
            <WhaleImage whaleID={1450} type="pipe" />
            <WhaleImage whaleID={1558} type="pipe" />
            <WhaleImage whaleID={1938} type="pipe" />
            <WhaleImage whaleID={2391} type="pipe" />
            <WhaleImage whaleID={2793} type="pipe" />
            <WhaleImage whaleID={2893} type="pipe" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Purple Eye Shadow</td>
          <td className={styles.columnElement}>508</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={49} type="purple-eye-shadow" />
            <WhaleImage whaleID={57} type="purple-eye-shadow" />
            <WhaleImage whaleID={60} type="purple-eye-shadow" />
            <WhaleImage whaleID={66} type="purple-eye-shadow" />
            <WhaleImage whaleID={1000} type="purple-eye-shadow" />
            <WhaleImage whaleID={1557} type="purple-eye-shadow" />
            <WhaleImage whaleID={2631} type="purple-eye-shadow" />
            <WhaleImage whaleID={3147} type="purple-eye-shadow" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Cigarette</td>
          <td className={styles.columnElement}>518</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={57} type="cigarette" />
            <WhaleImage whaleID={105} type="cigarette" />
            <WhaleImage whaleID={1019} type="cigarette" />
            <WhaleImage whaleID={1051} type="cigarette" />
            <WhaleImage whaleID={1770} type="cigarette" />
            <WhaleImage whaleID={2083} type="cigarette" />
            <WhaleImage whaleID={2113} type="cigarette" />
            <WhaleImage whaleID={3179} type="cigarette" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Eye Mask</td>
          <td className={styles.columnElement}>520</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={51} type="eye-mask" />
            <WhaleImage whaleID={194} type="eye-mask" />
            <WhaleImage whaleID={1019} type="eye-mask" />
            <WhaleImage whaleID={2062} type="eye-mask" />
            <WhaleImage whaleID={2083} type="eye-mask" />
            <WhaleImage whaleID={2745} type="eye-mask" />
            <WhaleImage whaleID={2782} type="eye-mask" />
            <WhaleImage whaleID={2844} type="eye-mask" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>Green Eye Shadow</td>
          <td className={styles.columnElement}>555</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={52} type="green-eye-shadow" />
            <WhaleImage whaleID={56} type="green-eye-shadow" />
            <WhaleImage whaleID={636} type="green-eye-shadow" />
            <WhaleImage whaleID={759} type="green-eye-shadow" />
            <WhaleImage whaleID={1315} type="green-eye-shadow" />
            <WhaleImage whaleID={2113} type="green-eye-shadow" />
            <WhaleImage whaleID={2174} type="green-eye-shadow" />
            <WhaleImage whaleID={2618} type="green-eye-shadow" />
          </td>
        </tr>
      </table>

      <h3 className={styles.whaleTypes}>Attribute Counts</h3>
      <table className={styles.table}>
        <tr>
          <th className={styles.columName}>Attribute</th>
          <th className={styles.columName}>#</th>
          <th className={styles.columName}>Avg Sale</th>
          <th className={styles.columName}>Cheapest</th>
          <th className={styles.columName}>More Examples</th>
        </tr>
        <tr>
          <td className={styles.attribute}>2 Attributes</td>
          <td className={styles.columnElement}>18</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={1594} type="aliens" />
            <WhaleImage whaleID={578} type="aliens" />
            <WhaleImage whaleID={2878} type="aliens" />
            <WhaleImage whaleID={3063} type="aliens" />
            <WhaleImage whaleID={1813} type="aliens" />
            <WhaleImage whaleID={3318} type="aliens" />
            <WhaleImage whaleID={183} type="aliens" />
            <WhaleImage whaleID={1108} type="aliens" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>3 Attributes</td>
          <td className={styles.columnElement}>413</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={1170} type="apes" />
            <WhaleImage whaleID={2730} type="apes" />
            <WhaleImage whaleID={589} type="apes" />
            <WhaleImage whaleID={220} type="apes" />
            <WhaleImage whaleID={1871} type="apes" />
            <WhaleImage whaleID={2276} type="apes" />
            <WhaleImage whaleID={3041} type="apes" />
            <WhaleImage whaleID={406} type="apes" />
          </td>
        </tr>

        <tr>
          <td className={styles.attribute}>4 Attributes</td>
          <td className={styles.columnElement}>1761</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={189} type="zombies" />
            <WhaleImage whaleID={320} type="zombies" />
            <WhaleImage whaleID={364} type="zombies" />
            <WhaleImage whaleID={3268} type="zombies" />
            <WhaleImage whaleID={1465} type="zombies" />
            <WhaleImage whaleID={2185} type="zombies" />
            <WhaleImage whaleID={687} type="zombies" />
            <WhaleImage whaleID={34} type="zombies" />
          </td>
        </tr>
        <tr>
          <td className={styles.attribute}>5 Attributes</td>
          <td className={styles.columnElement}>1158</td>
          <td className={styles.columnElement}>-</td>
          <td className={styles.columnElement}>-</td>
          <td>
            <WhaleImage whaleID={72} type="normals" />
            <WhaleImage whaleID={666} type="normals" />
            <WhaleImage whaleID={855} type="normals" />
            <WhaleImage whaleID={1306} type="normals" />
            <WhaleImage whaleID={2111} type="normals" />
            <WhaleImage whaleID={2282} type="normals" />
            <WhaleImage whaleID={2474} type="normals" />
            <WhaleImage whaleID={2634} type="normals" />
          </td>
        </tr>
      </table>
    </>
  );
};

export default Attributes;
