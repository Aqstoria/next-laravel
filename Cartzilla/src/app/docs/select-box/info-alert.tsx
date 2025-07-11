const SelectBoxInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="pb-1">
        The SelectBox component is a React wrapper for the{' '}
        <a
          href="https://github.com/Choices-js/Choices"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          Choices.js
        </a>{' '}
        plugin. This allows you to configure most common Choices.js options directly through props.
      </p>
      <div className="h6 pb-1 mb-2">Available props:</div>
      <ul className="text-body mb-0">
        <li>
          <code>type=&quot;single&quot;</code> -{' '}
          <span className="fs-sm">
            Specifies the input type: <code>&quot;single&quot;</code>, <code>&quot;multiple&quot;</code>, or{' '}
            <code>&quot;text&quot;</code>, corresponding to basic select, multiselect, and tags input, respectively.
          </span>
        </li>
        <li>
          <code>choices={'{[]}'}</code> -{' '}
          <span className="fs-sm">
            An array of objects, each representing an option with a specific structure. For details on the choice object
            structure, refer to the{' '}
            <a href="https://github.com/Choices-js/Choices?tab=readme-ov-file#choices" target="_blank" rel="noreferrer">
              documentation
            </a>
            .
          </span>
        </li>
        <li>
          <code>items={'{[]}'}</code> -{' '}
          <span className="fs-sm">
            An array of objects, each representing a pre-selected item. For details on the item object structure, refer
            to the{' '}
            <a href="https://github.com/Choices-js/Choices?tab=readme-ov-file#items" target="_blank" rel="noreferrer">
              documentation
            </a>
            .
          </span>
        </li>
        <li>
          <code>customTemplate={'{false}'}</code> -{' '}
          <span className="fs-sm">Specifies whether a custom template can be used for options.</span>
        </li>
        <li>
          <span className="fs-sm">Underlying input attributes:</span> <code>inputClassName</code>, <code>inputId</code>,{' '}
          <code>name</code>, <code>value</code>, <code>defaultValue</code>, <code>placeholder</code>,{' '}
          <code>required</code>, <code>disabled</code>
        </li>
        <li>
          <code>searchEnabled={'{false}'}</code> -{' '}
          <span className="fs-sm">Determines whether a search input is displayed inside the options dropdown.</span>
        </li>
        <li>
          <code>searchPlaceholder=&quot;Search...&quot;</code> -{' '}
          <span className="fs-sm">Search input placeholder text.</span>
        </li>
        <li>
          <code>removeItemButton={'{true}'}</code> -{' '}
          <span className="fs-sm">
            Specifies if a clear selection button should appear after the user selects an option.
          </span>
        </li>
        <li>
          <code>shouldSort={'{false}'}</code> -{' '}
          <span className="fs-sm">
            Determines whether choices, items and groups should be sorted. If set to <code>false</code>, they will
            appear in their original order.
          </span>
        </li>
        <li>
          <code>onChange={'{(value) => console.log(value)}'}</code> -{' '}
          <span className="fs-sm">Triggered each time an item is added/removed by a user.</span>
        </li>
        <li>
          <code>onAddItem={'{(item) => console.log(item)}'}</code> -{' '}
          <span className="fs-sm">Triggered each time an item is added (programmatically or by the user).</span>
        </li>
        <li>
          <code>onRemoveItem={'{(item) => console.log(item)}'}</code> -{' '}
          <span className="fs-sm">Triggered each time an item is removed (programmatically or by the user).</span>
        </li>
        <li>
          <code>loadingText=&quot;Loading...&quot;</code>
        </li>
        <li>
          <code>noResultsText=&quot;No results found&quot;</code>
        </li>
        <li>
          <code>noChoicesText=&quot;No options to choose from&quot;</code>
        </li>
        <li>
          <code>addItemText=&quot;Press Enter to add&quot;</code>
        </li>
        <li>
          <code>addItemText=&quot;Remove item&quot;</code>
        </li>
      </ul>
    </div>
  </section>
)

export default SelectBoxInfoAlert
