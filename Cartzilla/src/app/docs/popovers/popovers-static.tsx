import Popover from 'react-bootstrap/Popover'
import PopoverHeader from 'react-bootstrap/PopoverHeader'
import PopoverBody from 'react-bootstrap/PopoverBody'

const PopoversStaticDemo = () => (
  <section id="popovers-static" className="docs-section pb-sm-2 mb-5">
    <h4>Static examples</h4>
    <div className="card border-0 shadow">
      <span
        className="d-none d-block-dark position-absolute top-0 start-0 w-100 h-100 bg-dark rounded"
        style={{ opacity: 0.4 }}
      ></span>
      <div className="card-body position-relative z-2">
        <div className="hstack flex-wrap gap-4 pt-1 pb-2">
          {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
            <Popover
              key={placement}
              placement={placement}
              className="position-relative"
              arrowProps={{
                className: `popover-arrow position-absolute ${placement === 'top' || placement === 'bottom' ? 'start-50 translate-middle-x' : 'top-50 translate-middle-y'}`,
              }}
            >
              <PopoverHeader as="h3">
                {placement.charAt(0).toUpperCase() + placement.slice(1).toLowerCase()} popover
              </PopoverHeader>
              <PopoverBody>
                And here&apos;s some amazing content inside popover body that can be html. It&apos;s very engaging.
                Right?
              </PopoverBody>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default PopoversStaticDemo
