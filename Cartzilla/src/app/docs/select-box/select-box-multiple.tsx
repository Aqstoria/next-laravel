import DocsComponentDemo from '@/components/docs/docs-component-demo'
import SelectBox from '@/components/forms/select-box'

const SelectBoxMultipleDemo = () => {
  const code = `import SelectBox from '@/components/forms/select-box'

export default function SelectBoxMultipleDemo() {
  return (
    <>
      <SelectBox
        type="multiple"
        choices={[
          { value: 'Shopify', label: 'Shopify', selected: true },
          { value: 'WooCommerce', label: 'WooCommerce' },
          { value: 'Magento', label: 'Magento' },
          { value: 'OpenCart', label: 'OpenCart' },
          { value: 'PrestaShop', label: 'PrestaShop' },
          { value: 'VirtueMart', label: 'VirtueMart' },
        ]}
        placeholder="Select CMS"
        className="mb-4"
        aria-label="Multiple select example"
      />

      {/* Disbaled select */}
      <SelectBox
        type="multiple"
        choices={[
          { value: 'Shopify', label: 'Shopify', selected: true },
          { value: 'WooCommerce', label: 'WooCommerce' },
          { value: 'Magento', label: 'Magento' },
          { value: 'OpenCart', label: 'OpenCart' },
          { value: 'PrestaShop', label: 'PrestaShop' },
          { value: 'VirtueMart', label: 'VirtueMart' },
        ]}
        placeholder="Disabled select"
        aria-label="Disabled multiple select"
        disabled
      />
    </>
  )
}`

  return (
    <section id="select-multiple" className="docs-section pb-sm-2 mb-5">
      <h4>Multiple select</h4>
      <DocsComponentDemo code={code}>
        <SelectBox
          type="multiple"
          choices={[
            { value: 'Shopify', label: 'Shopify', selected: true },
            { value: 'WooCommerce', label: 'WooCommerce' },
            { value: 'Magento', label: 'Magento' },
            { value: 'OpenCart', label: 'OpenCart' },
            { value: 'PrestaShop', label: 'PrestaShop' },
            { value: 'VirtueMart', label: 'VirtueMart' },
          ]}
          placeholder="Select CMS"
          className="mb-4"
          aria-label="Multiple select example"
          style={{ maxWidth: 500 }}
        />
        <SelectBox
          type="multiple"
          choices={[
            { value: 'Shopify', label: 'Shopify', selected: true },
            { value: 'WooCommerce', label: 'WooCommerce' },
            { value: 'Magento', label: 'Magento' },
            { value: 'OpenCart', label: 'OpenCart' },
            { value: 'PrestaShop', label: 'PrestaShop' },
            { value: 'VirtueMart', label: 'VirtueMart' },
          ]}
          placeholder="Disabled select"
          aria-label="Disabled multiple select"
          style={{ maxWidth: 500 }}
          disabled
        />
      </DocsComponentDemo>
    </section>
  )
}

export default SelectBoxMultipleDemo
