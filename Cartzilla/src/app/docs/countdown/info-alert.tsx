const CountdownInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="pb-1">
        The Countdown functionality is powered by the{' '}
        <a
          href="https://github.com/letstri/timezz?tab=readme-ov-file#react"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          Timezz
        </a>{' '}
        React component.
      </p>
      <div className="h6 pb-1 mb-2">
        Available props<span className="text-primary fs-lg">*</span>:
      </div>
      <ul className="text-body mb-0">
        <li>
          <code>date</code> -{' '}
          <span className="fs-sm">
            Target date for the countdown. Can be date instance <code>new Date()</code>, string{' '}
            <code>&apos;2025-12-01 03:15&apos;</code> or timestamp <code>833156100000</code>.
          </span>
        </li>
        <li>
          <code>pause={'{false}'}</code> - <span className="fs-sm">Whether the timer should be paused</span>
        </li>
        <li>
          <code>stopOnZero={'{true}'}</code> -{' '}
          <span className="fs-sm">
            Specifies if a clear selection button should appear after the user selects an option.
          </span>
        </li>
        <li>
          <code>onUpdate={'{(event) => console.log(event)}'}</code> -{' '}
          <span className="fs-sm">
            Callback function that is called every second when the countdown updates. It receives an <code>event</code>{' '}
            object containing the updated time values (years, days, hours, minutes, and seconds).
          </span>
        </li>
      </ul>
      <div className="fs-sm text-body pt-1 mt-2">
        <span className="fw-semibold text-primary fs-lg">*</span> All props are required
      </div>
    </div>
  </section>
)

export default CountdownInfoAlert
