import { h, Component } from 'preact'

export default class Marquee extends Component {
  constructor(props) {
    super(props)
    this.setOuterRef = this.setOuterRef_.bind(this)
    this.setContentRef = this.setContentRef_.bind(this)
    this.tick = this.tick_.bind(this)
    this.tickRequested = false
    this.lastTimestamp = null
    this.x = 200
  }

  setOuterRef_(ref) {
    this.outerDiv = ref
    this.start()
  }
  setContentRef_(ref) {
    this.innerDiv = ref
    this.start()
  }
  start() {
    if (this.outerDiv && this.innerDiv && !this.tickRequested) {
      window.requestAnimationFrame(this.tick)
      this.tickRequested = true
    }
  }
  tick_(timestamp) {
    if (!this.outerDiv || !this.innerDiv) {
      // one or more components have been unmounted.  stop animation
      // until they are remounted (if ever)
      this.tickRequested = false
      return
    }

    if (this.lastTimestamp !== null) {
      this.updateAnimation(timestamp - this.lastTimestamp)
    }

    this.lastTimestamp = timestamp
    window.requestAnimationFrame(this.tick)
    this.lastTimestamp = timestamp
  }

  updateAnimation(deltaT) {
    this.x -= deltaT * this.getVelocity()
    if (this.x + this.innerDiv.clientWidth < 0)
      this.x += this.innerDiv.clientWidth + this.outerDiv.clientWidth

    if (Math.abs(this.x) > this.outerDiv.clientWidth / 2) {
      this.x = 200
    }
    this.innerDiv.style.transform = this.calculateTransform()
  }

  getVelocity() {
    return this.props.velocity ? this.props.velocity : 0.04
  }

  render() {
    return (
      <div
        ref={this.setOuterRef}
        style={{ overflow: 'hidden' }}
        data-testid='marquee'
      >
        <div
          ref={this.setContentRef}
          style={{
            display: 'flex',
            overflow: 'hidden',
            padding: '10px',
            transform: this.calculateTransform(),
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }

  calculateTransform() {
    return 'translateX(' + this.x + 'px)'
  }
}
