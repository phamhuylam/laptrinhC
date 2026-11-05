# C mỗi ngày

Web học C căn bản bằng tiếng Việt theo lộ trình 7 ngày, mỗi ngày khoảng 45–60 phút.

## Sử dụng

Mở `index.html` để bắt đầu học. Có thể đưa nguyên bộ tệp lên GitHub Pages để truy cập trên điện thoại và máy tính.

- 7 bài học có giải thích, ví dụ C và kết quả dự kiến.
- Bài tập có gợi ý, lời giải và bản nháp tự lưu.
- 21 câu trắc nghiệm có chấm điểm và giải thích.
- Hoàn thành từ 2/3 câu đúng để đánh dấu bài đã học.
- Sổ tay cú pháp và xuất/nhập tiến độ dạng JSON.
- Hướng dẫn dùng hàm C trong Arduino IDE.

Các ví dụ dùng `main()` và `printf()` với trình biên dịch C. Khi thực hành trên Arduino IDE, đưa hàm tính toán vào tab `.c` và gọi từ sketch theo hướng dẫn trong web. Phần bản nháp cung cấp liên kết đến trình biên dịch C trực tuyến để chạy code.

## Đưa lên GitHub Pages

1. Tạo repository có tên `hoc-c-7-ngay` trên GitHub. Với GitHub Free, chọn Public.
2. Chọn **Add file → Upload files**, tải tất cả tệp trong thư mục này lên rồi chọn **Commit changes**. `index.html` cần nằm ngay thư mục gốc của repository.
3. Mở **Settings → Pages**, chọn **Deploy from a branch**.
4. Chọn nhánh **main**, thư mục **/(root)**, rồi **Save**.
5. Sau khi GitHub xuất bản xong, mở liên kết được hiển thị trong **Settings → Pages**.

Tài liệu chính thức của GitHub về [tạo trang GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Lưu tiến độ

Tiến độ, đáp án và bản nháp nằm trong `localStorage` của trình duyệt. Khi đổi thiết bị hoặc đổi địa chỉ web, dùng **Tiến độ của bạn → Tải bản tiến độ** rồi khôi phục tệp trên trình duyệt mới. Phông chữ được tải từ Google Fonts khi có mạng, trình duyệt sẽ dùng phông dự phòng khi ngoại tuyến.

## Cấu trúc mã

- `index.html` tạo khung trang và hướng dẫn Arduino.
- `styles.css` chứa giao diện và bố cục theo kích thước màn hình.
- `lessons.js` chứa toàn bộ bài học, bài tập và câu hỏi.
- `app.js` xử lý chuyển trang, bản nháp, chấm điểm và tiến độ.
- `.nojekyll` cho phép GitHub Pages phục vụ tệp tĩnh trực tiếp.

Tài liệu chính thức về [quy trình biên dịch của Arduino](https://docs.arduino.cc/arduino-cli/sketch-build-process/).
