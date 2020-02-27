document.getElementById('output').style.visibility = 'visible'
document.getElementById('lbsInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    var lbs = e.target.value;
    // ***************MTH 101 grade ********************************//
document.getElementById('gramsOutput').innerHTML = lbs
 if (lbs > 100) {
   document.getElementById('gramsOutput').innerHTML=('Oops! Sorry Invalid Score');
 } 
 else if (lbs >= 75) {
    document.getElementById('gramsOutput').innerHTML=('A');
}
else if (lbs >= 65) {
    document.getElementById('gramsOutput').innerHTML=('B');
} 
else if (lbs >= 55) {
    document.getElementById('gramsOutput').innerHTML=('C');
} else if (lbs >= 45) {
    document.getElementById('gramsOutput').innerHTML=('D');
} else if (lbs >= 35) {
    document.getElementById('gramsOutput').innerHTML=('E');
} 
   else{
    document.getElementById('gramsOutput').innerHTML=('F');
   }


     // ***************MTH 101 grade value ********************************//
    document.getElementById('KgOutput').innerHTML = lbs;
    if (lbs > 100) {
        document.getElementById('KgOutput').innerHTML=('Oops! Sorry Invalid Value');
      } 
      else if (lbs >= 75) {
         document.getElementById('KgOutput').innerHTML=('5');
     }
     else if (lbs >= 65) {
         document.getElementById('KgOutput').innerHTML=('4');
     } 
     else if (lbs >= 55) {
         document.getElementById('KgOutput').innerHTML=('3');
     } else if (lbs >= 45) {
         document.getElementById('KgOutput').innerHTML=('2');
     } else if (lbs >= 35) {
         document.getElementById('KgOutput').innerHTML=('1');
     } 
        else{
         document.getElementById('KgOutput').innerHTML=('0');
        }
 // ***************MTH 101 Course Unit ********************************//
    document.getElementById('ozOutput').innerHTML = ('5 units');
   
})







// ***************************mathematics 102*****************************//
document.getElementById('102output').style.visibility = 'visible'
document.getElementById('102Input').addEventListener('input', function (e) {
    document.getElementById('102output').style.visibility = 'visible';
    var lb = e.target.value;

  // ***************MTH 102 grade ********************************//
  document.getElementById('102').innerHTML = lb
  if (lb > 100) {
    document.getElementById('102').innerHTML=('Oops! Sorry Invalid Score');
  } 
  else if (lb >= 75) {
     document.getElementById('102').innerHTML=('A');
 }
 else if (lb >= 65) {
     document.getElementById('102').innerHTML=('B');
 } 
 else if (lb >= 55) {
     document.getElementById('102').innerHTML=('C');
 } else if (lb >= 45) {
     document.getElementById('102').innerHTML=('D');
 } else if (lb >= 35) {
     document.getElementById('102').innerHTML=('E');
 } 
    else{
     document.getElementById('102').innerHTML=('F');
    }
 
 
      // ***************MTH 102 grade value ********************************//
     document.getElementById('Kg').innerHTML = lb;
     if (lb > 100) {
         document.getElementById('Kg').innerHTML=('Oops! Sorry Invalid Value');
       } 
       else if (lb >= 75) {
          document.getElementById('Kg').innerHTML=('5');
      }
      else if (lb >= 65) {
          document.getElementById('Kg').innerHTML=('4');
      } 
      else if (lb >= 55) {
          document.getElementById('Kg').innerHTML=('3');
      } else if (lb >= 45) {
          document.getElementById('Kg').innerHTML=('2');
      } else if (lb >= 35) {
          document.getElementById('Kg').innerHTML=('1');
      } 
         else{
          document.getElementById('Kg').innerHTML=('0');
         }
  // ***************MTH 102 Course Unit ********************************//
     document.getElementById('Oz').innerHTML = ('4 units');
    
 })






 
// ***************************mathematics 103*****************************//
document.getElementById('103output').style.visibility = 'visible'
document.getElementById('103Input').addEventListener('input', function (e) {
    document.getElementById('103output').style.visibility = 'visible';
    var l = e.target.value;

  // ***************MTH 103 grade ********************************//
  document.getElementById('103').innerHTML = l
  if (l > 100) {
    document.getElementById('103').innerHTML=('Oops! Sorry Invalid Score');
  } 
  else if (l >= 75) {
     document.getElementById('103').innerHTML=('A');
 }
 else if (l >= 65) {
     document.getElementById('103').innerHTML=('B');
 } 
 else if (l >= 55) {
     document.getElementById('103').innerHTML=('C');
 } else if (l >= 45) {
     document.getElementById('103').innerHTML=('D');
 } else if (l >= 35) {
     document.getElementById('103').innerHTML=('E');
 } 
    else{
     document.getElementById('103').innerHTML=('F');
    }
 
 
      // ***************MTH 103 grade value ********************************//
     document.getElementById('K3').innerHTML = l;
     if (l > 100) {
         document.getElementById('K3').innerHTML=('Oops! Sorry Invalid Value');
       } 
       else if (l >= 75) {
          document.getElementById('K3').innerHTML=('5');
      }
      else if (l >= 65) {
          document.getElementById('K3').innerHTML=('4');
      } 
      else if (l >= 55) {
          document.getElementById('K3').innerHTML=('3');
      } else if (l >= 45) {
          document.getElementById('K3').innerHTML=('2');
      } else if (l >= 35) {
          document.getElementById('K3').innerHTML=('1');
      } 
         else{
          document.getElementById('K3').innerHTML=('0');
         }
  // ***************MTH 103 Course Unit ********************************//
     document.getElementById('O3').innerHTML = ('3 units');
    
 })

 var grade;
 function total(){
     var mth1 = parseInt(document.getElementById('lbsInput').value);
     var mth2 = parseInt(document.getElementById('102Input').value);
     var mth3 = parseInt(document.getElementById('103Input').value);

     var total = mth1 + mth2 + mth3;
     grade = total/60;
     document.getElementById(`gp`).textContent = `G.P:` + grade;

     if (grade > 5.00) {
        document.getElementById(`g`).innerHTML=('Oops! Invalid G.P') 
     } else if (grade > 4.00) {
        document.getElementById(`g`).innerHTML=('Distinction') 
      } else if (grade > 3.00) {
            document.getElementById(`g`).innerHTML=('Upper-Credit')
       } else if (grade > 2.00) {
        document.getElementById(`g`).innerHTML=('Lower-Credit')  
    } else if (grade > 1.50) {
        document.getElementById(`g`).innerHTML=('Probation')  
    } else if (grade <= 1.00) {
        document.getElementById(`g`).innerHTML=('Voluntarily -Withdrawal')  
     }
 }



//  ************************************ g.p Grade*************************//
//  document.getElementById(`gp`).innerHTML=g
