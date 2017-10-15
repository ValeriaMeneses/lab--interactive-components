var formulario = document.forms["registration-form"]

document.querySelector(".btn").addEventListener('click',mostrarSeccion = function(e){
  e.preventDefault()

    var userName = formulario.elements.username.value
    var passWord = formulario.elements.userpassword.value
    var confirmPassword = formulario.elements.confirmpassword.value
    var taxId = formulario.elements.taxid.value

    var select = formulario.elements.account
    var selected = select.options[select.selectedIndex]

    var terminos = formulario.elements.termsofservice

    var textName = formulario.querySelector('.validation--username')
    if (userName === '') {
      textName.textContent = 'Username cannot be blank'

    }else if (userName !== '') {
      textName.textContent = 'Success'
    }

    var validationUserPassword = formulario.querySelector('.validation--user-password')
    if (passWord.length < 8) {
      validationUserPassword.textContent = 'Passwords must have a minimum of 8 characters'
    }else if (passWord.length >= 8) {
      validationUserPassword.textContent = 'Success'
    }

    var validationConfirmPassword = formulario.querySelector('.validation--confirm-password')
    if (confirmPassword !== passWord || confirmPassword === '') {
      validationConfirmPassword.textContent = 'Passwords must match'
    }else if (confirmPassword === passWord) {
      validationConfirmPassword.textContent = 'Success'
    }

    var validationTaxId = formulario.querySelector('.validation--tax-id')
    if (taxId === '') {
      validationTaxId.textContent = 'Must provide Tax ID Number'
    }else if (taxId.length === 10) {
      validationTaxId.textContent = 'Success'
    }else{
      validationTaxId.textContent = 'Tax ID number is only numbers and is 10 digits'
    }

    var validationAccount = formulario.querySelector('.validation--account')
    if (selected.value === "") {
      validationAccount.textContent = "Must select account type"
    }else {
      validationAccount.textContent = "Success"
    }

    var validationTermsOfService = formulario.querySelector('.validation--terms-of-service')
    console.log(terminos.checked);
    if (terminos.checked === false) {
      validationTermsOfService.textContent = "Must approve terms of service"

    }else {
      validationTermsOfService.textContent = "Success"
    }



})
