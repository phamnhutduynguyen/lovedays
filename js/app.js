const yourDate = new Date("1999-04-16T17:00:00"),
music = ['ido'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");
      var date = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24);
      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = date+" DAYS";
      
      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
            if(date == 8888 && hrs == 1 && min == 1 && sec == 1){
                  emailjs.init("user_XRIWtKPThnBxowVuQ2VGZ");
                  emailjs.send('service_jk24e9p', 'template_yn90itq', {
                        today: today,
                        count: date,
                  }, 'user_XRIWtKPThnBxowVuQ2VGZ')
                  .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                  }, (error) => {
                        console.log('FAILED...', error);
                  });
            }
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `../music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);