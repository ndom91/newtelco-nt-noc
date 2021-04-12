import { h } from 'preact'
import { render } from '@testing-library/preact'
import { expect } from 'chai'
import App from './App'

describe('nt-noc', () => {
  it('renders all grafana widget labels', () => {
    const { container } = render(<App />)
    const grafanaLabels = container.querySelectorAll('.item-header')
    expect(grafanaLabels.length === 6)
  })
  it('renders all grafana widget iframes', () => {
    const { container } = render(<App />)
    const grafanaEmbeds = container.querySelectorAll('iframe')
    expect(grafanaEmbeds.length === 6)
  })
  it('renders marquee', () => {
    const { getByTestId } = render(<App />)
    const videoMarquee = getByTestId('marquee')
    expect(videoMarquee).to.be.a('HTMLDivElement')
  })
  it('renders marquee children', () => {
    const { getAllByRole } = render(<App />)
    const videoFeeds = getAllByRole('img')
    expect(videoFeeds).to.have.lengthOf(13)
  })
})
