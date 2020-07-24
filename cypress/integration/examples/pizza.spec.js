describe("sanity test", () => {
    it ("visit localhost", () => {
        cy.visit("localhost:3000")
    })
})

describe("User can submit orders", () => {
    it("writes name", () => {
        cy.visit("localhost:3000/pizza")
        cy.get('input[name="name"]')
        .type("Test")
    })
    it("can't submit without size", () => {
        cy.get("#submitBtn").should("be.disabled")
    })
    it("Incorporates size", () => {
      cy.get('select[name="size"]').select("Small")
    })
    it("Incorporates multiple toppings", () => {
        cy.get('input[name="pepperoni"]').click()
        cy.get('input[name="sausage"]').click()
      })
    it("submits form successfully", () => {
        cy.get('#submitBtn').click({force: true})
        cy.get('#ordersBtn').click()
        cy.get('ul').contains("sausage")
        cy.get('ul').contains("pepperoni")

    })
})
