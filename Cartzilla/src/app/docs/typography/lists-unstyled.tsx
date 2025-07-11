import DocsComponentDemo from '@/components/docs/docs-component-demo'

const ListsUnstyledDemo = () => {
  const code = `<ul className="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>
    Integer molestie lorem at massa
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ul>`

  return (
    <section id="type-lists-unstyled" className="docs-section pb-sm-2 mb-5">
      <h4>Lists: Unstyled</h4>
      <DocsComponentDemo code={code}>
        <ul className="list-unstyled mb-0">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>
            Integer molestie lorem at massa
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
        </ul>
      </DocsComponentDemo>
    </section>
  )
}

export default ListsUnstyledDemo
