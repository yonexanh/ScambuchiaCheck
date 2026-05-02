# ScambuchiaCheck

ScambuchiaCheck là tiện ích mở rộng cho Chrome/Edge giúp người dùng kiểm tra thông tin minh bạch của các trang Facebook trước khi nhắn tin, mua hàng hoặc giao dịch.

Tiện ích sẽ đọc nội dung Page Transparency hiển thị trên Facebook và cảnh báo cục bộ nếu phát hiện dấu hiệu người quản lý trang có liên quan đến Campuchia. Nếu thông tin quản lý trang liên quan đến Việt Nam, tiện ích có thể hiển thị trạng thái an toàn hơn.

## Tính năng

- Tự động kiểm tra trang Facebook khi người dùng truy cập.
- Hỗ trợ URL trang Facebook thông thường và dạng `profile.php?id=...`.
- Đọc nội dung Page Transparency trực tiếp trong trình duyệt.
- Thử đọc trang transparency liên quan nếu người dùng đang ở trang chính của page.
- Hiển thị cảnh báo rủi ro nếu phát hiện thông tin quản lý trang liên quan đến Campuchia.
- Tự động xoá cảnh báo khi người dùng chuyển sang trang Facebook khác.
- Xử lý cục bộ trên trình duyệt, không gửi dữ liệu người dùng lên máy chủ bên ngoài.

## Quyền riêng tư

Tiện ích này không thu thập, lưu trữ, bán, truyền tải hoặc chia sẻ dữ liệu cá nhân của người dùng.

Tất cả quá trình kiểm tra được thực hiện cục bộ trong trình duyệt. Tiện ích chỉ đọc nội dung hiển thị trên Facebook và nội dung transparency liên quan để hiển thị cảnh báo cho người dùng.

## Cài đặt để test

1. Mở Chrome hoặc Edge.
2. Truy cập `chrome://extensions/`.
3. Bật `Developer mode`.
4. Bấm `Load unpacked`.
5. Chọn thư mục `fb-cambodia-scam-detector`.

## Ghi chú khi đăng Chrome Web Store

Tiện ích cần quyền truy cập `facebook.com` để đọc nội dung Page Transparency hiển thị trên Facebook và hiển thị cảnh báo trực tiếp trong trình duyệt.

Lý do xin quyền để điền trên Chrome Web Store:

```text
Required to read visible Facebook Page Transparency content on facebook.com and display local browser warnings. No user data is collected or transmitted.
```

## Lưu ý

Tiện ích chỉ đưa ra cảnh báo rủi ro mang tính tham khảo. Tiện ích không đưa ra kết luận pháp lý và không khẳng định chắc chắn rằng một trang là lừa đảo.

Người dùng nên kiểm tra thêm các dấu hiệu khác như lịch sử hoạt động của trang, đánh giá, thông tin liên hệ, phương thức thanh toán và phản hồi từ cộng đồng trước khi tương tác hoặc giao dịch.
