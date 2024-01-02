class SpecPages{
    elements ={
        resumeFile:()=>cy.get('[data-qa="input-resume"]'),
        fullName:()=>cy.get('[name="name"]'),        
        resumeLabel:()=>cy.get('.resume-upload-label'),
        coverLetter:()=>cy.get('[name="comments"]'),
        email:()=>cy.get('[name="email"]'),
        phone:()=>cy.get('[name="phone"]'),
        currentCompany:()=>cy.get('[name="org"]'),
        linkedIn:()=>cy.get('[name="urls[LinkedIn]"]'),
        gitHub:()=>cy.get('[name="urls[GitHub]"]'),
        location:()=>cy.get('[data-qa="opportunity-location-select"]'),
        submitButton:()=>cy.get('#btn-submit'),
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{force: true });
    }

    typeCoverLetter(cLetter){
        this.elements.coverLetter().type(cLetter);
    }

    typeFullName(fullName){
        this.elements.fullName().type(fullName);
    }
    typeEmail(email){
        this.elements.email().type(email);
    }
    typePhone(phone){
        this.elements.phone().type(phone);
    }

    typeCurrentCompany(company){
        this.elements.currentCompany().type(company);
    }

    typeLinkedIn(linkedin){
        this.elements.linkedIn().type(linkedin);
    }

    typeGitHub(github){
        this.elements.gitHub().type(github);
    }

    selectLocation(location){
        this.elements.location().select(location);
    }
    
    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();