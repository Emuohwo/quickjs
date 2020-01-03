// const invalidToken = () => {
//     window.location = './user-logIn.html';
//   };
  
//   const { Token } = localStorage;
//   if (!Token) {
//     invalidToken();
//   }
//   const logout = () => {
//       localStorage.removeItem('Token');
//       window.location = './index.html';
//     };
  
//     document.querySelector('.logout').addEventListener('click', logout);
    // LOGOUT METHOD ENDS HERE


const tableContainer = document.querySelector('.tableContainer');
const displayUserInfo = document.querySelector('.displayUserInfo');
const apiUrl = 'http://localhost:3000/api/v1/loans';

tableContainer.addEventListener('click', fetchUserData);

// window.onload = fetchUserData;

function fetchUserData(e) {
    // e.preventDefault();

    const fetchConfig = {
        method: 'GET',
        headers: {
            Accept: 'application',
            'Content-Type': 'application/json',
            'x-access-token': localStorage
        }
    }

    fetch(apiUrl, fetchConfig)
    .then((response) => { return response.json() })
    .then((data) => {
        let fetchedData = ``;
        console.log(data);
        
        data.forEach((user) => {
            const { 
                id, useremail, createdon, status,
                repaid, tenor, amount,
                paymentinstallment,
                interest, balance 
            } = user

            fetchedData +=
            `<tr>
                        <td>${id}</td>
                        <td>${useremail}</td>
                        <td>${createdon}</td>
                        <td>${status}</td>
                        <td>${repaid}</td>
                        <td>${tenor}</td>
                        <td>${amount}</td>
                        <td>${paymentinstallment}</td>
                        <td>${interest}</td>
                        <td>${balance}</td>
                        <td><a href="#">History</a></td>
            </tr>`;
                displayUserInfo.innerHTML = fetchedData;
        });
    });
}