const boxes = document.querySelectorAll('.box');
function checkboxes() {
    const triggerbottom = window.innerHeight / 5 *4;

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerbottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show')};
        }
    )
  }
  checkboxes();

window.addEventListener('scroll',checkboxes)