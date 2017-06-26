//let remplacant du var

/*let tableau = ["toto", "tata", "titi"] // utilise tableau si besoin de compter combien il y a d'éléments. Et pour les fonctions spécifiques aux tableaux
let objet = ("zaza = muxh")

console.log(tableau);
console.info(objet);*/
    

$(function(){
    
    let index = 0;
    //si l'index est egal a mon tableau je reviens à 0/ permet de parcourir le tableau
    
    setInterval(function(){ //permet d'effectuer une fonction tts les x secondes
        
        let image = ["http://wowslider.com/sliders/demo-45/data1/images/waves.jpg","http://wowslider.com/sliders/demo-9/data/images/1293441583_nature_forest_morning_in_the_forest_015232_.jpg","http://wowslider.com/sliders/demo-69/data1/images/bubbles.jpg"]; //variable qui stocke nos images
        
        if(index == image.length) //une condition pour revenir à la 1ere image
            index = 0;
        //une instruction = pas d'accolade
        
        $("#slider-Mike").attr("src", image[index]); //modifie la src de l'img
        //renvoi a l'id dans index html
        index++
        
    }    , 3000);
    
    
    
/*
        $("#imageMike1").click(function(){ //la fonction se déclenche au click sur l'id imageMike1
            $("#imageMike1").attr("src", "http://www.bahrain.com/SiteCollectionImages/Page%20Images/bi-teaser.jpg");
        });
    //ou function clickevent{$("#imageMike1").click(clickevent()}
*/
/*    $(".one_third").click(function(){
        
        $("#imageMike1").attr("src", "http://www.bahrain.com/SiteCollectionImages/Page%20Images/bi-teaser.jpg");
        
        $("#imageMike2").attr("src", "http://www.bgparts.cn/upload/pages/20140505/34ade112db0ae6195c1564370dec4011.jpg");
        
        $("#imageMike3").attr("src", "https://image.jimcdn.com/app/cms/image/transf/dimension=290x10000:format=jpg/path/s0c45e746364e7486/image/ic187ddb5f72387f2/version/1467467192/image.jpg");
        
    });*/
    
    //exercice 2
    
        $(".one_third").one("click", function(){
        
        $("#imageMike1").attr("src", "http://www.bahrain.com/SiteCollectionImages/Page%20Images/bi-teaser.jpg");
        
        $("#imageMike2").attr("src", "http://www.bgparts.cn/upload/pages/20140505/34ade112db0ae6195c1564370dec4011.jpg");
        
        $("#imageMike3").attr("src", "https://image.jimcdn.com/app/cms/image/transf/dimension=290x10000:format=jpg/path/s0c45e746364e7486/image/ic187ddb5f72387f2/version/1467467192/image.jpg");
        
    });
    
    //exercice 3 carousel qui se declenche au click et permute les img
    
    $(".one_third").click(function(){ //function se déclenche au click sur la class one_third
        let image = $("#imageMike1").attr("src"); //je stock la valeur src de la première image dans la variable image
        $("#imageMike1").attr("src", $("#imageMike3").attr("src"));
        //je modifie le src de la 1ère image par le src de la 3ème
        $("#imageMike3").attr("src", $("#imageMike2").attr("src"));
        ////je modifie le src de la 3ème image par le src de la 2ème
        $("#imageMike2").attr("src", image); 
        //je modifie le src de la 2ème image par le src stocker dnas la variable image
    });
    
    
    //exercice 4 allonger le txt sur le btn read more

    
    $(".one_quarter .more > a").click(function(){ //> =juste en dessous du more
    //function se declenche au clisk sur la balise A qui se trouve dans class more
        event.preventDefault(); //pour annuler l'evenement par défaut.
        
    //console.info($(this).text);
        /*$(this).parent().parent().children("p:first:child").append("Mike le roi!!! OOUUIIIIII longue vie à Mike! Longue vie à Mike") //this trouve sur quel a on agit   ex pour un read more*/
        
/*    console.log($(this))//balise a sélectionner
    console.log($(this).parent())//balise p class more
    console.log($(this).parent().parent())//balise article class one_quarter
    console.log($(this).parent().children("p"))//balise p*/
        
    $(this).parent().parent().children("p").eq(0).append("Mike le roi!!! OOUUIIIIII longue vie à Mike! Longue vie à Mike") //ex pour tous les read more. 
    
    //eq permet de selectionner dans un tableau en jquery
        
        
    });
    
//    Exercice 5
    
    var request = $.ajax({ //envoi d'une url avec une méthode
      url: "https://jsonplaceholder.typicode.com/users", //api 
      method: "GET",
      dataType: "json" //champ optionnel. Définit le type de données reçues par le serveur
    });
 
    request.done(function( users ) { //done = success. Code à effectueer en cas de réussite
        var content ="";
        for(var i = 0; i < users.length; i++){
            content += '<li><a href="#">'+users[i].name+'</a></li>'
        }
        $("#right_column ul").html(content)//evenement du DOM - Modification du html dans la baliseul qui se trouve dans la balise qui a l'id right_column
        console.log(users["email"]);
        
    /*  $( "#log" ).html( users );*/
    });
 
    request.fail(function( jqXHR, textStatus ) { //fail = err - code à effectuer en cas d'échec
      alert( "Request failed: " + textStatus );
    });   

     //Exercice 6
    
    $.ajax({ //envoi d'une url avec une méthode/ variante on vire var request = et on supprime les ; sauf le dernier et request devant done et fail. 
      url: "https://jsonplaceholder.typicode.com/photos", //api 
      method: "GET",
      dataType: "json" //champ optionnel. Définit le type de données reçues par le serveur
    })
 
    .done(function( photos ) { //done = success. Code à effectueer en cas de réussite
        console.log($("#photos img"))
        for(var i = 0; i < 2 ; i++){
        $("#posts img").eq(i).attr("src",photos[i].url)
        } //fonction photos n'existe qu'ici donc function click ici
        
        $("#posts .more > a").click(function(){
            event.preventDefault();
            
            console.log($(this))
            console.log($(this).parent())
            console.log($(this).parent().parent())
            console.log($(this).parent().parent().parent().children("img"))
            
            for(var i=0; i < 2; i++){
                if(photos[i].url == 
                $(this).parent().parent().parent().children("img").attr("src")){
                    
                $(this).parent().parent().children("p").append(photos[i].title);
                }
            }
            //footer/parent figcaption/parent figure/parent 
            $(this).parent().parent().children("p").eq(i).append(photos[i].title);
        })
        
        
    })
    
 
   .fail(function( jqXHR, textStatus ) { //fail = err - code à effectuer en cas d'échec
      alert( "Request failed: " + textStatus );
    });   
    
//Exercice 7
/*    
    Lors de la sélection d'un utilisateur(click) dans la liste, afficher un console.log de l'email de l'utilisateur
*/    
    
    $(".right_column").click(function(){
        
    });
    
    
    
})