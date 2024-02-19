/// <reference types ="Cypress"/>
before(function() {
    cy.fixture('loginData.json').as('test_data')
})
it('Read files using fixture', function(){

    cy.fixture('loginData.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)
    })
    cy.log(this.test_data.name)
})

it('read file using readFile()', function() {

    cy.readFile('./cypress/fixtures/loginData.json').then((data)=>{
        cy.log(data.name)
    }) 
})

it('Write file demo', function(){

    cy.writeFile('./cypress/fixtures/Sample.txt','This is sample write in the file\n')
    cy.writeFile('./cypress/fixtures/Sample.txt','I am running Pavan', { flag: 'a+'})
})