document.addEventListener("DOMContentLoaded", () => {
    const size = window.innerWidth;
    if (size<=992) {
        const btn = document.getElementById("btn-responsive");
        btn.addEventListener("click", function(e){
            responsive(e, btn, size)
        })
    } else {
        ancla();
    }
  });

  function responsive(e, btn, size) {
    btn.classList.toggle("nav__botom-responsive--active");
        e.preventDefault();
        const contetMenu = document.getElementsByClassName("nav__links");
        contetMenu[0].classList.toggle("nav__links--active");
        ancla(size, btn);
  }

  function ancla(size, btn) {
    let old;
    const option = document.getElementsByClassName("nav__links");
        for (let index = 0; index < option[0].children[0].children.length; index++) {
            const element = option[0].children[0].children[index];
            element.children[0].addEventListener("click", function(event){
                if (old !== undefined){
                    old.classList.remove("nav__link--active");
                }
                old = element;
                element.classList.add("nav__link--active")
                event.preventDefault();
                const ancla = element.children[0].hash.substring(1);
                document.getElementById(ancla).scrollIntoView(true);
                if (size<=992){
                    option[0].classList.remove("nav__links--active");
                    if (btn){
                        btn.classList.remove("nav__botom-responsive--active")
                    }
                }
            })
        };
  }