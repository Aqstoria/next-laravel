'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const ScrollbarAutohideDemo = () => {
  const code = `'use client'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function ScrollbarAutohideDemo() {
  return (
    <SimpleBar className="pe-3" style={{ maxWidth: 500, maxHeight: 320 }}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, autem aliquid nisi quia, deserunt atque
        alias amet totam temp aspernatur facilis veritatis repellendus tenetur, inventore ex eaque non omnis
        nostrum! Optio, earum illum unde dolorum illo quasi laboriosam quod alias nesciunt similique qui
        voluptatibus cupid dolor molestias omnis aliquid fuga pariatur fugiat.
      </p>
      <p>
        Ad rem error ipsam suscipit? Nobis reiciendis in quae dicta consequuntur itaque, deleniti explicabo eius
        provident, minus voluptate doloribus porro excepturi saepe! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eum debitis accusantium, culpa soluta numquam dolore dolores, nihil explicabo voluptas
        impedit expedita. Doloribus nulla veniam enim ex.
      </p>
      <p>
        Fugiat, nisi quidem nulla, ex ipsam voluptatem autem illum labore quaerat deleniti ipsa minima est. Facilis,
        iste hic cupiditate ea rerum quam? Hic distinctio nostrum temporibus praesentium ipsum modi laudantium
        eligendi aspernatur eaque explicabo asperiores doloribus nemo in omnis qui, tempora quo molestias maxime
        inventore ex eaque.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, autem aliquid nisi quia, deserunt atque
        alias amet totam temp aspernatur facilis veritatis repellendus tenetur, inventore ex eaque non omnis
        nostrum! Optio, earum illum unde dolorum illo quasi laboriosam quod alias nesciunt similique qui
        voluptatibus cupid dolor molestias omnis aliquid fuga pariatur fugiat.
      </p>
      <p>
        Amet harum blanditiis eligendi a. Unde consequatur eveniet at cumque minus ab voluptates dolorem architecto!
        Alias voluptas optio cupiditate facere? Facere, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptates quia accusamus aliquam temporibus dolorum nobis perspiciatis enim animi dolores corporis,
        doloremque dolore atque minima reprehenderit dignissimos velit nam doloribus fugit.
      </p>
    </SimpleBar>
  )
}`

  return (
    <section id="scrollbar-autohide" className="docs-section">
      <h4>Autohide</h4>
      <DocsComponentDemo code={code}>
        <SimpleBar className="pe-3" style={{ maxWidth: 500, maxHeight: 320 }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, autem aliquid nisi quia, deserunt atque
            alias amet totam temp aspernatur facilis veritatis repellendus tenetur, inventore ex eaque non omnis
            nostrum! Optio, earum illum unde dolorum illo quasi laboriosam quod alias nesciunt similique qui
            voluptatibus cupid dolor molestias omnis aliquid fuga pariatur fugiat.
          </p>
          <p>
            Ad rem error ipsam suscipit? Nobis reiciendis in quae dicta consequuntur itaque, deleniti explicabo eius
            provident, minus voluptate doloribus porro excepturi saepe! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eum debitis accusantium, culpa soluta numquam dolore dolores, nihil explicabo voluptas
            impedit expedita. Doloribus nulla veniam enim ex.
          </p>
          <p>
            Fugiat, nisi quidem nulla, ex ipsam voluptatem autem illum labore quaerat deleniti ipsa minima est. Facilis,
            iste hic cupiditate ea rerum quam? Hic distinctio nostrum temporibus praesentium ipsum modi laudantium
            eligendi aspernatur eaque explicabo asperiores doloribus nemo in omnis qui, tempora quo molestias maxime
            inventore ex eaque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, autem aliquid nisi quia, deserunt atque
            alias amet totam temp aspernatur facilis veritatis repellendus tenetur, inventore ex eaque non omnis
            nostrum! Optio, earum illum unde dolorum illo quasi laboriosam quod alias nesciunt similique qui
            voluptatibus cupid dolor molestias omnis aliquid fuga pariatur fugiat.
          </p>
          <p>
            Amet harum blanditiis eligendi a. Unde consequatur eveniet at cumque minus ab voluptates dolorem architecto!
            Alias voluptas optio cupiditate facere? Facere, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates quia accusamus aliquam temporibus dolorum nobis perspiciatis enim animi dolores corporis,
            doloremque dolore atque minima reprehenderit dignissimos velit nam doloribus fugit.
          </p>
        </SimpleBar>
      </DocsComponentDemo>
    </section>
  )
}

export default ScrollbarAutohideDemo
