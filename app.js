window.onload = () => {

    let divContainer = document.createElement('div');
    divContainer.id = 'divContainer';
    divContainer.className = 'container';
    document.body.appendChild(divContainer);    
    
    let divRow = document.createElement('div');
    divRow.id = 'divRow';
    divRow.className = 'row';
    divContainer.appendChild(divRow);

    let firstDiv = document.createElement('div');
    firstDiv.id = 'firstDiv';
    firstDiv.className = 'col-md-6';
    divRow.appendChild(firstDiv);

    let form = document.createElement('form');
    form.id = 'solForm';
    form.className = 'row g-3';
    form.style = 'background-color : mediumaquamarine;border-radius: 10px;';
    firstDiv.appendChild(form);

    let solForm = document.querySelector("#solForm");

    let divName = document.createElement('div');
    divName.id = 'divName';
    divName.className = 'col-md-3';
    let lblName = document.createElement('label');
    lblName.id = 'lblName';
    lblName.className = 'form-label';
    lblName.innerHTML = 'İsim';
    lblName.htmlFor ='txtName';
    divName.appendChild(lblName);
    let txtName = document.createElement('input');
    txtName.type = 'text';
    txtName.id = 'txtName';
    txtName.className = 'form-control';
    txtName.required = 'required';
    divName.appendChild(txtName);
    solForm.appendChild(divName);

    let divSurname = document.createElement('div');
    divSurname.id = 'divSurname';
    divSurname.className = 'col-md-3';
    let lblSurname = document.createElement('label');
    lblSurname.id = 'lblSurname';
    lblSurname.className = 'form-label';
    lblSurname.innerHTML = 'Soyisim';
    lblSurname.htmlFor ='txtSurname';
    divSurname.appendChild(lblSurname);
    let txtSurname = document.createElement('input');
    txtSurname.type = 'text';
    txtSurname.id = 'txtSurname';
    txtSurname.className = 'form-control';
    txtSurname.required = 'required';
    divSurname.appendChild(txtSurname);
    solForm.appendChild(divSurname);

    let divEmail = document.createElement('div');
    divEmail.id = 'divEmail';
    divEmail.className = 'col-md-6';
    let lblEmail = document.createElement('label');
    lblEmail.id = 'lblEmail';
    lblEmail.className = 'form-label';
    lblEmail.innerHTML = 'E-Posta';
    lblEmail.htmlFor ='txtEmail';
    divEmail.appendChild(lblEmail);
    let txtEmail = document.createElement('input');
    txtEmail.type = 'text';
    txtEmail.id = 'txtEmail';
    txtEmail.className = 'form-control';
    txtEmail.required = 'required';
    divEmail.appendChild(txtEmail);
    solForm.appendChild(divEmail);

    let divCity = document.createElement('div');
    divCity.id = 'divCity';
    divCity.className = 'col-md-8';
    let lblCity = document.createElement('label');
    lblCity.id = 'lblCity';
    lblCity.className = 'form-label';
    lblCity.innerHTML = 'Şehir';
    lblCity.htmlFor ='txtCity';
    divCity.appendChild(lblCity);
    let txtCity = document.createElement('input');
    txtCity.type = 'text';
    txtCity.id = 'txtCity';
    txtCity.className = 'form-control';
    txtCity.required = 'required';
    divCity.appendChild(txtCity);
    solForm.appendChild(divCity);

    let divZipCode = document.createElement('div');
    divZipCode.id = 'divZipCode';
    divZipCode.className = 'col-md-4';
    let lblZipCode = document.createElement('label');
    lblZipCode.id = 'lblZipCode';
    lblZipCode.className = 'form-label';
    lblZipCode.innerHTML = 'Posta Kodu';
    lblZipCode.htmlFor ='txtZipCode';
    divZipCode.appendChild(lblZipCode);
    let txtZipCode = document.createElement('input');
    txtZipCode.type = 'text';
    txtZipCode.id = 'txtCity';
    txtZipCode.className = 'form-control';
    txtZipCode.required = 'required';
    divZipCode.appendChild(txtZipCode);
    solForm.appendChild(divZipCode);

    let divButton = document.createElement('div');
    divButton.id = 'divButton';
    divButton.className = 'col-12';
    let btnSend = document.createElement('button');
    btnSend.type = 'submit';
    btnSend.id = 'btnSend';
    btnSend.className = 'btn btn-primary';
    btnSend.innerHTML = 'Gönder';
    divButton.appendChild(btnSend);
    solForm.appendChild(divButton);   

    let secondDiv = document.createElement('div');
    secondDiv.id = 'secondDiv';
    secondDiv.style = 'background-color : mediumaquamarine;border-radius: 10px;';
    secondDiv.className = 'col-md-6';
    divRow.appendChild(secondDiv);

    let ul = document.createElement('ul');
    ul.id = 'ul';
    ul.className = 'list-group';
    secondDiv.appendChild(ul);

    let li = document.createElement('li');
    li.id = 'li';
    li.className = 'list-group-item';
    let cbLi = document.createElement('input');
    cbLi.type = 'checkbox';
    cbLi.id = 'cbLi';
    cbLi.className = 'form-check-input me-1';
    cbLi.setAttribute('aria-label','...');
    li.appendChild(cbLi);
    let lblLi = document.createElement('label');
    lblLi.id = 'lblLi';
    lblLi.innerHTML = 'First Item';
    li.appendChild(lblLi);     
    //let ul = document.querySelector('#ul');
    ul.appendChild(li);

}
//TODO:Butona basinca sag div deki ul nin icerisine yeni li eklenecek
//TODO:IsPostBack nasil yapiliyor arastirilacak. 
//btnSend.addEventListener('click', function (e) {
//     let li = document.createElement('li');
//     li.id = 'li';
//     li.className = 'list-group-item';
//     let cbLi = document.createElement('input');
//     cbLi.type = 'checkbox';
//     cbLi.id = 'cbLi';
//     cbLi.className = 'form-check-input me-1';
//     cbLi.setAttribute('aria-label','...');
//     li.appendChild(cbLi);
//     let lblLi = document.createElement('label');
//     lblLi.id = 'lblLi';
//     lblLi.innerHTML = 'First Item';
//     li.appendChild(lblLi);     
//     let ul = document.querySelector('#ul');
//     ul.appendChild(li);
    
// });

