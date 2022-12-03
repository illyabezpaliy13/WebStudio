(() => {
    const refs = {
       openModalBtn: document.querySelector("[data-open-burger]"),
       closeModalBtn: document.querySelector("[data-close-burger]"),
       backdrop: document.querySelector("[data-backdrop-burger]"),};    
     refs.openModalBtn.addEventListener("click", toggleModal);
     refs.closeModalBtn.addEventListener("click", toggleModal);   
     refs.backdrop.addEventListener("click", logBackdropClick);   
     function toggleModal() {
       refs.backdrop.classList.toggle("ishiden");}    
     function logBackdropClick() {
       console.log("Це клік в бекдроп");}
    })()
       