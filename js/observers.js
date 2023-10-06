const form = document.querySelector("form");
const sectionOne = document.getElementById("section-one");

const sectionOneOptions={
    rootMargin:"-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry=>{
       if(!entry.isIntersecting){
            form.classList.add("fixed-top");
            form.classList.add("p-2");
            form.classList.add("bg-light");
       }else{
        form.classList.remove("fixed-top");
        form.classList.remove("p-2");
        form.classList.remove("bg-light");
       }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne);