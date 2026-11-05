# C mỗi ngày

Web học C căn bản bằng tiếng Việt theo lộ trình 15 ngày, mỗi ngày khoảng 30–60 phút.

[Mở web học C](https://phamhuylam.github.io/laptrinhC/).

## Lộ trình từ con số 0

- Ngày 1–3 tập chạy chương trình, đọc cú pháp và in chữ.
- Ngày 4–7 học biến, tính toán, số thực và ôn tập bằng bài tính tiền.
- Ngày 8–10 học điều kiện và kết hợp phép kiểm tra.
- Ngày 11–12 học vòng lặp và hàm.
- Ngày 13–15 học mảng rồi hoàn thành chương trình thống kê điểm.

## Sử dụng

Mở `index.html` để bắt đầu học. Có thể đưa nguyên bộ tệp lên GitHub Pages để truy cập trên điện thoại và máy tính.

- 15 bài học có giải thích, ví dụ C và kết quả dự kiến.
- Bài tập có gợi ý, lời giải và bản nháp tự lưu.
- 45 câu trắc nghiệm có chấm điểm và giải thích.
- Hoàn thành từ 2/3 câu đúng để đánh dấu bài đã học.
- Sổ tay cú pháp và xuất/nhập tiến độ dạng JSON.
- Hướng dẫn dùng hàm C trong Arduino IDE.

Các ví dụ dùng `main()` và `printf()` với trình biên dịch C. Khi thực hành trên Arduino IDE, đưa hàm tính toán vào tab `.c` và gọi từ sketch theo hướng dẫn trong web. Phần bản nháp cung cấp liên kết đến trình biên dịch C trực tuyến để chạy code.

## Đưa lên GitHub Pages

Để triển khai một bản riêng, làm theo các bước sau.

1. Tạo repository có tên `hoc-c-15-ngay` trên GitHub. Với GitHub Free, chọn Public.
2. Chọn **Add file → Upload files**, tải tất cả tệp trong thư mục này lên rồi chọn **Commit changes**. `index.html` cần nằm ngay thư mục gốc của repository.
3. Mở **Settings → Pages**, chọn **Deploy from a branch**.
4. Chọn nhánh **main**, thư mục **/(root)**, rồi **Save**.
5. Sau khi GitHub xuất bản xong, mở liên kết được hiển thị trong **Settings → Pages**.

Tài liệu chính thức của GitHub về [tạo trang GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Lưu tiến độ

Tiến độ, đáp án và bản nháp nằm trong `localStorage` của trình duyệt. Khi đổi thiết bị hoặc đổi địa chỉ web, dùng **Tiến độ của bạn → Tải bản tiến độ** rồi khôi phục tệp trên trình duyệt mới. Phông chữ được tải từ Google Fonts khi có mạng, trình duyệt sẽ dùng phông dự phòng khi ngoại tuyến.

Lộ trình 15 ngày dùng tiến độ riêng do nội dung được sắp xếp lại từ đầu. Nếu có dữ liệu 7 ngày cũ trên trình duyệt, trang tiến độ cung cấp nút tải bản cũ. Tệp xuất từ bản 7 ngày cũng có thể được nhập để lưu vào phần dữ liệu cũ.

## Cấu trúc mã

- `index.html` tạo khung trang và hướng dẫn Arduino.
- `styles.css` chứa giao diện và bố cục theo kích thước màn hình.
- `lessons.js` chứa toàn bộ bài học, bài tập và câu hỏi.
- `app.js` xử lý chuyển trang, bản nháp, chấm điểm và tiến độ.
- `.nojekyll` cho phép GitHub Pages phục vụ tệp tĩnh trực tiếp.

Tài liệu chính thức về [quy trình biên dịch của Arduino](https://docs.arduino.cc/arduino-cli/sketch-build-process/).
