// import {common} from '../../../support/commonPageElements'
// const Common = new common()

export default class SignUpObjects {
  phoneTxtField() {
    return cy.get('input[placeholder*="(201) 555-0123"]')
  }
  invalidPhoneErrorMessage(option) {
    return cy.get('.el-form-item__error').contains(option)
  }
}
