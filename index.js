document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("openmodal-btn").addEventListener("click",function () {
        document.getElementById("mymodal").classList.add("open");
            document.getElementById("closemodalbox-btn").addEventListener("click",function () {
                document.getElementById("mymodal").classList.remove("open");
                document.getElementById("login").value = ''; 
                document.getElementById("password").value = '';
                document.getElementById("wronglogin").classList.remove("open");

            })

    })
    document.getElementById("openbasket-btn").addEventListener("click",function(){
        document.getElementById("mybasket").classList.add("open");
            document.getElementById("closebasketbox-btn").addEventListener("click",function () {
                document.getElementById("mybasket").classList.remove("open");

        })
})

    document.getElementById("signin").addEventListener("click",function(){
        if (document.getElementById("login").value.length === 0 || document.getElementById("password").value.length === 0){
            alert('Fill in all the fields');
        } else {
            document.getElementById("wronglogin").classList.add("open");
        }
 })

 document.getElementById("viewreoduct").addEventListener("click",function(){
    document.querySelector("#products").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    }) 
 })

 document.getElementById("register").addEventListener("click",function(){
        alert('service is temporarily unavailable');
    }) 
})

document.getElementById("shop").addEventListener("click",function(){
    alert('service is temporarily unavailable');
}) 


document.getElementById("lupa").addEventListener("click",function(){
    alert('service is temporarily unavailable');
}) 




