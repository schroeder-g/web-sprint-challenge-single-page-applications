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
    it("Incorporates size and toppings", () => {
      cy.get('select[name="size"]').children("option:nth-of-type(2)").click()
      cy.get('input[name="pepperoni"]').click()
    })
    it("submits form", () => {
        cy.get('#submitBtn').click()
        cy.get('#orders').contains("test")
    })
})
