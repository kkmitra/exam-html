const accordian_btns = document.querySelectorAll(".accordian-button")
        const accordian_panels = document.querySelectorAll(".accordian-panel")

        function removeClassFromElements(elementList, classname) {
            elementList.forEach(function(e) {
                    e.classList.remove(classname)
                })
        }

        accordian_btns.forEach(function(e) {
            e.addEventListener("click", function(e) {

                const panel = e.target.nextElementSibling;
                let flag = false;
                if(panel.classList.contains("panel-shown")) {
                    flag = true;
                }


                removeClassFromElements(accordian_btns, "active")
                removeClassFromElements(accordian_panels, "panel-shown")


                if(!flag) {
                    e.target.classList.add('active');
                    panel.classList.add("panel-shown");
                }

            })
        }) 