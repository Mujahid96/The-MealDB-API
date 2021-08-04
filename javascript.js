function searc() {
    let searchInputTxt = document.getElementById('search-data').value;
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+searchInputTxt)
    .then(response => response.json())
    .then(data => {
       
        let html="";
        if( data.meals){
            for (let i = 0; i < data.meals.length; i++) {
                console.log(data.meals[i].idMeal);
    
    
                html +=  ` <div class="col ">
                    <div class="card card-border shadow">
                        <a href="#" onclick="show_detail()"><img src="${data.meals[i].strMealThumb}" class="card-img-top bg-light"
                                alt="...">
                            <h4 class="card-title fw-bold  ">${data.meals[i].strMeal}</h4>
                        </a>
         
                    </div>
                </div>`
            
            }
            

        }
      else {
          html="Sorry, we didn't find any meal!"
        document.getElementById('meal').classList.add('notFound');
      }
        document.getElementById('meal').innerHTML=html;
       

    })
    
}
function show_detail() {
    const food_content = document.getElementById("show-conetent");
    food_content.style.display = 'block';
    const showing_image = document.getElementById("Showing_image");
    showing_image.style.display = 'none';


}
function closeBtn(){
    const food_content = document.getElementById("show-conetent");
    food_content.style.display = 'none';
    const showing_image = document.getElementById("Showing_image");
    showing_image.style.display = 'block';

}


