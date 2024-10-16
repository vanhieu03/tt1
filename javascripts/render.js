// skill content
const skillContent = [
    {
        img:'https://cloudoffice.com.vn/assetmanager/liveEditer/b%E1%BB%91%20c%E1%BB%A5c%20b%C3%A0i%20thuy%E1%BA%BFt%20tr%C3%ACnh.png',
        name: 'Kỹ năng thuyết trình',
        des: 'Khả năng truyền đạt ý tưởng một cách rõ ràng và thu hút người nghe, giúp giải thích các giải pháp kỹ thuật hoặc ý tưởng sáng tạo một cách dễ hiểu.'
    },
    {
        img:'./imgs/anh2.jpeg',
        name: 'Tư duy sáng tạo',
        des: 'Khả năng nghĩ ra những ý tưởng mới và giải pháp độc đáo cho các vấn đề phức tạp, giúp cải thiện trải nghiệm người dùng và phát triển sản phẩm khác biệt.'
    },
    {
        img:'./imgs/anh3.jpg',
        name: 'Giải quyết vấn đề',
        des: 'Khả năng phân tích tình huống và đưa ra các giải pháp phù hợp và hiệu quả khi gặp phải thách thức kỹ thuật hoặc tổ chức.'
    },
    {
        img:'./imgs/anh4.png',
        name: 'Tư duy logic',
        des: 'Sự sắp xếp các suy nghĩ và hành động theo một trình tự hợp lý để xử lý các vấn đề một cách hiệu quả và có tổ chức.'
    },
    {
        img:'./imgs/anh5.jpg',
        name: 'Khả năng làm việc nhóm',
        des: 'Khả năng phối hợp tốt với các thành viên khác trong nhóm, chia sẻ thông tin, hỗ trợ nhau để đạt được mục tiêu chung.'
    },
    {
        img:'./imgs/anh6.jpg',
        name: 'Chú ý đến chi tiết',
        des: 'Tập trung vào các yếu tố nhỏ nhưng quan trọng, giúp phát hiện lỗi và đảm bảo chất lượng sản phẩm cuối cùng.'
    },
    {
        img:'./imgs/anh7.jpg',
        name: 'Tư duy người dùng',
        des: 'Hiểu rõ nhu cầu và trải nghiệm của người dùng cuối để thiết kế các giao diện và tính năng dễ sử dụng, tiện lợi và trực quan.'
    },
    {
        img:'./imgs/anh8.jpg',
        name: 'Kỹ năng code',
        des: 'Khả năng viết và tối ưu mã nguồn để xây dựng ứng dụng phần mềm hiệu quả, bao gồm việc thành thạo ngôn ngữ lập trình và sử dụng các công cụ, thuật toán phù hợp.'
    }
]

//SKill
const containerLeftWrapper = document.querySelector('.container-left-wrapper');
skillContent.forEach(data =>{
    const containerLeftSkill = document.createElement('div');
    containerLeftSkill.classList.add('container-left-skills');

    const containerLeftSkillPhoto = document.createElement('div');
    containerLeftSkillPhoto.classList.add('container-left-skills-photo');
    containerLeftSkillPhoto.innerHTML = `<img src="${data.img}" alt="anhloi" class="container-skills-photo-img">`;

    const containerLeftSkillContent = document.createElement('div');
    containerLeftSkillContent.classList.add('container-left-skills-content');
    containerLeftSkillContent.innerHTML = `
    <div class="container-skills-content-header">${data.name}</div>
    <div class="container-skills-content-des">${data.des}</div>`;

    containerLeftSkill.appendChild(containerLeftSkillPhoto);
    containerLeftSkill.appendChild(containerLeftSkillContent);

    containerLeftWrapper.appendChild(containerLeftSkill);
})
const loadMore = document.createElement('span');
loadMore.classList.add('loadMore');
loadMore.innerText = 'Load more';
containerLeftWrapper.appendChild(loadMore);

const containerLeftSkillElement = [...document.querySelectorAll('.container-left-skills')];
containerLeftSkillElement.forEach((element, index) =>{
    if(index < 2){
        element.classList.add('show');
    }
});
//show skill
loadMore.addEventListener('click', ()=>{
    const containerLeftSkillElement2 = containerLeftSkillElement.slice(2);
    if(!containerLeftSkillElement2[0].classList.contains('show')){
        containerLeftSkillElement2.forEach(element =>{
            element.classList.add('show');
        })
        loadMore.innerText = 'Show less';
    }
    else{
        containerLeftSkillElement2.forEach(element =>{
            element.classList.remove('show');
        })
        loadMore.innerText = 'Load more';
    }
})

//timline changllenge
const timelineContent = [
    {
        number: "Tuần đầu",
        name: "Sử dụng HTML, CSS, Javascript (có thể sử  dụng Jquery) để thiết kế website theo giao diện mẫu được cung cấp.",
        des: `1. Tải giao diện mẫu và tài nguyên liên quan: https://thuctap.inevn.com/TT1.zip
            2. Yêu cầu cần đạt:
            2.1. Code đúng giao diện về bố cục, màu sắc, hình ảnh (những hình ảnh, icon không được cung cấp có thể tìm kiếm từ nguồn khác hoặc có phương án thay thế phù hợp);
            2.2. Website có sử dụng nhiều hiệu ứng sáng tạo (Ví dụ hiệu ứng khi hover, hiệu ứng khi cuộn chuột,…)
            2.3. Code gọn gàng, đúng coding convention.
            2.4. Tự đưa ra giao diện trên các thiếtbị điện thoại và đảm bảo responsive tốt trên tất cả các kích thước thiết bị/trình duyệt hiển thị.
            3. Thuyết trình trước Công ty.
            `,
        link: "https://hieunv.thuctap.inevn.com/web_cv/",
        timeEsti: "23/9 đến 28/09/2024",
        time: "23/09/2024 – 5/10/2024",
    },
    {
        number: "TT1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        des: `Yêu cầu bắt buộc:
            1. Nội dung website phải có đầy đủ các mục:
            1.1. Giới thiệu thông tin bản thân;
            1.2. Các kỹ năng mong muốn đạt được sau khi thực tập;
            1.3. Thông tin các thử thách đã thực hiện ở I&E được thể hiện ở dạng timeline bằng Javascript: Gồm đầy đủ các nội dung:
            - Thử thách số;
            - Tên thử thách;
            - Đường link giao diện của thử thách (Nếu 1 thử thách có nhiều link thì cần dẫn link đầy đủ. Link các thử thách sau sẽ được cập nhật khi bắt đầu thực hiện).
            - Các nội dung bổ sung khác tùy chọn.
            2. File index phải được up lên folder ngoài cùng của FTP mà không tạo thư mục con. Link website của thử thách 2 có dạng: [tênTTSrútgọn].thuctap.inevn.com 
            (VD: huynd.thuctap.inevn.com). Các thử thách khác sẽ được up vào các thư mục riêng có dạng
            [tênTTS].thuctap.inevn.com/[tênThư Mục]/index.html
            Yêu cầu bổ sung:
            1. Giao diện website thể hiện được sự sáng tạo của bản thân.
            2. Responsive tốt trên tất cả các trình duyệt và thiết bị.
            3. Cập nhật tất cả thử thách và bổ sung thường xuyên trong quá trình thực tập.
            4. Nộp bài qua FTP hằng ngày.`,
        link: "https://hieunv.thuctap.inevn.com/tt1/",
        timeEsti: "3 ngày (24 giờ)",
        time: "7/10/2024 - Hiện tại"
    },
    {
        number: "TT2",
        name: "Sử dụng HTML, CSS, Javascript viết  minigame theo chủ đề bốc thăm.",
        des: `1. Giao diện có thể tham khảo các game gốc đã có hoặc sáng tạo thêm.
            2. Yêu cầu tính năng: theo các tính năng đã có của game gốc.
            3. Game hoạt động đúng về logic.
            4. Game có thể thao tác trên trình duyệt web máy tính và giao diện điện thoại.
            5. Nộp bài qua FTP hàng ngày.
            6. Cập nhật link trên Web Thử thách 1.`,
        link: "",
        timeEsti: "5,5 ngày (43,5 giờ)",
        time: "Update"
    },
    {
        number: "TT3",
        name: "Được cung cấp và đào tạo quy chuẩn code, thư viện CSS của Công ty. Sử dụng quy chuẩn code được đào tạo để thiết kế 02 giao diện theo mẫu thiết kế được cung cấp.",
        des: `1. Sử dụng quy chuẩn và thư viện CSS của Công ty.
            3. Nội dung và hình ảnh phù hợp, có tính responsive và khả thi. 
            4. Các website hoàn thiện ở mức độ cơ bản trở lên về giao diện.
            5. Nộp bài qua FTP hàng ngày.
            6. Cập nhật link trên Web Thử thách 1.
            7. Tham gia review code định kỳ.
            `,
        link: "",
        timeEsti: "5 ngày (40 giờ)",
        time: "Update"
    },
    {
        number: "TT4",
        name: "Sử dụng INEVO để thiết kế 01 website động lấy dữ liệu thực tế từ hệ thống nội bộ ra website, theo bản thiết kế đã được cung cấp.",
        des: `1. Website thiết kế đúng với bản thiết kế đã được cung cấp, các tính năng nâng cao (VD tìm kiếm, lọc,…) có thể chưa cần sử dụng.
            2. Sử dụng thư viện CSS và các quy chuẩn code của Công ty.
            3. Yêu cầu tính năng: Dữ liệu được lấy tự động từ chuyên mục đã được phân quyền trên INEVO để hiển thị ra website.
            4. Website thực hiện đúng quy trình đã được cung cấp.
            5. Nộp bài qua FTP hằng ngày.
            6. Cập nhật link trên Web Thử thách 1.
            7. Tham gia review code định kỳ.
            `,
        link: "",
        timeEsti: "05 ngày (40 giờ)",
        time: "Update"
    },
    {
        number: "TT5",
        name: "Ứng dụng INEVO triển khai tạo một website giới thiệu về lịch sử Việt Nam với giao diện tùy chọn sáng tạo, đầy đủ tính năng.",
        des: `1. Giao diện đẹp, sáng tạo.
            2. Sử dụng thư viện CSS và các quy chuẩn code của Công ty.
            3. Yêu cầu tính năng: Dữ liệu được lấy tự động từ chuyên mục đã được phân quyền trên INEVO để hiển thị ra website.
            4. Yêu cầu nâng cao: Website thực hiện được tất cả các tính năng hiển thị trên giao diện (VD Tìm kiếm, Xem thêm, Xem bài viết, Phóng to ảnh,…).
            5. Website lịch sử: Có timeline về các thời kỳ lịch sử. Người dùng quản trị web có thể chỉnh sửa được timeline mà không cần can thiệp vào code.
            6.  Viết bài tìm hiểu caches và sitemap, đăng tải bằng báo cáo trên INEVO.
            7. Nộp bài qua FTP hằng ngày.
            8. Cập nhật link trên Web Thử thách 1.
            9. Tham gia review code định kỳ.
            `,
        link: "",
        timeEsti: "05 ngày (40 giờ)",
        time: "Update"
    },
    {

        number: "TT6",
        name: "Thiết kế giao diện phần mềm trên hệ thống nội bộ INEVO theo bản thiết kế được cung cấp.",
        des: `1. Giao diện được thiết kế dựa theo hệ thống bảng quản trị trên hệ thống INEVO.
            2. Giao diện hiển thị đúng theo thiết kế.
            3. Yêu cầu tính năng: Chưa cần sử dụng được các tính năng.
            4. Yêu cầu dữ liệu: Dữ liệu demo có thể nhập thủ công.
            5. Nộp bài qua FTP hằng ngày.
            6. Cập nhật link trên Web Thử thách 1.
            7. Tham gia review code định kỳ.
            8. Tham gia các buổi đào tạo tập trung của phòng Công nghệ.
            `,
        link: "",
        timeEsti: "09 ngày (72 giờ)",
        time: "Update"
    },
    
    {
        number: "TT7",
        name: "Sử dụng Bảng quản trị trên hệ thống mạng nội bộ INEVO để thực hiện phần mềm quản lý bài viết của bản thân trên hệ thống INEVO.",
        des: `1. Giao diện phần mềm đúng theo bản thiết kế được cung cấp.
            2. Tên phần mềm được đặt theo quy tắc: Quản lý bài viết – [Tên TTS] (VD: Quản lý bài viết – Nguyễn Đình Huy)
            3. Dữ liệu thật/cập nhật tự động.
            4. Quản lý đầy đủ các thông tin được yêu cầu: Tiêu đề, người đăng, thời gian đăng, chuyên mục… (chi tiết theo giao diện thiết kế).
            5. Có đầy đủ bộ lọc tìm kiếm theo: Tên bài viết, chuyên mục, thời gian đăng,… (chi tiết theo giao diện thiết kế).
            6. Nộp bài qua FTP hằng ngày.
            7. Cập nhật link trên Web Thử thách 1
            8. Tham gia review code định kỳ.
            `,
        link: "",
        timeEsti: "10 ngày (80 giờ)",
        time: "Update"
    },
    {
        number: "TT8(Trải nghiệm)",
        name: "Sử dụng công cụ INEVO để thiết lập phần mềm quản lý thông tin cơ bản theo yêu cầu.",
        des: `1. Phần mềm có giao diện theo yêu cầu.
            2. Quản lý được thông tin được yêu cầu.
            3. Có đầy đủ công cụ tìm kiếm, lọc, tab,…
            4. Có báo cáo thống kê.
            5. Có thể bổ sung thêm code để hoàn thiện phần mềm.
            `,
        link: "",
        timeEsti: "2,5 ngày(20 giờ)",
        time: "Update"
    },
    {
        number: "Tổng kết",
        name: `- Làm bài kiểm tra ngắn;
            - Viết báo cáo 02 tháng thực tập ở dạng bản Word, từ 20 – 30 trang.
            - Báo cáo tổng kết thực tập bằng Powerpoint, từ 30 – 50 slides.
            `,
        des: `1. Mẫu báo cáo tuân thủ mẫu quy chuẩn của Công ty.
            2. Nêu được đầy đủ các kiến thức đã được đào tạo.
            3. Nộp báo cáo theo hướng dẫn
            4. Thuyết trình báo cáo trước Công ty về kết quả 02 tháng thực tập tại I&E Việt Nam.`,
        link: "",
        timeEsti: "04 ngày (32 giờ)",
        time: "Update"
    }
]

const timelineWrapper = document.querySelector('.container-left-timelineWrapper');
const timeline = document.createElement('div');
timeline.classList.add('container-left-timeline');

timelineContent.forEach((data, index) =>{
    // Wrapper
    const timelineChallenge = document.createElement('div');
    timelineChallenge.classList.add('container-timeline-challenge');
    timelineChallenge.classList.add('col-2');

    //Content 
    const timelineChallengeWrapper = document.createElement('div');
    timelineChallengeWrapper.classList.add('container-challenge-wrapper');
    timelineChallengeWrapper.innerHTML = `
        <div class="container-challenge-wrapper-number">${data.number}</div>
        <div class="container-challenge-wrapper-name">${data.name}</div>
        <div class="container-challenge-wrapper-link">
            <a href="${data.link}" class="text_underline">Link thử thách</a>
            <div>${data.time}</div>
        </div>
        `;
    //line
    const challengLineLeft = document.createElement('div');
    if((index + 1) % 2 !== 0){
        challengLineLeft.classList.add('challenge-line-left');
    }
    else{
        challengLineLeft.classList.add('challenge-line-right');
    }
    
    timelineChallenge.appendChild(challengLineLeft);
    timelineChallenge.appendChild(timelineChallengeWrapper);
    timeline.appendChild(timelineChallenge);
})
timelineWrapper.appendChild(timeline);

//timline scroll

const checkVisibleTimeline = ()=>{
    const timelineChallenges = document.querySelectorAll('.container-timeline-challenge');
    timelineChallenges.forEach((challenge) => {
        const rect = challenge.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            challenge.classList.add('visible');
        }
        //  else {
        //     challenge.classList.remove('visible');
        // }
    });
}

window.addEventListener('scroll', checkVisibleTimeline);
checkVisibleTimeline();


const checkVisibleSkill = ()=>{
    const cLSInfoFills = document.querySelectorAll('.cLSInfo-fill');
    cLSInfoFills.forEach(cLSInfoFill =>{
        const rect = cLSInfoFill.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            cLSInfoFill.classList.add('visible');
        } 
        // else {
        //     cLSInfoFill.classList.remove('visible');
        // }
    })
}

window.addEventListener('scroll', checkVisibleSkill);
checkVisibleSkill();
// render timeline Overlay
const tOverlay = document.querySelector('.tOverlay');

const tOBlock = document.createElement('div');
tOBlock.classList.add('tOBlock');

const closeOverlay = document.createElement('span');
closeOverlay.innerHTML =`<i class="fa-solid fa-xmark"></i>`;
closeOverlay.classList.add('close-overlay');

const tOBHeader = document.createElement('div');
tOBHeader.classList.add('tOBHeader');
const tOBName = document.createElement('div');
tOBName.classList.add('tOBName');
const tOBDes = document.createElement('div');
tOBDes.classList.add('tOBDes');
const tOBLink = document.createElement('div');
tOBLink.classList.add('tOBLink');
const tOBTimeEsti = document.createElement('div');
tOBTimeEsti.classList.add('tOBTimeEsti');
const tOBTimeImple = document.createElement('div');
tOBTimeImple.classList.add('tOBTimeImple');

tOBlock.appendChild(tOBHeader);
tOBlock.appendChild(tOBName);
tOBlock.appendChild(tOBDes);
tOBlock.appendChild(tOBLink);
tOBlock.appendChild(tOBTimeEsti);
tOBlock.appendChild(tOBTimeImple);
tOBlock.appendChild(closeOverlay);

tOverlay.appendChild(tOBlock);


const cTChallenge = document.querySelectorAll('.container-timeline-challenge');
cTChallenge.forEach((el, i) =>{
    el.addEventListener('click', ()=>{
        tOverlay.classList.add('hidden'); 
        
        tOBHeader.innerText = timelineContent[i].number;
        tOBName.innerText = timelineContent[i].name;
        tOBDes.innerText = timelineContent[i].des;
        tOBLink.innerHTML = `<a href="${timelineContent[i].link}" class="text_underline" target="_blank">Link thử thách</a>`;
        tOBTimeEsti.innerText = `Thời gian dự kiến: ${timelineContent[i].timeEsti}`;
        tOBTimeImple.innerText = `Thời gian hoàn thành: ${timelineContent[i].time}`;

        document.body.style.overflow = 'hidden';
    })
})

tOverlay.addEventListener('click', ()=>{
    tOverlay.classList.remove('hidden'); 
    document.body.style.overflow = 'auto';
})

tOBlock.addEventListener('click', e=>{
    e.stopPropagation();
})

closeOverlay.addEventListener('click', e=>{
    tOverlay.classList.remove('hidden'); 
    document.body.style.overflow = 'auto';
})

//slider
const sContent = document.querySelector('.cLSPSlider-content');
const sImg = document.querySelectorAll('.cLSPSlider-img');
const widthImg = sImg[0].offsetWidth;
const lengthImg = sImg.length;
let currentIndex = 0;
const sliderShow = ()=>{
    // A % B (nếu A < B thì A % B = A)
    currentIndex = (currentIndex + 1) % lengthImg;
    sContent.style.transform = `translateX(${-widthImg * currentIndex}px)`;
}
// sImg[currentIndex].classList.add('active');
setInterval(sliderShow, 5000);
const cLSPSliderIcon = document.querySelectorAll('.cLSPSlider-icon');

cLSPSliderIcon.forEach(el =>{
    el.addEventListener('click', sliderShow);
})