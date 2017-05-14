window.onload= defilImg
current_img = 0;
arrImg = ['../data/img/img_6.jpg','../data/img/img_7.jpg','../data/img/img_8.jpg','../data/img/img_9.jpg','../data/img/img_10.jpg','../data/img/img_11.jpg','../data/img/img_10.jpg','../data/img/img_9.jpg','../data/img/img_8.jpg','../data/img/img_7.jpg']


function defilImg(){
  if(current_img == arrImg.length)
  current_img = 0;
  document.getElementById('photo_background').src = arrImg[current_img++];
  window.setTimeout('defilImg()',3000);
}
