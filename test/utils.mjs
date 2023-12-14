import Engine from 'publicodes'
import { getModelFromSource } from '@publicodes/tools/compilation'
import { expect, test } from 'bun:test'

function testOf(srcFile, evaluatedDottedName, description, situation, output) {
  test(`${evaluatedDottedName} ${description}`, () => {
    // Given
    const rules = getModelFromSource(srcFile, {
      ignore: ['data/i18n/**']
    })
    // When
    const engine = new Engine(rules)
    engine.setSituation(situation)
    const evaluated = engine.evaluate(evaluatedDottedName)

    // Then
    expect(evaluated.nodeValue).toEqual(output)
  })
}

function sum(a, b) {
  return a + b
}

export { testOf, sum }
