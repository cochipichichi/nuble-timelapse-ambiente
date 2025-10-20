
window.Logros={
  keys:{TIMELAPSE:'ach_timelapse',STORY:'ach_story',QUIZ:'ach_quiz',PDF:'ach_pdf',MODELOS:'ach_modelos'},
  set:function(k){localStorage.setItem(k,'1');document.dispatchEvent(new Event('logros:update'));},
  has:function(k){return localStorage.getItem(k)==='1';}
};
