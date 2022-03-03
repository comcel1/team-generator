const rewire = require("rewire")
const index = rewire("./index")
const engineerQuestions = index.__get__("engineerQuestions")
// @ponicode
describe("engineerQuestions", () => {
    test("0", async () => {
        await engineerQuestions()
    })
})
