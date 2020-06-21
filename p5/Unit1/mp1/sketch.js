for(i=0;i<8;i++){
    for(j=0;j<8;j++){
      if(i%2==0){
    if(j%2==1){
      fill(0);
  rect(25+50*i,25+50*j,50,50)

  }
    else{fill(255);
      rect(25+50*i,25+50*j,50,50);

}
}
  else {if(j%2==0){fill(0);
         rect(25+50*i,25+50*j,50,50);
         }
        else{fill(255);
         rect(25+50*i,25+50*j,50,50);
         }

       }
    }

}
