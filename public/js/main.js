function openSideBar(){
    document.querySelector(".sidebar").classList.add("open");
    // console.log(e.target.className);
  }

function closeMenu (){ 
      document.querySelector(".sidebar").classList.remove("open");
    //   console.log(e.target.className);
}
// Function for submit button on search bar
const searchForm = document.getElementById("searchForm");
document.querySelector(".submitButton").addEventListener("click", function(){

  searchForm.submit();

});