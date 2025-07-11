import DocsComponentDemo from '@/components/docs/docs-component-demo'
import SelectBox from '@/components/forms/select-box'

const SelectBoxSearchGroupsDemo = () => {
  const code = `import SelectBox from '@/components/forms/select-box'

export default function SelectBoxSearchGroupsDemo() {
  return (
    <SelectBox
      choices={[
        {
          label: 'Africa',
          choices: [
            { value: 'Nigeria', label: 'Nigeria' },
            { value: 'South Africa', label: 'South Africa' },
            { value: 'Kenya', label: 'Kenya' },
            { value: 'Egypt', label: 'Egypt' },
            { value: 'Ethiopia', label: 'Ethiopia' },
          ],
        },
        {
          label: 'Asia',
          choices: [
            { value: 'China', label: 'China' },
            { value: 'India', label: 'India' },
            { value: 'Japan', label: 'Japan' },
            { value: 'South Korea', label: 'South Korea' },
            { value: 'Saudi Arabia', label: 'Saudi Arabia' },
          ],
        },
        {
          label: 'Europe',
          choices: [
            { value: 'Germany', label: 'Germany' },
            { value: 'France', label: 'France' },
            { value: 'United Kingdom', label: 'United Kingdom' },
            { value: 'Italy', label: 'Italy' },
            { value: 'Spain', label: 'Spain' },
          ],
        },
        {
          label: 'North America',
          choices: [
            { value: 'United States', label: 'United States' },
            { value: 'Canada', label: 'Canada' },
            { value: 'Mexico', label: 'Mexico' },
            { value: 'Jamaica', label: 'Jamaica' },
            { value: 'Costa Rica', label: 'Costa Rica' },
          ],
        },
        {
          label: 'South America',
          choices: [
            { value: 'Brazil', label: 'Brazil' },
            { value: 'Argentina', label: 'Argentina' },
            { value: 'Colombia', label: 'Colombia' },
            { value: 'Chile', label: 'Chile' },
            { value: 'Peru', label: 'Peru' },
          ],
        },
        {
          label: 'Oceania',
          choices: [
            { value: 'Australia', label: 'Australia' },
            { value: 'New Zealand', label: 'New Zealand' },
            { value: 'Papua New Guinea', label: 'Papua New Guinea' },
            { value: 'Fiji', label: 'Fiji' },
            { value: 'Solomon Islands', label: 'Solomon Islands' },
          ],
        },
      ]}
      searchEnabled
      placeholder="Select country..."
      aria-label="Select with option groups and search"
    />
  )
}`

  return (
    <section id="select-search" className="docs-section pb-sm-2 mb-5">
      <h4>Search and option groups</h4>
      <DocsComponentDemo code={code}>
        <SelectBox
          choices={[
            {
              label: 'Africa',
              choices: [
                { value: 'Nigeria', label: 'Nigeria' },
                { value: 'South Africa', label: 'South Africa' },
                { value: 'Kenya', label: 'Kenya' },
                { value: 'Egypt', label: 'Egypt' },
                { value: 'Ethiopia', label: 'Ethiopia' },
              ],
            },
            {
              label: 'Asia',
              choices: [
                { value: 'China', label: 'China' },
                { value: 'India', label: 'India' },
                { value: 'Japan', label: 'Japan' },
                { value: 'South Korea', label: 'South Korea' },
                { value: 'Saudi Arabia', label: 'Saudi Arabia' },
              ],
            },
            {
              label: 'Europe',
              choices: [
                { value: 'Germany', label: 'Germany' },
                { value: 'France', label: 'France' },
                { value: 'United Kingdom', label: 'United Kingdom' },
                { value: 'Italy', label: 'Italy' },
                { value: 'Spain', label: 'Spain' },
              ],
            },
            {
              label: 'North America',
              choices: [
                { value: 'United States', label: 'United States' },
                { value: 'Canada', label: 'Canada' },
                { value: 'Mexico', label: 'Mexico' },
                { value: 'Jamaica', label: 'Jamaica' },
                { value: 'Costa Rica', label: 'Costa Rica' },
              ],
            },
            {
              label: 'South America',
              choices: [
                { value: 'Brazil', label: 'Brazil' },
                { value: 'Argentina', label: 'Argentina' },
                { value: 'Colombia', label: 'Colombia' },
                { value: 'Chile', label: 'Chile' },
                { value: 'Peru', label: 'Peru' },
              ],
            },
            {
              label: 'Oceania',
              choices: [
                { value: 'Australia', label: 'Australia' },
                { value: 'New Zealand', label: 'New Zealand' },
                { value: 'Papua New Guinea', label: 'Papua New Guinea' },
                { value: 'Fiji', label: 'Fiji' },
                { value: 'Solomon Islands', label: 'Solomon Islands' },
              ],
            },
          ]}
          searchEnabled
          placeholder="Select country..."
          aria-label="Select with option groups and search"
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default SelectBoxSearchGroupsDemo
