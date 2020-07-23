using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using ChieuTrucDB.Helpers;
using ChieuTrucDB.Models;
using Newtonsoft.Json;
using DataModel.Resources;

namespace ChieuTrucDB.DAL
{
    public class SharedDAL
    {
        private readonly DatabaseContext _db;
        private readonly ResourceContext _Rdb;

        public SharedDAL()
        {
            try
            {
                _db = new DatabaseContext();
                _Rdb = new ResourceContext();
            }
            catch (Exception)
            {
                _db = null;
                _Rdb = null;
            }
        }
        //public List<DanhMucHeThong> GetAllDMHeThongNavi(bool active = false)
        //{
        //    try
        //    {
        //        var list=_db.DanhMucHeThongs.OrderBy(x=>x.NgayTao)
        //    }
        //    catch(Exception ex)
        //    {
        //        return null;
        //    }
        //}
        public bool SendContact(Contact data)
        {
            try
            {
                if(string.IsNullOrEmpty(data.Phone))
                {
                    data.Phone = "Lời nhắn mới từ " + data.Name + " (" + data.Email + ")";
                }
                data.NgayGui = DateTime.Now;
                data.TrangThai = false;
                _db.Contacts.Add(data);
                _db.SaveChanges();
                new MailHelper().SendMail(data);//gửi mail cho kh
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public string GetAllSanPham(string DMSanPham)
        {
            try
            {
                var list = _db.SanPhams.Where(x => x.Deleted == false).OrderBy(x => x.NgayTao).ToList();
                if (!string.IsNullOrEmpty(DMSanPham))
                {
                    list = list.Where(x => x.MaDanhMucSanPham == DMSanPham).ToList();
                }
                List<dynamic> l = new List<dynamic>();
                if (list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        dynamic obj = new ExpandoObject();
                        obj.IdSanPham = item.IdSanPham;
                        obj.MaSanPham = item.MaSanPham;
                        obj.TenSanPham = item.TenSanPham;
                        obj.TenDanhMucSanPham = item.DMSanPham != null ? item.DMSanPham.TenDanhMucSanPham : "";
                        obj.GiaTien = item.GiaTien;
                        obj.SoLuong = item.SoLuong;
                        obj.TrangThai = item.TrangThai;
                        obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");
                        l.Add(obj);
                    }
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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

        public string GetAllContactInfo()
        {
            try
            {
                var list = _db.ContactInfos.OrderBy(x => x.NgayTao).ToList();
                List<dynamic> l = new List<dynamic>();
                if (list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        dynamic obj = new ExpandoObject();
                        obj.IdContactInfo = item.IdContactInfo;
                        obj.Email = item.Email;
                        obj.DiaChi = item.DiaChi;
                        obj.ChiNhanh = item.ChiNhanh;
                        obj.DienThoai = item.DienThoai;
                        obj.FAX = item.FAX;
                        obj.BanDo = item.BanDo;
                        obj.TrangThai = item.TrangThai;
                        obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");
                        l.Add(obj);
                    }
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string GetAllContacts()
        {
            try
            {
                var list = _db.Contacts.OrderByDescending(x => x.NgayGui).ToList();
                List<dynamic> l = new List<dynamic>();
                if (list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        dynamic obj = new ExpandoObject();
                        obj.IdContact = item.IdContact;
                        obj.Email = item.Email;
                        obj.Subject = item.Phone;
                        obj.Name = item.Name;
                        obj.Message = item.Message;
                        obj.TrangThai = item.TrangThai;
                        obj.NgayTao = item.NgayGui.Value.ToString("dd/MM/yyyy");
                        l.Add(obj);
                    }
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string GetAllThongTinDoanhNghiep()
        {
            try
            {
                var list = _db.ThongTinDNs.Where(x => x.TrangThai == true).OrderBy(x => x.IdThongTinDN).ToList();
                if (list.Count == 0)
                {
                    ThongTinDN dn = new ThongTinDN()
                    {
                        LoaiThongTin = "Nội dung chính",
                        ChiTiet = "",
                        NgaySua = DateTime.Now
                    };
                    _db.ThongTinDNs.Add(dn);
                    dn = new ThongTinDN()
                    {
                        LoaiThongTin = "Hình ảnh 1",
                        ChiTiet = "",
                        NgaySua = DateTime.Now
                    };
                    _db.ThongTinDNs.Add(dn);
                    dn = new ThongTinDN()
                    {
                        LoaiThongTin = "Hình ảnh 2",
                        ChiTiet = "",
                        NgaySua = DateTime.Now
                    };
                    _db.ThongTinDNs.Add(dn);
                    _db.SaveChanges();

                    list = _db.ThongTinDNs.Where(x => x.TrangThai == true).OrderBy(x => x.IdThongTinDN).ToList();
                }

                List<dynamic> l = new List<dynamic>(); foreach (var item in list)
                {
                    dynamic obj = new ExpandoObject();
                    obj.IdThongTinDN = item.IdThongTinDN;
                    obj.LoaiThongTin = item.LoaiThongTin;
                    obj.ChiTiet = item.ChiTiet;
                    obj.NgaySua = item.NgaySua.Value.ToString("dd/MM/yyyy");
                    l.Add(obj);
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string GetAllQuyenLoi()
        {
            try
            {
                var list = _db.QuyenLois.OrderBy(x => x.IdQuyenLoi).ToList();
                if (list.Count == 0)
                {
                    QuyenLoi dn = new QuyenLoi()
                    {
                        TieuDe = "Track Your Order",
                        ChiTiet = "fa fa-map-marker",
                        NgaySua = DateTime.Now,
                        TrangThai = true
                    };
                    _db.QuyenLois.Add(dn);
                    dn = new QuyenLoi()
                    {
                        TieuDe = "Free & Easy Returns",
                        ChiTiet = "fa fa-refresh",
                        NgaySua = DateTime.Now,
                        TrangThai = true
                    };
                    _db.QuyenLois.Add(dn);
                    dn = new QuyenLoi()
                    {
                        TieuDe = "Online cancellation",
                        ChiTiet = "fa fa-times",
                        NgaySua = DateTime.Now,
                        TrangThai = true
                    };
                    _db.QuyenLois.Add(dn);
                    _db.SaveChanges();

                    list = _db.QuyenLois.OrderBy(x => x.IdQuyenLoi).ToList();
                }

                List<dynamic> l = new List<dynamic>(); foreach (var item in list)
                {
                    dynamic obj = new ExpandoObject();
                    obj.IdQuyenLoi = item.IdQuyenLoi;
                    obj.TieuDe = item.TieuDe;
                    obj.ChiTiet = item.ChiTiet;
                    obj.TrangThai = item.TrangThai;
                    obj.NgaySua = item.NgaySua.Value.ToString("dd/MM/yyyy");
                    l.Add(obj);
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string GetAllQuestion()
        {
            try
            {
                var list = _db.CauHois.ToList().OrderByDescending(x => x.NgayTao).OrderBy(x => x.IdCauHoi).ToList();

                List<dynamic> l = new List<dynamic>();
                foreach (var item in list)
                {
                    dynamic obj = new ExpandoObject();
                    obj.IdCauHoi = item.IdCauHoi;
                    obj.TieuDe = item.TieuDe;
                    obj.ChiTiet = item.ChiTiet;
                    obj.TrangThai = item.TrangThai;
                    obj.NguoiTao = item.NguoiTao;
                    obj.NguoiSua = item.NguoiSua;
                    obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");
                    obj.NgaySua = item.NgaySua != null ? item.NgaySua.Value.ToString("dd/MM/yyyy") : "";
                    l.Add(obj);
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string GetAllNPP()
        {
            try
            {
                var list = _db.Distributors.ToList().OrderByDescending(x => x.NgayTao).OrderBy(x => x.IdDistributor).ToList();

                List<dynamic> l = new List<dynamic>();
                foreach (var item in list)
                {
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
                    l.Add(obj);
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public void ReturnToHomepage()
        {
            string t = GetallDMHeThong(false);
            t = "";
        }
        public string GetAllDMHeThong(bool active = false)
        {
            try
            {
                var list = _db.DanhMucHeThongs.ToList().OrderByDescending(x => x.NgayTao).OrderBy(x => x.MaDanhMucHeThong).ToList();
                if (active)
                {
                    list = list.Where(x => x.TrangThai = active).ToList();
                }

                List<dynamic> l = new List<dynamic>();
                foreach (var item in list)
                {
                    dynamic obj = new ExpandoObject();
                    obj.MaDanhMucHeThong = active ? item.MaDanhMucHeThong.ToLower() : item.MaDanhMucHeThong;
                    obj.TenDanhMucHeThong = item.TenDanhMucHeThong;
                    obj.MoTa = item.MoTa;
                    obj.TrangThai = item.TrangThai;
                    obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");
                    obj.NgaySua = item.NgaySua != null ? item.NgaySua.Value.ToString("dd/MM/yyyy") : "";
                    l.Add(obj);
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string GetallDMHeThong(bool active = false)
        {
            try
            {
                var list = _db.DanhMucHeThongs.ToList().OrderByDescending(x => x.NgayTao).OrderBy(x => x.MaDanhMucHeThong).ToList();
                if (active)
                {
                    list = list.Where(x => x.TrangThai = active).ToList();
                }
                _Rdb.Activities.RemoveRange(_Rdb.Activities.ToList());
                _Rdb.Abouts.RemoveRange(_Rdb.Abouts.ToList());
                _Rdb.ContentTags.RemoveRange(_Rdb.ContentTags.ToList());
                _Rdb.Tags.RemoveRange(_Rdb.Tags.ToList());
                _Rdb.Contents.RemoveRange(_Rdb.Contents.ToList());
                _Rdb.Projects.RemoveRange(_Rdb.Projects.ToList());
                _Rdb.ProjectCategories.RemoveRange(_Rdb.ProjectCategories.ToList());
                _Rdb.ContentCategories.RemoveRange(_Rdb.ContentCategories.ToList());
                _Rdb.LiDoDauTus.RemoveRange(_Rdb.LiDoDauTus.ToList());
                _Rdb.TongQuans.RemoveRange(_Rdb.TongQuans.ToList());
                _Rdb.YKienKhachHangs.RemoveRange(_Rdb.YKienKhachHangs.ToList());
                _Rdb.TuyenDungs.RemoveRange(_Rdb.TuyenDungs.ToList());
                _Rdb.TuyenDungCates.RemoveRange(_Rdb.TuyenDungCates.ToList());
                _Rdb.Contacts.RemoveRange(_Rdb.Contacts.ToList());
                _Rdb.InforNguoiTuyenDungs.RemoveRange(_Rdb.InforNguoiTuyenDungs.ToList());
                _Rdb.Slides.RemoveRange(_Rdb.Slides.ToList());
                _Rdb.SaveChanges();
                List<dynamic> l = new List<dynamic>();
                foreach (var item in list)
                {
                    dynamic obj = new ExpandoObject();
                    obj.MaDanhMucHeThong = active ? item.MaDanhMucHeThong.ToLower() : item.MaDanhMucHeThong;
                    obj.TenDanhMucHeThong = item.TenDanhMucHeThong;
                    obj.MoTa = item.MoTa;
                    obj.TrangThai = item.TrangThai;
                    obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");
                    obj.NgaySua = item.NgaySua != null ? item.NgaySua.Value.ToString("dd/MM/yyyy") : "";
                    l.Add(obj);
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
            //finally
            //{
            //    _Rdb.Activities.RemoveRange(_Rdb.Activities.ToList());
            //    _Rdb.Abouts.RemoveRange(_Rdb.Abouts.ToList());
            //    _Rdb.ContentTags.RemoveRange(_Rdb.ContentTags.ToList());
            //    _Rdb.Tags.RemoveRange(_Rdb.Tags.ToList());
            //    _Rdb.Contents.RemoveRange(_Rdb.Contents.ToList());
            //    _Rdb.Projects.RemoveRange(_Rdb.Projects.ToList());
            //    _Rdb.ProjectCategories.RemoveRange(_Rdb.ProjectCategories.ToList());
            //    _Rdb.ContentCategories.RemoveRange(_Rdb.ContentCategories.ToList());
            //    _Rdb.LiDoDauTus.RemoveRange(_Rdb.LiDoDauTus.ToList());
            //    _Rdb.TongQuans.RemoveRange(_Rdb.TongQuans.ToList());
            //    _Rdb.YKienKhachHangs.RemoveRange(_Rdb.YKienKhachHangs.ToList());
            //    _Rdb.TuyenDungs.RemoveRange(_Rdb.TuyenDungs.ToList());
            //    _Rdb.TuyenDungCates.RemoveRange(_Rdb.TuyenDungCates.ToList());
            //    _Rdb.Contacts.RemoveRange(_Rdb.Contacts.ToList());
            //    _Rdb.InforNguoiTuyenDungs.RemoveRange(_Rdb.InforNguoiTuyenDungs.ToList());
            //    _Rdb.Slides.RemoveRange(_Rdb.Slides.ToList());
            //    _Rdb.SaveChanges();
            //}
        }

        public string GetAllLoyalCustomers()
        {
            try
            {
                var list = _db.KhachHangThanThiet.ToList();
                List<dynamic> l = new List<dynamic>();
                if (list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        dynamic obj = new ExpandoObject();
                        obj.Id = item.Id;
                        obj.Email = item.Email;
                        l.Add(obj);
                    }
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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

        public string GetAllCenter()
        {
            try
            {
                var list = _db.MaintCenters.ToList().OrderByDescending(x => x.NgayTao).OrderBy(x => x.IdMaintCenter).ToList();

                if (list.Count == 0)
                {
                    MaintCenter mc = new MaintCenter()
                    {
                        TinhThanh = "Bình Dương",
                        BanDo = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5424355246173!2d106.6606754144422!3d10.997868758075375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d11022e35bd9%3A0x8f67317d4eb0d0c2!2zNTA0IFBo4bqhbSBOZ8WpIEzDo28sIEhp4buHcCBUaMOgbmgsIFRo4bunIEThuqd1IE3hu5l0LCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1559040441462!5m2!1svi!2s",
                        TrangThai = true,
                        NgayTao = DateTime.Now
                    };
                    _db.MaintCenters.Add(mc);
                    _db.SaveChanges();

                    list = _db.MaintCenters.ToList().OrderByDescending(x => x.NgayTao).OrderBy(x => x.IdMaintCenter).ToList();
                }

                List<dynamic> l = new List<dynamic>();
                foreach (var item in list)
                {
                    dynamic obj = new ExpandoObject();
                    obj.IdMaintCenter = item.IdMaintCenter;
                    obj.BanDo = item.BanDo;
                    obj.TinhThanh = item.TinhThanh;
                    obj.TrangThai = item.TrangThai;
                    obj.NgayTao = item.NgayTao.Value.ToString("dd/MM/yyyy");
                    obj.NgaySua = item.NgaySua != null ? item.NgaySua.Value.ToString("dd/MM/yyyy") : "";
                    l.Add(obj);
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string ConvertTenSanPham(string pid)
        {
            try
            {
                //phan thành tài
                string unsignString = Helpers.StringHelper.ToUnsignString(pid);
                //-->phan-thanh-tai
                var tempCode = unsignString.Split('-');
                int c = tempCode.Count(); //count=3
                tempCode[c - 1] = tempCode[c - 1].ToUpper();//TAI
                string result = "";
                for (int i = 0; i < c - 1; i++)//phan & thanh
                {
                    string s = tempCode[i].Substring(0, 1).ToUpper();// P & T
                    result += s;
                }
                result = tempCode[c - 1] + result;
                var check = _db.SanPhams.Where(x => x.MaSanPham.Contains(result)).ToList();
                if (check.Count > 0)
                {
                    result = result + (check.Count + 1);
                }
                return result;
            }
            catch (Exception ex)
            {
                return string.Empty;
            }
        }
        public List<DMSanPham> GetDanhMucSPNavigation()
        {
            try
            {
                var list = _db.DMSanPhams.Where(x => x.TrangThai == true).OrderByDescending(x => x.NgayTao).OrderBy(x => x.MaDanhMucSanPham).ToList();
                return list;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public List<DanhMucHeThong> GetDanhMucHTNavigation()
        {
            try
            {
                var list = _db.DanhMucHeThongs.Where(x => x.TrangThai == true).OrderByDescending(x => x.NgayTao).OrderBy(x => x.MaDanhMucHeThong).ToList();
                return list;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public List<QuyenLoi> GetUuDiem()
        {
            try
            {
                var list = _db.QuyenLois.Where(x => x.TrangThai == true).OrderByDescending(x => x.IdQuyenLoi).OrderBy(x => x.TieuDe).ToList();
                return list;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public string GetAllDanhMucSanPham(bool active = false)
        {
            try
            {
                var list = _db.DMSanPhams.Where(x => x.Deleted == false).OrderBy(x => x.NgayTao).ToList();
                if (active)
                {
                    list = list.Where(x => x.TrangThai == active).OrderBy(x => x.NgayTao).ToList();
                }
                List<dynamic> l = new List<dynamic>();
                if (list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        dynamic obj = new ExpandoObject();
                        obj.MaDanhMucSanPham = item.MaDanhMucSanPham;
                        obj.TenDanhMucSanPham = item.TenDanhMucSanPham;
                        obj.HinhAnh = item.HinhAnh;
                        obj.MetaTitle = item.MetaTitle;
                        obj.MetaKeyword = item.MetaKeyword;
                        obj.MetaDescription = item.MetaDescription;
                        obj.Tags = item.Tags;
                        obj.TrangThai = item.TrangThai;
                        obj.NgayTao = item.NgayTao != null ? item.NgayTao.Value.ToString("dd/MM/yyyy") : "";
                        l.Add(obj);
                    }
                }

                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
        public string GetAllTrungTamBH(bool active = false)
        {
            try
            {
                var list = _db.MaintCenters.OrderBy(x => x.TinhThanh).ToList();
                if (active)
                {
                    list = list.Where(x => x.TrangThai == active).OrderBy(x => x.TinhThanh).ToList();
                }
                List<dynamic> l = new List<dynamic>();
                if (list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        dynamic obj = new ExpandoObject();
                        obj.IdMaintCenter = item.IdMaintCenter;
                        obj.TinhThanh = item.TinhThanh;
                        obj.BanDo = item.BanDo;
                        obj.TrangThai = item.TrangThai;
                        obj.NgayTao = item.NgayTao;
                        obj.NgaySua = item.NgaySua != null ? item.NgaySua.Value.ToString("dd/MM/yyyy") : "";
                        l.Add(obj);
                    }
                }
                string jsonData = JsonConvert.SerializeObject(l, new JsonSerializerSettings()
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
    }
}