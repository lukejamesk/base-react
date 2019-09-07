import React from 'react'
import { mount } from 'enzyme'
import { forEach } from 'ramda'
import { Text } from '.'

const textTypes = ['paragraph', 'bold', 'blockquote']

describe('<Text />', () => {
  forEach((type) => {
    it(`should render with: ${type}`, () => {
      const wrapper = mount(
        <Text type={type}>
          My content for
          {type}
        </Text>
      )
      expect(wrapper).toMatchSnapshot()
    })
  }, textTypes)

  it('should render a paragraph when paragraph is true', () => {
    const wrapper = mount(
      <Text paragraph>
        My content for paragraph
      </Text>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
