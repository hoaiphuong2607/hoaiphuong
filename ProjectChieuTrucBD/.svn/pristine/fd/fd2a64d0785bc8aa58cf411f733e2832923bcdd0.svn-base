using System;
using System.Linq;
using ChieuTrucDB.Models;
using System.Dynamic;
using Newtonsoft.Json;
using ChieuTrucDB.Areas.UM.Models;
using ChieuTrucDB.Helpers;
using System.Collections.Generic;

namespace ChieuTrucDB.DAL
{
    public class ProductCategoryDAL
    {
        DatabaseContext _db;
        public ProductCategoryDAL()
        {
            _db = new DatabaseContext();
        }
        public bool ChangeStatus(string id)
        {
            var user = _db.DMSanPhams.SingleOrDefault(x => x.MaDanhMucSanPham == id);
            user.TrangThai = !user.TrangThai;
            _db.SaveChanges();

            var list = _db.SanPhams.Where(x => x.MaDanhMucSanPham == id).ToList();
            if (list.Count > 0)
            {
                foreach (var item in _db.SanPhams.Where(x => x.MaDanhMucSanPham == id).ToList())
                {
                    var i = _db.SanPhams.FirstOrDefault(x => x.IdSanPham == item.IdSanPham);
                    if (i.TrangThai != user.TrangThai)
                    {
                        item.TrangThai = user.TrangThai;
                        _db.SaveChanges();
                    }
                }
            }
            return user.TrangThai;
        }
        public DMSanPham GetOneByMetaTitle(string metaTitle)
        {
            try
            {
                var user = _db.DMSanPhams.FirstOrDefault(x => x.MetaTitle == metaTitle);
                return user;
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public DanhMucHeThong GetDMHTByMaDM(string maDanhMuc)
        {
            try
            {
                var user = _db.DanhMucHeThongs.FirstOrDefault(x => x.MaDanhMucHeThong == maDanhMuc);
                return user;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public bool Add(DMSanPham data)
        {
            try
            {
                data.NgayTao = DateTime.Now;
                data.MetaTitle = StringHelper.ToUnsignString(data.TenDanhMucSanPham.ToLower());
                _db.DMSanPhams.Add(data);
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool AddQuestion(CauHoi data)
        {
            try
            {
                data.NgayTao = DateTime.Now;
                data.TrangThai = true;
                _db.CauHois.Add(data);
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        // bắt đầu khách hàng thân thiết
        public KhachHangThanThiet GetLoyalCustomerById(long id)
        {
            try
            {
                var data = _db.KhachHangThanThiet.FirstOrDefault(x => x.Id == id);
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public bool AddLoyalCustomer(KhachHangThanThiet data)
        {
            try
            {
                _db.KhachHangThanThiet.Add(data);
                _db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool EditLoyalCustomer(KhachHangThanThiet data)
        {
            try
            {
                var item = _db.KhachHangThanThiet.FirstOrDefault(x => x.Id == data.Id);
                item.Email = data.Email;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteLoyalCustomerById(long id)
        {
            try
            {
                var item = _db.KhachHangThanThiet.SingleOrDefault(x => x.Id == id);
                if (item != null)
                {
                    _db.KhachHangThanThiet.Remove(item);
                    _db.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        // kết thúc khách hàng thân thiết

        public bool AddNPP(Distributor data)
        {
            try
            {
                data.NgayTao = DateTime.Now;
                data.TrangThai = true;
                _db.Distributors.Add(data);
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool AddDMHeThong(DanhMucHeThong data)
        {
            try
            {
                data.NgayTao = DateTime.Now;
                data.TrangThai = true;
                _db.DanhMucHeThongs.Add(data);
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool AddCenter(MaintCenter data)
        {
            try
            {
                data.NgayTao = DateTime.Now;
                data.TrangThai = true;
                _db.MaintCenters.Add(data);
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool Update(DMSanPham data)
        {
            try
            {
                var item = _db.DMSanPhams.FirstOrDefault(x => x.MaDanhMucSanPham == data.MaDanhMucSanPham);
                item.TenDanhMucSanPham = data.TenDanhMucSanPham;
                item.MetaTitle = StringHelper.ToUnsignString(data.TenDanhMucSanPham.ToLower());
                item.MetaDescription = data.MetaDescription;
                item.MetaKeyword = data.MetaKeyword;
                item.Tags = data.Tags;
                item.HinhAnh = data.HinhAnh;
                item.TrangThai = data.TrangThai;
                item.NgaySua = DateTime.Now;
                _db.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public bool UpdateQuestion(CauHoi data)
        {
            try
            {
                var item = _db.CauHois.FirstOrDefault(x => x.IdCauHoi == data.IdCauHoi);
                item.TieuDe = data.TieuDe;
                item.ChiTiet = data.ChiTiet;
                item.NgaySua = DateTime.Now;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool UpdateQuyenLoi(QuyenLoi data)
        {
            try
            {
                var item = _db.QuyenLois.FirstOrDefault(x => x.IdQuyenLoi == data.IdQuyenLoi);
                item.TieuDe = data.TieuDe;
                item.ChiTiet = data.ChiTiet;
                item.NgaySua = DateTime.Now;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool UpdateNPP(Distributor data)
        {
            try
            {
                var item = _db.Distributors.FirstOrDefault(x => x.IdDistributor == data.IdDistributor);
                item.TenNhaPhanPhoi = data.TenNhaPhanPhoi;
                item.DiaChi = data.DiaChi;
                item.MoTa = data.MoTa;
                item.UrlHinhAnh = data.UrlHinhAnh;
                item.MaDanhMucHeThong = data.MaDanhMucHeThong;
                item.NgaySua = DateTime.Now;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool UpdateDMHeThong(DanhMucHeThong data)
        {
            try
            {
                var item = _db.DanhMucHeThongs.FirstOrDefault(x => x.MaDanhMucHeThong == data.MaDanhMucHeThong);
                item.TenDanhMucHeThong = data.TenDanhMucHeThong;
                item.MoTa = data.MoTa;
                item.NgaySua = DateTime.Now;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool UpdateCenter(MaintCenter data)
        {
            try
            {
                var item = _db.MaintCenters.FirstOrDefault(x => x.IdMaintCenter == data.IdMaintCenter);
                item.TinhThanh = data.TinhThanh;
                item.BanDo = data.BanDo;
                item.NgaySua = DateTime.Now;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool UpdateChinhSachBH(ChinhSachBH data)
        {
            try
            {
                var item = _db.ChinhSachBHs.FirstOrDefault(x => x.IdChinhSachBH == data.IdChinhSachBH);
                item.ChiTiet = data.ChiTiet;
                item.NgayCapNhat = DateTime.Now;
                item.TrangThai = true;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool Delete(string id)
        {
            try
            {
                var item = _db.SanPhams.Where(x => x.MaDanhMucSanPham == id).ToList();
                if (item.Count > 0)
                {
                    return false;
                }
                var i = _db.DMSanPhams.FirstOrDefault(x => x.MaDanhMucSanPham == id);
                _db.DMSanPhams.Remove(i);
                //i.Deleted = true;
                _db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteQuestion(long id)
        {
            try
            {
                var i = _db.CauHois.FirstOrDefault(x => x.IdCauHoi == id);
                if (i != null)
                {
                    _db.CauHois.Remove(i);
                    _db.SaveChanges();
                    return true;
                }
                else
                    return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteNPP(long id)
        {
            try
            {
                var i = _db.Distributors.FirstOrDefault(x => x.IdDistributor == id);
                if (i != null)
                {
                    _db.Distributors.Remove(i);
                    _db.SaveChanges();
                    return true;
                }
                else
                    return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteDMHeThong(string id)
        {
            try
            {
                var list = _db.Distributors.Where(x => x.MaDanhMucHeThong == id).ToList();
                if (list.Count > 0)
                {
                    return false;
                }

                var i = _db.DanhMucHeThongs.FirstOrDefault(x => x.MaDanhMucHeThong == id);
                if (i != null)
                {
                    _db.DanhMucHeThongs.Remove(i);
                    _db.SaveChanges();
                    return true;
                }
                else
                    return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteCenter(long id)
        {
            try
            {
                var i = _db.MaintCenters.FirstOrDefault(x => x.IdMaintCenter == id);
                if (i != null)
                {
                    _db.MaintCenters.Remove(i);
                    _db.SaveChanges();
                    return true;
                }
                else
                    return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public DMSanPham GetOneDMSanPhamById2(string id)
        {
            try
            {
                var item = _db.DMSanPhams.FirstOrDefault(x => x.MaDanhMucSanPham == id);
                return item;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public string GetOneThongTinDNById(long id)
        {
            try
            {
                var item = _db.ThongTinDNs.FirstOrDefault(x => x.IdThongTinDN == id);
                dynamic obj = new ExpandoObject();
                obj.IdThongTinDN = item.IdThongTinDN;
                obj.ChiTiet = item.ChiTiet;
                obj.LoaiThongTin = item.LoaiThongTin;

                string jsonData = JsonConvert.SerializeObject(obj, new JsonSerializerSettings()
                {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented
                });
                return jsonData;
            }
            catch (Exception ex)
            {
                return string.Empty;
            }
        }
        public string GetOneDMSanPhamById(string id)
        {
            try
            {
                var item = _db.DMSanPhams.FirstOrDefault(x => x.MaDanhMucSanPham == id);
                dynamic obj = new ExpandoObject();
                obj.MaDanhMucSanPham = item.MaDanhMucSanPham;
                obj.TenDanhMucSanPham = item.TenDanhMucSanPham;
                obj.HinhAnh = item.HinhAnh;
                obj.MetaTitle = item.MetaTitle;
                obj.MetaKeyword = item.MetaKeyword;
                obj.MetaDescription = item.MetaDescription;
                obj.Tags = item.Tags;
                obj.TrangThai = item.TrangThai;
                obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");

                string jsonData = JsonConvert.SerializeObject(obj, new JsonSerializerSettings()
                {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented
                });
                return jsonData;
            }
            catch (Exception ex)
            {
                return string.Empty;
            }
        }
        public string GetOneQuestionById(long id)
        {
            try
            {
                var item = _db.CauHois.FirstOrDefault(x => x.IdCauHoi == id);
                dynamic obj = new ExpandoObject();
                obj.IdCauHoi = item.IdCauHoi;
                obj.TieuDe = item.TieuDe;
                obj.ChiTiet = item.ChiTiet;
                obj.TrangThai = item.TrangThai;

                string jsonData = JsonConvert.SerializeObject(obj, new JsonSerializerSettings()
                {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented
                });
                return jsonData;
            }
            catch (Exception ex)
            {
                return string.Empty;
            }
        }
        public string GetOneQuyenLoiById(long id)
        {
            try
            {
                var item = _db.QuyenLois.FirstOrDefault(x => x.IdQuyenLoi == id);
                dynamic obj = new ExpandoObject();
                obj.IdQuyenLoi = item.IdQuyenLoi;
                obj.TieuDe = item.TieuDe;
                obj.ChiTiet = item.ChiTiet;
                obj.TrangThai = item.TrangThai;

                string jsonData = JsonConvert.SerializeObject(obj, new JsonSerializerSettings()
                {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented
                });
                return jsonData;
            }
            catch (Exception ex)
            {
                return string.Empty;
            }
        }
        public string GetOneNPPById(long id)
        {
            try
            {
                var item = _db.Distributors.FirstOrDefault(x => x.IdDistributor == id);
                dynamic obj = new ExpandoObject();
                obj.IdDistributor = item.IdDistributor;
                obj.TenNhaPhanPhoi = item.TenNhaPhanPhoi;
                obj.DiaChi = item.DiaChi;
                obj.MoTa = item.MoTa;
                obj.MaDanhMucHeThong = item.MaDanhMucHeThong;
                obj.TenDanhMucHeThong = item.DanhMucHeThong != null ? item.DanhMucHeThong.TenDanhMucHeThong : "";
                obj.UrlHinhAnh = item.UrlHinhAnh;
                obj.TrangThai = item.TrangThai;
                obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");
                obj.NgaySua = item.NgaySua != null ? item.NgaySua.Value.ToString("dd/MM/yyyy") : "";

                string jsonData = JsonConvert.SerializeObject(obj, new JsonSerializerSettings()
                {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented
                });
                return jsonData;
            }
            catch(Exception ex)
            {
                return string.Empty;
            }
        }
    }
}