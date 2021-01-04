import Head from 'next/head';
import styles from '../styles/App.module.scss';

import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';

import { motion } from 'framer-motion';

export default function App() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pushpakant Behera - Portfolio</title>
      </Head>

      {/* header */}
      <>
        <Navbar />
        <Progressbar />
      </>

      <main>
        {/* <img
          src="/profile.png"
          alt="image"
          style={{ width: '100%', height: '100%' }}
        /> */}
        <img
          src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
          width="50px"
          alt="hi"
          style={{ margin: '1rem', filter: 'saturate(150%)' }}
        />
        <motion.div
          initial={{ opacity: 0, translateY: 25 }}
          animate={{ opacity: 1, translateY: 0 }}
          className={styles.container}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil
          illo dolores nemo inventore tempora exercitationem, quo ex, aliquam
          excepturi corporis at optio esse ut perferendis voluptas minus?
          Aliquam reprehenderit aperiam possimus commodi rerum voluptas. Ipsa
          modi iusto delectus dolores provident perferendis dicta repellendus a
          error aliquid fugit soluta voluptates consequatur tenetur ex quidem
          impedit quisquam excepturi amet, sint voluptate odio. Nobis, quidem ea
          error placeat amet tenetur dignissimos incidunt. Esse modi perferendis
          suscipit odit sed deleniti id. Accusantium ullam ab, officiis earum
          quisquam saepe voluptas repudiandae dignissimos odio nostrum quia
          neque. Itaque nobis inventore neque quisquam et deserunt nisi numquam
          debitis non molestiae dolor, voluptatibus sunt tempora? Excepturi,
          animi aut tempora dolorum, nemo saepe sequi quibusdam blanditiis dicta
          expedita maxime adipisci sapiente assumenda quam est consequatur sint
          corporis sed voluptate, molestias voluptatum odit velit iure? Atque
          doloremque cumque autem voluptate nihil reiciendis, illum consequatur
          veritatis eius ad harum ab impedit, quas, pariatur fuga sed commodi
          laboriosam iusto quidem ex tempore magnam amet eos? Quibusdam harum
          corrupti facere. Veniam non minima porro! Est nihil enim blanditiis
          quae molestias, quibusdam dolores totam eaque minima placeat eligendi
          aut eius aliquam repellat eos in culpa soluta modi earum facilis rem
          quas doloremque ratione aperiam! Reprehenderit aspernatur nesciunt
          voluptatem ab in architecto consectetur asperiores doloremque, et modi
          eligendi iste cupiditate dicta sapiente illum nostrum, consequuntur
          ullam commodi eaque iure. Aspernatur dolore, repellat, perferendis
          laudantium maiores, culpa nisi hic expedita veniam id alias vero
          repudiandae porro exercitationem magni distinctio ab praesentium eius
          deserunt aliquam dicta saepe quo sed eos. Error impedit obcaecati
          dolore inventore dicta repellendus placeat dolor at numquam sed
          nesciunt quod quae, maiores quibusdam provident officia
          necessitatibus! Incidunt harum tenetur velit voluptatum accusamus aut
          rerum, asperiores sed quae dolores quam, saepe fugiat veritatis
          dolorum quos optio? Doloribus, mollitia ea ut error dolorum saepe
          animi omnis inventore quidem ipsa fugiat assumenda repellat quod qui
          placeat deleniti, nostrum veniam eos veritatis iusto facilis
          perferendis nihil dolore. Fugit commodi nemo placeat animi numquam ex
          fugiat ipsa vero consequuntur facere odio quidem esse est voluptates,
          repudiandae iste ab recusandae quos laudantium quae quibusdam.
          Provident nam placeat omnis aperiam quaerat, ea vitae natus ullam
          corporis quasi et velit voluptatum nostrum cum. Tempore corporis
          excepturi harum magnam porro similique at, praesentium nesciunt modi
          fugiat odio distinctio, voluptates perferendis voluptas repellendus
          numquam doloremque aliquam fugit minima quo! Veritatis impedit ab
          ullam deserunt autem repudiandae quaerat totam adipisci, quidem
          facilis illum labore possimus laboriosam facere optio exercitationem
          nam, tenetur mollitia, provident libero nulla. Quod corrupti eligendi
          tempore officia delectus distinctio vero architecto dolores animi
          inventore quaerat praesentium rem, assumenda est quas provident ipsa
          dolorum incidunt et magnam illo. Architecto fugiat praesentium
          temporibus dolore voluptatum libero cum. Quasi beatae vel quos sit,
          tenetur illo amet libero facilis eaque numquam possimus provident
          accusamus. Dolore rem optio, repellendus neque nulla quaerat
          voluptatibus quidem aliquam veniam dolorum repellat debitis numquam
          velit aperiam corrupti unde enim doloribus ipsa assumenda
          necessitatibus? Officia omnis excepturi autem, consectetur facilis ex
          laborum ea, eius inventore dolorem at blanditiis expedita, nobis
          incidunt saepe quos? Magni commodi eius culpa nostrum fugit fuga velit
          atque, facilis ipsam. Nisi dolorem aut eius quod, commodi eaque eos,
          laboriosam expedita, rerum voluptate quam quasi. Nisi quaerat
          praesentium dicta fuga atque quasi beatae est minus placeat quidem.
          Totam amet officiis possimus aspernatur alias earum, fugiat dolores,
          quibusdam odit, qui aperiam numquam expedita ab quisquam deserunt.
          Maiores consequatur asperiores architecto voluptate exercitationem
          aliquid harum inventore ducimus magnam laborum. Fuga atque eaque
          similique culpa perferendis eveniet odit possimus tempora id. Eaque
          officiis deserunt voluptatum consectetur, quisquam quaerat modi illum
          sit animi quam, dolor quia nihil quasi deleniti exercitationem unde
          cumque, earum dolores perspiciatis rerum facilis consequatur quos? Non
          praesentium ut quis eligendi tempora, deleniti vel maiores nesciunt
          voluptate vero quisquam saepe doloremque quia eveniet dolorem,
          reprehenderit asperiores suscipit cupiditate. Tenetur provident
          assumenda nihil. Hic iusto vel temporibus magnam cumque ab, atque illo
          qui officiis cum ea aperiam sit ad culpa inventore animi! Soluta
          excepturi tempore doloremque, officia ut quibusdam eveniet
          exercitationem mollitia rerum ipsam odit. Molestiae beatae veniam,
          numquam, hic eligendi excepturi similique adipisci amet iusto vitae
          eius autem suscipit nulla sed dicta fugiat, perferendis eos velit
          voluptas culpa ipsum fugit tempora? Numquam dolores, quas incidunt
          voluptatem exercitationem distinctio aspernatur tempora atque magni
          minus nesciunt nemo ab laborum rem aperiam dicta temporibus, ipsa,
          eius obcaecati cum. Quisquam voluptates provident iste alias
          molestiae. Voluptates molestias, illum aperiam odit vero eveniet
          tempora delectus nulla voluptatum nam, odio dolorem, nemo autem quod
          reprehenderit repellat mollitia unde? Voluptate praesentium ipsum vero
          delectus cupiditate eum perferendis obcaecati laboriosam natus
          accusamus qui, ullam, recusandae blanditiis nam dolore quia est in
          placeat accusantium sequi. Tempora ab officiis commodi saepe
          necessitatibus omnis labore, fuga dolores error? Recusandae quidem
          expedita adipisci cum consequatur commodi sunt quibusdam iure omnis!
          Earum numquam mollitia praesentium similique ipsa quaerat animi
          doloremque, atque fugit accusantium unde eum est, nam incidunt
          provident delectus blanditiis voluptatibus eius veritatis odit?
          Debitis atque amet quia accusamus, possimus necessitatibus ad beatae,
          architecto, ipsum cumque hic! Autem deleniti sapiente voluptatem a
          laborum quidem modi ipsum ipsa maxime sit fuga aspernatur atque, quasi
          eveniet corporis, magnam praesentium quia aliquam! Praesentium est
          tempora minima aliquam labore voluptas esse officia accusamus non
          aliquid. Eaque architecto vitae ratione voluptas placeat non sunt
          obcaecati ex! Impedit, debitis quo explicabo reiciendis porro tempore
          officia. Est velit tenetur ipsum quo quidem error alias tempore,
          incidunt tempora consequuntur reprehenderit sit facilis minima nulla.
          Deleniti inventore distinctio pariatur voluptate velit commodi facere,
          reiciendis, eveniet totam placeat nihil a laborum. Atque voluptates
          ipsum molestias porro laborum quod cupiditate laudantium dignissimos
          vel. Laborum sit vero tempora fuga, odit cum sunt adipisci eaque
          eligendi dolore repellat ut, quam veniam, dolor totam quia! Animi
          neque voluptates praesentium officia vero consequatur earum
          perspiciatis itaque error reiciendis ad totam, nostrum rem esse
          laborum ipsam eaque atque, dolore assumenda! Eligendi iure possimus
          eum dicta pariatur nostrum distinctio suscipit natus officia
          voluptatem tempora facere, atque nemo cum reprehenderit, nam quo?
          Velit at minima harum, quae excepturi ab nesciunt pariatur odio
          corrupti, atque inventore unde, consequuntur suscipit.
        </motion.div>
      </main>
    </div>
  );
}
