﻿var index = 0, indexld = 0;
var tableData = InitTable('#tableData');

$(document).ready(function () {
	var path = window.location.pathname;
	$("#editModal").on('hide.bs.modal', function () {
		switch (path) {
			case "/UM/Product/Index":
				{
					ResetFormSanPham(); break;
				}
			case "/UM/Product":
				{
					ResetFormSanPham(); break;
				}
			case "/UM/Product/Category":
				{
					ResetFormDMSanPham(); break;
				}
		}
	});
	$("#addModal").on('hide.bs.modal', function () {
		switch (path) {
			case "/UM/Product/Index":
				{
					ResetFormSanPham(); break;
				}
			case "/UM/Product":
				{
					ResetFormSanPham(); break;
				}
			case "/UM/Product/Category":
				{
					ResetFormDMSanPham(); break;
				}
		}
	});
});

function ShowAddModal() {
	$('.modal-backdrop').remove();
	$('#addModal').modal('show');
}
function ShowEditChinhSachBHModal() {
	$('.modal-backdrop').remove();
	$('#editModal').modal('show');
}

function InitTable(idTable) {
	var temptable = $(idTable).DataTable({
		"pageLength": 50
	});
	$(idTable + "_length").appendTo($("#list-length"));
	$(idTable + "_filter").appendTo($("#list-search"));
	$(idTable + "_filter label").addClass("col-xs-12 col-sm-6 col-md-6 col-lg-6 col-lg-offset-6 col-md-offset-6 col-sm-offset-6");
	$(idTable + "_filter input").addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12");
	$(idTable + "_length").show();
	$(idTable + "_filter").show();
	$(".input-validation-error:first").focus();
	$("tbody #highlight").insertBefore("tbody tr:first");
	return temptable;
}
function ChangeFormat(id) {
	UnformatMoney(id);
	FormatMoney(id);
}
function FormatMoney(id) {
	var value = $('#' + id).val();
	var money = value.replace(".", ",");
	money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	$('#' + id).val(money);
}
function UnformatMoney(id) {
	var money = $('#' + id).val();
	money = money.toString().split(".").join("");
	$('#' + id).val(money);
}
function FormatMoneyValue(value) {
	try {
		value = JSON.stringify(value);
		var money = value.replace(".", ",");
		money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		return money;
	} catch (e) {
		return 0;
	}
}
function UnformatMoneyValue(value) {
	var money = value;
	money = money.toString().split(".").join("");
	return money;
}

function AddSanPham() {
	var dataChitiet = {
		'MaSanPham': $("#addModal #MaSanPham").val(),
		'TenSanPham': $("#addModal #TenSanPham").val(),
		'MoTa': $("#addModal #MoTa").val(),
		'MetaDescription': $("#addModal #MetaDescription").val(),
		'MetaKeyword': $("#addModal #MetaKeyword").val(),
		'Tags': $("#addModal #Tags").val(),
		'GiaTien': UnformatMoneyValue($("#addModal #GiaTien").val()),
		'SoLuong': UnformatMoneyValue($("#addModal #SoLuong").val()),
		'MaDanhMucSanPham': $("#addModal #MaDanhMucSanPham").val(),
		'TrangThai': $("#addModal #TrangThai").val() == 1 ? true : false
	}

	var list = new Array();
	var t = $('#addModal img.hinh-anh-minh-hoa');
	if (t.length == 0) {
		var item = '/Data/images/71662612_1404177783080182_8846538435301736448_n.jpg';
		list.push(item);
	}
	else
	{
		$(t).each(function (i, obj) {
			console.log($(this).val());
			list.push($(this).attr('src'));
		});
	}

	var obj = new Object();
	obj.SanPham = dataChitiet;
	obj.HinhAnhs = list;

	$.ajax({
		method: 'POST',
		url: '/UM/Data/AddSanPham',
		data: JSON.stringify({ data: obj }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			GetAllSanPham();
			alert('Thêm sản phẩm mới thành công!');
			$('#addModal').modal('hide');
			$('.modal-backdrop').remove();
			//ResetFormSanPham();
		}
		else
			alert('Đã xảy ra lỗi khi thêm sản phẩm (mã sản phẩm đã tồn tại, etc..)!');
	});
}

function GetAllDMHeThong() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllDMHeThong'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusDMHeThong','Hoạt động','Ngừng hoạt động')" class="btn-active" id="product-${data[i]["MaDanhMucHeThong"]}"><strong>Hoạt động</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusDMHeThong','Hoạt động','Ngừng hoạt động')" class="btn-active" id="product-${data[i]["MaDanhMucHeThong"]}">Ngừng hoạt động</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["MaDanhMucHeThong"],
				data[i]["TenDanhMucHeThong"],
				data[i]["MoTa"],
				data[i]["NgayTao"],
				data[i]["NgaySua"],
				result,
				`<a onclick="EditDMHeThong('${data[i]["MaDanhMucHeThong"]}')" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a><a onclick="DeleteDMHeThong('${data[i]["MaDanhMucHeThong"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}
function EditDMHeThong(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneDMHeThongById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#editModal #editModalTitle').html(`Chỉnh sửa danh mục "` + data.TenDanhMucHeThong + `"`);

		$('#editModal #MaDanhMucHeThong').val(data.MaDanhMucHeThong);
		$('#editModal #TenDanhMucHeThong').val(data.TenDanhMucHeThong);
		$('#editModal #MoTa').val(data.MoTa);
		$('#editModal').modal('show');
	});
}
function DeleteDMHeThong(id) {
	if (confirm('Bạn có chắc chắn muốn xoá danh mục này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteDMHeThong',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá danh mục thành công!');
				GetAllDMHeThong();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}
function AddDMHeThong() {
	if ($('#addModal #MaDanhMucHeThong').val() == '') {
		alert('Bạn chưa nhập mã danh mục!')
		return;
	}

	if ($('#addModal #MaDanhMucHeThong').val().includes('-')) {
		alert(`Mã danh mục không được chứa kí tự '-'!`)
		return;
	}

	if ($('#addModal #TenDanhMucHeThong').val() == '') {
		alert('Bạn chưa nhập tên danh mục!')
		return;
	}

	var dataChitiet = {
		'MaDanhMucHeThong': $('#addModal #MaDanhMucHeThong').val(),
		'TenDanhMucHeThong': $('#addModal #TenDanhMucHeThong').val(),
		'MoTa': $('#addModal #MoTa').val(),
	}

	$.ajax({
		method: 'POST',
		url: '/UM/Data/AddDMHeThong',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			GetAllDMHeThong();
			alert('Thêm danh mục thành công!');
			$("#addModal #MaDanhMucHeThong").val('');
			$("#addModal #TenDanhMucHeThong").val('');
			$("#addModal #MoTa").val('');
			$('#addModal').modal('hide');
			$('.modal-backdrop').remove();
		}
		else
			alert('Đã xảy ra lỗi khi thêm danh mục (mã hoặc tên danh mục đã tồn tại, etc..)!');
	});
}
function UpdateDMHeThong() {
	if ($('#editModal #TenDanhMucHeThong').val() == '') {
		alert('Bạn chưa nhập tên danh mục!')
		return;
	}

	var dataChitiet = {
		'MaDanhMucHeThong': $('#editModal #MaDanhMucHeThong').val(),
		'TenDanhMucHeThong': $('#editModal #TenDanhMucHeThong').val(),
		'MoTa': $('#editModal #MoTa').val(),
	}

	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateDMHeThong',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editModal').modal('hide');
			alert('Cập nhật thành công!');
			GetAllDMHeThong();
		}
		else
			alert('Cập nhật không thành công!');
	});
}

function GetAllQuestion() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllQuestion'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusQuestion','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdCauHoi"]}"><strong>Hiển thị</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusQuestion','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdCauHoi"]}">Ẩn</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["TieuDe"],
				data[i]["ChiTiet"],
				data[i]["NgayTao"],
				data[i]["NgaySua"],
				result,
				`<a onclick="EditQuestion(${data[i]["IdCauHoi"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a><a onclick="DeleteQuestion('${data[i]["IdCauHoi"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}

function EditChinhSachBH() {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetChinhSachBH'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#editModal #IdChinhSachBH').val(data.IdChinhSachBH);
		var editor = CKEDITOR.instances['Edit_ChiTiet'];
		editor.setData(data.ChiTiet);
		$('#editModal').modal('show');
	});
}

function UpdateChinhSachBaoHanh() {
	var nd = CKEDITOR.instances.Edit_ChiTiet.getData();
	if (nd === '') {
		alert('Bạn chưa nhập thông tin!')
		return;
	}

	var dataChitiet = {
		'IdChinhSachBH': $("#editModal #IdChinhSachBH").val(),
		'ChiTiet': nd
	}

	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateChinhSachBH',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editModal').modal('hide');
			alert('Cập nhật thành công!');
			window.location.href = '/UM/System/ChinhSachBH';
		}
		else
			alert('Cập nhật không thành công!');
	});
}
function GetAllCenter() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllCenter'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusCenter','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdMaintCenter"]}"><strong>Hiển thị</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusCenter','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdMaintCenter"]}">Ẩn</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["TinhThanh"],
				`<iframe src="${data[i]["BanDo"]}" allowfullscreen></iframe>`,
				data[i]["NgayTao"],
				data[i]["NgaySua"],
				result,
				`<a onclick="EditCenter(${data[i]["IdMaintCenter"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a><a onclick="DeleteCenter('${data[i]["IdMaintCenter"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}
function EditCenter(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneCenterById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#editModal #viewModalTitle').html(`Chỉnh sửa trung tâm "` + data.TinhThanh + `"`);

		$('#editModal #IdMaintCenter').val(data.IdMaintCenter);
		$('#editModal #BanDo').val(data.BanDo);
		$('#editModal #showMap').attr('src', data.BanDo);
		$('#editModal #TinhThanh').val(data.TinhThanh);
		$('#editModal').modal('show');
	});
}
function DeleteCenter(id) {
	if (confirm('Bạn có chắc chắn muốn xoá trung tâm này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteCenter',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá trung tâm thành công!');
				GetAllCenter();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}
function AddCenter() {
	if ($('#addModal #TinhThanh').val() == '') {
		alert('Bạn chưa nhập tên tỉnh thành!');
		$('#addModal #TinhThanh').focus();
		return;
	}

	if ($('#addModal #BanDo').val() == '') {
		alert('Bạn chưa nhập url bản đồ!');
		$('#addModal #BanDo').focus();
		return;
	}

	var dataChitiet = {
		'TinhThanh': $("#addModal #TinhThanh").val(),
		'BanDo': $("#addModal #BanDo").val()
	}

	$.ajax({
		method: 'POST',
		url: '/UM/Data/AddCenter',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			GetAllCenter();
			alert('Thêm trung tâm mới thành công!');
			$("#addModal #TinhThanh").val('');
			$("#addModal #BanDo").val('');
			$("#addModal #showMap").attr('src', '');
			$('#addModal').modal('hide');
			$('.modal-backdrop').remove();
		}
		else
			alert('Đã xảy ra lỗi khi thêm trung tâm (tỉnh thành đã tồn tại, etc..)!');
	});
}
function UpdateCenter() {
	if ($('#editModal #TinhThanh').val() == '') {
		alert('Bạn chưa nhập tên tỉnh thành!');
		$('#editModal #TinhThanh').focus();
		return;
	}

	if ($('#editModal #BanDo').val() == '') {
		alert('Bạn chưa nhập url bản đồ!');
		$('#editModal #BanDo').focus();
		return;
	}

	var dataChitiet = {
		'IdMaintCenter': $("#editModal #IdMaintCenter").val(),
		'TinhThanh': $("#editModal #TinhThanh").val(),
		'BanDo': $("#editModal #BanDo").val()
	}

	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateCenter',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editModal').modal('hide');
			alert('Cập nhật thành công!');
			GetAllCenter();
		}
		else
			alert('Cập nhật không thành công!');
	});
}

function GetAllNPP() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllNPP'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusNPP','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdDistributor"]}"><strong>Hiển thị</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusNPP','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdDistributor"]}">Ẩn</a>`;
			var img = `<a href="${data[i]["UrlHinhAnh"]}" target="_blank"><img class="img-thumbnail" src="${data[i]["UrlHinhAnh"]}" /></a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["TenNhaPhanPhoi"],
				img,
				data[i]["TenDanhMucHeThong"],
				data[i]["MoTa"],
				data[i]["DiaChi"],
				data[i]["NgayTao"],
				result,
				`<a onclick="EditNPP(${data[i]["IdDistributor"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a><a onclick="DeleteNPP('${data[i]["IdDistributor"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}
function EditNPP(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneNPPById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#editModal #editModalTitle').html(`Chỉnh sửa nhà phân phối "` + data.TenNhaPhanPhoi + `"`);

		$('#editModal #IdDistributor').val(data.IdDistributor);
		$('#editModal #TenNhaPhanPhoi').val(data.TenNhaPhanPhoi);
		$('#editModal #MaDanhMucHeThong').val(data.MaDanhMucHeThong).change();
		$('#editModal #DiaChi').val(data.DiaChi);
		$('#editModal #MoTa').val(data.MoTa);
		$('#editModal #UrlHinhAnh').val(data.UrlHinhAnh);
		$('#editModal #showImg').attr('src', data.UrlHinhAnh);
		$('#editModal').modal('show');
	});
}
function DeleteNPP(id) {
	if (confirm('Bạn có chắc chắn muốn xoá nhà phân phối này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteNPP',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá nhà phân phối thành công!');
				GetAllNPP();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}
function GetAllQuyenLoi() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllQuyenLoi'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			var span = `<span class="${data[i]["ChiTiet"]}" aria-hidden="true"></span>`;
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusQuyenLoi','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdQuyenLoi"]}"><strong>Hiển thị</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusQuyenLoi','Hiển thị','Ẩn')" class="btn-active" id="product-${data[i]["IdQuyenLoi"]}">Ẩn</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["TieuDe"],
				span,
				data[i]["NgaySua"],
				result,
				`<a onclick="EditQuyenLoi(${data[i]["IdQuyenLoi"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a>`
			]).draw().node();
		}
	});
}
function EditQuyenLoi(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneQuyenLoiById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);

		$('#editModal #IdQuyenLoi').val(data.IdQuyenLoi);
		$('#editModal #TieuDe').val(data.TieuDe);
		$('#editModal #ChiTiet').val(data.ChiTiet);
		$('#editModal').modal('show');
	});
}
function UpdateQuyenLoi() {
	if ($('#editModal #TieuDe').val() != '' && $('#editModal #ChiTiet').val() != '') {

		var dataChitiet = {
			'IdQuyenLoi': $("#editModal #IdQuyenLoi").val(),
			'TieuDe': $("#editModal #TieuDe").val(),
			'ChiTiet': $("#editModal #ChiTiet").val()
		}

		$.ajax({
			method: 'POST',
			url: '/UM/Data/UpdateQuyenLoi',
			data: JSON.stringify({ data: dataChitiet }),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			cache: false, async: true, processData: true, traditional: true,
		}).done(function (data) {
			if (data.Error) {
				$('#editModal').modal('hide');
				alert('Cập nhật thành công!');
				GetAllQuyenLoi();
			}
			else
				alert('Cập nhật không thành công!');
		});
	}
	else {
		alert('Vui lòng nhập đầy đủ thông tin trước khi thực hiện thao tác này. Xin cảm ơn!');
		return;
	}
}


function AddNPP() {
	if ($('#addModal #TenNhaPhanPhoi').val() != '' && $('#addModal #DiaChi').val() != '' && $('#addModal #MoTa').val() != '' && $('#addModal #MaDanhMucHeThong').val() != '' && $('#addModal #UrlHinhAnh').val() != '') {
		var dataChitiet = {
			'TenNhaPhanPhoi': $("#addModal #TenNhaPhanPhoi").val(),
			'DiaChi': $("#addModal #DiaChi").val(),
			'MoTa': $("#addModal #MoTa").val(),
			'UrlHinhAnh': $("#addModal #UrlHinhAnh").val(),
			'MaDanhMucHeThong': $("#addModal #MaDanhMucHeThong").val()
		}

		$.ajax({
			method: 'POST',
			url: '/UM/Data/AddNPP',
			data: JSON.stringify({ data: dataChitiet }),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			cache: false, async: true, processData: true, traditional: true,
		}).done(function (data) {
			if (data.Error) {
				GetAllNPP();
				alert('Thêm nhà phân phối mới thành công!');
				ResetFormNPP();
				$('#addModal').modal('hide');
				$('.modal-backdrop').remove();
			}
			else
				alert('Đã xảy ra lỗi khi thêm nhà phân phối (tên nhà phân phối đã tồn tại, etc..)!');
		});
	}
	else {
		alert('Vui lòng nhập đầy đủ thông tin trước khi thực hiện thao tác này. Xin cảm ơn!');
		return;
	}
}
function UpdateNPP() {
	if ($('#editModal #TenNhaPhanPhoi').val() != '' && $('#editModal #DiaChi').val() != '' && $('#editModal #MoTa').val() != '' && $('#editModal #MaDanhMucHeThong').val() != '' && $('#editModal #UrlHinhAnh').val() != '') {
		var dataChitiet = {
			'IdDistributor': $("#editModal #IdDistributor").val(),
			'TenNhaPhanPhoi': $("#editModal #TenNhaPhanPhoi").val(),
			'DiaChi': $("#editModal #DiaChi").val(),
			'MoTa': $("#editModal #MoTa").val(),
			'UrlHinhAnh': $("#editModal #UrlHinhAnh").val(),
			'MaDanhMucHeThong': $("#editModal #MaDanhMucHeThong").val()
		}

		$.ajax({
			method: 'POST',
			url: '/UM/Data/UpdateNPP',
			data: JSON.stringify({ data: dataChitiet }),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			cache: false, async: true, processData: true, traditional: true,
		}).done(function (data) {
			if (data.Error) {
				$('#editModal').modal('hide');
				alert('Cập nhật thành công!');
				GetAllNPP();
			}
			else
				alert('Cập nhật không thành công!');
		});
	}
	else {
		alert('Vui lòng nhập đầy đủ thông tin trước khi thực hiện thao tác này. Xin cảm ơn!');
		return;
	}
}

function ResetFormNPP() {
	$('#addModal #TenNhaPhanPhoi').val('');
	$('#addModal #DiaChi').val('');
	$('#addModal #MoTa').val('');
	$('#addModal #MaDanhMucHeThong').val('').change();
	$('#addModal #UrlHinhAnh').val('');
	$('#addModal #showImg').attr('src', '');
}

function EditQuestion(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneQuestionById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#editModal #viewModalTitle').html(`Chỉnh sửa câu hỏi "` + data.TieuDe + `"`);

		$('#editModal #IdCauHoi').val(data.IdCauHoi);
		$('#editModal #TieuDe').val(data.TieuDe);
		//$('#editModal #ChiTiet').val(data.ChiTiet);

		var editor = CKEDITOR.instances['Edit_ChiTiet'];
		editor.setData(data.ChiTiet);

		$('#editModal').modal('show');
	});
}
function DeleteQuestion(id) {
	if (confirm('Bạn có chắc chắn muốn xoá câu hỏi này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteQuestion',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá câu hỏi thành công!');
				GetAllQuestion();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}
function AddQuestion() {
	if ($('#addModal #TieuDe').val() == '') {
		alert('Bạn chưa nhập câu hỏi!')
		return;
	}

	var nd = CKEDITOR.instances.Add_ChiTiet.getData();
	if (nd === '') {
		alert('Bạn chưa nhập câu trả lời cho câu hỏi!')
		return;
	}

	var dataChitiet = {
		'ChiTiet': nd,
		'TieuDe': $("#addModal #TieuDe").val()
	}

	$.ajax({
		method: 'POST',
		url: '/UM/Data/AddQuestion',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			GetAllQuestion();
			alert('Thêm câu hỏi mới thành công!');

			var editor = CKEDITOR.instances['Add_ChiTiet'];
			editor.setData('');
			$("#addModal #TieuDe").val('');

			$('#addModal').modal('hide');
			$('.modal-backdrop').remove();
		}
		else
			alert('Đã xảy ra lỗi khi thêm câu hỏi (câu hỏi đã tồn tại, etc..)!');
	});
}
function UpdateQuestion() {
	if ($('#editModal #TieuDe').val() == '') {
		alert('Bạn chưa nhập câu hỏi!')
		return;
	}

	var nd = CKEDITOR.instances.Edit_ChiTiet.getData();
	if (nd === '') {
		alert('Bạn chưa nhập câu trả lời cho câu hỏi!')
		return;
	}

	var dataChitiet = {
		'IdCauHoi': $("#editModal #IdCauHoi").val(),
		'ChiTiet': nd,
		'TieuDe': $("#editModal #TieuDe").val()
	}

	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateQuestion',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editModal').modal('hide');
			alert('Cập nhật thành công!');
			GetAllQuestion();
		}
		else
			alert('Cập nhật không thành công!');
	});
}

function AddDMSanPham() {
	var dataChitiet = {
		'MaDanhMucSanPham': $("#addModal #MaDanhMucSanPham").val(),
		'TenDanhMucSanPham': $("#addModal #TenDanhMucSanPham").val(),
		'MetaDescription': $("#addModal #MetaDescription").val(),
		'MetaKeyword': $("#addModal #MetaKeyword").val(),
		'HinhAnh': ($("#addModal #HinhAnh").attr('src') != '' && $("#addModal #HinhAnh").attr('src') != null) ? $("#addModal #HinhAnh").attr('src') : '/Data/images/71662612_1404177783080182_8846538435301736448_n.jpg',
		'Tags': $("#addModal #Tags").val(),
		'TrangThai': $("#addModal #TrangThai").val() == 1 ? true : false
	}
	console.log(dataChitiet);
	$.ajax({
		method: 'POST',
		url: '/UM/Data/AddDMSanPham',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			GetAllDMSanPham();
			alert('Thêm danh mục sản phẩm mới thành công!');
			ResetFormDMSanPham();
			$('#addModal').modal('hide');
			$('.modal-backdrop').remove();
		}
		else
			alert('Đã xảy ra lỗi khi thêm danh mục sản phẩm (mã danh mục đã tồn tại, etc..)!');
	});
}

function ConvertTenSanPham() {
	var tenSanPham = $('#addModal #TenSanPham').val();
	if (tenSanPham != '' && tenSanPham != null) {
		$.ajax({
			url: '/Shared/ConvertTenSanPham',
			type: 'POST',
			data: {
				pid: tenSanPham
			}
		}).done(function (data) {
			console.log(data.jsData);
			$('#addModal #MaSanPham').val(data.jsData);
		});
	}
	else {
		console.log('Tên học sinh trống');
	}
}

function EditSanPham(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneSanPhamById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#titleModalEdit').html(`Chỉnh sửa sản phẩm "` + data.SanPham.TenSanPham + `"`);

		$('#editModal #IdSanPham').val(data.SanPham.IdSanPham);
		$('#editModal #MaSanPham').val(data.SanPham.MaSanPham);
		$('#editModal #TenSanPham').val(data.SanPham.TenSanPham);
		$('#editModal #MaDanhMucSanPham').val(data.SanPham.MaDanhMucSanPham).change();
		$('#editModal #GiaTien').val(FormatMoneyValue(data.SanPham.GiaTien));
		$('#editModal #SoLuong').val(FormatMoneyValue(data.SanPham.SoLuong));
		$('#editModal #MoTa').val(data.SanPham.MoTa);
		$('#editModal #MetaKeyword').val(data.SanPham.MetaKeyword);
		$('#editModal #MetaDescription').val(data.SanPham.MetaDescription);
		$('#editModal #Tags').val(data.SanPham.Tags);
		var indexs = 0;
		for (let i = 0; i < data.HinhAnh.length; i++) {
			console.log(data.HinhAnh);
			var id = ++indexs;
			var img = `<div class="img-wrap col-sm-2" id="editImg-${id}">
			    			<span class="close" onclick="DeleteImg('editImg-${id}')">&times;</span>
			    			<img style="width:111px;height:111px;object-fit:cover;" src='${data.HinhAnh[i].Url}' class="hinh-anh-minh-hoa"/>
			    			</div>`;
			$('#editModal #HinhAnh').append(img);
		}
		indexld = indexs;

		var trangThai = 0;
		if (data.SanPham.TrangThai == true)
			trangThai = 1;
		$('#editModal #TrangThai').val(trangThai).change();
		$('#editModal').modal('show');
	});
}

function EditDMSanPham(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneDMSanPhamById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#titleModalEdit').html(`Chỉnh sửa danh mục sản phẩm "` + data.TenDanhMucSanPham + `"`);

		$('#editModal #MaDanhMucSanPham').val(data.MaDanhMucSanPham);
		$('#editModal #TenDanhMucSanPham').val(data.TenDanhMucSanPham);

		$('#editModal #HinhAnh').attr('src', data.HinhAnh);
		$('#editModal #btnSelectImage').html('Thay đổi ảnh');

		$('#editModal #MetaKeyword').val(data.MetaKeyword);
		$('#editModal #MetaDescription').val(data.MetaDescription);
		$('#editModal #Tags').val(data.Tags);

		var trangThai = 0;
		if (data.TrangThai == true)
			trangThai = 1;
		$('#editModal #TrangThai').val(trangThai).change();
		$('#editModal').modal('show');
	});
}

function ResetFormSanPham() {
	$('#addModal #MaSanPham').val('');
	$('#addModal #TenSanPham').val('');
	$('#addModal #MetaKeyword').val('');
	$('#addModal #MetaDescription').val('');
	$('#addModal #MoTa').val('');
	$('#addModal #HinhAnh').html('');
	$('#addModal #Tags').val('');
	$('#addModal #MaDanhMucSanPham').val('').change();
	$('#addModal #TrangThai').val('').change();
	$('#addModal #GiaTien').val('');
	$('#addModal #SoLuong').val('');

	$('#editModal #IdSanPham').val('');
	$('#editModal #MaSanPham').val('');
	$('#editModal #TenSanPham').val('');
	$('#editModal #MetaKeyword').val('');
	$('#editModal #MetaDescription').val('');
	$('#editModal #MoTa').val('');
	$('#editModal #HinhAnh').html('');
	$('#editModal #Tags').val('');
	$('#editModal #MaDanhMucSanPham').val('').change();
	$('#editModal #TrangThai').val('').change();
	$('#editModal #GiaTien').val('');
	$('#editModal #SoLuong').val('');

	index = 0;
	indexld = 0;
}

function ResetFormDMSanPham() {
	$('#addModal #MaDanhMucSanPham').val('');
	$('#addModal #TenDanhMucSanPham').val('');
	$('#addModal #MetaKeyword').val('');
	$('#addModal #MetaDescription').val('');
	$('#addModal #HinhAnh').attr('src', '');
	$('#addModal #btnSelectImage').html('Thêm ảnh');
	$('#addModal #Tags').val('');
	$('#addModal #TrangThai').val('').change();

	$('#editModal #MaDanhMucSanPham').val('');
	$('#editModal #TenDanhMucSanPham').val('');
	$('#editModal #MetaKeyword').val('');
	$('#editModal #MetaDescription').val('');
	$('#editModal #HinhAnh').attr('src', '');
	$('#editModal #btnSelectImage').html('Thêm ảnh');
	$('#editModal #Tags').val('');
	$('#editModal #TrangThai').val('').change();
}

function UpdateSanPham() {
	var dataChitiet = {
		'IdSanPham': $("#editModal #IdSanPham").val(),
		'TenSanPham': $("#editModal #TenSanPham").val(),
		'MoTa': $("#editModal #MoTa").val(),
		'MetaDescription': $("#editModal #MetaDescription").val(),
		'MetaKeyword': $("#editModal #MetaKeyword").val(),
		'Tags': $("#editModal #Tags").val(),
		'GiaTien': UnformatMoneyValue($("#editModal #GiaTien").val()),
		'SoLuong': UnformatMoneyValue($("#editModal #SoLuong").val()),
		'MaDanhMucSanPham': $("#editModal #MaDanhMucSanPham").val(),
		'TrangThai': $("#editModal #TrangThai").val() == 1 ? true : false
	}

	var list = new Array();
	var t = $('#editModal img.hinh-anh-minh-hoa');
	if (t.length == 0) {
		var item = '/Data/71662612_1404177783080182_8846538435301736448_n.jpg';
		list.push(item);
	}
	else {
		$(t).each(function (i, obj) {
			list.push($(this).attr('src'));
		});
	}

	var obj = new Object();
	obj.SanPham = dataChitiet;
	obj.HinhAnhs = list;

	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateSanPham',
		data: JSON.stringify({ data: obj }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editModal').modal('hide');
			alert('Cập nhật thành công!');
			ResetFormSanPham();
			GetAllSanPham();
		}
		else
			alert('Cập nhật sản phẩm không thành công!');
	});
}

function UpdateDMSanPham() {
	var dataChitiet = {
		'MaDanhMucSanPham': $("#editModal #MaDanhMucSanPham").val(),
		'TenDanhMucSanPham': $("#editModal #TenDanhMucSanPham").val(),
		'MetaDescription': $("#editModal #MetaDescription").val(),
		'MetaKeyword': $("#editModal #MetaKeyword").val(),
		'Tags': $("#editModal #Tags").val(),
		'HinhAnh': ($("#editModal #HinhAnh").attr('src') != '' && $("#editModal #HinhAnh").attr('src') != null) ? $("#editModal #HinhAnh").attr('src') : '/Data/images/71662612_1404177783080182_8846538435301736448_n.jpg',
		'TrangThai': $("#editModal #TrangThai").val() == 1 ? true : false
	}
	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateDMSanPham',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editModal').modal('hide');
			alert('Cập nhật thành công!');
			ResetFormDMSanPham();
			GetAllDMSanPham();
		}
		else
			alert('Cập nhật danh mục sản phẩm không thành công!');
	});
}

function DeleteSanPham(id) {
	if (confirm('Bạn có chắc chắn muốn xoá sản phẩm này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteSanPham',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá sản phẩm thành công!');
				GetAllSanPham();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}

function DeleteDMSanPham(id) {
	if (confirm('Bạn có chắc chắn muốn xoá danh mục này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteDMSanPham',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá danh mục thành công!');
				GetAllDMSanPham();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}

function GetSelect2DanhMucSanPham(id)
{
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllDanhMucSanPham'
	}).done(function (data) {
		//$(id).selectpicker("destroy");
		var optionData = JSON.parse(data.jsData);
		var html = `<option value="">Chọn danh mục</option>`;
		for (let i = 0; i < optionData.length; i++) {
			html += `<option value="${optionData[i].MaDanhMucSanPham}">${optionData[i].TenDanhMucSanPham}</option>`;
		}
		$(id).html(html);
	});
}

function GetSelect2DMHeThong(id) {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllDMHeThong'
	}).done(function (data) {
		//$(id).selectpicker("destroy");
		var optionData = JSON.parse(data.jsData);
		var html = `<option value="">Chọn danh mục</option>`;
		for (let i = 0; i < optionData.length; i++) {
			html += `<option value="${optionData[i].MaDanhMucHeThong}">${optionData[i].TenDanhMucHeThong}</option>`;
		}
		$(id).html(html);
	});
}

function EditNoiDungThongTinDN(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneThongTinDNById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#editContentModal #IdThongTinDN').val(data.IdThongTinDN);
		var editor = CKEDITOR.instances['ChiTiet_NoiDung'];
		editor.setData(data.ChiTiet);
		$('#editContentModal').modal('show');
	});
}

function EditHinhAnhThongTinDN(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneThongTinDNById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#titleModalEdit').html(`Chỉnh sửa "` + data.LoaiThongTin + `"`);
		$('#editImgModal #IdThongTinDN').val(data.IdThongTinDN);
		$('#editImgModal #HinhAnh').removeAttr('src');
		$('#editImgModal #HinhAnh').attr('src', data.ChiTiet);
		$('#editImgModal').modal('show');
	});
}

function UpdateNoiDungThongTinDN() {
	var nd = CKEDITOR.instances.ChiTiet_NoiDung.getData();
	var dataChitiet = {
		'IdThongTinDN': $("#editContentModal #IdThongTinDN").val(),
		'ChiTiet': nd
	}
	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateThongTinDN',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editContentModal').modal('hide');
			alert('Cập nhật nội dung chính thành công!');
			GetAllThongTinDoanhNghiep();
		}
		else
			alert('Cập nhật không thành công!');
	});
}

function UpdateHinhAnhThongTinDN() {
	var nd = $('#editImgModal #HinhAnh').attr('src');
	var dataChitiet = {
		'IdThongTinDN': $("#editImgModal #IdThongTinDN").val(),
		'ChiTiet': nd
	}
	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateThongTinDN',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			$('#editImgModal').modal('hide');
			alert('Cập nhật thành công!');
			GetAllThongTinDoanhNghiep();
		}
		else
			alert('Cập nhật không thành công!');
	});
}

function GetAllThongTinDoanhNghiep() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllThongTinDoanhNghiep'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '', thaoTac = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (JSON.stringify(data[i]["LoaiThongTin"]).includes('Hình ảnh')) {
				result = `<a target='_blank' href='${data[i]["ChiTiet"]}'><img class='img-thumbnail' style="width:60px;height:60px;object-fit:cover;" src='${data[i]["ChiTiet"]}' /></a>`;
				thaoTac = `<a onclick="EditHinhAnhThongTinDN(${data[i]["IdThongTinDN"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a>`;
			}
			else {
				result = data[i]["ChiTiet"];
				thaoTac = `<a onclick="EditNoiDungThongTinDN(${data[i]["IdThongTinDN"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a>`;
			}
			const node = tableData.row.add([
				i + 1,
				data[i]["LoaiThongTin"],
				result,
				data[i]["NgaySua"],
				thaoTac
			]).draw().node();
			for (let k = 0; k < 5; k++) {
				if (k == 0 || k % 2 == 0) {
					$(node).find('td').eq(k).addClass('text-center');
				}
			}
		}
	});
}


function sendNewContact() {
	alert('Đã nhận được mail');
}

function GetAllSanPham() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllSanPham',
		data: {
			DMSanPham: ""
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
        tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusSanPham','Đang bán','Ngừng bán')" class="btn-active" id="product-${data[i]["IdSanPham"]}"><strong>Đang bán</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusSanPham','Đang bán','Ngừng bán')" class="btn-active" id="product-${data[i]["IdSanPham"]}">Ngừng bán</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["MaSanPham"],
				data[i]["TenSanPham"],
				data[i]["TenDanhMucSanPham"],
				FormatMoneyValue(data[i]["GiaTien"]),
				data[i]["SoLuong"],
				data[i]["NgayTao"],
				result,
				`<a onclick="EditSanPham(${data[i]["IdSanPham"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a><a onclick="DeleteSanPham('${data[i]["IdSanPham"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}

function EditContactInfo(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneContactInfoById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#titleModalEdit').html(`Chỉnh sửa thông tin liên hệ "` + data.Email + `"`);
		$('#editModal #IdContactInfo').val(data.IdContactInfo);
		$('#editModal #Email').val(data.Email);
		$('#editModal #DiaChi').val(data.DiaChi);
		$('#editModal #DienThoai').val(data.DienThoai);
		$('#editModal #ChiNhanh').val(data.ChiNhanh);
		$('#editModal #FAX').val(data.FAX);
		$('#editModal #BanDo').val(data.BanDo);
		$('#editModal').modal('show');
	});
}

function DeleteContactInfo(id) {
	if (confirm('Bạn có chắc chắn muốn xoá thông tin này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteContactInfo',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá thông tin liên hệ thành công!');
				GetAllContactInfo();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}

function AddContactInfo() {
	if (!validateEmail($("#addModal #Email").val())) {
		alert('Địa chỉ email không hợp lệ! Vui lòng kiểm tra lại.');
		return;
	}
	var dataChitiet = {
		'Email': $("#addModal #Email").val(),
		'MatKhauEmail': $("#addModal #MatKhauEmail").val(),
		'DiaChi': $("#addModal #DiaChi").val(),
		'ChiNhanh': $("#addModal #ChiNhanh").val(),
		'DienThoai': $("#addModal #DienThoai").val(),
		'FAX': $("#addModal #FAX").val(),
		'BanDo': $("#addModal #BanDo").val()
	}
	$.ajax({
		method: 'POST',
		url: '/UM/Data/AddContactInfo',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			alert('Thêm thông tin liên hệ mới thành công!');
			GetAllContactInfo();
			$('#addModal').modal('hide');
			$('.modal-backdrop').remove();
		}
		else
			alert('Đã xảy ra lỗi khi thêm thông tin liên hệ (email đã tồn tại, etc..)!');
	});
}

function UpdateContactInfo()
{
	if (!validateEmail($("#editModal #Email").val())) {
		alert('Địa chỉ email không hợp lệ! Vui lòng kiểm tra lại.');
		return;
	}
	var dataChitiet = {
		'IdContactInfo': $("#editModal #IdContactInfo").val(),
		'Email': $("#editModal #Email").val(),
		'MatKhauEmail': $("#editModal #MatKhauEmail").val(),
		'DiaChi': $("#editModal #DiaChi").val(),
		'ChiNhanh': $("#editModal #ChiNhanh").val(),
		'DienThoai': $("#editModal #DienThoai").val(),
		'FAX': $("#editModal #FAX").val(),
		'BanDo': $("#editModal #BanDo").val(),
		'TrangThai': $("#editModal #TrangThai").val() == 1 ? true : false
	}
	$.ajax({
		method: 'POST',
		url: '/UM/Data/UpdateContactInfo',
		data: JSON.stringify({ data: dataChitiet }),
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		cache: false, async: true, processData: true, traditional: true,
	}).done(function (data) {
		if (data.Error) {
			GetAllContactInfo();
			alert('Cập nhật thông tin liên hệ thành công!');
			$('#editModal').modal('hide');
			$('.modal-backdrop').remove();
		}
		else
			alert('Đã xảy ra lỗi khi cập nhật thông tin liên hệ (email đã tồn tại, etc..)!');
	});
}
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function GetAllContacts() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllContacts'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusContacts','Đã xem','Chưa xem')" class="btn-active" id="product-${data[i]["IdContact"]}"><strong>Đã xem</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusContacts','Đã xem','Chưa xem')" class="btn-active" id="product-${data[i]["IdContact"]}">Chưa xem</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["Name"],
				data[i]["Email"],
				data[i]["Subject"],
				data[i]["Message"],
				data[i]["NgayTao"],
				result,
				`<a onclick="EditContacts(${data[i]["IdContact"]})" title="Trả lời">
                                 <img src="/Content/images/help.png" alt="">
                                 </a><a onclick="DeleteContacts('${data[i]["IdContact"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}

function EditContacts(id) {
	$.ajax({
		method: 'POST',
		url: '/UM/Data/GetOneContactById',
		data: {
			id: id
		}
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		$('#viewModal #IdContact').val(data.IdContact);
		$('#viewModal #Email').val(data.Email);
		$('#viewModal #Name').val(data.Name);
		$('#viewModal #Subject').val(data.Subject);
		$('#viewModal #Message').val(data.Message);
		$('#viewModal #NgayGui').val(data.NgayGui);
		OnOffActive('product-' + id, '/UM/Data/ChangeStatusContacts', 'Đã xem', 'Chưa xem');
		$('#viewModal').modal('show');
	});
}

function ReplyContact() {
	if ($('#viewModal #MessageReply').val()) {
		var dataChitiet = {
			'IdContact': $("#viewModal #IdContact").val(),
			'Email': $("#viewModal #Email").val(),
			'MessageReply': $("#viewModal #MessageReply").val(),
			'SubjectReply': $("#viewModal #SubjectReply").val() == '' ? $("#viewModal #SubjectReply").attr('placeholder') : $("#viewModal #SubjectReply").val()
		}
		$.ajax({
			method: 'POST',
			url: '/UM/Data/ReplyContact',
			data: JSON.stringify({ data: dataChitiet }),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			cache: false, async: true, processData: true, traditional: true,
		}).done(function (data) {
			if (data.Error) {
				alert('Bạn đã phản hồi đến khách hàng ' + $('#viewModal #Name').val() + ' thành công!');
				$('#viewModal').modal('hide');
				$('#viewModal #SubjectReply').val('');
				$('#viewModal #MessageReply').val('');
				$('.modal-backdrop').remove();
			}
			else
				alert('Đã xảy ra lỗi khi phản hồi, vui lòng thực hiện lại thao tác này sau 10s nữa. Xin cảm ơn!');
		});
	}
	else {
		alert('Bạn chưa nhập lời nhắn, vui lòng kiểm tra lại. Xin cảm ơn!');

	}
}

function DeleteContacts(id) {
	if (confirm('Bạn có chắc chắn muốn xoá tin nhắn này?')) {
		$.ajax({
			method: 'POST',
			url: '/UM/Data/DeleteContacts',
			data: {
				id: id
			}
		}).done(function (data) {
			if (data.Error) {
				alert('Xoá tin nhắn thành công!');
				GetAllContacts();
			}
			else
				alert('Đã xảy ra lỗi trong quá trình xoá!');
		});
	}
}

function GetAllContactInfo() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllContactInfo'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusContactInfo','Hiển thị','Ẩn',1)" class="btn-active" id="product-${data[i]["IdContactInfo"]}"><strong>Hiển thị</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusContactInfo','Hiển thị','Ẩn',1)" class="btn-active" id="product-${data[i]["IdContactInfo"]}">Ẩn</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["Email"],
				data[i]["DiaChi"],
				data[i]["DienThoai"],
				data[i]["NgayTao"],
				result,
				`<a onclick="EditContactInfo(${data[i]["IdContactInfo"]})" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a><a onclick="DeleteContactInfo('${data[i]["IdContactInfo"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}

function GetAllDMSanPham() {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetAllDanhMucSanPham'
	}).done(function (data) {
		data = JSON.parse(data.jsData);
		var result = '';
		tableData.clear().draw();
		for (let i = 0; i < data.length; i++) {
			if (data[i]["TrangThai"] == true)
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusDMSanPham','Hoạt động','Ngừng hoạt động')" class="btn-active" id="productCategory-${data[i]["MaDanhMucSanPham"]}"><strong>Hoạt động</strong></a>`;
			else
				result = `<a href="javascript:void(0);" onclick="OnOffActive(this.id,'/UM/Data/ChangeStatusDMSanPham','Hoạt động','Ngừng hoạt động')" class="btn-active" id="productCategory-${data[i]["MaDanhMucSanPham"]}">Ngừng hoạt động</a>`;
			const node = tableData.row.add([
				i + 1,
				data[i]["MaDanhMucSanPham"],
				data[i]["TenDanhMucSanPham"],
				`<a href='${data[i]["HinhAnh"]}' target='_blank'><img src='${data[i]["HinhAnh"]}' class='col-sm-10 img-responsive'/></a>`,
				data[i]["NgayTao"],
				result,
				`<a onclick="EditDMSanPham('${data[i]["MaDanhMucSanPham"]}')" title="Sửa">
                                 <img src="/Content/images/edit.png" alt="">
                                 </a><a onclick="DeleteDMSanPham('${data[i]["MaDanhMucSanPham"]}')" title="Xóa" onclick="return confirm('Bạn có chắc muốn xóa không?')">
                                  <img src="/Content/images/delete.png" style="margin-left: 10px;" alt="">
                                  </a>`
			]).draw().node();
		}
	});
}

function OnOffActive(value, stringurl, active, deactive, thongtinlienhe) {
	console.log('id=' + value);
	var temp = value.split('-');
	$.ajax({
		url: stringurl,
		data: { id: temp[1] },
		dataType: "json",
		type: "POST",
		success: function (response) {
			if (response.status == true) {
				$('#' + value).html('<strong>' + active+'</strong>');
			}
			else {
				$('#' + value).html(deactive);
			}
			if (thongtinlienhe == 1) {
				GetAllContactInfo();
			}
		}
	});
}