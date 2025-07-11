import Tooltip from 'react-bootstrap/Tooltip'

const TooltipsStaticDemo = () => (
  <section id="tooltips-static" className="docs-section pb-sm-2 mb-5">
    <h4>Static examples</h4>
    <div className="card border-0 shadow">
      <span
        className="d-none d-block-dark position-absolute top-0 start-0 w-100 h-100 bg-dark rounded"
        style={{ opacity: 0.4 }}
      ></span>
      <div className="card-body position-relative z-2">
        <div className="hstack flex-wrap gap-4 pt-1 pb-2">
          {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
            <Tooltip
              key={placement}
              placement={placement}
              className="position-relative opacity-100"
              arrowProps={{
                className: `tooltip-arrow position-absolute ${placement === 'top' || placement === 'bottom' ? 'start-50 translate-middle-x' : 'top-50 translate-middle-y'}`,
              }}
            >
              Tooltip on the {placement}
            </Tooltip>
          ))}
          <Tooltip
            placement="top"
            className="position-relative opacity-100"
            arrowProps={{
              className: 'tooltip-arrow position-absolute start-50 translate-middle-x',
            }}
          >
            <i>Tooltip</i> <u>with</u> <strong>HTML</strong>
          </Tooltip>
        </div>
      </div>
    </div>
  </section>
)

export default TooltipsStaticDemo
