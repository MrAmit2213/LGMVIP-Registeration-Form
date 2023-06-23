
function display(){
    let cards=document.getElementById('cards');
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let website=document.getElementById('website').value;
    let img=document.getElementById('img').value;
    let gender=$("input[name='gender']:checked").val();
    let java="";
    let html="";
    let css="";
    if ($('#java').is(":checked")) {
        java=$('#java').val();
    }
    if ($('#html').is(":checked")) {
        html=$('#html').val();
    }
    if ($('#css').is(":checked")) {
        css=$('#css').val();
    }
    let totalSkill=java+html+css;
    if(name=='' || email=='' || website=='' || img=='' || gender=='' || totalSkill==''){
        alert('Please fill all the columns');
        return false;
    }
    let div1=document.createElement('div');
    div1.className="back flex";
    let div2=document.createElement('div');
    div2.className="discription";
    let div3=document.createElement('div');
    div3.className="image";
    let image=document.createElement('img');
    image.placeholder='image';
    image.src=img;
    let divName=document.createElement('div');
    divName.className='name';
    let divGender=document.createElement('div');
    let divMail=document.createElement('div');
    let divSite=document.createElement('a');
    divSite.href='website';
    let divSkill=document.createElement('div');
    divSkill.className="flex";
    let tn1=document.createTextNode(img);
    let tn2=document.createTextNode(name);
    let tn3=document.createTextNode(gender);
    let tn4=document.createTextNode(email);
    let tn5=document.createTextNode(website);
    let tn6=document.createTextNode(totalSkill);
    image.appendChild(tn1);
    divSkill.appendChild(tn6);
    divSite.appendChild(tn5);
    divMail.appendChild(tn4);
    divGender.appendChild(tn3);
    divName.appendChild(tn2);
    div3.appendChild(image);
    div2.appendChild(divName);
    div2.appendChild(divGender);
    div2.appendChild(divMail);
    div2.appendChild(divSite);
    div2.appendChild(divSkill);
    div1.appendChild(div2);
    div1.appendChild(div3);
    cards.appendChild(div1);
}

function Clear(){
    document.getElementsById('name').reset();
}