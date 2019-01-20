function i1() {
      if(document.getElementById('i1').style.display=='none'){
        document.getElementById('i1').style.display='block';
      }else{
        document.getElementById('i1').style.display='none';
      }    
    }
function i2() {
      if(document.getElementById('i2').style.display=='none'){
        document.getElementById('i2').style.display='block';
      }else{
        document.getElementById('i2').style.display='none';
      }    
    }
function i3() {
      if(document.getElementById('i3').style.display=='none'){
        document.getElementById('i3').style.display='block';
      }else{
        document.getElementById('i3').style.display='none';
      }    
    }
function i4() {
      if(document.getElementById('i4').style.display=='none'){
        document.getElementById('i4').style.display='block';
      }else{
        document.getElementById('i4').style.display='none';
      }    
    } 
function i5() {
      if(document.getElementById('i5').style.display=='none'){
        document.getElementById('i5').style.display='block';
      }else{
        document.getElementById('i5').style.display='none';
      }    
    }      

        function language(){	
            var laguage = document.getElementById('laguage').value;
			var url = 'language_sellect.php?ln='+laguage;
			//alert(url);
            ajaxRouter(url, "returnMons", true);
            return(false);
        }	
        function returnMons(responseText){	
			//alert(kafi);
			document.getElementById('language').innerHTML = ""+ responseText +"";
			
        }	