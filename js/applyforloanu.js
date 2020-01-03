const applyForLoanForm = document.querySelector('.applyForLoan');

const useremail = document.querySelector('.useremail');
const amount = document.querySelector('.amount');
const tenor = document.querySelector('.tenor');

const useremailErr = document.querySelector('.useremailErr');
const amountErr = document.querySelector('.amountErr')
const tenorErr = document.querySelector('.tenorErr')

const applyForLoanURL = 'http://localhost:3000/api/v1/loans';



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

    const fetchConfig = {
        method: 'POST',
        headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
            'x-access-token': localStorage.Token
        }),
        mode: 'cors',
        // headers: new Headers(),
        body: JSON.stringify(loanDetails),
        
    };

    fetch(applyForLoanURL, fetchConfig)
    .then(response => response.json())
    .then((data) => console.log(data))
    // .then((response) => {
    //     const { error, data } = response;

    //     if (error) {
    //         if(error.useremail){
    //             useremailErr.innerHTML = error.useremail;
    //         }

    //         if(error.amount){
    //             amountErr.innerHTML = error.amount;
    //         }

    //         if(error.tenor){
    //             tenorErr.innerHTML = error.tenor;
    //         }

    //         console.log('Data cannot be processed because of error');
           
    //     }
        
        
    //     if(data) {
    //         console.log(data);
            
    //         const { loan } = data[0];
    //         console.log(loan);
            
    //         // localStorage.User = JSON.stringify(loan);
    //         // window.alert('Loan was Successfully');
    //     }
    // })
    .catch(error => console.log(error));
}

applyForLoanForm.addEventListener('submit', postLoanApplication);
