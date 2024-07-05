const diceGameSimulation = require('./dice-game')

describe('diceGameSimulation', () => {
    test('should simulate the dice game correctly', () => {
        const numSimulations = 100
        const simulationResults = diceGameSimulation(numSimulations)

        expect(simulationResults).toHaveLength(numSimulations)

        simulationResults.forEach((result) => {
            const { dice1, dice2, sum, result: gameResult} = result

            expect(dice1).toBeGreaterThanOrEqual(1)
            expect(dice1).toBeLessThanOrEqual(6)

            expect(dice2).toBeGreaterThanOrEqual(1)
            expect(dice2).toBeLessThanOrEqual(6)
        })
    })
})