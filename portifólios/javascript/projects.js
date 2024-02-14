var ativo;

function project_movie(){
let project_movie = document.getElementById("container2");
var pm = document.querySelector(".p_m");

if(ativo == null){

        if(project_movie.style.display == "none" ){
    
            project_movie.style.display = "block";
            ativo = project_movie;
    
        }
    
    }else if( ativo == project_movie){
    

    ativo.style.display = "none";
    project_movie.style.display = "none";
    ativo = null;

}else if(ativo.style.display == "block"){

    ativo.style.display = "none";

    if(project_movie.style.display == "none" ){

        project_movie.style.display = "block";
        ativo = project_movie;
        }else{
                
        }
}else{

    if(project_movie.style.display == "none" ){

        project_movie.style.display = "block";
        ativo = project_movie;
        }else{
            project_movie.style.display = "none";
        }

}

}

function DigitalFarma(){
var digitalFarma = document.getElementById("container3");


if(ativo == null){

        if(digitalFarma.style.display == "none" ){
    
            digitalFarma.style.display = "block";
            ativo = digitalFarma;
        }
    
        }else if(ativo == digitalFarma){

    ativo.style.display = "none";
    digitalFarma.style.display = "none";
    ativo = null;

}else if(ativo.style.display == "block"){

ativo.style.display = "none";

    if(digitalFarma.style.display == "none" ){

        digitalFarma.style.display = "block";
        ativo = digitalFarma;
        }else{
                
        }
}else{
    if(digitalFarma.style.display == "none" ){

        digitalFarma.style.display = "block";
        ativo = digitalFarma;
        }else{
            digitalFarma.style.display = "none";
        }

}

}



function TeamSorteio(){
    var teamSorteio = document.getElementById("container4");
    
    
    if(ativo == null){
    
            if(teamSorteio.style.display == "none" ){
        
                teamSorteio.style.display = "block";
                ativo = teamSorteio;
            }
        
            }else if(ativo == teamSorteio){
    
        ativo.style.display = "none";
        teamSorteio.style.display = "none";
        ativo = null;
    
    }else if(ativo.style.display == "block"){
    
    ativo.style.display = "none";
    
        if(teamSorteio.style.display == "none" ){
    
            teamSorteio.style.display = "block";
            ativo = teamSorteio;
            }else{
                    
            }
    }else{
        if(teamSorteio.style.display == "none" ){
    
            teamSorteio.style.display = "block";
            ativo = teamSorteio;
            }else{
                teamSorteio.style.display = "none";
            }
    
    }
    
    }

    function GambleGalaxy(){
        var gambleGalaxy = document.getElementById("container5");
        
        
        if(ativo == null){
        
                if(gambleGalaxy.style.display == "none" ){
            
                    gambleGalaxy.style.display = "block";
                    ativo = gambleGalaxy;
                }
            
                }else if(ativo == gambleGalaxy){
        
            ativo.style.display = "none";
            gambleGalaxy.style.display = "none";
            ativo = null;
        
        }else if(ativo.style.display == "block"){
        
        ativo.style.display = "none";
        
            if(gambleGalaxy.style.display == "none" ){
        
                gambleGalaxy.style.display = "block";
                ativo = gambleGalaxy;
                }else{
                        
                }
        }else{
            if(gambleGalaxy.style.display == "none" ){
        
                gambleGalaxy.style.display = "block";
                ativo = gambleGalaxy;
                }else{
                    gambleGalaxy.style.display = "none";
                }
        
        }
        
        }



        function AnimeInterative(){
            var animePage = document.getElementById("container6");
            
            
            if(ativo == null){
            
                    if(animePage.style.display == "none" ){
                
                        animePage.style.display = "block";
                        ativo = animePage;
                    }
                
                    }else if(ativo == animePage){
            
                ativo.style.display = "none";
                animePage.style.display = "none";
                ativo = null;
            
            }else if(ativo.style.display == "block"){
            
            ativo.style.display = "none";
            
                if(animePage.style.display == "none" ){
            
                    animePage.style.display = "block";
                    ativo = animePage;
                    }else{
                            
                    }
            }else{
                if(animePage.style.display == "none" ){
            
                    animePage.style.display = "block";
                    ativo = animePage;
                    }else{
                        animePage.style.display = "none";
                    }
            
            }
            
            }

            
        function AppTrailler(){
            var AppTrailler = document.getElementById("container7");
            
            
            if(ativo == null){
            
                    if(AppTrailler.style.display == "none" ){
                
                        AppTrailler.style.display = "block";
                        ativo = AppTrailler;
                    }
                
                    }else if(ativo == AppTrailler){
            
                ativo.style.display = "none";
                AppTrailler.style.display = "none";
                ativo = null;
            
            }else if(ativo.style.display == "block"){
            
            ativo.style.display = "none";
            
                if(AppTrailler.style.display == "none" ){
            
                    AppTrailler.style.display = "block";
                    ativo = AppTrailler;
                    }else{
                            
                    }
            }else{
                if(AppTrailler.style.display == "none" ){
            
                    AppTrailler.style.display = "block";
                    ativo = AppTrailler;
                    }else{
                        AppTrailler.style.display = "none";
                    }
            
            }
            
            }