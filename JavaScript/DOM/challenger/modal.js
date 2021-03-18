const buttonModal = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper');

// buttonModal.onclick = function(){
//   modalWrapper
//     .classList
//     .remove('invisible');
// }

buttonModal.addEventListener('click', function(){
  modalWrapper.classList.remove('invisible')
})

document.addEventListener('keydown',function(event){
  const isKeyEsc = event.key === 'Escape';

  if(isKeyEsc) return modalWrapper.classList.add('invisible')
})