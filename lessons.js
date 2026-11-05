window.C_LESSONS = [
  {
    day: 1,
    title: "Biến và phép tính",
    shortTitle: "Làm quen với C",
    subtitle: "Cho dữ liệu một cái tên, rồi tính toán với nó.",
    duration: "45–60 phút",
    objective: "Viết một hàm đổi giờ và phút thành tổng số phút, rồi tự thay dữ liệu để kiểm tra.",
    concepts: [
      { title: "Biến lưu giá trị", text: "int gio = 2; tạo biến số nguyên tên gio và gán giá trị 2. Đặt tên theo ý nghĩa của dữ liệu để dễ đọc lại." },
      { title: "Phép tính theo thứ tự", text: "C thực hiện phép nhân trước phép cộng. gio * 60 + phut sẽ nhân số giờ với 60, sau đó cộng số phút." },
      { title: "Hàm trả kết quả", text: "doi_sang_phut nhận hai tham số số nguyên. Lệnh return gửi kết quả về nơi gọi hàm. Bạn sẽ học cách viết hàm kỹ hơn ở ngày 5." },
      { title: "Xem kết quả", text: "Chương trình bắt đầu chạy ở main. printf in dữ liệu ra màn hình. %d dành cho một số nguyên và \\n xuống dòng." }
    ],
    code: `#include <stdio.h>

int doi_sang_phut(int gio, int phut) {
    return gio * 60 + phut;
}

int main(void) {
    int gio = 2;
    int phut = 15;
    int tong = doi_sang_phut(gio, phut);

    printf("Tong so phut: %d\\n", tong);
    return 0;
}`,
    output: "Tong so phut: 135",
    steps: [
      "Đọc từ main. Ghi ra giá trị của gio và phut trước khi chạy.",
      "Tính bằng tay 2 × 60 + 15, rồi đối chiếu với đầu ra.",
      "Đổi dữ liệu thành 0 giờ 45 phút, sau đó 1 giờ 0 phút. Dự đoán mỗi kết quả trước khi chạy."
    ],
    exercise: {
      prompt: "Viết hàm doi_sang_giay(int phut, int giay). Với 3 phút 20 giây, hàm cần trả về 200.",
      hint: "Mỗi phút có 60 giây. Công thức giống bài mẫu, hãy thay tên cho đúng đơn vị.",
      solution: `int doi_sang_giay(int phut, int giay) {
    return phut * 60 + giay;
}

/* doi_sang_giay(3, 20) tra ve 200. */`
    },
    quiz: [
      { question: "Khai báo nào tạo một biến số nguyên có giá trị 5?", options: ["int diem = 5;", "int = diem 5;", "diem int 5;", "integer diem = 5;"], answer: 0, explanation: "Khai báo bắt đầu bằng kiểu int, tiếp theo là tên biến, dấu = và giá trị khởi tạo." },
      { question: "Giá trị của 2 + 3 * 4 là bao nhiêu?", options: ["20", "14", "24", "9"], answer: 1, explanation: "Phép nhân thực hiện trước. 3 * 4 bằng 12, sau đó 2 + 12 bằng 14." },
      { question: "doi_sang_phut(1, 30) trả về bao nhiêu?", options: ["130", "60", "90", "31"], answer: 2, explanation: "1 giờ có 60 phút. Cộng thêm 30 phút được 90 phút." }
    ]
  },
  {
    day: 2,
    title: "Điều kiện if và else",
    shortTitle: "Ra quyết định",
    subtitle: "Để chương trình chọn việc cần làm theo dữ liệu.",
    duration: "45–60 phút",
    objective: "Kiểm tra điểm đạt bằng điều kiện và hiểu rõ trường hợp điểm đúng bằng 5.",
    concepts: [
      { title: "Điều kiện là phép kiểm tra", text: "diem >= 5 đúng khi diem lớn hơn hoặc bằng 5. Các phép so sánh thường dùng là >, <, >=, <=, == và !=." },
      { title: "Hai nhánh thực hiện", text: "Nếu điều kiện trong if đúng, chương trình chạy khối đầu. Nếu sai, chương trình chạy khối else. Dấu ngoặc nhọn bao các lệnh của mỗi khối." },
      { title: "Giá trị trả về quy ước", text: "Hàm la_diem_dat dùng 1 để biểu thị đạt và 0 để biểu thị chưa đạt. Bài học giả sử điểm là số nguyên từ 0 đến 10." },
      { title: "Phân biệt = và ==", text: "Dấu = gán giá trị cho biến. Dấu == so sánh hai giá trị có bằng nhau hay không." }
    ],
    code: `#include <stdio.h>

int la_diem_dat(int diem) {
    if (diem >= 5) {
        return 1;
    } else {
        return 0;
    }
}

int main(void) {
    int diem = 5;
    printf("Dat: %d\\n", la_diem_dat(diem));
    return 0;
}`,
    output: "Dat: 1",
    steps: [
      "Thay diem lần lượt bằng 4, 5 và 6. Ghi lại nhánh sẽ chạy trước mỗi lần thử.",
      "Đổi điều kiện >= thành >. Quan sát riêng kết quả khi diem bằng 5, rồi sửa lại.",
      "Dùng kết quả của la_diem_dat trong một if ở main để in Dat hoặc Chua dat."
    ],
    exercise: {
      prompt: "Viết hàm la_so_chan(int n) trả về 1 nếu n chia hết cho 2, ngược lại trả về 0. Thử với 0, 7 và 8.",
      hint: "n % 2 lấy phần dư khi chia n cho 2. So sánh phần dư đó với 0.",
      solution: `int la_so_chan(int n) {
    if (n % 2 == 0) {
        return 1;
    } else {
        return 0;
    }
}`
    },
    quiz: [
      { question: "Khi diem bằng 5, điều kiện diem >= 5 cho kết quả gì?", options: ["Đúng", "Sai", "Lỗi biên dịch", "Gán diem thành 5"], answer: 0, explanation: "Dấu >= bao gồm trường hợp bằng nhau, nên điểm 5 được tính là đạt." },
      { question: "Muốn kiểm tra n có bằng 0, bạn viết thế nào?", options: ["n = 0", "n == 0", "n => 0", "n === 0"], answer: 1, explanation: "Trong C, == kiểm tra bằng nhau. Dấu = dùng để gán giá trị." },
      { question: "7 % 2 bằng bao nhiêu?", options: ["3", "3.5", "0", "1"], answer: 3, explanation: "7 chia 2 được 3 và dư 1. Toán tử % lấy phần dư." }
    ]
  },
  {
    day: 3,
    title: "Vòng lặp for",
    shortTitle: "Lặp lại công việc",
    subtitle: "Thực hiện nhiều lần bằng một khối lệnh.",
    duration: "45–60 phút",
    objective: "Tính tổng từ 1 đến n và theo dõi được giá trị của biến sau từng vòng lặp.",
    concepts: [
      { title: "Ba phần của for", text: "for (int i = 1; i <= n; i++) tạo i với giá trị 1, kiểm tra i <= n trước mỗi vòng, rồi tăng i thêm 1 sau mỗi vòng." },
      { title: "Biến cộng dồn", text: "tong bắt đầu bằng 0. Lệnh tong += i tương đương tong = tong + i, nên tổng được cập nhật qua từng lượt." },
      { title: "Điểm dừng", text: "Khi i lớn hơn n, điều kiện sai và vòng lặp kết thúc. Với n bằng 0, vòng lặp này chạy 0 lần." },
      { title: "Dữ liệu luyện tập", text: "Trong bài này, dùng n từ 0 đến 100 để tổng luôn nằm trong phạm vi của int, kể cả trên bo mạch dùng int 16 bit." }
    ],
    code: `#include <stdio.h>

int tinh_tong(int n) {
    int tong = 0;
    for (int i = 1; i <= n; i++) {
        tong += i;
    }
    return tong;
}

int main(void) {
    printf("Tong: %d\\n", tinh_tong(5));
    return 0;
}`,
    output: "Tong: 15",
    steps: [
      "Với n = 3, lập bảng giấy gồm i và tong. Tổng sau ba lượt lần lượt là 1, 3 và 6.",
      "Thêm printf bên trong vòng lặp để in i và tong sau mỗi lần cộng.",
      "Thử n bằng 0, 1 và 5. Giải thích số lượt lặp của từng trường hợp."
    ],
    exercise: {
      prompt: "Viết hàm tong_so_chan(int n) tính tổng các số chẵn từ 1 đến n. Dùng n từ 0 đến 100. Với n = 6, kết quả cần là 12.",
      hint: "Giữ vòng lặp từ 1 đến n. Chỉ cộng i vào tổng khi i % 2 == 0.",
      solution: `int tong_so_chan(int n) {
    int tong = 0;
    for (int i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            tong += i;
        }
    }
    return tong;
}`
    },
    quiz: [
      { question: "Vòng lặp for (int i = 1; i <= 3; i++) chạy bao nhiêu lần?", options: ["2", "4", "3", "1"], answer: 2, explanation: "Khối lệnh chạy khi i bằng 1, 2 và 3. Khi i bằng 4, điều kiện sai." },
      { question: "Sau tong = 3; rồi tong += 4;, tong bằng bao nhiêu?", options: ["7", "4", "12", "3"], answer: 0, explanation: "tong += 4 tương đương tong = tong + 4, nên 3 + 4 bằng 7." },
      { question: "tinh_tong(0) trong bài mẫu trả về bao nhiêu?", options: ["1", "0", "Không dừng", "-1"], answer: 1, explanation: "Ngay từ đầu, i bằng 1 nên i <= 0 sai. Vòng lặp chạy 0 lần và tong giữ giá trị 0." }
    ]
  },
  {
    day: 4,
    title: "Mảng và chỉ số",
    shortTitle: "Làm việc với mảng",
    subtitle: "Lưu nhiều điểm và duyệt từng phần tử.",
    duration: "45–60 phút",
    objective: "Duyệt một mảng 5 điểm và tìm được điểm cao nhất.",
    concepts: [
      { title: "Một tên, nhiều phần tử", text: "int diem[] = {8, 4, 5, 9, 6}; tạo mảng gồm 5 số nguyên. Các phần tử trong mảng có cùng kiểu dữ liệu." },
      { title: "Chỉ số bắt đầu từ 0", text: "diem[0] là 8 và diem[4] là 6. Mảng 5 phần tử có chỉ số hợp lệ từ 0 đến 4. Luôn kiểm tra giới hạn khi truy cập." },
      { title: "Khởi tạo giá trị lớn nhất", text: "Bắt đầu bằng phần tử đầu tiên. Duyệt từ phần tử thứ hai và cập nhật lon_nhat mỗi khi gặp giá trị lớn hơn." },
      { title: "Điều kiện vòng lặp", text: "i < 5 cho phép i đi đến 4. Viết i <= 5 sẽ truy cập vượt khỏi mảng ở lượt i bằng 5." }
    ],
    code: `#include <stdio.h>

int main(void) {
    int diem[] = {8, 4, 5, 9, 6};
    int lon_nhat = diem[0];

    for (int i = 1; i < 5; i++) {
        if (diem[i] > lon_nhat) {
            lon_nhat = diem[i];
        }
    }

    printf("Cao nhat: %d\\n", lon_nhat);
    return 0;
}`,
    output: "Cao nhat: 9",
    steps: [
      "Ghi chỉ số 0 đến 4 phía trên năm điểm trong mảng.",
      "Theo dõi lon_nhat sau mỗi lần so sánh. Giá trị chỉ thay đổi khi gặp 9.",
      "Đổi phần tử đầu thành 10, rồi đổi phần tử cuối thành 10. Kiểm tra cả hai lần đều tìm ra 10."
    ],
    exercise: {
      prompt: "Từ bài mẫu, hãy tìm điểm thấp nhất của mảng {8, 4, 5, 9, 6}. Kết quả cần là 4.",
      hint: "Khởi tạo bằng diem[0]. Cập nhật khi gặp phần tử nhỏ hơn giá trị đang giữ.",
      solution: `int nho_nhat = diem[0];
for (int i = 1; i < 5; i++) {
    if (diem[i] < nho_nhat) {
        nho_nhat = diem[i];
    }
}
printf("Thap nhat: %d\\n", nho_nhat);`
    },
    quiz: [
      { question: "Trong mảng {8, 4, 5, 9, 6}, diem[2] bằng bao nhiêu?", options: ["4", "5", "9", "2"], answer: 1, explanation: "Chỉ số bắt đầu từ 0. diem[0] là 8, diem[1] là 4 và diem[2] là 5." },
      { question: "Chỉ số cuối của mảng 5 phần tử là gì?", options: ["5", "6", "1", "4"], answer: 3, explanation: "Năm chỉ số hợp lệ là 0, 1, 2, 3 và 4." },
      { question: "Muốn tìm điểm thấp nhất, nên cập nhật khi nào?", options: ["diem[i] < nho_nhat", "diem[i] > nho_nhat", "i == 0", "diem[i] == 10"], answer: 0, explanation: "Khi phần tử đang xét nhỏ hơn giá trị thấp nhất đã biết, ta lưu phần tử đó làm giá trị thấp nhất mới." }
    ]
  },
  {
    day: 5,
    title: "Hàm và tham số",
    shortTitle: "Viết hàm dùng lại",
    subtitle: "Tách một việc rõ ràng thành một hàm.",
    duration: "45–60 phút",
    objective: "Viết hàm nhận mảng và số lượng phần tử để đếm các điểm đạt.",
    concepts: [
      { title: "Một hàm, một công việc", text: "la_diem_dat kiểm tra một điểm. dem_diem_dat duyệt nhiều điểm và gọi lại hàm kiểm tra. Bạn có thể sửa tiêu chí đạt ở một chỗ." },
      { title: "Truyền mảng kèm số lượng", text: "Tham số const int diem[] cho phép đọc các điểm mà không sửa chúng qua tham số này. Hàm cần thêm so_luong để biết có bao nhiêu phần tử được phép đọc." },
      { title: "Lời gọi hàm", text: "dem_diem_dat(diem, 5) truyền mảng diem và số lượng 5. Luôn truyền số lượng phù hợp với mảng. Bài này dùng mảng 5 phần tử." },
      { title: "Phạm vi của biến", text: "dem được khai báo bên trong dem_diem_dat và dùng trong hàm đó. Giá trị return là kết quả mà main nhận được." }
    ],
    code: `#include <stdio.h>

int la_diem_dat(int diem) {
    return diem >= 5;
}

int dem_diem_dat(const int diem[], int so_luong) {
    int dem = 0;
    for (int i = 0; i < so_luong; i++) {
        if (la_diem_dat(diem[i])) {
            dem++;
        }
    }
    return dem;
}

int main(void) {
    int diem[] = {8, 4, 5, 9, 6};
    printf("So diem dat: %d\\n", dem_diem_dat(diem, 5));
    return 0;
}`,
    output: "So diem dat: 4",
    steps: [
      "Liệt kê các phần tử đạt trong mảng trước khi chạy. Nhớ tính cả điểm 5.",
      "Thử mảng {0, 1, 2, 3, 4}, rồi {5, 6, 7, 8, 9}.",
      "Tạo mảng mới chỉ gồm {5}. Gọi hàm với số lượng 1 và kiểm tra kết quả."
    ],
    exercise: {
      prompt: "Viết hàm dem_diem_gioi nhận mảng và số lượng phần tử, trả về số điểm từ 8 trở lên. Với mảng bài mẫu, kết quả cần là 2.",
      hint: "Giữ biến đếm và vòng lặp. Trong if, kiểm tra diem[i] >= 8.",
      solution: `int dem_diem_gioi(const int diem[], int so_luong) {
    int dem = 0;
    for (int i = 0; i < so_luong; i++) {
        if (diem[i] >= 8) {
            dem++;
        }
    }
    return dem;
}`
    },
    quiz: [
      { question: "Vì sao hàm đếm cần tham số so_luong?", options: ["Để tự tạo thêm điểm", "Để đổi kiểu của mảng", "Để biết giới hạn phần tử cần duyệt", "Để chương trình chạy mãi"], answer: 2, explanation: "Tham số mảng trong hàm không tự mang theo số phần tử. so_luong cho biết giới hạn của vòng lặp." },
      { question: "Mảng {4, 5, 8} có bao nhiêu điểm đạt theo bài học?", options: ["1", "2", "3", "0"], answer: 1, explanation: "5 và 8 đều lớn hơn hoặc bằng 5. Có 2 điểm đạt." },
      { question: "Biểu thức so sánh diem >= 5 trả về giá trị nào trong C?", options: ["1 khi đúng, 0 khi sai", "5 trong mọi trường hợp", "Chuỗi Dat", "Giá trị của diem"], answer: 0, explanation: "Toán tử so sánh trong C cho kết quả số nguyên 1 khi đúng và 0 khi sai. Vì vậy hàm có thể return trực tiếp biểu thức này." }
    ]
  },
  {
    day: 6,
    title: "Số thực và điểm trung bình",
    shortTitle: "Tính với số thập phân",
    subtitle: "Giữ lại phần thập phân khi thực hiện phép chia.",
    duration: "45–60 phút",
    objective: "Tính điểm trung bình bằng float và giải thích được vì sao 11 / 2 cho kết quả 5.",
    concepts: [
      { title: "Kiểu float", text: "float lưu số thực, chẳng hạn 5.5. Giá trị số thực có độ chính xác hữu hạn, phù hợp với các phép tính đơn giản trong bài học." },
      { title: "Chia hai số nguyên", text: "11 / 2 dùng phép chia số nguyên và cho 5. Phần thập phân đã bị bỏ trước khi gán kết quả vào float." },
      { title: "Ép kiểu trước phép chia", text: "(float)tong / so_luong chuyển tổng sang float trước khi chia. Với tổng 11 và số lượng 2, kết quả là 5.5." },
      { title: "Điều kiện dữ liệu", text: "Hàm mẫu yêu cầu so_luong từ 1 đến 100 và các điểm nguyên từ 0 đến 10. Số lượng phải phù hợp với mảng để tránh đọc vượt giới hạn và chia cho 0." }
    ],
    code: `#include <stdio.h>

float diem_trung_binh(const int diem[], int so_luong) {
    int tong = 0;
    for (int i = 0; i < so_luong; i++) {
        tong += diem[i];
    }
    return (float)tong / so_luong;
}

int main(void) {
    int diem[] = {5, 6};
    float trung_binh = diem_trung_binh(diem, 2);
    printf("Trung binh: %.1f\\n", trung_binh);
    return 0;
}`,
    output: "Trung binh: 5.5",
    steps: [
      "Chạy bài mẫu và kiểm tra kết quả 5.5.",
      "Bỏ (float), chạy lại và xem kết quả trở thành 5.0. Sau đó khôi phục phép ép kiểu.",
      "Thử mảng {8, 4, 5, 9, 6} với số lượng 5. Kết quả cần là 6.4."
    ],
    exercise: {
      prompt: "Viết hàm ti_le_dat nhận mảng và số lượng từ 1 đến 100, trả về phần trăm điểm đạt. Với {4, 5, 8, 9}, kết quả cần là 75.0.",
      hint: "Duyệt để đếm điểm từ 5 trở lên. Tính (float)dem * 100 / so_luong để giữ phần thập phân.",
      solution: `float ti_le_dat(const int diem[], int so_luong) {
    int dem = 0;
    for (int i = 0; i < so_luong; i++) {
        if (diem[i] >= 5) {
            dem++;
        }
    }
    return (float)dem * 100 / so_luong;
}`
    },
    quiz: [
      { question: "Biểu thức 11 / 2 có giá trị gì trong C?", options: ["5.5", "6", "5", "0.5"], answer: 2, explanation: "Hai toán hạng đều là số nguyên nên C thực hiện phép chia số nguyên, kết quả là 5." },
      { question: "Cách nào cho kết quả 5.5 khi tong = 11 và so_luong = 2?", options: ["(float)(tong / so_luong)", "(float)tong / so_luong", "tong / so_luong", "(int)tong / so_luong"], answer: 1, explanation: "Ép tong sang float trước phép chia để phép chia giữ phần thập phân. Ép kiểu sau khi chia không khôi phục phần đã mất." },
      { question: "Vì sao bài mẫu yêu cầu so_luong lớn hơn 0?", options: ["Để mọi điểm đều đạt", "Vì float chỉ chứa số dương", "Để mảng tự tăng kích thước", "Để phép tính tránh chia cho 0"], answer: 3, explanation: "Hàm chia tổng cho so_luong. Dữ liệu phải có ít nhất một phần tử để tính điểm trung bình." }
    ]
  },
  {
    day: 7,
    title: "Dự án thống kê điểm",
    shortTitle: "Ghép thành chương trình",
    subtitle: "Dùng những gì đã học để giải một bài toán hoàn chỉnh.",
    duration: "45–60 phút",
    objective: "Tự viết chương trình in điểm cao nhất, điểm trung bình và số điểm đạt của một mảng.",
    concepts: [
      { title: "Chia bài toán thành việc nhỏ", text: "Chương trình cần ba kết quả. Hàm thong_ke gom vòng lặp đọc mảng, cập nhật điểm cao nhất, cộng tổng và đếm điểm đạt." },
      { title: "Giữ giới hạn rõ ràng", text: "Dùng mảng có từ 1 đến 100 điểm nguyên trong khoảng 0 đến 10. so_luong phải bằng số phần tử bạn muốn thống kê trong mảng." },
      { title: "Hàm void", text: "void cho biết thong_ke không trả về giá trị. Trong phiên bản này, hàm tự in ba kết quả ra màn hình." },
      { title: "Kiểm tra bằng dữ liệu biết trước", text: "Thử một mảng thông thường, một mảng chỉ có một phần tử và một mảng có các điểm bằng nhau. Tính kết quả bằng tay trước mỗi lần chạy." }
    ],
    code: `#include <stdio.h>

void thong_ke(const int diem[], int so_luong) {
    int cao_nhat = diem[0];
    int tong = 0;
    int so_dat = 0;

    for (int i = 0; i < so_luong; i++) {
        if (diem[i] > cao_nhat) {
            cao_nhat = diem[i];
        }
        tong += diem[i];
        if (diem[i] >= 5) {
            so_dat++;
        }
    }

    float trung_binh = (float)tong / so_luong;
    printf("Cao nhat: %d\\n", cao_nhat);
    printf("Trung binh: %.1f\\n", trung_binh);
    printf("So diem dat: %d\\n", so_dat);
}

int main(void) {
    int diem[] = {8, 4, 5, 9, 6};
    thong_ke(diem, 5);
    return 0;
}`,
    output: "Cao nhat: 9\nTrung binh: 6.4\nSo diem dat: 4",
    steps: [
      "Đóng bài mẫu và tự viết từ đầu. Bắt đầu với mảng và hàm main, sau đó thêm từng kết quả.",
      "Đối chiếu mảng {8, 4, 5, 9, 6} với ba kết quả 9, 6.4 và 4.",
      "Thử {5} với số lượng 1. Cả ba kết quả cần là 5, 5.0 và 1.",
      "Thử {4, 4, 4} với số lượng 3. Kết quả cần là 4, 4.0 và 0. Giải thích được từng dòng trong chương trình của bạn."
    ],
    exercise: {
      prompt: "Bổ sung điểm thấp nhất vào chương trình thống kê. Với mảng bài mẫu, dòng mới cần in Thap nhat: 4.",
      hint: "Tạo thap_nhat = diem[0] trước vòng lặp. Trong vòng lặp, cập nhật nếu diem[i] nhỏ hơn thap_nhat. In kết quả sau vòng lặp.",
      solution: `/* Them truoc vong lap trong thong_ke. */
int thap_nhat = diem[0];

/* Them vao ben trong vong lap. */
if (diem[i] < thap_nhat) {
    thap_nhat = diem[i];
}

/* Them sau vong lap. */
printf("Thap nhat: %d\\n", thap_nhat);`
    },
    quiz: [
      { question: "Với mảng {5} và số lượng 1, có bao nhiêu điểm đạt?", options: ["0", "5", "1", "Không xác định"], answer: 2, explanation: "Mảng có một điểm bằng 5. Điều kiện đạt là từ 5 trở lên nên có một điểm đạt." },
      { question: "Với mảng {4, 4, 4}, điểm trung bình bằng bao nhiêu?", options: ["12.0", "4.0", "3.0", "0.0"], answer: 1, explanation: "Tổng là 12 và số lượng là 3. Điểm trung bình bằng 12 chia 3, tức 4.0." },
      { question: "Vì sao có thể bắt đầu cao_nhat bằng diem[0]?", options: ["Vì điểm đầu luôn lớn nhất", "Vì mảng luôn có 5 phần tử", "Vì C tự sắp xếp mảng", "Vì bài yêu cầu mảng có ít nhất một phần tử"], answer: 3, explanation: "Với mảng có ít nhất một phần tử, diem[0] là một giá trị hợp lệ để bắt đầu. Vòng lặp tiếp tục tìm các giá trị lớn hơn." }
    ]
  }
];
