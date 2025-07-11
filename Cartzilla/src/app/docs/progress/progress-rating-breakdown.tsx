import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/Stack'
import StarRating from '@/components/reviews/star-rating'

const ProgressRatingBreakdownDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/Stack'
import StarRating from '@/components/reviews/star-rating'

export default function ProgressRatingBreakdownDemo() {
  const ratings = [
    { ratingNumber: 5, ratingLabel: 'Five', quantity: 37 },
    { ratingNumber: 4, ratingLabel: 'Four', quantity: 16 },
    { ratingNumber: 3, ratingLabel: 'Three', quantity: 8 },
    { ratingNumber: 2, ratingLabel: 'Two', quantity: 4 },
    { ratingNumber: 1, ratingLabel: 'One', quantity: 3 },
  ]

  const totalQuantity = ratings.reduce((sum, { quantity }) => sum + quantity, 0)
  const weightedSum = ratings.reduce((sum, { ratingNumber, quantity }) => sum + ratingNumber * quantity, 0)
  const averageRating = (weightedSum / totalQuantity).toFixed(1)

  return (
    <Row className="g-4">
      <Col sm={5} md={3}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100 bg-body-tertiary rounded p-4">
          <div className="h1 pb-2 mb-1">{averageRating}</div>
          <StarRating rating={averageRating} className="fs-sm mb-2" />
          <div className="fs-sm">{totalQuantity} reviews</div>
        </div>
      </Col>
      <Col sm={7} md={9}>
        <Stack direction="vertical" gap={3}>
          {ratings.map(({ ratingNumber, ratingLabel, quantity }) => (
            <Stack key={ratingNumber} direction="horizontal" gap={2} className="fs-sm">
              <Stack direction="horizontal" gap={1}>
                {ratingNumber}
                <i className="ci-star-filled text-warning"/>
              </Stack>
              <ProgressBar
                variant="warning"
                now={(quantity / totalQuantity) * 100}
                className="w-100"
                style={{ height: 4 }}
                aria-label={\`\${ratingLabel} stars\`}
              />
              <div className="text-nowrap text-end" style={{ width: 40 }}>
                {quantity}
              </div>
            </Stack>
          ))}
        </Stack>
      </Col>
    </Row>
  )
}`

  const ratings = [
    { ratingNumber: 5, ratingLabel: 'Five', quantity: 37 },
    { ratingNumber: 4, ratingLabel: 'Four', quantity: 16 },
    { ratingNumber: 3, ratingLabel: 'Three', quantity: 8 },
    { ratingNumber: 2, ratingLabel: 'Two', quantity: 4 },
    { ratingNumber: 1, ratingLabel: 'One', quantity: 3 },
  ]

  const totalQuantity = ratings.reduce((sum, { quantity }) => sum + quantity, 0)
  const weightedSum = ratings.reduce((sum, { ratingNumber, quantity }) => sum + ratingNumber * quantity, 0)
  const averageRating = (weightedSum / totalQuantity).toFixed(1)

  return (
    <section id="progress-rating-breakdown" className="docs-section">
      <h4>Use case: Rating breakdown</h4>
      <DocsComponentDemo code={code}>
        <Row className="g-4">
          <Col sm={5} md={3}>
            <div className="d-flex flex-column align-items-center justify-content-center h-100 bg-body-tertiary rounded p-4">
              <div className="h1 pb-2 mb-1">{averageRating}</div>
              <StarRating rating={averageRating} className="fs-sm mb-2" />
              <div className="fs-sm">{totalQuantity} reviews</div>
            </div>
          </Col>
          <Col sm={7} md={9}>
            <Stack direction="vertical" gap={3}>
              {ratings.map(({ ratingNumber, ratingLabel, quantity }) => (
                <Stack key={ratingNumber} direction="horizontal" gap={2} className="fs-sm">
                  <Stack direction="horizontal" gap={1}>
                    {ratingNumber}
                    <i className="ci-star-filled text-warning" />
                  </Stack>
                  <ProgressBar
                    variant="warning"
                    now={(quantity / totalQuantity) * 100}
                    className="w-100"
                    style={{ height: 4 }}
                    aria-label={`${ratingLabel} stars`}
                  />
                  <div className="text-nowrap text-end" style={{ width: 40 }}>
                    {quantity}
                  </div>
                </Stack>
              ))}
            </Stack>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ProgressRatingBreakdownDemo
