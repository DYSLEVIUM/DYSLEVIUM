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
      </Head>

      {/* header */}
      <>
        <Navbar />
        <Progressbar />
      </>

      <main>
        <motion.div
          initial={{ opacity: 0, translateY: 25 }}
          animate={{ opacity: 1, translateY: 0 }}
          className={styles.container}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          mollitia sint facilis eum quo neque suscipit veniam at inventore quae,
          voluptatum, expedita quis libero. Cum praesentium, quia repudiandae
          est corrupti eos, eaque ipsam illo expedita, totam dolorem? Eius
          laudantium necessitatibus rem consequuntur, consectetur aspernatur
          doloremque quos nemo earum placeat saepe cumque quidem perspiciatis et
          eos dicta! Eaque sit dolorem voluptate quisquam corrupti sunt, maiores
          commodi assumenda, ab consectetur provident officia, nam voluptatem
          harum. Accusantium numquam veritatis repellendus! Magni enim harum
          officiis esse voluptatum? Vitae quasi blanditiis animi omnis
          laboriosam! Earum provident ut, minima sint quo, esse cupiditate quos
          iusto aliquam, nesciunt architecto laboriosam adipisci enim ab
          voluptate! Nihil illum asperiores placeat vitae consequatur omnis
          debitis, explicabo sunt, laborum tempora maiores dolorum aliquam,
          mollitia praesentium ut dolores perspiciatis molestiae! Reprehenderit,
          sapiente commodi officia rerum eveniet fugiat quae sit numquam
          exercitationem nihil accusamus voluptate maiores facere ut
          voluptatibus officiis voluptatum, dolorem nisi quis tempora dolores?
          Asperiores expedita provident tempore facere nulla ab laborum corporis
          error modi tenetur suscipit debitis, dolore architecto? Dolore
          dignissimos explicabo eos quam error quisquam optio corrupti quos
          voluptates numquam sunt ad veritatis illum odit deleniti delectus
          excepturi perspiciatis aliquid modi, laboriosam reiciendis harum
          beatae maiores! Doloribus id laborum consequatur earum, error
          voluptate! Delectus velit iusto eum autem porro, ex aperiam ipsa
          numquam maiores inventore praesentium beatae tempore adipisci debitis
          commodi, nostrum ab corrupti odit saepe officia? A unde ex adipisci
          natus harum distinctio consectetur, temporibus possimus explicabo. Aut
          eveniet nobis, sapiente repellendus obcaecati amet reiciendis rem!
          Aperiam veritatis dolor reprehenderit beatae aliquam rerum nihil
          dignissimos. Sequi itaque rerum magni? Unde ab ex porro aliquid
          recusandae molestias asperiores nam blanditiis nesciunt! Accusantium
          dolore recusandae aut cupiditate modi suscipit adipisci totam animi!
          Debitis soluta pariatur quibusdam sit illum at laboriosam nemo
          adipisci ad provident possimus magni voluptas nisi doloribus similique
          sed facere molestias saepe, mollitia officia non vitae neque? Neque
          sequi, cumque quo delectus numquam officia repudiandae nam harum
          sapiente libero aliquid molestiae vel accusamus nisi dolores. Ad est
          dolorem adipisci officiis sapiente eius reiciendis praesentium
          dignissimos earum doloremque fugit quibusdam omnis quam ut deserunt
          pariatur eligendi consectetur iusto officia labore ipsam, molestiae
          autem nisi! Explicabo blanditiis, itaque dicta ea iure, non
          perspiciatis eos reprehenderit pariatur est nihil dolor recusandae
          animi eum odit, beatae nulla consequatur quasi nostrum natus saepe
          error. Illo velit fuga natus vitae porro, voluptatibus eaque minus
          pariatur. Sequi aliquam aliquid perferendis quos corporis, rerum, sunt
          eius, cupiditate ipsam quae atque? Voluptates nihil aspernatur error
          aliquid molestias a itaque reiciendis inventore similique omnis
          sapiente veritatis id quisquam excepturi nemo earum, dolorem
          recusandae repudiandae? Iure, recusandae cupiditate incidunt veritatis
          nihil nisi commodi ipsa minus quia quae nesciunt, minima aliquid
          numquam dolor. Eius, fugiat voluptatum unde officiis vel impedit
          exercitationem rerum quas consequatur non error temporibus, odit
          mollitia cum voluptatibus? Corporis, magni quos, velit obcaecati
          voluptas officiis illo autem nihil veniam esse ad, qui delectus
          exercitationem fugit harum molestias ea sunt? Quibusdam, soluta
          eligendi numquam earum quasi, eveniet placeat unde quis hic ducimus,
          laudantium inventore vel exercitationem sequi impedit veniam laborum
          consectetur deserunt nesciunt aperiam. Cumque magni, eum harum
          reprehenderit beatae sequi eveniet facilis nemo laboriosam ducimus ea
          accusantium, voluptas pariatur natus alias perferendis accusamus!
          Ipsam culpa doloremque odio voluptas numquam quibusdam ut incidunt,
          quasi rem quaerat, officiis illo! Incidunt ullam culpa pariatur natus
          similique, porro nulla esse nemo sapiente voluptatibus autem
          perspiciatis obcaecati placeat sed quo quae repellendus officia
          reiciendis accusantium deserunt illo? Harum velit odit officia
          distinctio atque repellendus aut tempora laborum porro. Illum itaque
          tempore cupiditate est, quos fugiat reprehenderit suscipit. Minima,
          facilis repellendus? Id quos, modi nostrum excepturi repellat est
          libero inventore nobis quam sequi numquam blanditiis unde voluptatem
          minima laborum harum. Harum dicta obcaecati laudantium, cupiditate
          laborum natus aspernatur optio neque earum delectus amet nihil enim
          consectetur culpa molestiae minus asperiores, quasi quaerat quam et.
          Fugit hic, pariatur culpa nam odio non, in eveniet explicabo maiores
          soluta quaerat? Voluptatem non eveniet, praesentium deleniti iure,
          aliquam doloremque quidem id amet laudantium voluptatum dolorum
          nostrum quam ipsum debitis et adipisci ad. Fugit, error. Ratione esse
          vel illo deserunt quam sit itaque in quis aut, debitis sequi
          consequuntur inventore illum aliquid voluptatem repellendus soluta
          repudiandae sunt recusandae doloribus. Enim nam aperiam vero non
          consequuntur error fugiat saepe magni tenetur, laboriosam rerum dolor
          omnis aliquid pariatur! Quibusdam laudantium molestiae eveniet facere
          minus obcaecati corporis dignissimos aspernatur modi laboriosam.
          Repellat natus dolorum atque facere, deleniti odio rerum sapiente.
          Nulla fugit quisquam, commodi similique doloremque a facilis incidunt
          quod. Provident aliquam error quas velit eligendi quos possimus ullam
          iusto iure itaque, at dolor sed earum distinctio consequatur
          perferendis neque delectus consequuntur nobis fuga, saepe quo ipsa.
          Necessitatibus vel nulla eos optio facere tempore repellat! Vitae iste
          non repellendus. Dolore labore incidunt molestias est placeat quam
          dolor fugiat alias, rerum maiores debitis ex quod autem odit rem
          consequatur, aliquid veniam neque accusantium libero necessitatibus
          aspernatur qui? Temporibus molestiae eum cumque explicabo animi? Modi
          itaque voluptate consequuntur nulla, magni eveniet numquam magnam nemo
          vel reiciendis voluptatem architecto repudiandae rem quidem omnis est,
          dolorem aperiam! Praesentium maiores voluptates molestias tenetur est
          laboriosam ut numquam vero mollitia aut voluptate repudiandae
          aspernatur, quas velit voluptatibus. Molestiae tempora quis laboriosam
          officia et illum rem aperiam consequatur molestias, maxime sit quidem
          qui ut temporibus non nihil dicta minima dolore harum quasi possimus
          laborum? Voluptates minima aspernatur ea ab enim! Ea nihil minima
          voluptatibus illo. Accusantium voluptatibus rem quaerat error eum in
          qui perferendis, doloribus modi. Id nemo laborum ab. Totam, dolore
          consectetur? Commodi maxime voluptatibus magnam labore dolorem,
          possimus, cupiditate accusantium libero facilis doloremque itaque
          quaerat reprehenderit, placeat suscipit? Aspernatur sit facere dolorem
          odit voluptatem vel vero illo harum facilis architecto eius, et fuga,
          ipsa excepturi odio est! Atque fugit non magni enim minus vero placeat
          ipsam explicabo ut aliquid culpa, a architecto eius quae ducimus
          adipisci! Delectus commodi placeat nam, fugit unde nulla esse possimus
          minus fuga pariatur qui inventore magnam veniam accusamus incidunt
          illo facilis odit eum reiciendis saepe. Tempore placeat maiores
          obcaecati, fuga rerum, rem accusantium voluptatem odio impedit modi
          error. Maxime, sit itaque.
        </motion.div>
      </main>
    </div>
  );
}
