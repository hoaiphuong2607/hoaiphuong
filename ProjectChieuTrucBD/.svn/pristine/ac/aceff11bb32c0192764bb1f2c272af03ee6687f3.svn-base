function sendNewContact() {
	if ($('#Name').val() != '' && $('#Email').val() != '' && $('#Message').val() != '') {

		if (!validateEmail($('#Email').val())) {
			alert('Địa chỉ email không hợp lệ!');
			return;
		}
		var dataChitiet = {
			'Name': $("#Name").val(),
			'Email': $("#Email").val(),
			'Phone': $("#Phone").val(),
			'Message': $("#Message").val()
		}
		$.ajax({
			method: 'POST',
			url: '/Shared/SendContact',
			data: JSON.stringify({ data: dataChitiet }),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			cache: false, async: true, processData: true, traditional: true,
		}).done(function (data) {
            if (data.Error) {
                alert('Đã xảy ra lỗi trong quá trình gửi lời nhắn, bạn vui lòng thực hiện lại sau 30s. Chúng tôi rất xin lỗi vì sự bất tiện này.');
                ResetFormContact();
            }
            else {
                alert('Chúng tôi đã nhận được lời nhắn của bạn và sẽ phản hồi trong thời gian sớm nhất có thể. Xin cảm ơn!');
            }
				
		});
	}
	else {
		alert('Vui lòng nhập đầy đủ thông tin trước khi gửi. Xin cảm ơn!');
	}
}
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
function ResetFormContact() {
	$('#Name').val('');
	$('#Phone').val('');
	$('#Message').val('');
	$('#Email').val('');
}

function GetSelect2TrungTamBH(id) {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllTrungTamBH'
	}).done(function (data) {
		//$(id).selectpicker("destroy");
		var optionData = JSON.parse(data.jsData);
		var html = `<option style="text-align:center;" value="">Vui lòng chọn tỉnh thành nơi bạn đang sinh sống hoặc làm việc</option>`;
		for (let i = 0; i < optionData.length; i++) {
			html += `<option style="text-align:center;" src="${optionData[i].BanDo}" value="${optionData[i].IdMaintCenter}">${optionData[i].TinhThanh}</option>`;
		}
		$(id).html(html);
	});
}

$(document).ready(function () {
	const path = window.location.pathname;
	const pathnames = path.split(`/`);
	$(`.${pathnames[pathnames.length - 1]}`).addClass("active");
});