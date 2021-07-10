"use strict";

  function pop(){
    alert("이름을 입력해주세요.");
    const name = prompt("이름 입력" + "");
    if (name=="") {
        return pop();
    }
    
    else if (name == null) {
        return;
    }

    const truefalse = confirm(name + "님은 위코드 소속이신가요?");
    if (truefalse){
        alert("매우 반갑습니다.")
    }
    else{
        alert("그냥 반갑습니다.")
    }
  }

  pop();