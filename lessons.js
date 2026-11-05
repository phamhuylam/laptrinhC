window.C_LESSONS = [
  {
    "day": 1,
    "symbol": ">_",
    "title": "Chạy chương trình C đầu tiên",
    "shortTitle": "Bắt đầu từ số 0",
    "subtitle": "Làm quen với code và nhìn thấy kết quả đầu tiên.",
    "duration": "30–45 phút",
    "objective": "Tự mở trình biên dịch C, chạy một chương trình và đổi được câu chào trên màn hình.",
    "concepts": [
      {
        "title": "Chương trình là gì?",
        "text": "Chương trình là các chỉ dẫn để máy tính làm một việc. Hôm nay, việc đó chỉ là hiện một câu chào. Code là phần chữ bạn viết để mô tả các chỉ dẫn ấy."
      },
      {
        "title": "Bạn viết ở đâu?",
        "text": "Trong tab Thực hành của web này, bấm Mở trình biên dịch C. Ở trang vừa mở, xóa đoạn code có sẵn trong ô soạn thảo rồi dán toàn bộ ví dụ hôm nay vào đó. Bạn đang dùng một trình biên dịch của ngôn ngữ C."
      },
      {
        "title": "Chạy và đọc kết quả",
        "text": "Bấm Run trong trình biên dịch để chạy. Tìm phần Output hoặc ô kết quả. Nếu thấy Xin chao, C! thì bạn đã chạy thành công. Phần Kết quả dự kiến trên web này giúp bạn đối chiếu."
      },
      {
        "title": "Thay đổi đầu tiên",
        "text": "Dòng printf yêu cầu hiện chữ trong dấu ngoặc kép. Hôm nay chỉ đổi phần Xin chao, C! và giữ nguyên các ký hiệu xung quanh. Ngày 2 sẽ giải thích bộ khung chương trình."
      },
      {
        "title": "Nếu bạn dùng Arduino IDE",
        "text": "Bấm Học với Arduino IDE ở thanh bên để xem cách thực hành trong tab .c. Ví dụ có main và printf trên trang bài học được chạy bằng trình biên dịch C. Hôm nay bạn có thể dùng trình biên dịch trực tuyến để tập thao tác trước."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Xin chao, C!\\n\");\n    return 0;\n}",
    "output": "Xin chao, C!",
    "steps": [
      "Bấm tab Thực hành. Dùng Sao chép code rồi bấm Mở trình biên dịch C.",
      "Xóa code có sẵn trong ô soạn thảo của trình biên dịch, dán toàn bộ ví dụ và bấm Run.",
      "Tìm dòng Xin chao, C! trong ô kết quả. Đổi câu chào thành Toi dang hoc C! rồi bấm Run lần nữa.",
      "Đóng trang biên dịch, thử mở và chạy lại từ đầu để nhớ đủ các thao tác."
    ],
    "exercise": {
      "prompt": "Sửa ví dụ để màn hình hiện Toi bat dau hoc C hom nay! Tự gõ lại câu chào một lần.",
      "hint": "Chỉ thay chữ giữa hai dấu ngoặc kép trong printf. Giữ nguyên dấu ngoặc và dấu chấm phẩy cuối dòng.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Toi bat dau hoc C hom nay!\\n\");\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Hôm nay chương trình mẫu làm việc gì?",
        "options": [
          "Hiện một câu chào",
          "Đọc nhiệt độ",
          "Điều khiển động cơ",
          "Tự tạo một trang web"
        ],
        "answer": 0,
        "explanation": "Lệnh printf trong chương trình mẫu hiện câu Xin chao, C! ra ô kết quả."
      },
      {
        "question": "Sau khi dán code vào trình biên dịch C, bạn bấm gì để chạy?",
        "options": [
          "Delete",
          "Run",
          "Back",
          "Close"
        ],
        "answer": 1,
        "explanation": "Nút Run yêu cầu trình biên dịch xử lý rồi chạy chương trình C."
      },
      {
        "question": "Muốn đổi câu chào, bạn sửa phần nào trước?",
        "options": [
          "Tên main",
          "Chữ include",
          "Chữ trong dấu ngoặc kép của printf",
          "Xóa toàn bộ ngoặc nhọn"
        ],
        "answer": 2,
        "explanation": "printf hiện chữ nằm trong dấu ngoặc kép. Đổi phần này là thay đổi nhỏ phù hợp cho buổi đầu."
      }
    ]
  },
  {
    "day": 2,
    "symbol": ";",
    "title": "Đọc từng dòng chương trình",
    "shortTitle": "Hiểu bộ khung C",
    "subtitle": "Nhận ra các dấu ngoặc, dấu chấm phẩy và lời chú thích.",
    "duration": "30–45 phút",
    "objective": "Chỉ được nơi chương trình bắt đầu và nhận ra một lỗi thiếu dấu chấm phẩy.",
    "concepts": [
      {
        "title": "Dòng include chuẩn bị công cụ",
        "text": "#include <stdio.h> cho chương trình biết cách dùng các công cụ nhập và xuất chuẩn, trong đó có printf. Giữ dòng này ở đầu các ví dụ dùng printf."
      },
      {
        "title": "main là điểm bắt đầu",
        "text": "Chương trình bắt đầu thực hiện các lệnh trong main. Cụm int main(void) là phần khai báo của hàm main. Dùng bộ khung này trước, rồi học cách viết hàm ở ngày 12."
      },
      {
        "title": "Dấu ngoặc có công việc riêng",
        "text": "Cặp { và } bao nhóm lệnh của main. Cặp ( và ) trong printf bao phần dữ liệu gửi cho lệnh in. Giữ các cặp ngoặc đầy đủ khi sửa code."
      },
      {
        "title": "Kết thúc một câu lệnh",
        "text": "Lệnh printf và return 0 trong ví dụ kết thúc bằng dấu ;. return 0 kết thúc main và báo chương trình thực hiện thành công. Dòng include và các dấu ngoặc nhọn trong ví dụ không có dấu ; phía sau."
      },
      {
        "title": "Chú thích và thông báo lỗi",
        "text": "Hai dấu // bắt đầu chú thích đến hết dòng, máy bỏ qua phần này khi chạy. Nếu thiếu một ký hiệu, đọc lỗi, tìm dòng được nhắc đến và kiểm tra cả dòng ngay trước nó."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    // Hien cau chao ra man hinh\n    printf(\"Hom nay la ngay 2!\\n\");\n    return 0;\n}",
    "output": "Hom nay la ngay 2!",
    "steps": [
      "Tìm dòng include, tên main, cặp ngoặc nhọn và hai dấu chấm phẩy.",
      "Chạy ví dụ. Sửa câu chú thích sau // rồi chạy lại để quan sát kết quả.",
      "Tạm xóa dấu ; sau printf rồi bấm Run. Đọc thông báo lỗi trước khi thêm lại dấu ;.",
      "Đối chiếu code đã sửa với ví dụ và chạy thành công một lần nữa."
    ],
    "exercise": {
      "prompt": "Tự gõ lại bộ khung hôm nay. Thêm một chú thích nói rằng bạn đang luyện gõ, rồi in Toi hieu bo khung C!",
      "hint": "Đặt chú thích // trong main, ở một dòng riêng phía trên printf. Chú thích không xuất hiện trong kết quả.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    // Toi dang luyen go code\n    printf(\"Toi hieu bo khung C!\\n\");\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Các lệnh của chương trình mẫu bắt đầu thực hiện ở đâu?",
        "options": [
          "Trong dòng chú thích",
          "Trong main",
          "Trong tên tệp",
          "Trong dấu ngoặc kép đầu tiên"
        ],
        "answer": 1,
        "explanation": "main là điểm bắt đầu của chương trình C trong các ví dụ này."
      },
      {
        "question": "Ký hiệu nào kết thúc lệnh printf trong ví dụ?",
        "options": [
          "#",
          "//",
          ";",
          ":"
        ],
        "answer": 2,
        "explanation": "Dấu chấm phẩy kết thúc câu lệnh printf. Thiếu nó sẽ làm ví dụ không biên dịch thành công."
      },
      {
        "question": "Phần chữ sau // trên cùng dòng được hiểu thế nào?",
        "options": [
          "Được in ra màn hình",
          "Được tính thành số",
          "Được dùng làm tên tệp",
          "Là chú thích cho người đọc"
        ],
        "answer": 3,
        "explanation": "Phần sau // là chú thích và được bỏ qua khi chạy chương trình."
      }
    ]
  },
  {
    "day": 3,
    "symbol": "\\n",
    "title": "In chữ và xuống dòng",
    "shortTitle": "Làm quen printf",
    "subtitle": "Cho màn hình hiện nhiều dòng theo thứ tự bạn muốn.",
    "duration": "30–45 phút",
    "objective": "Tự in hai dòng chữ và giải thích được tác dụng của ký hiệu xuống dòng.",
    "concepts": [
      {
        "title": "printf hiện nội dung",
        "text": "printf(\"Xin chao\"); hiện chữ Xin chao. Cặp dấu ngoặc kép đánh dấu phần chữ cần in. Phần chữ trong ngoặc kép được gọi là chuỗi ký tự."
      },
      {
        "title": "Ký hiệu xuống dòng",
        "text": "Trong chuỗi C, \\n yêu cầu xuống dòng. Bạn gõ một dấu gạch chéo ngược rồi đến chữ n. Nó giúp lần in tiếp theo bắt đầu ở dòng mới."
      },
      {
        "title": "Các lệnh chạy theo thứ tự",
        "text": "Các lệnh in trong main chạy từ trên xuống dưới. Đổi vị trí hai lệnh sẽ đổi thứ tự hai dòng kết quả."
      },
      {
        "title": "Một lệnh có thể in nhiều dòng",
        "text": "Có thể đặt nhiều ký hiệu \\n trong cùng một chuỗi. Trong bài đầu, dùng một printf cho mỗi dòng giúp bạn dễ đọc và dễ sửa."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Xin chao!\\n\");\n    printf(\"Toi dang hoc lap trinh C.\\n\");\n    return 0;\n}",
    "output": "Xin chao!\nToi dang hoc lap trinh C.",
    "steps": [
      "Chạy ví dụ và đếm số dòng kết quả.",
      "Xóa \\n ở lệnh printf đầu tiên rồi chạy lại. Quan sát hai câu nằm trên cùng một dòng.",
      "Thêm lại ký hiệu xuống dòng. Đổi chỗ hai printf rồi dự đoán câu nào xuất hiện trước.",
      "Thêm một printf thứ ba để in Hom nay la ngay 3. ở dòng riêng."
    ],
    "exercise": {
      "prompt": "Viết chương trình in ba dòng lần lượt là Xin chao!, Toi la nguoi moi. và Toi se hoc tung ngay.",
      "hint": "Dùng ba lệnh printf, mỗi chuỗi kết thúc bằng \\n. Đặt lệnh theo thứ tự cần hiện.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Xin chao!\\n\");\n    printf(\"Toi la nguoi moi.\\n\");\n    printf(\"Toi se hoc tung ngay.\\n\");\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Ký hiệu nào yêu cầu xuống dòng trong chuỗi C?",
        "options": [
          "/n",
          "n/",
          "\\n",
          "//n"
        ],
        "answer": 2,
        "explanation": "Ký hiệu xuống dòng là dấu gạch chéo ngược đi trước chữ n, viết là \\n."
      },
      {
        "question": "Hai printf liên tiếp đều không có ký hiệu xuống dòng sẽ hiện chữ thế nào?",
        "options": [
          "Tự cách nhau một dòng trắng",
          "Luôn báo lỗi",
          "Chỉ in câu thứ hai",
          "Nối tiếp trên cùng một dòng"
        ],
        "answer": 3,
        "explanation": "printf chỉ xuống dòng khi nội dung yêu cầu. Hai lần in nối tiếp tại vị trí hiện tại trong ô kết quả."
      },
      {
        "question": "Muốn câu B xuất hiện trước câu A, bạn làm gì?",
        "options": [
          "Đặt printf in B trước printf in A",
          "Xóa return 0",
          "Đổi tên main",
          "Xóa include"
        ],
        "answer": 0,
        "explanation": "Các câu lệnh in trong main chạy từ trên xuống dưới."
      }
    ]
  },
  {
    "day": 4,
    "symbol": "int",
    "title": "Lưu số bằng biến int",
    "shortTitle": "Biến số nguyên",
    "subtitle": "Đặt tên cho một giá trị và cập nhật nó.",
    "duration": "30–45 phút",
    "objective": "Tạo được một biến số nguyên, đổi giá trị và in giá trị mới ra màn hình.",
    "concepts": [
      {
        "title": "Biến là chỗ lưu dữ liệu",
        "text": "int so_buoi = 1; tạo biến tên so_buoi và cho giá trị đầu là 1. int là kiểu số nguyên, ví dụ 0, 5, 18 hoặc -2. Bài này dùng các số nhỏ để dễ kiểm tra."
      },
      {
        "title": "Tên biến giúp bạn đọc code",
        "text": "Tên như tuoi, so_vien hoặc so_buoi_hoc gợi nội dung đang lưu. Tên không có khoảng trắng và không bắt đầu bằng chữ số."
      },
      {
        "title": "Dấu = gán giá trị",
        "text": "Sau khi tạo biến, so_buoi = 2; thay giá trị đang lưu thành 2. Khi tạo biến lần đầu bạn viết int, còn khi gán lại thì dùng tên biến đã có."
      },
      {
        "title": "In biến với %d",
        "text": "Trong printf, %d là chỗ điền giá trị số nguyên. printf(\"So buoi: %d\\n\", so_buoi); lấy giá trị biến điền vào vị trí %d. Dấu phẩy ngăn chuỗi định dạng với biến cần in."
      },
      {
        "title": "Gán trước khi đọc",
        "text": "Cho biến một giá trị rõ ràng trước khi tính hoặc in nó. Trong các bài đầu, bạn nhập dữ liệu bằng cách sửa giá trị ngay trong code rồi chạy lại."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int so_buoi = 1;\n    printf(\"Ban dau: %d\\n\", so_buoi);\n    so_buoi = 2;\n    printf(\"Sau khi doi: %d\\n\", so_buoi);\n    return 0;\n}",
    "output": "Ban dau: 1\nSau khi doi: 2",
    "steps": [
      "Tìm tên biến, kiểu int và giá trị đầu trong dòng khai báo.",
      "Theo dõi so_buoi từ dòng đầu đến dòng cuối, rồi chạy để đối chiếu.",
      "Đổi giá trị đầu thành 3 và giá trị gán lại thành 5. Dự đoán cả hai dòng kết quả.",
      "Tạo thêm biến int so_phut = 30; và in nó bằng %d."
    ],
    "exercise": {
      "prompt": "Tạo biến int so_vien = 4, in giá trị đó. Sau đó gán so_vien = 7 và in lại để thấy sự thay đổi.",
      "hint": "Chỉ cần một dòng khai báo int. Đặt lệnh gán lại giữa hai printf.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int so_vien = 4;\n    printf(\"Lan 1: %d\\n\", so_vien);\n    so_vien = 7;\n    printf(\"Lan 2: %d\\n\", so_vien);\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Dòng nào tạo biến số nguyên diem có giá trị 8?",
        "options": [
          "int = diem 8;",
          "diem int 8;",
          "integer diem = 8;",
          "int diem = 8;"
        ],
        "answer": 3,
        "explanation": "Thứ tự khai báo là kiểu dữ liệu, tên biến, dấu gán, giá trị và dấu chấm phẩy."
      },
      {
        "question": "Sau int n = 2; rồi n = 5; thì n chứa giá trị nào?",
        "options": [
          "5",
          "2",
          "7",
          "25"
        ],
        "answer": 0,
        "explanation": "Lệnh gán n = 5 thay giá trị cũ bằng 5."
      },
      {
        "question": "Trong printf, ký hiệu nào dùng để in giá trị int?",
        "options": [
          "%f",
          "%d",
          "%s",
          "#d"
        ],
        "answer": 1,
        "explanation": "%d dùng cho số nguyên kiểu int trong các ví dụ này."
      }
    ]
  },
  {
    "day": 5,
    "symbol": "+",
    "title": "Tính toán với số nguyên",
    "shortTitle": "Phép tính cơ bản",
    "subtitle": "Cộng, trừ, nhân, chia và tìm phần dư.",
    "duration": "30–45 phút",
    "objective": "Viết phép đổi giờ thành phút và dự đoán được kết quả một biểu thức đơn giản.",
    "concepts": [
      {
        "title": "Các phép tính quen thuộc",
        "text": "C dùng + để cộng, - để trừ, * để nhân và / để chia. Ví dụ 3 * 4 bằng 12. Dấu = lưu kết quả biểu thức bên phải vào biến bên trái."
      },
      {
        "title": "Nhân và chia được làm trước",
        "text": "Trong 2 + 3 * 4, nhân làm trước nên kết quả là 14. Dùng (2 + 3) * 4 để yêu cầu cộng trước, kết quả là 20."
      },
      {
        "title": "Chia số nguyên",
        "text": "Khi cả hai số là số nguyên, 7 / 2 cho kết quả 3 vì phần thập phân bị bỏ đi. Ngày 6 dùng số thực để giữ phần này. Mẫu số phải khác 0."
      },
      {
        "title": "Chia lấy dư",
        "text": "Dấu % lấy phần dư của phép chia số nguyên. Với số dương, 7 % 2 bằng 1 vì 7 chia 2 được 3 và dư 1. Số chia phải khác 0."
      },
      {
        "title": "Đổi đơn vị bằng công thức",
        "text": "Một giờ có 60 phút. Với gio giờ và phut phút, tổng số phút là gio * 60 + phut. Hôm nay dùng số giờ từ 0 đến 10."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int gio = 2;\n    int phut = 15;\n    int tong_phut = gio * 60 + phut;\n    printf(\"Tong so phut: %d\\n\", tong_phut);\n    printf(\"7 chia 2 du: %d\\n\", 7 % 2);\n    return 0;\n}",
    "output": "Tong so phut: 135\n7 chia 2 du: 1",
    "steps": [
      "Tính bằng tay 2 × 60 + 15, rồi chạy để đối chiếu.",
      "Đổi thành 1 giờ 30 phút và dự đoán kết quả trước khi chạy lại.",
      "Thêm dòng in 2 + 3 * 4 và dòng in (2 + 3) * 4 bằng %d.",
      "Tự kiểm tra 8 % 2 và 9 % 2 để thấy trường hợp chia hết và có dư."
    ],
    "exercise": {
      "prompt": "Đổi 3 phút 20 giây thành tổng số giây bằng hai biến phut và giay. Kết quả cần là 200.",
      "hint": "Một phút có 60 giây. Nhân số phút với 60 rồi cộng số giây lẻ.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int phut = 3;\n    int giay = 20;\n    int tong_giay = phut * 60 + giay;\n    printf(\"Tong so giay: %d\\n\", tong_giay);\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Giá trị của 2 + 3 * 4 là bao nhiêu?",
        "options": [
          "14",
          "20",
          "24",
          "9"
        ],
        "answer": 0,
        "explanation": "Phép nhân làm trước. 3 * 4 bằng 12, sau đó cộng 2 được 14."
      },
      {
        "question": "Với phép chia số nguyên, 7 / 2 cho kết quả nào?",
        "options": [
          "3.5",
          "3",
          "4",
          "1"
        ],
        "answer": 1,
        "explanation": "Hai toán hạng là số nguyên nên phần thập phân bị bỏ, kết quả là 3."
      },
      {
        "question": "Giá trị của 9 % 2 là bao nhiêu?",
        "options": [
          "4",
          "0",
          "1",
          "4.5"
        ],
        "answer": 2,
        "explanation": "9 chia 2 được 4 và dư 1. Dấu % lấy phần dư đó."
      }
    ]
  },
  {
    "day": 6,
    "symbol": ".0",
    "title": "Làm quen số có phần thập phân",
    "shortTitle": "Kiểu float",
    "subtitle": "Giữ kết quả như 5.5 khi tính trung bình.",
    "duration": "30–45 phút",
    "objective": "Phân biệt chia số nguyên với chia số thực và in một chữ số sau dấu chấm.",
    "concepts": [
      {
        "title": "float lưu số thực",
        "text": "float diem = 7.5f; tạo biến số thực có giá trị 7.5. Trong C, dùng dấu chấm cho phần thập phân. Chữ f cuối 7.5f cho biết giá trị này có kiểu float."
      },
      {
        "title": "Tính trung bình",
        "text": "Trung bình của 5 và 6 là (5 + 6) / 2, bằng 5.5 khi chia bằng số thực. Nếu cả hai toán hạng trong phép chia là số nguyên, kết quả sẽ là 5."
      },
      {
        "title": "Chuyển kiểu trước khi chia",
        "text": "(float)tong chuyển giá trị tong sang số thực trong biểu thức. Viết (float)tong / so_luong để phép chia giữ phần thập phân. Chuyển kiểu sau khi chia số nguyên không lấy lại phần bị bỏ."
      },
      {
        "title": "In bằng %.1f",
        "text": "Trong printf, %.1f hiển thị số thực với một chữ số sau dấu chấm. printf(\"Trung binh: %.1f\\n\", trung_binh); hiện 5.5 nếu biến có giá trị 5.5. Định dạng này làm tròn giá trị khi hiển thị."
      },
      {
        "title": "Kiểm tra mẫu số",
        "text": "Chỉ tính trung bình khi so_luong lớn hơn 0. Hôm nay đặt sẵn so_luong = 2 để tập trung vào cách chia và in."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int tong = 5 + 6;\n    int so_luong = 2;\n    float trung_binh = (float)tong / so_luong;\n    printf(\"Trung binh: %.1f\\n\", trung_binh);\n    return 0;\n}",
    "output": "Trung binh: 5.5",
    "steps": [
      "Tính kết quả (float)tong / so_luong bằng tay rồi chạy.",
      "Tạm bỏ (float), chạy lại và quan sát kết quả thành 5.0.",
      "Thêm lại (float). Thay hai điểm thành 8 và 9 rồi dự đoán kết quả.",
      "Đổi %.1f thành %.2f để xem cùng giá trị với hai chữ số thập phân."
    ],
    "exercise": {
      "prompt": "Dùng ba điểm 7, 8, 9 để tính trung bình. In một chữ số thập phân, kết quả cần là 8.0.",
      "hint": "Cộng ba điểm vào tong. Đặt so_luong = 3 và chuyển tong sang float trước khi chia.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int tong = 7 + 8 + 9;\n    int so_luong = 3;\n    float trung_binh = (float)tong / so_luong;\n    printf(\"Trung binh: %.1f\\n\", trung_binh);\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Kiểu nào phù hợp để lưu 7.5 trong bài hôm nay?",
        "options": [
          "int",
          "void",
          "float",
          "return"
        ],
        "answer": 2,
        "explanation": "float lưu số thực, giúp giữ phần thập phân của giá trị như 7.5."
      },
      {
        "question": "Với tong = 11, so_luong = 2, biểu thức nào cho 5.5?",
        "options": [
          "tong / so_luong",
          "(float)(tong / so_luong)",
          "tong % so_luong",
          "(float)tong / so_luong"
        ],
        "answer": 3,
        "explanation": "Chuyển tong sang float trước phép chia giúp giữ phần thập phân."
      },
      {
        "question": "Định dạng %.1f in bao nhiêu chữ số sau dấu chấm?",
        "options": [
          "1",
          "0",
          "2",
          "Luôn là 5"
        ],
        "answer": 0,
        "explanation": "Số 1 trong %.1f yêu cầu hiển thị một chữ số sau dấu chấm."
      }
    ]
  },
  {
    "day": 7,
    "symbol": "=",
    "title": "Ôn tập bằng một hóa đơn nhỏ",
    "shortTitle": "Tự ghép những gì đã học",
    "subtitle": "Dùng biến, phép tính và printf trong cùng một bài.",
    "duration": "30–45 phút",
    "objective": "Tự viết chương trình tính tiền mua vở và bút từ kiến thức sáu ngày đầu.",
    "concepts": [
      {
        "title": "Đọc đề rồi tìm dữ liệu",
        "text": "Có 3 quyển vở, mỗi quyển 1200 đơn vị tiền, và một cây bút giá 500. Dữ liệu cần lưu là số vở, giá một quyển vở và tiền bút."
      },
      {
        "title": "Viết công thức bằng lời",
        "text": "Tiền vở bằng số vở nhân đơn giá. Tổng tiền bằng tiền vở cộng tiền bút. Tính bằng tay trước để biết code cần cho kết quả nào."
      },
      {
        "title": "Đặt tên kết quả trung gian",
        "text": "Biến tien_vo giúp xem riêng phép nhân, còn tong_tien giúp xem phép cộng cuối cùng. Chia công thức thành từng bước giúp tìm lỗi dễ hơn."
      },
      {
        "title": "Kiểm tra bằng thay đổi nhỏ",
        "text": "Đổi số vở từ 3 thành 4 thì tổng tăng đúng 1200. Đặt số vở bằng 0 thì tổng còn tiền bút. Mỗi lần thử chỉ đổi một dữ liệu."
      },
      {
        "title": "Tự viết lại để nhớ",
        "text": "Bạn đang dùng bộ khung main, biến int, phép nhân, phép cộng và printf. Đóng ví dụ rồi viết lại từ đề bài để biết mình nhớ được bước nào."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int so_vo = 3;\n    int gia_vo = 1200;\n    int tien_but = 500;\n    int tien_vo = so_vo * gia_vo;\n    int tong_tien = tien_vo + tien_but;\n    printf(\"Tien vo: %d\\n\", tien_vo);\n    printf(\"Tong tien: %d\\n\", tong_tien);\n    return 0;\n}",
    "output": "Tien vo: 3600\nTong tien: 4100",
    "steps": [
      "Ghi ba dữ liệu đầu vào và hai kết quả cần tính ra giấy.",
      "Chạy để đối chiếu 3 × 1200 = 3600 và 3600 + 500 = 4100.",
      "Thay so_vo thành 4 rồi 0. Dự đoán cả hai dòng kết quả mỗi lần.",
      "Che ví dụ, tự gõ chương trình và giải thích từng biến bạn dùng."
    ],
    "exercise": {
      "prompt": "Tính tổng tiền 2 quyển vở giá 1500 mỗi quyển và 2 cây bút giá 400 mỗi cây. In riêng tiền vở, tiền bút và tổng. Tổng cần là 3800.",
      "hint": "Tính hai phép nhân riêng rồi cộng kết quả. Dùng đúng các số lượng và đơn giá của đề.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int so_vo = 2;\n    int gia_vo = 1500;\n    int so_but = 2;\n    int gia_but = 400;\n    int tien_vo = so_vo * gia_vo;\n    int tien_but = so_but * gia_but;\n    int tong_tien = tien_vo + tien_but;\n    printf(\"Tien vo: %d\\n\", tien_vo);\n    printf(\"Tien but: %d\\n\", tien_but);\n    printf(\"Tong tien: %d\\n\", tong_tien);\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Tiền 3 quyển vở giá 1200 mỗi quyển là bao nhiêu?",
        "options": [
          "1700",
          "3600",
          "4100",
          "1203"
        ],
        "answer": 1,
        "explanation": "Tiền vở là số vở nhân đơn giá, 3 * 1200 bằng 3600."
      },
      {
        "question": "Muốn mua thêm một quyển vở với cùng đơn giá, sửa dữ liệu nào?",
        "options": [
          "Tên main",
          "Lệnh printf",
          "Tăng so_vo thêm 1",
          "Xóa tien_but"
        ],
        "answer": 2,
        "explanation": "so_vo lưu số vở. Tăng thêm 1 làm tiền vở tăng đúng một đơn giá."
      },
      {
        "question": "Với so_vo = 0 và tien_but = 500, tổng tiền là bao nhiêu?",
        "options": [
          "0",
          "1200",
          "3600",
          "500"
        ],
        "answer": 3,
        "explanation": "Tiền vở bằng 0 * 1200 là 0. Tổng còn 0 + 500 bằng 500."
      }
    ]
  },
  {
    "day": 8,
    "symbol": "if",
    "title": "Kiểm tra điều kiện với if",
    "shortTitle": "Khi nào chạy một lệnh?",
    "subtitle": "Chỉ làm một việc khi điều kiện đúng.",
    "duration": "30–45 phút",
    "objective": "Dùng if để hiện lời báo đạt khi điểm từ 5 trở lên.",
    "concepts": [
      {
        "title": "Một phép so sánh",
        "text": "diem >= 5 kiểm tra điểm có lớn hơn hoặc bằng 5 không. Kết quả so sánh đúng có giá trị 1, sai có giá trị 0. Bạn có thể in kết quả đó bằng %d."
      },
      {
        "title": "Các dấu so sánh",
        "text": "Dùng > cho lớn hơn, < cho nhỏ hơn, >= cho lớn hơn hoặc bằng, <= cho nhỏ hơn hoặc bằng, == cho bằng nhau và != cho khác nhau."
      },
      {
        "title": "if kiểm tra trước khi làm",
        "text": "if (diem >= 5) kiểm tra điều kiện trong ngoặc tròn. Nếu đúng, chương trình chạy khối lệnh trong ngoặc nhọn phía sau. Nếu sai, khối đó được bỏ qua."
      },
      {
        "title": "Phân biệt = và ==",
        "text": "diem = 5 gán giá trị 5 cho biến. diem == 5 so sánh xem biến có bằng 5 không. Khi muốn so sánh bằng nhau, kiểm tra đủ hai dấu bằng."
      },
      {
        "title": "Thử ngay tại ranh giới",
        "text": "Bài này giả sử điểm nguyên từ 0 đến 10. Thử 4, 5 và 6 để biết chương trình xử lý thế nào ngay dưới, đúng tại và ngay trên ngưỡng đạt."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int diem = 5;\n    printf(\"Dieu kien dung: %d\\n\", diem >= 5);\n    if (diem >= 5) {\n        printf(\"Diem dat\\n\");\n    }\n    return 0;\n}",
    "output": "Dieu kien dung: 1\nDiem dat",
    "steps": [
      "Với diem = 5, tự trả lời điều kiện đúng hay sai rồi chạy.",
      "Đổi diem thành 4. Kiểm tra dòng Diem dat có còn xuất hiện không.",
      "Đổi diem thành 6 rồi so sánh với trường hợp 5.",
      "Tạm đổi >= thành >, thử lại riêng điểm 5 và giải thích khác biệt."
    ],
    "exercise": {
      "prompt": "Đặt so_buoi_hoc = 3. Dùng if để in Ban da hoc it nhat 3 buoi! khi số buổi lớn hơn hoặc bằng 3. Thử thêm giá trị 2.",
      "hint": "Viết điều kiện so_buoi_hoc >= 3 trong ngoặc tròn của if. Đặt printf trong khối ngoặc nhọn.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int so_buoi_hoc = 3;\n    if (so_buoi_hoc >= 3) {\n        printf(\"Ban da hoc it nhat 3 buoi!\\n\");\n    }\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Với diem = 5, điều kiện diem >= 5 cho kết quả nào?",
        "options": [
          "0",
          "5",
          "10",
          "1"
        ],
        "answer": 3,
        "explanation": "5 lớn hơn hoặc bằng 5 nên phép so sánh đúng và có giá trị 1."
      },
      {
        "question": "Khi điều kiện if sai, khối lệnh ngay sau nó thế nào?",
        "options": [
          "Được bỏ qua",
          "Luôn chạy hai lần",
          "Tự báo lỗi",
          "Tự đổi thành chú thích"
        ],
        "answer": 0,
        "explanation": "if chỉ chạy khối lệnh của nó khi điều kiện đúng."
      },
      {
        "question": "Biểu thức nào so sánh diem có bằng 5 không?",
        "options": [
          "diem = 5",
          "diem == 5",
          "int diem = 5",
          "diem + 5"
        ],
        "answer": 1,
        "explanation": "Hai dấu bằng == thực hiện so sánh. Một dấu bằng = dùng để gán."
      }
    ]
  },
  {
    "day": 9,
    "symbol": "else",
    "title": "Chọn giữa hai nhánh if và else",
    "shortTitle": "Đạt hay chưa đạt?",
    "subtitle": "Cho mỗi trường hợp một kết quả rõ ràng.",
    "duration": "30–45 phút",
    "objective": "Viết chương trình luôn báo đạt hoặc chưa đạt, rồi kiểm tra các điểm 4, 5 và 6.",
    "concepts": [
      {
        "title": "else là nhánh còn lại",
        "text": "Nếu điều kiện if đúng thì khối if chạy. Nếu sai thì khối else chạy. Với một cặp if và else như ví dụ, chỉ một trong hai khối được chọn."
      },
      {
        "title": "Giữ khối lệnh rõ ràng",
        "text": "Mỗi nhánh có cặp ngoặc nhọn riêng. Thụt vào các lệnh trong mỗi khối để dễ đọc. Không đặt dấu ; ngay sau điều kiện if."
      },
      {
        "title": "Chọn đúng ngưỡng",
        "text": "Nếu quy tắc là điểm từ 5 trở lên được đạt thì dùng diem >= 5. Dùng diem > 5 sẽ đưa điểm đúng bằng 5 sang nhánh chưa đạt."
      },
      {
        "title": "Kiểm tra bằng bảng nhỏ",
        "text": "Ghi ba trường hợp thử. Điểm 4 cần báo Chua dat, điểm 5 cần báo Dat và điểm 6 cần báo Dat. Chạy từng trường hợp rồi đối chiếu."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int diem = 5;\n    if (diem >= 5) {\n        printf(\"Dat\\n\");\n    } else {\n        printf(\"Chua dat\\n\");\n    }\n    return 0;\n}",
    "output": "Dat",
    "steps": [
      "Dự đoán nhánh sẽ chạy với diem = 5 rồi chạy ví dụ.",
      "Thử lần lượt 4, 5, 6. Ghi kết quả vào bảng nhỏ.",
      "Đổi diem thành 0 rồi 10 để thử hai đầu khoảng điểm hợp lệ.",
      "Tự viết lại cặp if và else mà không nhìn ví dụ."
    ],
    "exercise": {
      "prompt": "Đặt n = 8. Dùng n % 2 == 0 để kiểm tra số chẵn. In Chan nếu đúng, Le nếu sai. Thử lại n = 7 và n = 0.",
      "hint": "Số nguyên chia hết cho 2 có phần dư bằng 0. Đặt phép so sánh phần dư trong điều kiện if.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int n = 8;\n    if (n % 2 == 0) {\n        printf(\"Chan\\n\");\n    } else {\n        printf(\"Le\\n\");\n    }\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Với diem = 4 và điều kiện diem >= 5, nhánh nào chạy?",
        "options": [
          "if",
          "else",
          "Cả hai nhánh",
          "Chương trình luôn lặp lại"
        ],
        "answer": 1,
        "explanation": "4 >= 5 sai nên chương trình chọn else."
      },
      {
        "question": "Quy tắc đạt từ 5 điểm trở lên cần điều kiện nào?",
        "options": [
          "diem > 5",
          "diem < 5",
          "diem >= 5",
          "diem != 5"
        ],
        "answer": 2,
        "explanation": ">= bao gồm cả điểm đúng bằng 5."
      },
      {
        "question": "Với n = 8, biểu thức n % 2 == 0 thế nào?",
        "options": [
          "Sai vì 8 lớn hơn 2",
          "Sai vì phần dư là 1",
          "Chỉ đúng khi n bằng 2",
          "Đúng vì 8 chia hết cho 2"
        ],
        "answer": 3,
        "explanation": "8 % 2 bằng 0 nên so sánh phần dư với 0 là đúng."
      }
    ]
  },
  {
    "day": 10,
    "symbol": "&&",
    "title": "Ghép các điều kiện",
    "shortTitle": "Và, hoặc, phủ định",
    "subtitle": "Kiểm tra giá trị nằm trong khoảng hợp lệ.",
    "duration": "30–45 phút",
    "objective": "Dùng && để kiểm tra điểm từ 0 đến 10 và đọc được điều kiện dùng || hoặc !.",
    "concepts": [
      {
        "title": "&& có nghĩa là và",
        "text": "(diem >= 0) && (diem <= 10) đúng khi cả hai phép so sánh đều đúng. Điều kiện kiểm tra điểm từ 0 đến 10, bao gồm cả hai đầu."
      },
      {
        "title": "|| có nghĩa là hoặc",
        "text": "(diem < 0) || (diem > 10) đúng khi ít nhất một phép so sánh đúng. Điều kiện này kiểm tra điểm ở ngoài khoảng 0 đến 10."
      },
      {
        "title": "! đảo đúng thành sai",
        "text": "Nếu hop_le bằng 1 thì !hop_le bằng 0. Nếu hop_le bằng 0 thì !hop_le bằng 1. Trong điều kiện của C, 0 được coi là sai và giá trị khác 0 được coi là đúng."
      },
      {
        "title": "Viết ngoặc để dễ đọc",
        "text": "Đặt từng phép so sánh trong ngoặc. Viết (diem >= 0) && (diem <= 10). Cách viết 0 <= diem <= 10 không kiểm tra khoảng theo ý nghĩa toán học bạn muốn."
      },
      {
        "title": "Thử trong và ngoài khoảng",
        "text": "Dùng -1, 0, 5, 10 và 11 để kiểm tra hai đầu khoảng, một giá trị ở giữa và hai giá trị ngoài khoảng."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int diem = 8;\n    int hop_le = (diem >= 0) && (diem <= 10);\n    if (hop_le) {\n        printf(\"Diem hop le\\n\");\n    } else {\n        printf(\"Diem ngoai khoang\\n\");\n    }\n    printf(\"Khong hop le: %d\\n\", !hop_le);\n    return 0;\n}",
    "output": "Diem hop le\nKhong hop le: 0",
    "steps": [
      "Tính riêng hai phép so sánh với diem = 8 rồi ghép bằng &&.",
      "Thử -1, 0, 10 và 11. Dự đoán cả lời báo lẫn giá trị !hop_le.",
      "Viết thêm int ngoai_khoang = (diem < 0) || (diem > 10); và in bằng %d.",
      "Đối chiếu ngoai_khoang với !hop_le ở các giá trị đã thử."
    ],
    "exercise": {
      "prompt": "Đặt tuoi = 18. Kiểm tra tuổi thuộc khoảng 18 đến 25, bao gồm hai đầu. In Trong khoang hoặc Ngoai khoang. Thử 17, 18, 25, 26.",
      "hint": "Ghép tuoi >= 18 và tuoi <= 25 bằng &&. Giữ ngoặc cho từng phép so sánh.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int tuoi = 18;\n    if ((tuoi >= 18) && (tuoi <= 25)) {\n        printf(\"Trong khoang\\n\");\n    } else {\n        printf(\"Ngoai khoang\\n\");\n    }\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Khi nào A && B đúng?",
        "options": [
          "Khi A và B đều đúng",
          "Chỉ khi A sai",
          "Chỉ khi B sai",
          "Khi A và B đều sai"
        ],
        "answer": 0,
        "explanation": "Phép và && yêu cầu cả hai điều kiện cùng đúng."
      },
      {
        "question": "Với diem = 11, (diem < 0) || (diem > 10) cho giá trị nào?",
        "options": [
          "0",
          "1",
          "10",
          "11"
        ],
        "answer": 1,
        "explanation": "11 > 10 đúng. Phép hoặc || chỉ cần ít nhất một điều kiện đúng nên kết quả là 1."
      },
      {
        "question": "Nếu hop_le bằng 1 thì !hop_le bằng bao nhiêu?",
        "options": [
          "1",
          "-1",
          "0",
          "2"
        ],
        "answer": 2,
        "explanation": "Dấu ! phủ định giá trị đúng. !1 bằng 0."
      }
    ]
  },
  {
    "day": 11,
    "symbol": "for",
    "title": "Lặp lại công việc với for",
    "shortTitle": "Vòng lặp đầu tiên",
    "subtitle": "Đếm từ 1 đến 5 rồi cộng dồn từng số.",
    "duration": "45–60 phút",
    "objective": "Theo dõi được biến đếm qua từng vòng và tính tổng từ 1 đến 5.",
    "concepts": [
      {
        "title": "Vì sao cần vòng lặp?",
        "text": "Muốn in năm số, bạn có thể viết năm printf. Vòng lặp cho phép viết công việc một lần rồi cho máy lặp lại với nhiều giá trị của biến đếm."
      },
      {
        "title": "Ba phần trong for",
        "text": "for (int i = 1; i <= 5; i++) bắt đầu với i = 1, kiểm tra i <= 5 trước mỗi vòng và tăng i sau khi chạy khối lệnh. Hai dấu ; tách ba phần của for."
      },
      {
        "title": "i++ tăng thêm một",
        "text": "Trong phần cập nhật, i++ tăng i thêm 1. Sau các vòng có i lần lượt là 1, 2, 3, 4, 5, i tăng thành 6. Điều kiện 6 <= 5 sai nên vòng lặp dừng."
      },
      {
        "title": "Cộng dồn từ giá trị đầu",
        "text": "Đặt tong = 0 trước vòng lặp. tong = tong + i lấy tổng cũ cộng i hiện tại rồi lưu lại. Sau từng vòng, tổng là 1, 3, 6, 10, 15."
      },
      {
        "title": "Theo dõi và in từng bước",
        "text": "Trong printf có hai %d thì truyền hai giá trị theo đúng thứ tự. Ví dụ in i trước rồi tong giúp bạn nhìn thấy mỗi vòng đã thay đổi tổng thế nào."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int tong = 0;\n    for (int i = 1; i <= 5; i++) {\n        tong = tong + i;\n        printf(\"i = %d, tong = %d\\n\", i, tong);\n    }\n    return 0;\n}",
    "output": "i = 1, tong = 1\ni = 2, tong = 3\ni = 3, tong = 6\ni = 4, tong = 10\ni = 5, tong = 15",
    "steps": [
      "Lập hai cột i và tong trên giấy. Điền năm vòng bằng tay.",
      "Chạy rồi so sánh mỗi dòng với bảng của bạn.",
      "Thay giới hạn 5 thành 3. Tổng cuối cần là 6 và có 3 dòng kết quả.",
      "Thử i < 5 thay cho i <= 5 để hiểu khác biệt tại vòng cuối."
    ],
    "exercise": {
      "prompt": "Dùng for tính tích 1 × 2 × 3 × 4. Đặt tich = 1 trước khi lặp và chỉ in kết quả cuối là 24.",
      "hint": "Lặp từ i = 1 đến i <= 4. Mỗi vòng dùng tich = tich * i. Đặt printf sau vòng lặp để in một kết quả.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int tich = 1;\n    for (int i = 1; i <= 4; i++) {\n        tich = tich * i;\n    }\n    printf(\"Tich: %d\\n\", tich);\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "for bắt đầu i = 1, tiếp tục khi i <= 5, tăng i++ chạy mấy vòng?",
        "options": [
          "4",
          "6",
          "1",
          "5"
        ],
        "answer": 3,
        "explanation": "Khối lệnh chạy với i là 1, 2, 3, 4 và 5, tổng cộng năm vòng."
      },
      {
        "question": "Vì sao tong được đặt bằng 0 trước khi cộng dồn?",
        "options": [
          "Để có tổng ban đầu rõ ràng",
          "Để for chạy vô hạn",
          "Để printf đổi thành số thực",
          "Để i luôn bằng 0"
        ],
        "answer": 0,
        "explanation": "Tổng ban đầu phải được xác định. Bắt đầu từ 0 giúp cộng lần lượt từng số đúng cách."
      },
      {
        "question": "Cộng 1, 2, 3 vào tong ban đầu bằng 0 thì kết quả là bao nhiêu?",
        "options": [
          "3",
          "6",
          "5",
          "0"
        ],
        "answer": 1,
        "explanation": "Tổng lần lượt là 1, 3 rồi 6."
      }
    ]
  },
  {
    "day": 12,
    "symbol": "f(x)",
    "title": "Viết hàm để gọi lại",
    "shortTitle": "Tham số và return",
    "subtitle": "Đặt tên cho một công việc rồi dùng với nhiều dữ liệu.",
    "duration": "45–60 phút",
    "objective": "Tự viết hàm đổi giờ và phút thành tổng số phút, gọi hàm hai lần từ main.",
    "concepts": [
      {
        "title": "Hàm gom một công việc",
        "text": "Hàm có tên, dữ liệu nhận vào và phần lệnh thực hiện công việc. main cũng là một hàm. Hôm nay viết thêm doi_sang_phut để dùng công thức từ ngày 5."
      },
      {
        "title": "Tham số nhận dữ liệu",
        "text": "Trong int doi_sang_phut(int gio, int phut), gio và phut là tham số kiểu int. Gọi doi_sang_phut(2, 15) truyền 2 cho gio và 15 cho phut."
      },
      {
        "title": "Kiểu trả về và return",
        "text": "int trước tên hàm cho biết hàm trả về số nguyên. return gio * 60 + phut; tính rồi gửi kết quả về nơi gọi. return cũng kết thúc lần chạy đó của hàm."
      },
      {
        "title": "Lấy kết quả ở nơi gọi",
        "text": "int tong = doi_sang_phut(2, 15); gọi hàm rồi lưu kết quả vào tong. Có thể truyền lời gọi hàm vào printf nếu định dạng phù hợp."
      },
      {
        "title": "Đặt định nghĩa trước main",
        "text": "Viết hàm doi_sang_phut ở phía trên main để trình biên dịch biết hàm trước khi gọi. Tên tham số được dùng trong phạm vi của hàm đó. Dùng số giờ từ 0 đến 10 trong bài này."
      }
    ],
    "code": "#include <stdio.h>\n\nint doi_sang_phut(int gio, int phut) {\n    return gio * 60 + phut;\n}\n\nint main(void) {\n    int tong = doi_sang_phut(2, 15);\n    printf(\"Lan 1: %d\\n\", tong);\n    printf(\"Lan 2: %d\\n\", doi_sang_phut(1, 30));\n    return 0;\n}",
    "output": "Lan 1: 135\nLan 2: 90",
    "steps": [
      "Đọc main trước. Tại lời gọi đầu, tìm hàm phía trên rồi thay gio bằng 2, phut bằng 15.",
      "Tính kết quả 135, quay lại main và xem nơi dùng biến tong.",
      "Theo dõi lời gọi thứ hai với 1 và 30. Chạy để đối chiếu cả hai kết quả.",
      "Thêm lời gọi doi_sang_phut(0, 45) và kiểm tra kết quả 45."
    ],
    "exercise": {
      "prompt": "Viết hàm doi_sang_giay(int phut, int giay). Gọi với 3 phút 20 giây và 1 phút 5 giây. Kết quả cần là 200 và 65.",
      "hint": "Hàm trả về phut * 60 + giay. Đặt định nghĩa trước main và dùng %d để in kết quả.",
      "solution": "#include <stdio.h>\n\nint doi_sang_giay(int phut, int giay) {\n    return phut * 60 + giay;\n}\n\nint main(void) {\n    printf(\"Lan 1: %d\\n\", doi_sang_giay(3, 20));\n    printf(\"Lan 2: %d\\n\", doi_sang_giay(1, 5));\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Trong doi_sang_phut(2, 15), hai giá trị 2 và 15 dùng để làm gì?",
        "options": [
          "Đặt tên hai tệp",
          "Đổi tên main",
          "Truyền dữ liệu cho hai tham số",
          "Tạo hai vòng lặp"
        ],
        "answer": 2,
        "explanation": "Lời gọi truyền 2 cho gio và 15 cho phut theo thứ tự tham số."
      },
      {
        "question": "return trong hàm đổi phút có tác dụng gì?",
        "options": [
          "Luôn in chữ",
          "Tạo biến toàn cục",
          "Lặp lại main",
          "Trả kết quả về nơi gọi hàm"
        ],
        "answer": 3,
        "explanation": "return gửi giá trị về nơi gọi và kết thúc lần chạy của hàm."
      },
      {
        "question": "doi_sang_phut(1, 30) trả về bao nhiêu?",
        "options": [
          "90",
          "130",
          "31",
          "60"
        ],
        "answer": 0,
        "explanation": "Một giờ là 60 phút, cộng 30 phút được 90 phút."
      }
    ]
  },
  {
    "day": 13,
    "symbol": "[ ]",
    "title": "Lưu nhiều điểm trong một mảng",
    "shortTitle": "Mảng và chỉ số",
    "subtitle": "Đọc từng phần tử rồi tìm giá trị lớn nhất.",
    "duration": "45–60 phút",
    "objective": "Dùng đúng chỉ số mảng 5 phần tử và tìm điểm cao nhất bằng vòng lặp.",
    "concepts": [
      {
        "title": "Một tên cho nhiều giá trị",
        "text": "int diem[] = {8, 4, 5, 9, 6}; tạo mảng gồm 5 số nguyên. Các số trong ngoặc nhọn là phần tử. Với cách khai báo này, trình biên dịch đếm các giá trị để xác định số phần tử."
      },
      {
        "title": "Chỉ số bắt đầu từ 0",
        "text": "diem[0] là 8, diem[1] là 4 và diem[4] là 6. Mảng 5 phần tử có chỉ số hợp lệ từ 0 đến 4. diem[5] vượt ra ngoài mảng."
      },
      {
        "title": "Duyệt với i < so_luong",
        "text": "Dùng i từ 0 và i < 5 để đi qua đủ năm phần tử. Trong mỗi vòng, diem[i] là giá trị ở vị trí i hiện tại."
      },
      {
        "title": "Tìm điểm lớn nhất",
        "text": "Lấy phần tử đầu làm cao_nhat ban đầu. So sánh từng phần tử còn lại. Nếu điểm hiện tại lớn hơn cao_nhat thì gán cao_nhat bằng điểm đó."
      },
      {
        "title": "Giữ giới hạn dữ liệu rõ ràng",
        "text": "Bài này dùng mảng có ít nhất một phần tử và điểm nguyên từ 0 đến 10. Chỉ đọc hoặc ghi trong phạm vi mảng. Khi đổi số phần tử, cập nhật so_luong cho đúng."
      }
    ],
    "code": "#include <stdio.h>\n\nint main(void) {\n    int diem[] = {8, 4, 5, 9, 6};\n    int so_luong = 5;\n    int cao_nhat = diem[0];\n    for (int i = 1; i < so_luong; i++) {\n        if (diem[i] > cao_nhat) {\n            cao_nhat = diem[i];\n        }\n    }\n    printf(\"Cao nhat: %d\\n\", cao_nhat);\n    return 0;\n}",
    "output": "Cao nhat: 9",
    "steps": [
      "Viết hàng chỉ số 0, 1, 2, 3, 4 và các giá trị 8, 4, 5, 9, 6 tương ứng.",
      "Theo dõi cao_nhat từ 8, so sánh từng phần tử từ chỉ số 1.",
      "Đổi phần tử đầu thành 10 và kiểm tra điểm cao nhất là 10.",
      "Đổi mảng thành {5}, so_luong thành 1. Kết quả cần là 5 dù vòng lặp không chạy."
    ],
    "exercise": {
      "prompt": "Với mảng {7, 3, 8, 5}, tìm điểm thấp nhất. Lấy phần tử đầu làm giá trị ban đầu. Kết quả cần là 3.",
      "hint": "Dùng diem[i] < thap_nhat để kiểm tra. Mảng có 4 phần tử nên đặt so_luong = 4.",
      "solution": "#include <stdio.h>\n\nint main(void) {\n    int diem[] = {7, 3, 8, 5};\n    int so_luong = 4;\n    int thap_nhat = diem[0];\n    for (int i = 1; i < so_luong; i++) {\n        if (diem[i] < thap_nhat) {\n            thap_nhat = diem[i];\n        }\n    }\n    printf(\"Thap nhat: %d\\n\", thap_nhat);\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Với int diem[] = {8, 4, 5, 9, 6}; thì diem[0] bằng bao nhiêu?",
        "options": [
          "0",
          "8",
          "4",
          "6"
        ],
        "answer": 1,
        "explanation": "Chỉ số 0 là phần tử đầu tiên, có giá trị 8."
      },
      {
        "question": "Chỉ số lớn nhất hợp lệ của mảng 5 phần tử là số nào?",
        "options": [
          "5",
          "6",
          "4",
          "Không có giới hạn"
        ],
        "answer": 2,
        "explanation": "Các vị trí là 0, 1, 2, 3 và 4."
      },
      {
        "question": "Vì sao lấy diem[0] làm cao_nhat ban đầu?",
        "options": [
          "Để bỏ qua mảng",
          "Để thêm một phần tử",
          "Để điểm cao nhất luôn là 0",
          "Để bắt đầu từ giá trị có thật trong mảng"
        ],
        "answer": 3,
        "explanation": "Khi mảng có ít nhất một phần tử, giá trị đầu là điểm xuất phát hợp lệ để so sánh."
      }
    ]
  },
  {
    "day": 14,
    "symbol": "f[ ]",
    "title": "Đưa mảng vào hàm",
    "shortTitle": "Tính trung bình và đếm",
    "subtitle": "Dùng lại cách tính với nhiều danh sách điểm.",
    "duration": "45–60 phút",
    "objective": "Viết hàm nhận mảng và số phần tử, trả về điểm trung bình hoặc số điểm đạt.",
    "concepts": [
      {
        "title": "Hàm nhận mảng và số lượng",
        "text": "trung_binh(int diem[], int so_luong) nhận mảng và số phần tử sẽ đọc. Khi gọi trung_binh(diem, 5), truyền tên mảng cùng số 5. Hàm không tự biết số phần tử chỉ từ tham số diem[]."
      },
      {
        "title": "Cộng rồi chia",
        "text": "trung_binh bắt đầu với tong = 0, duyệt mảng và cộng từng diem[i]. Sau đó trả về (float)tong / so_luong. Kiểu trả về float giữ phần thập phân."
      },
      {
        "title": "Đếm theo điều kiện",
        "text": "dem_dat bắt đầu với so_dat = 0. Mỗi khi diem[i] >= 5, so_dat++ tăng thêm 1. Sau vòng lặp, return so_dat trả về số điểm đạt."
      },
      {
        "title": "Một hàm, nhiều lần gọi",
        "text": "Cùng hàm có thể tính cho mảng khác khi truyền đúng số lượng. Mảng {5, 6} dùng số lượng 2 và có trung bình 5.5."
      },
      {
        "title": "Điều kiện dùng hàm",
        "text": "Trong bài này, mảng có từ 1 đến 100 điểm nguyên trong khoảng 0 đến 10. so_luong phải đúng với phần mảng muốn đọc để giữ truy cập hợp lệ và mẫu số khác 0."
      }
    ],
    "code": "#include <stdio.h>\n\nfloat trung_binh(int diem[], int so_luong) {\n    int tong = 0;\n    for (int i = 0; i < so_luong; i++) {\n        tong = tong + diem[i];\n    }\n    return (float)tong / so_luong;\n}\n\nint dem_dat(int diem[], int so_luong) {\n    int so_dat = 0;\n    for (int i = 0; i < so_luong; i++) {\n        if (diem[i] >= 5) {\n            so_dat++;\n        }\n    }\n    return so_dat;\n}\n\nint main(void) {\n    int diem[] = {8, 4, 5, 9, 6};\n    printf(\"Trung binh: %.1f\\n\", trung_binh(diem, 5));\n    printf(\"So diem dat: %d\\n\", dem_dat(diem, 5));\n    return 0;\n}",
    "output": "Trung binh: 6.4\nSo diem dat: 4",
    "steps": [
      "Theo dõi trung_binh trước. Tổng 32 chia 5 được 6.4.",
      "Theo dõi dem_dat. Gạch dưới 8, 5, 9, 6 để đếm 4 điểm đạt.",
      "Thay mảng thành {5, 6}, sửa số lượng trong cả hai lời gọi thành 2. Kết quả cần là 5.5 và 2.",
      "Thử {4} với số lượng 1. Trung bình cần là 4.0 và số điểm đạt là 0."
    ],
    "exercise": {
      "prompt": "Viết hàm dem_chua_dat(int diem[], int so_luong) đếm điểm dưới 5. Gọi với {4, 5, 2, 8}. Kết quả cần là 2.",
      "hint": "Duyệt i từ 0 đến i < so_luong, chỉ tăng biến đếm khi diem[i] < 5 rồi trả biến đếm về.",
      "solution": "#include <stdio.h>\n\nint dem_chua_dat(int diem[], int so_luong) {\n    int so_chua_dat = 0;\n    for (int i = 0; i < so_luong; i++) {\n        if (diem[i] < 5) {\n            so_chua_dat++;\n        }\n    }\n    return so_chua_dat;\n}\n\nint main(void) {\n    int diem[] = {4, 5, 2, 8};\n    printf(\"So diem chua dat: %d\\n\", dem_chua_dat(diem, 4));\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Khi truyền mảng vào hàm trong bài này, cần truyền thêm gì?",
        "options": [
          "Số phần tử cần đọc",
          "Tên trình duyệt",
          "Tên tệp CSS",
          "Độ dài tên mảng"
        ],
        "answer": 0,
        "explanation": "Tham số mảng không tự mang theo số phần tử để hàm biết giới hạn duyệt."
      },
      {
        "question": "Mảng {5, 6} có trung bình bằng bao nhiêu khi chia bằng số thực?",
        "options": [
          "5",
          "5.5",
          "6",
          "11"
        ],
        "answer": 1,
        "explanation": "Tổng là 11, số lượng là 2. Chia bằng số thực được 5.5."
      },
      {
        "question": "Mảng {8, 4, 5, 9, 6} có bao nhiêu điểm từ 5 trở lên?",
        "options": [
          "3",
          "5",
          "4",
          "2"
        ],
        "answer": 2,
        "explanation": "Các điểm đạt là 8, 5, 9 và 6, tổng cộng bốn điểm."
      }
    ]
  },
  {
    "day": 15,
    "symbol": "</>",
    "title": "Tự làm chương trình thống kê điểm",
    "shortTitle": "Bài tổng hợp 15 ngày",
    "subtitle": "Ghép từng phần nhỏ thành chương trình bạn tự hiểu.",
    "duration": "45–60 phút",
    "objective": "Tự viết chương trình tìm điểm cao nhất, tính trung bình và đếm số điểm đạt của một mảng.",
    "concepts": [
      {
        "title": "Chốt dữ liệu và kết quả",
        "text": "Mảng có từ 1 đến 100 điểm nguyên trong khoảng 0 đến 10. Cần ba kết quả là điểm cao nhất, trung bình và số điểm đạt từ 5 trở lên."
      },
      {
        "title": "Chia thành ba hàm quen thuộc",
        "text": "tim_cao_nhat làm việc so sánh, trung_binh cộng rồi chia, dem_dat đếm theo điều kiện. Viết và thử từng hàm trước khi ghép vào main."
      },
      {
        "title": "main sắp xếp các bước",
        "text": "main tạo mảng, đặt so_luong và gọi các hàm. Mỗi printf dùng %d cho kết quả int hoặc %.1f cho kết quả float."
      },
      {
        "title": "Thử nhiều dạng dữ liệu",
        "text": "Thử mảng thông thường, mảng một điểm và mảng có các điểm bằng nhau. Tự tính kết quả mong muốn trước khi chạy. Khi thay mảng, cập nhật so_luong."
      },
      {
        "title": "Tự giải thích để biết mình hiểu",
        "text": "Với mỗi dòng, nói rõ nó đọc dữ liệu nào và thay đổi điều gì. Nếu một hàm khó hiểu, quay lại ngày 12, 13 hoặc 14 và chạy ví dụ nhỏ của phần đó."
      }
    ],
    "code": "#include <stdio.h>\n\nint tim_cao_nhat(int diem[], int so_luong) {\n    int cao_nhat = diem[0];\n    for (int i = 1; i < so_luong; i++) {\n        if (diem[i] > cao_nhat) {\n            cao_nhat = diem[i];\n        }\n    }\n    return cao_nhat;\n}\n\nfloat trung_binh(int diem[], int so_luong) {\n    int tong = 0;\n    for (int i = 0; i < so_luong; i++) {\n        tong = tong + diem[i];\n    }\n    return (float)tong / so_luong;\n}\n\nint dem_dat(int diem[], int so_luong) {\n    int so_dat = 0;\n    for (int i = 0; i < so_luong; i++) {\n        if (diem[i] >= 5) {\n            so_dat++;\n        }\n    }\n    return so_dat;\n}\n\nint main(void) {\n    int diem[] = {8, 4, 5, 9, 6};\n    int so_luong = 5;\n    printf(\"Cao nhat: %d\\n\", tim_cao_nhat(diem, so_luong));\n    printf(\"Trung binh: %.1f\\n\", trung_binh(diem, so_luong));\n    printf(\"So diem dat: %d\\n\", dem_dat(diem, so_luong));\n    return 0;\n}",
    "output": "Cao nhat: 9\nTrung binh: 6.4\nSo diem dat: 4",
    "steps": [
      "Che code mẫu. Viết mảng và main trước, rồi thêm hàm tìm điểm cao nhất theo ngày 13.",
      "Thêm trung_binh và dem_dat theo ngày 14. Dùng cùng một so_luong cho cả ba lời gọi.",
      "Chạy với {8, 4, 5, 9, 6}. Đối chiếu ba kết quả 9, 6.4 và 4.",
      "Thử {5} với số lượng 1. Ba kết quả cần là 5, 5.0 và 1.",
      "Thử {4, 4, 4} với số lượng 3. Ba kết quả cần là 4, 4.0 và 0. Giải thích từng dòng trước khi đánh dấu hoàn thành."
    ],
    "exercise": {
      "prompt": "Viết thêm hàm tim_thap_nhat. Với mảng {8, 4, 5, 9, 6}, điểm thấp nhất cần là 4. Thử tiếp mảng {7} với số lượng 1.",
      "hint": "Lấy điểm đầu làm thap_nhat, duyệt các điểm còn lại và cập nhật khi diem[i] < thap_nhat. Thử riêng thành công rồi ghép hàm vào bài tổng hợp.",
      "solution": "#include <stdio.h>\n\nint tim_thap_nhat(int diem[], int so_luong) {\n    int thap_nhat = diem[0];\n    for (int i = 1; i < so_luong; i++) {\n        if (diem[i] < thap_nhat) {\n            thap_nhat = diem[i];\n        }\n    }\n    return thap_nhat;\n}\n\nint main(void) {\n    int diem[] = {8, 4, 5, 9, 6};\n    int so_luong = 5;\n    printf(\"Thap nhat: %d\\n\", tim_thap_nhat(diem, so_luong));\n    return 0;\n}"
    },
    "quiz": [
      {
        "question": "Với {8, 4, 5, 9, 6}, ba kết quả cao nhất, trung bình và số điểm đạt là gì?",
        "options": [
          "9, 6.0 và 5",
          "8, 6.4 và 4",
          "9, 5.4 và 3",
          "9, 6.4 và 4"
        ],
        "answer": 3,
        "explanation": "Điểm cao nhất là 9. Tổng 32 chia 5 bằng 6.4. Bốn điểm 8, 5, 9 và 6 đạt từ 5 trở lên."
      },
      {
        "question": "Đổi mảng thành {5} thì so_luong cần bằng bao nhiêu?",
        "options": [
          "1",
          "0",
          "5",
          "Giữ số lượng cũ"
        ],
        "answer": 0,
        "explanation": "Mảng mới có một phần tử nên số lượng truyền cho cả ba hàm là 1."
      },
      {
        "question": "Mảng {4, 4, 4} có bao nhiêu điểm đạt từ 5 trở lên?",
        "options": [
          "3",
          "0",
          "1",
          "4"
        ],
        "answer": 1,
        "explanation": "Mỗi điểm đều là 4, nhỏ hơn 5, nên không có điểm đạt."
      }
    ]
  }
];

