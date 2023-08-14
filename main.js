let progress=document.querySelector('.progress');
let targeImages=document.querySelectorAll('.target-image')


// progress.animate([키프레임],{옵션 , 시간, 반복등})
progress.animate([
  {transform:"scale(0.05)"},
  {transform:"scale(1)"},
],{
  timeline: new ScrollTimeline({
      scrollOffsets: [
         {target:document.body,edge:'start',threshold:1},
         {target:document.body,edge:'end',threshold:1},
      ]
  })
})

targeImages.forEach((image)=>{
  let imageTop = image.offsetTop; //img의 상단 스크롤값
  let imageHeight = image.offsetHeight; //img의 높이값
  console.log(imageTop)

  let offset1=imageTop + imageHeight - window.innerHeight;
  let offset2=imageTop; 
  image.animate([
    {opacity:0},
    {opacity:1},
  ],{
    timeline: new ScrollTimeline({
      scrollOffsets: [
          new CSSUnitValue(offset1, 'px'),
          new CSSUnitValue(offset2, 'px')
      ]
  })
  })
})
console.log()