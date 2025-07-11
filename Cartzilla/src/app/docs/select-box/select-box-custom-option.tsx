import DocsComponentDemo from '@/components/docs/docs-component-demo'
import SelectBox from '@/components/forms/select-box'

const SelectBoxCustomOptionDemo = () => {
  const code = `import SelectBox from '@/components/forms/select-box'

export default function SelectBoxCustomOptionDemo() {
  return (
    <>
      <SelectBox
        choices={[
          {
            value: 'English',
            label:
              '<div class="d-flex align-items-center"><img src="/img/flags/en-uk.png" class="flex-shrink-0 me-2" width="20" alt="English"> English</div>',
            selected: true,
          },
          {
            value: 'Français',
            label:
              '<div class="d-flex align-items-center"><img src="/img/flags/fr.png" class="flex-shrink-0 me-2" width="20" alt="Français"> Français</div>',
          },
          {
            value: 'Deutsch',
            label:
              '<div class="d-flex align-items-center"><img src="/img/flags/de.png" class="flex-shrink-0 me-2" width="20" alt="Deutsch"> Deutsch</div>',
          },
          {
            value: 'Italiano',
            label:
              '<div class="d-flex align-items-center"><img src="/img/flags/it.png" class="flex-shrink-0 me-2" width="20" alt="Italiano"> Italiano</div>',
          },
        ]}
        placeholder="Select language"
        className="mb-4"
        aria-label="Select language"
      />

      {/* Explicitely set customTemplate for customProperties.selected value to work as a selected text. */}
        <SelectBox
          customTemplate
          choices={[
            {
              value: '1',
              label: '<span class="visually-hidden">1 star</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i></span>',
                selected: '1 star',
              },
            },
            {
              value: '2',
              label: '<span class="visually-hidden">2 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '2 stars',
              },
            },
            {
              value: '3',
              label: '<span class="visually-hidden">3 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '3 stars',
              },
            },
            {
              value: '4',
              label: '<span class="visually-hidden">4 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '4 stars',
              },
            },
            {
              value: '5',
              label: '<span class="visually-hidden">5 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '5 stars',
              },
            },
          ]}
          placeholder="Choose rating"
          aria-label="Choose rating"
        />
    </>
  )
}`

  return (
    <section id="select-custom-template" className="docs-section pb-sm-2 mb-5">
      <h4>Custom option template</h4>
      <DocsComponentDemo code={code}>
        <SelectBox
          choices={[
            {
              value: 'English',
              label:
                '<div class="d-flex align-items-center"><img src="/img/flags/en-uk.png" class="flex-shrink-0 me-2" width="20" alt="English"> English</div>',
              selected: true,
            },
            {
              value: 'Français',
              label:
                '<div class="d-flex align-items-center"><img src="/img/flags/fr.png" class="flex-shrink-0 me-2" width="20" alt="Français"> Français</div>',
            },
            {
              value: 'Deutsch',
              label:
                '<div class="d-flex align-items-center"><img src="/img/flags/de.png" class="flex-shrink-0 me-2" width="20" alt="Deutsch"> Deutsch</div>',
            },
            {
              value: 'Italiano',
              label:
                '<div class="d-flex align-items-center"><img src="/img/flags/it.png" class="flex-shrink-0 me-2" width="20" alt="Italiano"> Italiano</div>',
            },
          ]}
          placeholder="Select language"
          className="mb-4"
          aria-label="Select language"
          style={{ maxWidth: 400 }}
        />
        <SelectBox
          customTemplate
          choices={[
            {
              value: '1',
              label: '<span class="visually-hidden">1 star</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i></span>',
                selected: '1 star',
              },
            },
            {
              value: '2',
              label: '<span class="visually-hidden">2 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '2 stars',
              },
            },
            {
              value: '3',
              label: '<span class="visually-hidden">3 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '3 stars',
              },
            },
            {
              value: '4',
              label: '<span class="visually-hidden">4 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '4 stars',
              },
            },
            {
              value: '5',
              label: '<span class="visually-hidden">5 stars</span>',
              customProperties: {
                icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                selected: '5 stars',
              },
            },
          ]}
          placeholder="Choose rating"
          aria-label="Choose rating"
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default SelectBoxCustomOptionDemo
