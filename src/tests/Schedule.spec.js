import React from 'react'
import { create } from 'react-test-renderer'
import Schedule from './../components/schedule/Schedule'

const title = 'TITLE HERE'
const emptyArray = new Array()
const emptyString = ''
const zero = 0

const makeSchedule = (title) => {
  return create(<Schedule title={title} />)
}

describe('Schedule component', () => {
  const schedule = makeSchedule(title)
  const instance = schedule.getInstance()

  test('Matches the snapshot', () => {
    expect(schedule.toJSON()).toMatchSnapshot()
  })

  test('Renders the right title', () => {
    expect(instance.props.title).toBe(title)
  })

  test('Trying to insert new data with empty fields', () => {
    expect(instance.state.items).toStrictEqual(emptyArray)
    expect(instance.state.time).toBe(emptyString)
    expect(instance.state.type).toBe(emptyString)
    expect(instance.state.date).toBe(emptyString)
    expect(instance.state.studiedHours).toBe(zero)
  })

})
