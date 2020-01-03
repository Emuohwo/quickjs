const applyForLoanForm = document.querySelector('.applyForLoan');

const useremail = document.querySelector('.useremail');
const amount = document.querySelector('.amount');
const tenor = document.querySelector('.tenor');

const useremailErr = document.querySelector('.useremailErr');
const amountErr = document.querySelector('.amountErr')
const tenorErr = document.querySelector('.tenorErr')


const postLoanApplication = (e) => {
    e.preventDefault();

    const loanDetails = {};

    if (useremail.value) {
        loanDetails.useremail = useremail.value;
    }
    if (!useremail.value) {
        useremailErr.innerHTML = 'User email is requied'
        useremailErr.style.color = 'red'
    }
    if (amount.value) {
        loanDetails.amount = amount.value;
    }
    if (!amount.value) {
        amountErr.innerHTML = 'Amount is requied'
        amountErr.style.color = 'red'
    }
    if (tenor.value) {
        loanDetails.tenor = tenor.value;
    }
    if (!tenor.value) {
        tenorErr.innerHTML = 'Duration is requied'
        tenorErr.style.color = 'red'
    }

    



}