
(function(){
  const hcBtn = document.querySelector('[data-toggle="hc"]');
  if(hcBtn){
    hcBtn.addEventListener('click', ()=>{
      document.body.classList.toggle('hc');
      localStorage.setItem('hc', document.body.classList.contains('hc') ? '1':'0');
    });
  }
  if(localStorage.getItem('hc') === '1'){ document.body.classList.add('hc'); }
})();
