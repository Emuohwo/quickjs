const invalidToken = () => {
    window.location = './user-logIn.html';
  };
  
  const { Token } = localStorage;
  if (!Token) {
    invalidToken();
  }
  const logout = () => {
      localStorage.removeItem('Token');
      window.location = './index.html';
    };
  
    document.querySelector('.logout').addEventListener('click', logout);
    // LOGOUT METHOD ENDS HERE

    // document.querySelector('#loadingBtn');
    // class Menu {
    //     handleEvent(event) {
    //       switch(event.type) {
    //         case 'mousedown':"Loding";
    //           break;
    //         case 'mouseup':
    //           loadingBtn.innerHTML += "in progress";
    //           break;
    //       }
    //     }
    //   }
    
    //   let menu = new Menu();
    //   loadingBtn.addEventListener('mousedown', menu);
    //   loadingBtn.addEventListener('click', function(e){
    //       e.preventDefault();
    //       loadingBtn.innerHTML += "in progress"
    //   });